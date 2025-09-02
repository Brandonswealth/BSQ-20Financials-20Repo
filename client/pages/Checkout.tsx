import { useEffect, useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Phone,
  Mail,
  DollarSign,
  Zap,
  Star,
  Shield,
  ArrowLeft,
} from "lucide-react";
import { useSearchParams } from "react-router-dom";

const services = {
  // Credit Repair Services
  "basic-credit": {
    name: "Basic Credit Plan",
    price: 297,
    originalPrice: 450,
    category: "Credit Repair",
  },
  "essentials-credit": {
    name: "Essentials Credit Plan",
    price: 499,
    category: "Credit Repair",
  },
  "premium-credit": {
    name: "Premium Credit Sweep",
    price: 2500,
    monthlyPrice: 599,
    category: "Credit Repair",
  },
  "done-for-you-credit": {
    name: "Done For You Package",
    price: 3997,
    monthlyPrice: 999,
    category: "Credit Repair",
  },

  // Business Services
  "business-starter": {
    name: "Business Starter",
    price: 499,
    category: "Business",
  },
  "credibility-booster": {
    name: "Credibility Booster",
    price: 997,
    monthlyPrice: 300,
    category: "Business",
  },
  "investor-ready": {
    name: "Investor Ready Pro",
    price: 1497,
    monthlyPrice: 399,
    category: "Business",
  },
  "complete-business": {
    name: "Complete Business CFO Package",
    price: 4997,
    monthlyPrice: 1249,
    category: "Business",
  },
};

