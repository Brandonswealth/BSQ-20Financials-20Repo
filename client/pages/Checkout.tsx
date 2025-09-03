import { useEffect, useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card as UiCard,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CheckCircle,
  CreditCard,
  Smartphone,
  DollarSign,
  Zap,
  ArrowLeft,
  Mail,
  Shield,
} from "lucide-react";
import { useSearchParams } from "react-router-dom";

// STRIPE: imports
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY!);

const services = {
  "basic-credit": { name: "Basic Credit Plan", price: 297, originalPrice: 450, category: "Credit Repair" },
  "essentials-credit": { name: "Essentials Credit Plan", price: 499, category: "Credit Repair" },
  "premium-credit": { name: "Premium Credit Sweep", price: 2500, monthlyPrice: 599, category: "Credit Repair" },
  "done-for-you-credit": { name: "Done For You Package", price: 3997, monthlyPrice: 999, category: "Credit Repair" },
  "business-starter": { name: "Business Starter", price: 499, category: "Business" },
  "credibility-booster": { name: "Credibility Booster", price: 997, monthlyPrice: 300, category: "Business" },
  "investor-ready": { name: "Investor Ready Pro", price: 1497, monthlyPrice: 399, category: "Business" },
  "complete-business": { name: "Complete Business CFO Package", price: 4997, monthlyPrice: 1249, category: "Business" },
};

type AddOn = { key: string; name: string; price: number };

const addOnsList: AddOn[] = [
  { key: "rush", name: "Rush Processing (48 hours)", price: 99 },
  { key: "extended", name: "Extended Support (90 days)", price: 149 },
  { key: "monitoring", name: "Credit Monitoring Setup", price: 49 },
  { key: "identity", name: "Identity Theft Protection", price: 79 },
];

