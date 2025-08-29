import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CreditCard, 
  TrendingUp, 
  Shield, 
  Users, 
  Star, 
  CheckCircle, 
  Phone,
  ArrowRight,
  BarChart3,
  Calculator,
  FileText,
  Target
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue-light to-brand-blue-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                Trusted Financial Partners
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Repair Your Credit & 
                <span className="block text-yellow-300">Build Your Future</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Professional credit repair services and comprehensive CFO solutions 
                to help you achieve financial success and business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100" asChild>
                  <a href="https://calendly.com/brandonswealth/15min" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-5 w-5" />
                    Free Consultation
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue" asChild>
                  <a href="/services">
                    View Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-blue-200">Credit Points Improved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">95%</div>
                    <div className="text-blue-200">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">1000+</div>
                    <div className="text-blue-200">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-blue-200">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to your personal and business needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Credit Repair Services */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-light to-brand-blue-dark rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Credit Repair Services</CardTitle>
                <CardDescription className="text-lg">
                  Professional credit restoration to improve your financial standing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Credit report analysis and dispute resolution
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Personalized credit improvement strategies
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Ongoing monitoring and support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Credit education and financial guidance
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-brand-blue-light to-brand-blue-dark">
                  Start Credit Repair
                </Button>
              </CardContent>
            </Card>

            {/* CFO Services */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-light to-brand-blue-dark rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">CFO Services</CardTitle>
                <CardDescription className="text-lg">
                  Strategic financial leadership for your business growth
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Financial planning and budgeting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Cash flow management and forecasting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Financial reporting and analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Strategic business advisory
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-brand-blue-light to-brand-blue-dark">
                  Explore CFO Services
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-blue-light to-brand-blue-dark rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg mb-2">Financial Planning</CardTitle>
              <CardDescription>Comprehensive financial strategy development</CardDescription>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-blue-light to-brand-blue-dark rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg mb-2">Debt Consolidation</CardTitle>
              <CardDescription>Streamline your debts into manageable payments</CardDescription>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-blue-light to-brand-blue-dark rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg mb-2">Business Consulting</CardTitle>
              <CardDescription>Expert guidance for business growth strategies</CardDescription>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-blue-light to-brand-blue-dark rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-lg mb-2">Investment Advisory</CardTitle>
              <CardDescription>Smart investment strategies for wealth building</CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose BSQ Financials?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine expertise, technology, and personalized service to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-light to-brand-blue-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Proven Track Record</h3>
              <p className="text-gray-600">
                Over 95% success rate in credit improvement with thousands of satisfied clients
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-light to-brand-blue-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
              <p className="text-gray-600">
                Certified financial professionals with decades of combined experience
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-blue-light to-brand-blue-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Personalized Service</h3>
              <p className="text-gray-600">
                Tailored solutions designed specifically for your unique financial situation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Success stories from real people we've helped</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "BSQ Financials helped me improve my credit score by 150 points in just 6 months. 
                  Their team was professional and kept me informed throughout the entire process."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Small Business Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The CFO services transformed our business finances. We now have clear visibility 
                  into our cash flow and strategic planning for growth."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Michael Chen</p>
                    <p className="text-sm text-gray-500">Tech Startup Founder</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Professional, reliable, and results-driven. BSQ Financials exceeded our 
                  expectations in every way. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Emily Rodriguez</p>
                    <p className="text-sm text-gray-500">Real Estate Investor</p>
                  </div>
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
            Ready to Transform Your Financial Future?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Take the first step towards better credit and financial success. 
            Get your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100" asChild>
              <a href="tel:8883059390">
                <Phone className="mr-2 h-5 w-5" />
                Call 888-305-9390
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue" asChild>
                  <a href="https://calendly.com/brandonswealth/15min" target="_blank" rel="noopener noreferrer">Schedule Free Consultation</a>
                </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
