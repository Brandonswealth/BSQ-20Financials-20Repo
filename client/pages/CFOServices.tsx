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
  Briefcase,
  Calculator,
  Clock,
  ArrowRight,
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
                CFO & Business Services
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Financial Leadership
                <span className="block text-yellow-300">For Your Business</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Professional CFO services, business setup, bookkeeping, and
                funding preparation for startups and established businesses.
              </p>
              <Button
                size="lg"
                className="bg-white text-brand-blue hover:bg-gray-100"
                asChild
              >
                <a href="#services">Start Building Your Business</a>
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
                    <div className="text-blue-200">Businesses Helped</div>
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

      {/* Our Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive financial and business solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* CFO Services */}
            <Card>
              <CardHeader>
                <Briefcase className="h-12 w-12 text-brand-blue mb-4" />
                <CardTitle className="text-2xl">
                  CFO & Financial Management Services
                </CardTitle>
                <CardDescription className="text-base">
                  Perfect for established businesses that need financial leadership, bookkeeping, reporting, and business organization.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-brand-blue mb-3">Services Include:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Fractional CFO Services
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Monthly Bookkeeping
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Financial Reporting
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Cash Flow Management
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Budget Planning
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Payroll Support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Tax Preparation Assistance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      KPI & Financial Dashboard Setup
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-blue mb-3">Best For:</h4>
                  <div className="text-sm text-gray-600">
                    Existing businesses, Growing startups, Real estate companies, Service businesses, Contractors, Ecommerce brands
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-brand-blue-light to-brand-blue-dark" asChild>
                  <a href="https://calendly.com/brandonswealth/15min" target="_blank" rel="noopener noreferrer">
                    Schedule CFO Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Business Startup Services */}
            <Card>
              <CardHeader>
                <Building2 className="h-12 w-12 text-brand-blue mb-4" />
                <CardTitle className="text-2xl">
                  Business Startup & Setup Services
                </CardTitle>
                <CardDescription className="text-base">
                  Start your business the right way with complete setup and compliance assistance.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-brand-blue mb-3">Services Include:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      LLC Formation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      EIN Registration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Business Address Assistance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Operating Agreement Setup
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Business Banking Guidance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Business Phone Setup
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Website & Branding Assistance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Business Credit Starter Guidance
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-blue mb-3">Best For:</h4>
                  <div className="text-sm text-gray-600">
                    New entrepreneurs, Side hustles, Content creators, Trucking companies, Construction businesses, Ecommerce startups
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-brand-blue-light to-brand-blue-dark" asChild>
                  <a href="/checkout?service=startup-setup">
                    Start Your Business Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Business Organization & Cleanup */}
            <Card>
              <CardHeader>
                <Calculator className="h-12 w-12 text-brand-blue mb-4" />
                <CardTitle className="text-2xl">
                  Business Organization & Cleanup
                </CardTitle>
                <CardDescription className="text-base">
                  Already have a business but need help organizing finances, systems, or operations?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-brand-blue mb-3">Services Include:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Financial Cleanup
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Missing Documentation Organization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Expense Categorization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Backdated Bookkeeping
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Business Structure Review
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Credit Readiness Preparation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Vendor & Payment System Setup
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Business Process Optimization
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-blue mb-3">Best For:</h4>
                  <div className="text-sm text-gray-600">
                    Businesses with disorganized finances, Companies preparing for funding, Owners overwhelmed with operations, Businesses needing structure
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-brand-blue-light to-brand-blue-dark" asChild>
                  <a href="/checkout?service=business-organization">
                    Organize My Business
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Funding Preparation */}
            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-brand-blue mb-4" />
                <CardTitle className="text-2xl">
                  Funding Preparation & Capital Readiness
                </CardTitle>
                <CardDescription className="text-base">
                  We help position your business for funding opportunities and financial growth.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-brand-blue mb-3">Services Include:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Funding Readiness Review
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Business Credit Guidance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Financial Statement Preparation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Revenue & Cash Flow Review
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Lender Package Preparation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Investor Pitch Assistance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Credit Profile Review
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Funding Strategy Sessions
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-blue mb-3">Best For:</h4>
                  <div className="text-sm text-gray-600">
                    Businesses seeking capital, Startups preparing for investors, Companies improving approval odds, Entrepreneurs seeking growth funding
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-brand-blue-light to-brand-blue-dark" asChild>
                  <a href="/checkout?service=funding-preparation">
                    Prepare For Funding
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Service Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose the package that fits your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Startup Essential */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-6">
                <Building2 className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <CardTitle className="text-2xl">Startup Essential</CardTitle>
                <div className="text-4xl font-bold text-brand-blue">$499</div>
                <CardDescription>
                  For entrepreneurs launching a new business
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    LLC Formation Assistance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    EIN Setup
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Business Consultation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Business Banking Guidance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Business Email Setup
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Basic Branding Guidance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Startup Checklist
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-brand-blue-light to-brand-blue-dark" asChild>
                  <a href="/checkout?service=startup-essential">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Business Organization */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-6">
                <Calculator className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <CardTitle className="text-2xl">Business Organization</CardTitle>
                <div className="text-4xl font-bold text-brand-blue">$999</div>
                <CardDescription>
                  For businesses needing structure and cleanup
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Financial Organization
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Bookkeeping Cleanup
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Expense Review
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Business Structure Review
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Workflow Recommendations
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    CRM/Organization Guidance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    30-Day Support
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-brand-blue-light to-brand-blue-dark" asChild>
                  <a href="/checkout?service=business-organization-pkg">
                    Organize My Business
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* CFO Growth */}
            <Card className="relative border-2 border-orange-500 shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-500 text-white">POPULAR</Badge>
              </div>
              <CardHeader className="text-center pb-6 pt-8">
                <Briefcase className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <CardTitle className="text-2xl">CFO Growth Package</CardTitle>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-orange-600">$1,500<span className="text-lg">/mo</span></div>
                  <p className="text-gray-600 text-sm">Starting price</p>
                </div>
                <CardDescription>
                  Ongoing financial management and strategy support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Monthly Bookkeeping
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Financial Reports
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Cash Flow Tracking
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    CFO Strategy Calls
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Payroll Oversight
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    KPI Dashboard Setup
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Financial Planning
                  </li>
                </ul>
                <Button className="w-full bg-orange-600 hover:bg-orange-700" asChild>
                  <a href="https://calendly.com/brandonswealth/15min" target="_blank" rel="noopener noreferrer">
                    Book CFO Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Funding Ready */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-6">
                <TrendingUp className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <CardTitle className="text-2xl">Funding Ready</CardTitle>
                <div className="text-4xl font-bold text-brand-blue">$1,250</div>
                <CardDescription>
                  Prepare for lenders or investors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Funding Readiness Assessment
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Financial Statement Preparation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Business Credit Review
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Funding Strategy Session
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Lender/Investor Package Assistance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Revenue & Cash Flow Review
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Business Documentation Review
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-brand-blue-light to-brand-blue-dark" asChild>
                  <a href="/checkout?service=funding-ready">
                    Get Funding Ready
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Premium Scaling */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
              <CardHeader className="text-center pb-6">
                <Target className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <CardTitle className="text-2xl">Premium Business Scaling</CardTitle>
                <div className="text-4xl font-bold text-brand-blue">Custom</div>
                <CardDescription>
                  Full-service support for scaling operations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Fractional CFO Services
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Advanced Financial Planning
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Team & Operations Structuring
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Business Process Optimization
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Investor Preparation
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Financial Forecasting
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Priority Support
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-brand-blue-light to-brand-blue-dark" asChild>
                  <a href="https://calendly.com/brandonswealth/15min" target="_blank" rel="noopener noreferrer">
                    Apply For Premium Support
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose BlueSQ Capital Solutions?
            </h2>
            <p className="text-xl text-gray-600">
              The difference that drives your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">We Help Businesses:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Launch correctly</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Stay financially organized</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Improve business systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Prepare for funding</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Scale professionally</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Build long-term structure</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">What Makes Us Different:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Personalized support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Startup-friendly guidance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Modern financial systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Business growth focused</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Real business strategy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Professional financial organization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue-light to-brand-blue-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready To Build Your Business The Right Way?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Book a free consultation with BlueSQ Capital Solutions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-white text-brand-blue hover:bg-gray-100"
              asChild
            >
              <a href="https://calendly.com/brandonswealth/15min" target="_blank" rel="noopener noreferrer">
                Schedule Consultation
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-white text-brand-blue hover:bg-gray-100"
              asChild
            >
              <a href="#services">
                Speak With Our Team
              </a>
            </Button>
          </div>
          <div className="space-y-3 text-lg">
            <p>Phone: (888) 651-9714</p>
            <p>Email: support@bluesq.co</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