export default function Checkout() {
  const [searchParams] = useSearchParams();
  const [selectedService, setSelectedService] = useState("");
  const [paymentPlan, setPaymentPlan] = useState<"full" | "monthly">("full");
  const [orderNumber, setOrderNumber] = useState<string | null>(null);
  const [isPaying, setIsPaying] = useState(false); // STRIPE: button state

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessName: "",
    currentCreditScore: "",
    goals: "",
    preferredPayment: "",
    cashTag: "",
    zelleName: "",
    billingAddress: "",
    // STRIPE: basic billing address fields (minimal)
    city: "",
    state: "",
    postalCode: "",
    country: "US",
    address1: "",
  });

  const [addons, setAddons] = useState<Record<string, boolean>>({});

  const service = selectedService
    ? services[selectedService as keyof typeof services]
    : null;

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam && services[serviceParam as keyof typeof services]) {
      setSelectedService(serviceParam);
    }
  }, [searchParams]);

  const addOnsTotal = useMemo(
    () =>
      addOnsList
        .filter((a) => addons[a.key])
        .reduce((sum, a) => sum + a.price, 0),
    [addons]
  );

  const getPrice = () => {
    if (!service) return 0;
    if (paymentPlan === "monthly" && service.monthlyPrice) return service.monthlyPrice;
    return service.price;
  };

  const getOrderTotal = () => {
    if (!service) return addOnsTotal;
    const base =
      paymentPlan === "monthly" && service.monthlyPrice
        ? service.monthlyPrice
        : service.price;
    return base + addOnsTotal;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // STRIPE: Stripe-specific payment button (needs Elements context)
  function StripePayButton() {
    const stripe = useStripe();
    const elements = useElements();

    const handleStripeSubmit = async () => {
      if (!service) return;
      const gen = () =>
        `BSQ-${Date.now().toString(36).toUpperCase()}-${Math.floor(
          1000 + Math.random() * 9000
        ).toString()}`;
      const newOrder = gen();
      setIsPaying(true);

      try {
        if (!stripe || !elements) throw new Error("Stripe not ready");
        const card = elements.getElement(CardElement);
        if (!card) throw new Error("Card element not found");

        // Create PaymentIntent on server
        const createRes = await fetch("/api/stripe/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            orderNumber: newOrder,
            selectedService,
            paymentPlan,
            addOns: addOnsList.filter((a) => addons[a.key]).map(a => a.key),
            customer: {
              firstName: formData.firstName,
              lastName: formData.lastName,
              email: formData.email,
              phone: formData.phone,
              businessName: formData.businessName || undefined,
              currentCreditScore: formData.currentCreditScore || undefined,
              goals: formData.goals || undefined,
            },
            billing: {
              address1: formData.address1,
              city: formData.city,
              state: formData.state,
              postalCode: formData.postalCode,
              country: formData.country,
            },
          }),
        });

        if (!createRes.ok) {
          const msg = await createRes.text().catch(() => "");
          throw new Error(`Failed to create PaymentIntent. ${msg}`);
        }

        const { clientSecret } = await createRes.json();

        const { error, paymentIntent } = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card,
              billing_details: {
                name: `${formData.firstName} ${formData.lastName}`.trim(),
                email: formData.email,
                phone: formData.phone,
                address: {
                  line1: formData.address1 || undefined,
                  city: formData.city || undefined,
                  state: formData.state || undefined,
                  postal_code: formData.postalCode || undefined,
                  country: formData.country || undefined,
                },
              },
            },
          }
        );

        if (error) {
          alert(error.message || "Payment failed");
          setIsPaying(false);
          return;
        }

        if (paymentIntent?.status === "succeeded") {
          await fetch("/api/checkout/confirm", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              orderNumber: newOrder,
              service: service
                ? {
                  key: selectedService,
                  name: service.name,
                  category: service.category,
                  price: service.price,
                  monthlyPrice: service.monthlyPrice,
                  originalPrice: service.originalPrice,
                }
                : null,
              paymentPlan,
              addOns: addOnsList.filter((a) => addons[a.key]),
              total: getOrderTotal(),
              customer: {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                businessName: formData.businessName || undefined,
                currentCreditScore: formData.currentCreditScore || undefined,
                goals: formData.goals || undefined,
                preferredPayment: formData.preferredPayment || undefined,
              },
            }),
          }).catch(() => { });
          setOrderNumber(newOrder);
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          alert("Payment was not successful. Please try again.");
        }
      } catch (err: any) {
        console.error(err);
        alert(err?.message || "Something went wrong.");
      } finally {
        setIsPaying(false);
      }
    };

    return (
      <Button
        onClick={handleStripeSubmit}
        className="w-full bg-gradient-to-r from-brand-blue-light to-brand-blue-dark text-lg py-6"
        disabled={
          isPaying ||
          !selectedService ||
          !formData.firstName ||
          !formData.lastName ||
          !formData.email ||
          !formData.phone ||
          !formData.address1 ||
          !formData.city ||
          !formData.state ||
          !formData.postalCode
        }
      >
        {isPaying ? "Processing..." : "Complete Order"}
      </Button>
    );
  }

  // General payment button (no Stripe context needed)
  function GeneralPayButton() {
    const handleGeneralSubmit = async () => {
      if (!service) return;
      const gen = () =>
        `BSQ-${Date.now().toString(36).toUpperCase()}-${Math.floor(
          1000 + Math.random() * 9000
        ).toString()}`;
      const newOrder = gen();
      setIsPaying(true);

      try {
        await fetch("/api/checkout/confirm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            orderNumber: newOrder,
            service: service
              ? {
                key: selectedService,
                name: service.name,
                category: service.category,
                price: service.price,
                monthlyPrice: service.monthlyPrice,
                originalPrice: service.originalPrice,
              }
              : null,
            paymentPlan,
            addOns: addOnsList.filter((a) => addons[a.key]),
            total: getOrderTotal(),
            customer: {
              firstName: formData.firstName,
              lastName: formData.lastName,
              email: formData.email,
              phone: formData.phone,
              businessName: formData.businessName || undefined,
              currentCreditScore: formData.currentCreditScore || undefined,
              goals: formData.goals || undefined,
              preferredPayment: formData.preferredPayment || undefined,
            },
          }),
        });

        setOrderNumber(newOrder);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (err: any) {
        console.error(err);
        alert(err?.message || "Something went wrong.");
      } finally {
        setIsPaying(false);
      }
    };

    return (
      <Button
        onClick={handleGeneralSubmit}
        className="w-full bg-gradient-to-r from-brand-blue-light to-brand-blue-dark text-lg py-6"
        disabled={
          isPaying ||
          !selectedService ||
          !formData.firstName ||
          !formData.lastName ||
          !formData.email ||
          !formData.phone ||
          (formData.preferredPayment === "cashapp" && !formData.cashTag) ||
          (formData.preferredPayment === "zelle" && !formData.zelleName) ||
          ((formData.preferredPayment === "afterpay" ||
            formData.preferredPayment === "klarna") && !formData.billingAddress)
        }
      >
        {isPaying ? "Processing..." : "Complete Order"}
      </Button>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      {orderNumber ? (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <UiCard className="text-center p-10 border-2 border-green-500">
                <CardHeader>
                  <CardTitle className="text-3xl">Thank you for your order!</CardTitle>
                  <CardDescription>Your order has been received and is being processed.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-lg mb-6">
                    Order Number: <span className="font-semibold">{orderNumber}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="bg-gradient-to-r from-brand-blue-light to-brand-blue-dark">
                      <a href="/services">View Services</a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                    >
                      <a
                        href="https://calendly.com/brandonswealth/15min"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Schedule Free Consultation
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </UiCard>
              <div className="text-center mt-6 text-gray-700">
                We also offer move-in ready apartment placements — just ask!
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Complete Your Order</h1>
                <p className="text-xl text-gray-600">Choose your service and provide your information to get started</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left column */}
                <div>
                  <UiCard className="mb-8">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <CreditCard className="h-6 w-6 mr-2" />
                        Select Your Service
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Select
                        value={selectedService}
                        onValueChange={(v) => {
                          setSelectedService(v);
                          setPaymentPlan("full");
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a service package" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basic-credit">Basic Credit Plan - $297</SelectItem>
                          <SelectItem value="essentials-credit">Essentials Credit Plan - $499</SelectItem>
                          <SelectItem value="premium-credit">Premium Credit Sweep - $2,500</SelectItem>
                          <SelectItem value="done-for-you-credit">Done For You Package - $3,997</SelectItem>
                          <SelectItem value="business-starter">Business Starter - $499</SelectItem>
                          <SelectItem value="credibility-booster">Credibility Booster - $997</SelectItem>
                          <SelectItem value="investor-ready">Investor Ready Pro - $1,497</SelectItem>
                          <SelectItem value="complete-business">Complete Business CFO - $4,997</SelectItem>
                        </SelectContent>
                      </Select>

                      {service?.monthlyPrice && (
                        <div className="mt-4">
                          <Label className="text-base font-medium">Payment Option</Label>
                          <div className="mt-2 space-y-2">
                            <div className="flex items-center space-x-2">
                              <input
                                type="radio"
                                id="full"
                                value="full"
                                checked={paymentPlan === "full"}
                                onChange={(e) => setPaymentPlan(e.target.value as "full")}
                                className="text-brand-blue"
                              />
                              <label htmlFor="full">Pay in full - ${service.price}</label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input
                                type="radio"
                                id="monthly"
                                value="monthly"
                                checked={paymentPlan === "monthly"}
                                onChange={(e) => setPaymentPlan(e.target.value as "monthly")}
                                className="text-brand-blue"
                              />
                              <label htmlFor="monthly">Monthly payments - ${service.monthlyPrice}/mo</label>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="mt-6">
                        <Label className="text-base font-medium">Optional Add-ons</Label>
                        <div className="mt-3 space-y-3">
                          {addOnsList.map((a) => (
                            <label key={a.key} className="flex items-center justify-between border rounded-md p-3 cursor-pointer">
                              <div className="flex items-center">
                                <input
                                  type="checkbox"
                                  className="mr-3 h-4 w-4"
                                  checked={Boolean(addons[a.key])}
                                  onChange={(e) => setAddons((prev) => ({ ...prev, [a.key]: e.target.checked }))}
                                />
                                <span>{a.name}</span>
                              </div>
                              <span className="font-medium">+${a.price}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </UiCard>

                  <UiCard>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Mail className="h-6 w-6 mr-2" />
                        Your Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName">First Name *</Label>
                            <Input
                              id="firstName"
                              value={formData.firstName}
                              onChange={(e) => handleInputChange("firstName", e.target.value)}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name *</Label>
                            <Input
                              id="lastName"
                              value={formData.lastName}
                              onChange={(e) => handleInputChange("lastName", e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            required
                          />
                        </div>

                        {service?.category === "Business" && (
                          <div>
                            <Label htmlFor="businessName">Business Name</Label>
                            <Input
                              id="businessName"
                              value={formData.businessName}
                              onChange={(e) => handleInputChange("businessName", e.target.value)}
                            />
                          </div>
                        )}

                        {service?.category === "Credit Repair" && (
                          <div>
                            <Label htmlFor="currentCreditScore">Current Credit Score (if known)</Label>
                            <Select
                              value={formData.currentCreditScore}
                              onValueChange={(value) => handleInputChange("currentCreditScore", value)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select your credit score range" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="300-500">300-500 (Poor)</SelectItem>
                                <SelectItem value="500-600">500-600 (Fair)</SelectItem>
                                <SelectItem value="600-700">600-700 (Good)</SelectItem>
                                <SelectItem value="700+">700+ (Excellent)</SelectItem>
                                <SelectItem value="unknown">I don't know</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        )}

                        <div>
                          <Label htmlFor="goals">Your Goals (Optional)</Label>
                          <Textarea
                            id="goals"
                            value={formData.goals}
                            onChange={(e) => handleInputChange("goals", e.target.value)}
                            placeholder="Tell us about your financial goals..."
                            rows={3}
                          />
                        </div>

                        <div>
                          <Label htmlFor="preferredPayment">Payment Method</Label>
                          <Select
                            value={formData.preferredPayment}
                            onValueChange={(value) => handleInputChange("preferredPayment", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Choose payment method" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="card">Credit/Debit Card (Stripe)</SelectItem>
                              <SelectItem value="cashapp">Cash App</SelectItem>
                              <SelectItem value="zelle">Zelle</SelectItem>
                              <SelectItem value="paypal">PayPal</SelectItem>
                              <SelectItem value="afterpay">Afterpay</SelectItem>
                              <SelectItem value="klarna">Klarna</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* STRIPE: Card Entry */}
                        {formData.preferredPayment === "card" && (
                          <div className="space-y-4 border rounded-lg p-4">
                            <div className="text-sm text-gray-600 -mt-1">Secure card entry powered by Stripe.</div>

                            {/* Minimal billing address for AVS */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="address1">Billing Address *</Label>
                                <Input
                                  id="address1"
                                  value={formData.address1}
                                  onChange={(e) => handleInputChange("address1", e.target.value)}
                                  required
                                />
                              </div>
                              <div>
                                <Label htmlFor="city">City *</Label>
                                <Input
                                  id="city"
                                  value={formData.city}
                                  onChange={(e) => handleInputChange("city", e.target.value)}
                                  required
                                />
                              </div>
                              <div>
                                <Label htmlFor="state">State/Province *</Label>
                                <Input
                                  id="state"
                                  value={formData.state}
                                  onChange={(e) => handleInputChange("state", e.target.value)}
                                  required
                                />
                              </div>
                              <div>
                                <Label htmlFor="postalCode">Postal Code *</Label>
                                <Input
                                  id="postalCode"
                                  value={formData.postalCode}
                                  onChange={(e) => handleInputChange("postalCode", e.target.value)}
                                  required
                                />
                              </div>
                            </div>

                            <div className="border rounded-md p-3">
                              <CardElement options={{ hidePostalCode: true }} />
                            </div>
                          </div>
                        )}

                        {/* Your other methods preserved */}
                        {formData.preferredPayment === "cashapp" && (
                          <div className="space-y-4 border rounded-lg p-4">
                            <p className="text-sm text-gray-700">
                              Send payment using Cash App. Enter your $Cashtag so we can match your payment.
                            </p>
                            <div>
                              <Label htmlFor="cashTag">Your Cash App $Cashtag *</Label>
                              <Input
                                id="cashTag"
                                placeholder="$username"
                                onChange={(e) => setFormData((prev) => ({ ...prev, cashTag: e.target.value }))}
                                required
                              />
                            </div>
                            <div className="flex gap-3">
                              <a href="https://cash.app/" target="_blank" rel="noopener noreferrer" className="w-full">
                                <Button type="button" className="w-full bg-green-600 hover:bg-green-700">Open Cash App</Button>
                              </a>
                            </div>
                            <p className="text-xs text-gray-600">After sending, click Complete Order to finish.</p>
                          </div>
                        )}

                        {formData.preferredPayment === "zelle" && (
                          <div className="space-y-3 border rounded-lg p-4">
                            <p className="text-sm text-gray-700">
                              Send Zelle payment to <span className="font-semibold">support@bluesq.pro</span>. Enter the name that will appear on your Zelle transfer.
                            </p>
                            <div>
                              <Label htmlFor="zelleName">Your Zelle Name *</Label>
                              <Input
                                id="zelleName"
                                onChange={(e) => setFormData((prev) => ({ ...prev, zelleName: e.target.value }))}
                                required
                              />
                            </div>
                            <p className="text-xs text-gray-600">After sending, click Complete Order to finish.</p>
                          </div>
                        )}

                        {/* (paypal/afterpay/klarna placeholders left as-is) */}
                      </div>
                    </CardContent>
                  </UiCard>
                </div>

                {/* Right column: Summary */}
                <div>
                  <UiCard className="sticky top-8">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Shield className="h-6 w-6 mr-2" />
                        Order Summary
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {service ? (
                        <div className="space-y-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold">{service.name}</h3>
                              <p className="text-sm text-gray-600">{service.category}</p>
                              {paymentPlan === "monthly" && service.monthlyPrice && (
                                <p className="text-sm text-brand-blue">Monthly payment plan</p>
                              )}
                            </div>
                            <div className="text-right">
                              <div className="text-xl font-bold">${getPrice().toLocaleString()}</div>
                              {paymentPlan === "monthly" && service.monthlyPrice && (
                                <div className="text-sm text-gray-500">per month</div>
                              )}
                            </div>
                          </div>

                          {addOnsTotal > 0 && (
                            <div className="text-sm text-gray-700">
                              <div className="font-medium mb-1">Add-ons</div>
                              <ul className="space-y-1">
                                {addOnsList.filter((a) => addons[a.key]).map((a) => (
                                  <li key={a.key} className="flex justify-between">
                                    <span>{a.name}</span>
                                    <span>+${a.price}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {service.originalPrice && paymentPlan === "full" && (
                            <div className="text-sm text-green-600">
                              You save ${(service.originalPrice - service.price).toLocaleString()}!
                            </div>
                          )}

                          <div className="border-t pt-4 space-y-2">
                            <div className="flex justify-between items-center font-bold text-lg">
                              <span>Total:</span>
                              <span>${getOrderTotal().toLocaleString()}</span>
                            </div>
                            {paymentPlan === "monthly" && service.monthlyPrice && (
                              <div className="text-sm text-gray-600 text-right">
                                Base service total ${service.price.toLocaleString()} over{" "}
                                {Math.ceil(service.price / service.monthlyPrice)} months. Add-ons billed upfront.
                              </div>
                            )}
                          </div>

                          <div className="space-y-3">
                            {/* STRIPE: Elements wrapper only needed if paying by card */}
                            {formData.preferredPayment === "card" ? (
                              <Elements stripe={stripePromise}>
                                <PayButton />
                              </Elements>
                            ) : (
                              <PayButton />
                            )}

                            <div className="text-center">
                              <p className="text-sm text-gray-600 mb-2">Secure Payment Methods:</p>
                              <div className="flex justify-center space-x-4">
                                <Zap className="h-6 w-6 text-yellow-500" />
                                <CreditCard className="h-6 w-6 text-blue-500" />
                                <Smartphone className="h-6 w-6 text-green-600" />
                                <DollarSign className="h-6 w-6 text-purple-600" />
                              </div>
                            </div>
                          </div>

                          <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-center mb-2">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span className="font-medium">What happens next?</span>
                            </div>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• You'll receive a confirmation email</li>
                              <li>• We'll contact you within 24 hours</li>
                              <li>• Begin your service immediately after payment</li>
                              <li>• Provide your dedicated client portal access</li>
                            </ul>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <CreditCard className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-600">Please select a service to see your order summary</p>
                        </div>
                      )}
                    </CardContent>
                  </UiCard>

                  <div className="mt-6 text-center">
                    <div className="mb-3 text-gray-700">We also offer move-in ready apartment placements — just ask!</div>
                    <div className="flex gap-3 justify-center">
                      <Button
                        variant="outline"
                        className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                        asChild
                      >
                        <a href="/services">
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          View Services
                        </a>
                      </Button>
                      <Button className="bg-gradient-to-r from-brand-blue-light to-brand-blue-dark" asChild>
                        <a href="https://calendly.com/brandonswealth/15min" target="_blank" rel="noopener noreferrer">
                          Schedule Free Consultation
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
