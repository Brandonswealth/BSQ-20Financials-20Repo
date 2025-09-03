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
  Building2,
  TrendingUp,
  Target,
  Star,
  BarChart3,
  Calculator,
  FileText,
  Users,
  Clock,
  Award,
  ArrowRight,
  Globe,
  Briefcase,
  DollarSign,
} from "lucide-react";

export default function CFOServices() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue-light to-brand-blue-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                Professional CFO Services
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Business Funding &
                <span className="block text-yellow-300">
                  Structure Packages
                </span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Comprehensive business setup, funding solutions, and CFO
                services to accelerate your business growth and investor
                readiness.
              </p>
              <Button
                size="lg"
                className="bg-white text-brand-blue hover:bg-gray-100"
                asChild
              >
                <a href="#packages">Start Building Your Business</a>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold">$50M+</div>
                  <div className="text-blue-200">Total Funding Secured</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-blue-200">Businesses Funded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">98%</div>
                    <div className="text-blue-200">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Business Growth Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven 4-step approach to business structure, funding, and
              growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-light to-brand-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Foundation</h3>
              <p className="text-gray-600">
                Business registration, EIN, and legal structure setup
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-light to-brand-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Credibility</h3>
              <p className="text-gray-600">
                Build business credit and establish credibility markers
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-light to-brand-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Funding</h3>
              <p className="text-gray-600">
                Secure business funding and investment opportunities
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-light to-brand-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4. Scale</h3>
              <p className="text-gray-600">
                Ongoing CFO services and growth optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Funding Plans */}
      <section id="packages" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Business Funding & Structure Packages
            </h2>
            <p className="text-xl text-gray-600">
              Professional business setup and funding solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Business Starter */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-6">
                <Building2 className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <CardTitle className="text-2xl mb-2">
                  BUSINESS STARTER
                </CardTitle>
                <div className="text-4xl font-bold text-brand-blue">$499</div>
                <CardDescription className="text-lg">
                  Essential business foundation setup
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Business registration support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    EIN + professional business email
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />1
                    business tradeline setup
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Basic setup for $5K–$15K funding
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Business banking guidance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Basic compliance setup
                  </li>
                </ul>
                <Button
                  className="w-full bg-gradient-to-r from-brand-blue-light to-brand-blue-dark"
                  asChild
                >
                  <a href="/checkout?service=business-starter">
                    Start My Business
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Credibility Booster */}
            <Card className="relative border-2 border-orange-500 shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-500 text-white">MOST POPULAR</Badge>
              </div>
              <CardHeader className="text-center pb-6 pt-8">
                <Star className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle className="text-2xl mb-2">
                  CREDIBILITY BOOSTER
                </CardTitle>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-orange-600">$997</div>
                  <div className="text-lg text-gray-600">or $300/mo x4</div>
                </div>
                <CardDescription className="text-lg">
                  Enhanced business credibility package
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />2
                    business tradelines
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Professional website + pitch deck
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Business credit registration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Setup for fundability and tier 1-2 funding
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Business listings optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Financial projections template
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Business plan framework
                  </li>
                </ul>
                <Button
                  className="w-full bg-orange-600 hover:bg-orange-700"
                  asChild
                >
                  <a href="/checkout?service=credibility-booster">
                    Boost My Credibility
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Investor Ready */}
            <Card
              className="relative border-2 border-gold shadow-lg"
              style={{ borderColor: "#FFD700" }}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge
                  className="text-black"
                  style={{ backgroundColor: "#FFD700" }}
                >
                  INVESTOR READY
                </Badge>
              </div>
              <CardHeader className="text-center pb-6 pt-8">
                <Award
                  className="h-12 w-12 mx-auto mb-4"
                  style={{ color: "#FFD700" }}
                />
                <CardTitle className="text-2xl mb-2">
                  INVESTOR READY PRO
                </CardTitle>
                <div className="space-y-2">
                  <div
                    className="text-3xl font-bold"
                    style={{ color: "#FFD700" }}
                  >
                    $1,497
                  </div>
                  <div className="text-lg text-gray-600">or $399/mo x4</div>
                </div>
                <CardDescription className="text-lg">
                  Complete investor-ready business package
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />3
                    primary business accounts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    CRM system setup
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Team profiles and organizational chart
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Professional pitch materials
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Ready for angel investors, grants, or VC
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Financial modeling and projections
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Due diligence preparation
                  </li>
                </ul>
                <Button
                  className="w-full text-black hover:opacity-90"
                  style={{ backgroundColor: "#FFD700" }}
                  asChild
                >
                  <a href="/checkout?service=investor-ready">
                    Get Investor Ready
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Complete Business Solution */}
          <Card className="relative border-2 border-purple-600 shadow-xl">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-purple-600 text-white">
                COMPLETE SOLUTION
              </Badge>
            </div>
            <CardHeader className="text-center pb-6 pt-8">
              <Briefcase className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle className="text-3xl mb-2">
                COMPLETE BUSINESS CFO PACKAGE
              </CardTitle>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-purple-600">$4,997</div>
                <div className="text-lg text-gray-600">or $1,249/mo x4</div>
              </div>
              <CardDescription className="text-xl">
                Full-service business setup + ongoing CFO services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-3 text-brand-blue">
                    Business Setup Includes:
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Complete business formation and registration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />5
                      premium business tradelines
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Professional website and branding
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Investor-ready pitch deck and materials
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Complete compliance and legal setup
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-brand-blue">
                    Ongoing CFO Services:
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Monthly financial reporting and analysis
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Cash flow management and forecasting
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Strategic business advisory (12 months)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Funding strategy and investor connections
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Tax planning and optimization
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg mb-6">
                <p className="text-center font-medium text-purple-700">
                  🎯 Guarantee: $100K+ in funding opportunities or your money
                  back
                </p>
              </div>
              <Button
                className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-6"
                asChild
              >
                <a href="/checkout?service=complete-business">
                  Get Complete Business Solution
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CFO Services Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Comprehensive CFO Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional financial leadership for your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-brand-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Financial Planning</h3>
              <p className="text-gray-600">
                Strategic budgeting and long-term financial planning
              </p>
            </div>

            <div className="text-center">
              <Calculator className="h-12 w-12 text-brand-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Cash Flow Management
              </h3>
              <p className="text-gray-600">
                Optimize cash flow and working capital management
              </p>
            </div>

            <div className="text-center">
              <FileText className="h-12 w-12 text-brand-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Financial Reporting
              </h3>
              <p className="text-gray-600">
                Monthly reports and key performance indicators
              </p>
            </div>

            <div className="text-center">
              <Target className="h-12 w-12 text-brand-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Strategic Advisory</h3>
              <p className="text-gray-600">
                Expert guidance for business growth and decisions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Amounts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Funding Opportunities
            </h2>
            <p className="text-xl text-gray-600">
              Access various funding levels based on your business readiness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-green-600">
                  Starter Level
                </CardTitle>
                <CardDescription>$5K - $15K</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li>• Business credit cards</li>
                  <li>• Equipment financing</li>
                  <li>• Working capital loans</li>
                  <li>• Vendor credit lines</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-2 border-brand-blue">
              <CardHeader>
                <CardTitle className="text-2xl text-brand-blue">
                  Growth Level
                </CardTitle>
                <CardDescription>$25K - $100K</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li>��� SBA loans</li>
                  <li>• Revenue-based financing</li>
                  <li>• Asset-based lending</li>
                  <li>• Investor connections</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-600">
                  Scale Level
                </CardTitle>
                <CardDescription>$250K+</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-left">
                  <li>• Venture capital</li>
                  <li>• Private equity</li>
                  <li>• Angel investors</li>
                  <li>• Government grants</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue-light to-brand-blue-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Build Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join hundreds of successful businesses we've helped secure funding
            and achieve growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-brand-blue hover:bg-gray-100"
              asChild
            >
              <a href="#packages">Start Your Business Journey</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-blue"
            >
              Schedule Business Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