export default function Checkout() {
  const [searchParams] = useSearchParams();
  const [selectedService, setSelectedService] = useState("");
  const [paymentPlan, setPaymentPlan] = useState("full");
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
  });

  const [addons, setAddons] = useState<Record<string, boolean>>({});

  const [cardData, setCardData] = useState({
    cardName: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "United States",
  });

  const [orderNumber, setOrderNumber] = useState<string | null>(null);

  const service = selectedService
    ? services[selectedService as keyof typeof services]
    : null;

  // Preselect service from URL param
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam && services[serviceParam as keyof typeof services]) {
      setSelectedService(serviceParam);
    }
  }, [searchParams]);

  const addOnsList: { key: string; name: string; price: number }[] = [
    { key: "rush", name: "Rush Processing (48 hours)", price: 99 },
    { key: "extended", name: "Extended Support (90 days)", price: 149 },
    { key: "monitoring", name: "Credit Monitoring Setup", price: 49 },
    { key: "identity", name: "Identity Theft Protection", price: 79 },
  ];

  const addOnsTotal = useMemo(
    () =>
      addOnsList
        .filter((a) => addons[a.key])
        .reduce((sum, a) => sum + a.price, 0),
    [addons],
  );

  const getPrice = () => {
    if (!service) return 0;
    if (paymentPlan === "monthly" && service.monthlyPrice) {
      return service.monthlyPrice;
    }
    return service.price;
  };

  const getOrderTotal = () => {
    if (!service) return addOnsTotal;
    const base = paymentPlan === "monthly" && service.monthlyPrice ? service.monthlyPrice : service.price;
    return base + addOnsTotal;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const gen = () =>
      `BSQ-${Date.now().toString(36).toUpperCase()}-${Math
        .floor(1000 + Math.random() * 9000)
        .toString()}`;
    setOrderNumber(gen());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Header />

      {orderNumber ? (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="text-center p-10 border-2 border-green-500">
                <CardHeader>
                  <CardTitle className="text-3xl">Thank you for your order!</CardTitle>
                  <CardDescription>Your order has been received and is being processed.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-lg mb-6">Order Number: <span className="font-semibold">{orderNumber}</span></div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="bg-gradient-to-r from-brand-blue-light to-brand-blue-dark">
                      <a href="/services">View Services</a>
                    </Button>
                    <Button asChild variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                      <a href="https://calendly.com/brandonswealth/15min" target="_blank" rel="noopener noreferrer">Schedule Free Consultation</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <div className="text-center mt-6 text-gray-700">We also offer move-in ready apartment placements — just ask!</div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Complete Your Order</h1>
              <p className="text-xl text-gray-600">
                Choose your service and provide your information to get started
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Service Selection */}
              <div>
                <Card className="mb-8">
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
                        <SelectItem value="basic-credit">
                          Basic Credit Plan - $297
                        </SelectItem>
                        <SelectItem value="essentials-credit">
                          Essentials Credit Plan - $499
                        </SelectItem>
                        <SelectItem value="premium-credit">
                          Premium Credit Sweep - $2,500
                        </SelectItem>
                        <SelectItem value="done-for-you-credit">
                          Done For You Package - $3,997
                        </SelectItem>
                        <SelectItem value="business-starter">
                          Business Starter - $499
                        </SelectItem>
                        <SelectItem value="credibility-booster">
                          Credibility Booster - $997
                        </SelectItem>
                        <SelectItem value="investor-ready">
                          Investor Ready Pro - $1,497
                        </SelectItem>
                        <SelectItem value="complete-business">
                          Complete Business CFO - $4,997
                        </SelectItem>
                      </SelectContent>
                    </Select>

                    {service?.monthlyPrice && (
                      <div className="mt-4">
                        <Label className="text-base font-medium">
                          Payment Option
                        </Label>
                        <div className="mt-2 space-y-2">
                          <div className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id="full"
                              value="full"
                              checked={paymentPlan === "full"}
                              onChange={(e) => setPaymentPlan(e.target.value)}
                              className="text-brand-blue"
                            />
                            <label htmlFor="full">
                              Pay in full - ${service.price}
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="radio"
                              id="monthly"
                              value="monthly"
                              checked={paymentPlan === "monthly"}
                              onChange={(e) => setPaymentPlan(e.target.value)}
                              className="text-brand-blue"
                            />
                            <label htmlFor="monthly">
                              Monthly payments - ${service.monthlyPrice}/mo
                            </label>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Add-ons */}
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
                                onChange={(e) =>
                                  setAddons((prev) => ({ ...prev, [a.key]: e.target.checked }))
                                }
                              />
                              <span>{a.name}</span>
                            </div>
                            <span className="font-medium">+${a.price}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact + Payment Form */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Mail className="h-6 w-6 mr-2" />
                      Your Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) =>
                              handleInputChange("firstName", e.target.value)
                            }
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) =>
                              handleInputChange("lastName", e.target.value)
                            }
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
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          required
                        />
                      </div>

                      {service?.category === "Business" && (
                        <div>
                          <Label htmlFor="businessName">Business Name</Label>
                          <Input
                            id="businessName"
                            value={formData.businessName}
                            onChange={(e) =>
                              handleInputChange("businessName", e.target.value)
                            }
                          />
                        </div>
                      )}

                      {service?.category === "Credit Repair" && (
                        <div>
                          <Label htmlFor="currentCreditScore">
                            Current Credit Score (if known)
                          </Label>
                          <Select
                            value={formData.currentCreditScore}
                            onValueChange={(value) =>
                              handleInputChange("currentCreditScore", value)
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select your credit score range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="300-500">
                                300-500 (Poor)
                              </SelectItem>
                              <SelectItem value="500-600">
                                500-600 (Fair)
                              </SelectItem>
                              <SelectItem value="600-700">
                                600-700 (Good)
                              </SelectItem>
                              <SelectItem value="700+">
                                700+ (Excellent)
                              </SelectItem>
                              <SelectItem value="unknown">
                                I don't know
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}

                      <div>
                        <Label htmlFor="goals">Your Goals (Optional)</Label>
                        <Textarea
                          id="goals"
                          value={formData.goals}
                          onChange={(e) =>
                            handleInputChange("goals", e.target.value)
                          }
                          placeholder="Tell us about your financial goals..."
                          rows={3}
                        />
                      </div>

                      <div>
                        <Label htmlFor="preferredPayment">Payment Method</Label>
                        <Select
                          value={formData.preferredPayment}
                          onValueChange={(value) =>
                            handleInputChange("preferredPayment", value)
                          }
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

                      {formData.preferredPayment === "card" && (
                        <div className="space-y-4 border rounded-lg p-4">
                          <div className="text-sm text-gray-600 -mt-1">Secure card entry powered by Stripe.</div>
                          <div>
                            <Label htmlFor="cardName">Cardholder Name *</Label>
                            <Input id="cardName" value={cardData.cardName} onChange={(e) => setCardData({ ...cardData, cardName: e.target.value })} required />
                          </div>
                          <div>
                            <Label htmlFor="cardNumber">Card Number *</Label>
                            <Input id="cardNumber" inputMode="numeric" maxLength={19} placeholder="1234 5678 9012 3456" value={cardData.cardNumber} onChange={(e) => setCardData({ ...cardData, cardNumber: e.target.value.replace(/[^0-9\s]/g, "") })} required />
                          </div>
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <Label htmlFor="expMonth">Exp. Month *</Label>
                              <Input id="expMonth" placeholder="MM" value={cardData.expMonth} onChange={(e) => setCardData({ ...cardData, expMonth: e.target.value })} required />
                            </div>
                            <div>
                              <Label htmlFor="expYear">Exp. Year *</Label>
                              <Input id="expYear" placeholder="YYYY" value={cardData.expYear} onChange={(e) => setCardData({ ...cardData, expYear: e.target.value })} required />
                            </div>
                            <div>
                              <Label htmlFor="cvc">CVC *</Label>
                              <Input id="cvc" placeholder="CVC" value={cardData.cvc} onChange={(e) => setCardData({ ...cardData, cvc: e.target.value })} required />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="address1">Billing Address *</Label>
                              <Input id="address1" value={cardData.address1} onChange={(e) => setCardData({ ...cardData, address1: e.target.value })} required />
                            </div>
                            <div>
                              <Label htmlFor="address2">Apt/Suite</Label>
                              <Input id="address2" value={cardData.address2} onChange={(e) => setCardData({ ...cardData, address2: e.target.value })} />
                            </div>
                            <div>
                              <Label htmlFor="city">City *</Label>
                              <Input id="city" value={cardData.city} onChange={(e) => setCardData({ ...cardData, city: e.target.value })} required />
                            </div>
                            <div>
                              <Label htmlFor="state">State/Province *</Label>
                              <Input id="state" value={cardData.state} onChange={(e) => setCardData({ ...cardData, state: e.target.value })} required />
                            </div>
                            <div>
                              <Label htmlFor="postalCode">Postal Code *</Label>
                              <Input id="postalCode" value={cardData.postalCode} onChange={(e) => setCardData({ ...cardData, postalCode: e.target.value })} required />
                            </div>
                            <div>
                              <Label htmlFor="country">Country *</Label>
                              <Input id="country" value={cardData.country} onChange={(e) => setCardData({ ...cardData, country: e.target.value })} required />
                            </div>
                          </div>
                        </div>
                      )}

                      {formData.preferredPayment === "cashapp" && (
                        <div className="space-y-4 border rounded-lg p-4">
                          <p className="text-sm text-gray-700">Send payment using Cash App. Enter your $Cashtag so we can match your payment.</p>
                          <div>
                            <Label htmlFor="cashTag">Your Cash App $Cashtag *</Label>
                            <Input id="cashTag" placeholder="$username" onChange={(e)=>setFormData(prev=>({...prev, cashTag:e.target.value}))} required />
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
                          <p className="text-sm text-gray-700">Send Zelle payment to <span className="font-semibold">info@bsqfinancials.com</span>. Enter the name that will appear on your Zelle transfer.</p>
                          <div>
                            <Label htmlFor="zelleName">Your Zelle Name *</Label>
                            <Input id="zelleName" onChange={(e)=>setFormData(prev=>({...prev, zelleName:e.target.value}))} required />
                          </div>
                          <p className="text-xs text-gray-600">After sending, click Complete Order to finish.</p>
                        </div>
                      )}

                      {formData.preferredPayment === "paypal" && (
                        <div className="space-y-3 border rounded-lg p-4">
                          <p className="text-sm text-gray-700">Pay with PayPal. You’ll be redirected to PayPal to complete your payment.</p>
                          <a href="https://www.paypal.com/" target="_blank" rel="noopener noreferrer" className="w-full">
                            <Button type="button" className="w-full bg-blue-600 hover:bg-blue-700">Go to PayPal</Button>
                          </a>
                        </div>
                      )}

                      {(formData.preferredPayment === "afterpay" || formData.preferredPayment === "klarna") && (
                        <div className="space-y-3 border rounded-lg p-4">
                          <p className="text-sm text-gray-700">Split payments with {formData.preferredPayment === "afterpay" ? "Afterpay" : "Klarna"}. We’ll send a secure checkout link to your email after you place the order.</p>
                          <div>
                            <Label htmlFor="billingAddress">Billing Address *</Label>
                            <Input id="billingAddress" onChange={(e)=>setFormData(prev=>({...prev, billingAddress:e.target.value}))} required />
                          </div>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div>
                <Card className="sticky top-8">
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
                            <p className="text-sm text-gray-600">
                              {service.category}
                            </p>
                            {paymentPlan === "monthly" &&
                              service.monthlyPrice && (
                                <p className="text-sm text-brand-blue">
                                  Monthly payment plan
                                </p>
                              )}
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold">
                              ${getPrice().toLocaleString()}
                            </div>
                            {paymentPlan === "monthly" &&
                              service.monthlyPrice && (
                                <div className="text-sm text-gray-500">
                                  per month
                                </div>
                              )}
                          </div>
                        </div>

                        {addOnsTotal > 0 && (
                          <div className="text-sm text-gray-700">
                            <div className="font-medium mb-1">Add-ons</div>
                            <ul className="space-y-1">
                              {addOnsList
                                .filter((a) => addons[a.key])
                                .map((a) => (
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
                            You save $
                            {(
                              service.originalPrice - service.price
                            ).toLocaleString()}
                            !
                          </div>
                        )}

                        <div className="border-t pt-4 space-y-2">
                          <div className="flex justify-between items-center font-bold text-lg">
                            <span>Total:</span>
                            <span>${getOrderTotal().toLocaleString()}</span>
                          </div>
                          {paymentPlan === "monthly" &&
                            service.monthlyPrice && (
                              <div className="text-sm text-gray-600 text-right">
                                Base service total ${service.price.toLocaleString()} over {Math.ceil(service.price / service.monthlyPrice)} months. Add-ons billed upfront.
                              </div>
                            )}
                        </div>

                        <div className="space-y-3">
                          <Button
                            onClick={handleSubmit}
                            className="w-full bg-gradient-to-r from-brand-blue-light to-brand-blue-dark text-lg py-6"
                            disabled={
                              !selectedService ||
                              !formData.firstName ||
                              !formData.lastName ||
                              !formData.email ||
                              !formData.phone ||
                              (formData.preferredPayment === "card" && (
                                !cardData.cardName ||
                                !cardData.cardNumber ||
                                !cardData.expMonth ||
                                !cardData.expYear ||
                                !cardData.cvc ||
                                !cardData.address1 ||
                                !cardData.city ||
                                !cardData.state ||
                                !cardData.postalCode ||
                                !cardData.country
                              )) ||
                              (formData.preferredPayment === "cashapp" && !formData.cashTag) ||
                              (formData.preferredPayment === "zelle" && !formData.zelleName) ||
                              ((formData.preferredPayment === "afterpay" || formData.preferredPayment === "klarna") && !formData.billingAddress)
                            }
                          >
                            Complete Order
                          </Button>

                          <div className="text-center">
                            <p className="text-sm text-gray-600 mb-2">
                              Secure Payment Methods:
                            </p>
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
                            <span className="font-medium">
                              What happens next?
                            </span>
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
                        <p className="text-gray-600">
                          Please select a service to see your order summary
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <div className="mt-6 text-center">
                  <div className="mb-3 text-gray-700">We also offer move-in ready apartment placements — just ask!</div>
                  <div className="flex gap-3 justify-center">
                    <Button variant="outline" asChild>
                      <a href="/services">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        View Services
                      </a>
                    </Button>
                    <Button asChild>
                      <a
                        href="https://calendly.com/brandonswealth/15min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-brand-blue-light to-brand-blue-dark"
                      >
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
