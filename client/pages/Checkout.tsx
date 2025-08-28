import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  ArrowLeft
} from "lucide-react";

const services = {
  // Credit Repair Services
  "basic-credit": { name: "Basic Credit Plan", price: 297, originalPrice: 450, category: "Credit Repair" },
  "essentials-credit": { name: "Essentials Credit Plan", price: 499, category: "Credit Repair" },
  "premium-credit": { name: "Premium Credit Sweep", price: 2500, monthlyPrice: 599, category: "Credit Repair" },
  "done-for-you-credit": { name: "Done For You Package", price: 3997, monthlyPrice: 999, category: "Credit Repair" },
  
  // Business Services
  "business-starter": { name: "Business Starter", price: 499, category: "Business" },
  "credibility-booster": { name: "Credibility Booster", price: 997, monthlyPrice: 300, category: "Business" },
  "investor-ready": { name: "Investor Ready Pro", price: 1497, monthlyPrice: 399, category: "Business" },
  "complete-business": { name: "Complete Business CFO Package", price: 4997, monthlyPrice: 1249, category: "Business" }
};

export default function Checkout() {
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
    preferredPayment: ""
  });

  const service = selectedService ? services[selectedService as keyof typeof services] : null;
  
  const getPrice = () => {
    if (!service) return 0;
    if (paymentPlan === "monthly" && service.monthlyPrice) {
      return service.monthlyPrice;
    }
    return service.price;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically integrate with a payment processor
    alert("Thank you! We'll contact you within 24 hours to process your order and send payment instructions.");
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Complete Your Order</h1>
              <p className="text-xl text-gray-600">Choose your service and provide your information to get started</p>
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
                    <Select value={selectedService} onValueChange={setSelectedService}>
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
                              onChange={(e) => setPaymentPlan(e.target.value)}
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
                              onChange={(e) => setPaymentPlan(e.target.value)}
                              className="text-brand-blue"
                            />
                            <label htmlFor="monthly">Monthly payments - ${service.monthlyPrice}/mo</label>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Contact Form */}
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
                          <Select value={formData.currentCreditScore} onValueChange={(value) => handleInputChange("currentCreditScore", value)}>
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
                        <Label htmlFor="preferredPayment">Preferred Payment Method</Label>
                        <Select value={formData.preferredPayment} onValueChange={(value) => handleInputChange("preferredPayment", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose payment method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="zelle">Zelle</SelectItem>
                            <SelectItem value="card">Credit/Debit Card</SelectItem>
                            <SelectItem value="cashapp">CashApp</SelectItem>
                            <SelectItem value="paypal">PayPal</SelectItem>
                            <SelectItem value="afterpay">Afterpay</SelectItem>
                            <SelectItem value="klarna">Klarna</SelectItem>
                            <SelectItem value="custom">Custom Payment Plan</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
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

                        {service.originalPrice && paymentPlan === "full" && (
                          <div className="text-sm text-green-600">
                            You save ${(service.originalPrice - service.price).toLocaleString()}!
                          </div>
                        )}

                        <div className="border-t pt-4">
                          <div className="flex justify-between items-center font-bold text-lg">
                            <span>Total:</span>
                            <span>${getPrice().toLocaleString()}</span>
                          </div>
                          {paymentPlan === "monthly" && service.monthlyPrice && (
                            <div className="text-sm text-gray-600 text-right">
                              Total: ${service.price.toLocaleString()} over {Math.ceil(service.price / service.monthlyPrice)} months
                            </div>
                          )}
                        </div>

                        <div className="space-y-3">
                          <Button 
                            onClick={handleSubmit}
                            className="w-full bg-gradient-to-r from-brand-blue-light to-brand-blue-dark text-lg py-6"
                            disabled={!selectedService || !formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                          >
                            Complete Order
                          </Button>
                          
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
                            <li>• We'll contact you within 24 hours</li>
                            <li>• Send secure payment instructions</li>
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
                </Card>

                <div className="mt-6 text-center">
                  <Button variant="outline" asChild>
                    <a href="/services">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Services
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
