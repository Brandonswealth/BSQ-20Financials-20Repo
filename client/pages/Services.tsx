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
import {
  CheckCircle,
  CreditCard,
  Building2,
  Phone,
  Mail,
  Smartphone,
  DollarSign,
  Zap,
  Star,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue-light to-brand-blue-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-4">
            Limited Time Offer
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional Financial Services
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Comprehensive credit repair and business financial solutions
            designed for your success
          </p>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Service Categories
            </h2>
            <p className="text-xl text-gray-600">
              Choose the service category that fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Credit Repair Overview */}
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-6">
                <CreditCard className="h-16 w-16 text-brand-blue mx-auto mb-4" />
                <CardTitle className="text-3xl mb-4">
                  Personal Credit Repair
                </CardTitle>
                <CardDescription className="text-lg">
                  Professional credit restoration services to improve your
                  credit score and financial opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Hard inquiry removal</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Credit boost strategies</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Complete credit sweep services</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Done-for-you packages available</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    Starting at $297
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-brand-blue-light to-brand-blue-dark"
                    asChild
                  >
                    <a href="/credit-repair">
                      View Credit Repair Plans
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Business Services Overview */}
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-6">
                <Building2 className="h-16 w-16 text-brand-blue mx-auto mb-4" />
                <CardTitle className="text-3xl mb-4">
                  Business CFO Services
                </CardTitle>
                <CardDescription className="text-lg">
                  Complete business setup, funding solutions, and ongoing CFO
                  services for growth
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Business registration & setup</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Business credit building</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Investor-ready packages</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Ongoing CFO advisory services</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-brand-blue mb-2">
                    Starting at $499
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-brand-blue-light to-brand-blue-dark"
                    asChild
                  >
                    <a href="/cfo-services">
                      View Business Plans
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Payment Options
              </h2>
              <p className="text-xl text-gray-600">
                Multiple convenient ways to get started today
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="p-8">
                <CardHeader className="text-center pb-6">
                  <DollarSign className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <CardTitle className="text-2xl">Instant Payment</CardTitle>
                  <CardDescription>
                    Secure payment methods available
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 border rounded-lg hover:border-brand-blue transition-colors">
                      <Zap className="h-6 w-6 text-yellow-500 mr-3" />
                      <span className="font-medium">Zelle</span>
                    </div>
                    <div className="flex items-center p-3 border rounded-lg hover:border-brand-blue transition-colors">
                      <CreditCard className="h-6 w-6 text-blue-500 mr-3" />
                      <span className="font-medium">Credit/Debit Cards</span>
                    </div>
                    <div className="flex items-center p-3 border rounded-lg hover:border-brand-blue transition-colors">
                      <Smartphone className="h-6 w-6 text-green-600 mr-3" />
                      <span className="font-medium">CashApp</span>
                    </div>
                    <div className="flex items-center p-3 border rounded-lg hover:border-brand-blue transition-colors">
                      <DollarSign className="h-6 w-6 text-purple-600 mr-3" />
                      <span className="font-medium">PayPal</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 border-2 border-brand-blue">
                <CardHeader className="text-center pb-6">
                  <Phone className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                  <CardTitle className="text-2xl">Buy Now, Pay Later</CardTitle>
                  <CardDescription>
                    Flexible payment plans available
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 border rounded-lg hover:border-brand-blue transition-colors">
                      <span className="font-bold text-purple-600 mr-3">AP</span>
                      <span className="font-medium">Afterpay</span>
                    </div>
                    <div className="flex items-center p-3 border rounded-lg hover:border-brand-blue transition-colors">
                      <span className="font-bold text-pink-600 mr-3">K</span>
                      <span className="font-medium">Klarna</span>
                    </div>
                    <div className="flex items-center p-3 border rounded-lg hover:border-brand-blue transition-colors">
                      <span className="font-bold text-blue-600 mr-3">A</span>
                      <span className="font-medium">Affirm</span>
                    </div>
                    <div className="flex items-center p-3 border rounded-lg hover:border-brand-blue transition-colors">
                      <span className="font-bold text-green-600 mr-3">SP</span>
                      <span className="font-medium">Sezzle</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardHeader className="text-center pb-6">
                  <Star className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <CardTitle className="text-2xl">Custom Plans</CardTitle>
                  <CardDescription>Tailored payment solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="font-medium mb-2">Monthly Installments</p>
                      <p className="text-gray-600 text-sm">
                        3, 6, or 12 month options
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="font-medium mb-2">Corporate Billing</p>
                      <p className="text-gray-600 text-sm">
                        Net 30/60/90 terms available
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="font-medium mb-2">Family Plans</p>
                      <p className="text-gray-600 text-sm">
                        Multiple member discounts
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Services */}
            <Card className="p-8 bg-gradient-to-r from-brand-blue-light to-brand-blue-dark text-white">
              <CardContent className="text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Additional Services Available
                </h3>
                <p className="text-xl mb-6">
                  We also offer move-in ready apartment placements — just ask!
                </p>
                <Button className="bg-white text-brand-blue hover:bg-gray-100">
                  Learn More About Housing
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue-light to-brand-blue-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Choose your service category and transform your financial future
            today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-brand-blue hover:bg-gray-100"
              asChild
            >
              <a href="tel:8883059390">
                <Phone className="mr-2 h-5 w-5" />
                Call 888-305-9390
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-blue"
              asChild
            >
              <a href="https://calendly.com/brandonswealth/15min" target="_blank" rel="noopener noreferrer">
                <Mail className="mr-2 h-5 w-5" />
                Schedule Free Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
