import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  Globe
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
            Comprehensive credit repair and business financial solutions designed for your success
          </p>
        </div>
      </section>

      {/* Personal Credit Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <CreditCard className="h-8 w-8 text-brand-blue mr-3" />
              <h2 className="text-3xl lg:text-4xl font-bold">Personal Credit Services</h2>
            </div>
            <p className="text-xl text-gray-600">Professional credit repair solutions tailored to your needs</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <Card className="relative border-2 border-green-500 shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-500 text-white">🚨 LIMITED TIME</Badge>
              </div>
              <CardHeader className="text-center pb-6 pt-8">
                <CardTitle className="text-2xl mb-2">BASIC PLAN</CardTitle>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-green-600">$297</div>
                  <div className="text-lg text-gray-500 line-through">normally $450</div>
                </div>
                <CardDescription className="text-lg">Perfect for quick credit improvements</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    ✔️ Hard inquiry removal
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    ✔️ Credit boost strategies
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    ✔️ Access to BlueSQ Financials client portal
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Choose Basic Plan
                </Button>
              </CardContent>
            </Card>

            {/* Essentials Plan */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl mb-2">ESSENTIALS CREDIT PLAN</CardTitle>
                <div className="text-4xl font-bold text-brand-blue">$499</div>
                <CardDescription className="text-lg">Comprehensive credit evaluation and strategy</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    ✔️ Full credit evaluation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    ✔️ 1 primary tradeline
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    ✔️ Credit strategy for funding prep
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-brand-blue-light to-brand-blue-dark">
                  Choose Essentials
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="relative border-2 border-purple-500 shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-purple-500 text-white">⭐ PREMIUM</Badge>
              </div>
              <CardHeader className="text-center pb-6 pt-8">
                <CardTitle className="text-2xl mb-2">PREMIUM CREDIT SWEEP</CardTitle>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-purple-600">$2,500</div>
                  <div className="text-lg text-gray-600">or $599/mo x5</div>
                </div>
                <CardDescription className="text-lg">Complete credit restoration package</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>✔️ Removes: Collections, evictions, repossessions, old phone bills, medical debt, student loans</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    ✔️ 5 tradelines
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    ✔️ Full credit sweep + client portal + 1-on-1 support
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Choose Premium
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Building2 className="h-8 w-8 text-brand-blue mr-3" />
              <h2 className="text-3xl lg:text-4xl font-bold">Business Funding & Structure Packages</h2>
            </div>
            <p className="text-xl text-gray-600">Professional business setup and funding solutions</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Business Starter */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl mb-2">BUSINESS STARTER</CardTitle>
                <div className="text-4xl font-bold text-brand-blue">$499</div>
                <CardDescription className="text-lg">Essential business foundation setup</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    ✔️ Business registration support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    ✔️ EIN + business email
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    ✔️ 1 tradeline
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    ✔️ Basic setup for $5K–$15K funding
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-brand-blue-light to-brand-blue-dark">
                  Start My Business
                </Button>
              </CardContent>
            </Card>

            {/* Credibility Booster */}
            <Card className="relative border-2 border-orange-500 shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-500 text-white">🚀 POPULAR</Badge>
              </div>
              <CardHeader className="text-center pb-6 pt-8">
                <CardTitle className="text-2xl mb-2">CREDIBILITY BOOSTER</CardTitle>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-orange-600">$997</div>
                  <div className="text-lg text-gray-600">or $300/mo x4</div>
                </div>
                <CardDescription className="text-lg">Enhanced business credibility package</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    ✔️ 2 tradelines
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    ✔️ Website + pitch deck
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    ✔️ Business credit registration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    ✔️ Setup for fundability and tier 1-2 funding
                  </li>
                </ul>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Boost Credibility
                </Button>
              </CardContent>
            </Card>

            {/* Investor Ready */}
            <Card className="relative border-2 border-gold shadow-lg" style={{borderColor: '#FFD700'}}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="text-black" style={{backgroundColor: '#FFD700'}}>👑 INVESTOR READY</Badge>
              </div>
              <CardHeader className="text-center pb-6 pt-8">
                <CardTitle className="text-2xl mb-2">INVESTOR READY PRO</CardTitle>
                <div className="space-y-2">
                  <div className="text-3xl font-bold" style={{color: '#FFD700'}}>$1,497</div>
                  <div className="text-lg text-gray-600">or $399/mo x4</div>
                </div>
                <CardDescription className="text-lg">Complete investor-ready business package</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    ✔️ 3 primaries
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    ✔️ CRM, team profiles, pitch material
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    ✔️ Ready for angel investors, grants, or VC
                  </li>
                </ul>
                <Button className="w-full text-black hover:opacity-90" style={{backgroundColor: '#FFD700'}}>
                  Get Investor Ready
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Payment Options</h2>
              <p className="text-xl text-gray-600">Multiple convenient ways to get started today</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="p-8">
                <CardHeader className="text-center pb-6">
                  <DollarSign className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <CardTitle className="text-2xl">Instant Payment</CardTitle>
                  <CardDescription>Secure payment methods available</CardDescription>
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
                  <CardDescription>Flexible payment plans available</CardDescription>
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
                      <p className="text-gray-600 text-sm">3, 6, or 12 month options</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="font-medium mb-2">Corporate Billing</p>
                      <p className="text-gray-600 text-sm">Net 30/60/90 terms available</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="font-medium mb-2">Family Plans</p>
                      <p className="text-gray-600 text-sm">Multiple member discounts</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Services */}
            <Card className="p-8 bg-gradient-to-r from-brand-blue-light to-brand-blue-dark text-white">
              <CardContent className="text-center">
                <h3 className="text-2xl font-bold mb-4">Additional Services Available</h3>
                <p className="text-xl mb-6">We also offer move-in ready apartment placements — just ask!</p>
                <Button className="bg-white text-brand-blue hover:bg-gray-100">
                  Learn More About Housing
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Spanish Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Globe className="h-8 w-8 text-brand-blue mr-3" />
              <h2 className="text-3xl lg:text-4xl font-bold">Servicios en Español</h2>
            </div>
            <p className="text-xl text-gray-600">Oferta limitada – ¡Plan Básico por solo $297!</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-brand-blue">SERVICIOS DE CRÉDITO PERSONAL</h3>
                    <ul className="space-y-2 text-sm">
                      <li>✅ <strong>PLAN BÁSICO</strong> – $297 (precio regular $450)</li>
                      <li>✅ <strong>PLAN ESENCIAL</strong> – $499</li>
                      <li>✅ <strong>SWEEP PREMIUM</strong> – $2,500 o $599/mes x5</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-brand-blue">PAQUETES DE NEGOCIOS</h3>
                    <ul className="space-y-2 text-sm">
                      <li>✅ <strong>INICIO DE NEGOCIOS</strong> – $499</li>
                      <li>✅ <strong>IMPULSO DE CREDIBILIDAD</strong> – $997 o $300/mes x4</li>
                      <li>✅ <strong>LISTO PARA INVERSIONISTAS</strong> – $1,497 o $399/mes x4</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="mb-4">También ofrecemos apartamentos listos para mudarse ��� pregúntanos.</p>
                  <Button className="bg-gradient-to-r from-brand-blue-light to-brand-blue-dark">
                    Más Información en Español
                  </Button>
                </div>
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
            Choose your package and transform your financial future today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Call (555) 123-4567
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue">
              <Mail className="mr-2 h-5 w-5" />
              Send Payment Screenshot
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
