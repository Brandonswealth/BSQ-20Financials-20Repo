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
  Shield,
  Target,
  Star,
  TrendingUp,
  FileText,
  Users,
  Clock,
  Award,
  ArrowRight,
} from "lucide-react";

export default function CreditRepair() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue-light to-brand-blue-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                Limited Time Offer
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Personal Credit
                <span className="block text-yellow-300">Repair Services</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Professional credit restoration services designed to improve
                your credit score and unlock better financial opportunities.
              </p>
              <Button
                size="lg"
                className="bg-white text-brand-blue hover:bg-gray-100"
                asChild
              >
                <a href="#credit-plans">Start Your Credit Journey</a>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold">750+</div>
                  <div className="text-blue-200">Average Score Improvement</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-blue-200">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">60-90</div>
                    <div className="text-blue-200">Days Average</div>
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
              How Credit Repair Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven 4-step process to improve your credit score and
              financial standing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-light to-brand-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Analysis</h3>
              <p className="text-gray-600">
                Complete review of your credit reports from all three bureaus
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-light to-brand-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Strategy</h3>
              <p className="text-gray-600">
                Personalized action plan targeting negative items and
                inaccuracies
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-light to-brand-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Disputes</h3>
              <p className="text-gray-600">
                Professional dispute letters sent to creditors and bureaus
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-light to-brand-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">4. Monitor</h3>
              <p className="text-gray-600">
                Ongoing monitoring and optimization of your credit profile
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Repair Plans */}
      <section id="credit-plans" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Choose Your Credit Repair Plan
            </h2>
            <p className="text-xl text-gray-600">
              Professional credit restoration packages tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Basic Plan */}
            <Card className="relative border-2 border-green-500 shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-500 text-white">LIMITED TIME</Badge>
              </div>
              <CardHeader className="text-center pb-6 pt-8">
                <CardTitle className="text-2xl mb-2">BASIC PLAN</CardTitle>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-green-600">$297</div>
                  <div className="text-lg text-gray-500 line-through">
                    normally $450
                  </div>
                </div>
                <CardDescription className="text-lg">
                  Perfect for quick credit improvements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Hard inquiry removal
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Credit boost strategies
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Access to BlueSQ Financials client portal
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    30-day money-back guarantee
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Email support
                  </li>
                </ul>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  asChild
                >
                  <a href="/checkout?service=basic-credit">
                    Select Basic Plan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Essentials Plan */}
            <Card className="relative border-2 border-brand-blue shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-brand-blue text-white">MOST POPULAR</Badge>
              </div>
              <CardHeader className="text-center pb-6 pt-8">
                <CardTitle className="text-2xl mb-2">
                  ESSENTIALS CREDIT PLAN
                </CardTitle>
                <div className="text-4xl font-bold text-brand-blue">$499</div>
                <CardDescription className="text-lg">
                  Comprehensive credit evaluation and strategy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Full credit evaluation from all 3 bureaus
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />1
                    primary tradeline
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Credit strategy for funding preparation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Monthly progress reports
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Phone + email support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Credit education materials
                  </li>
                </ul>
                <Button
                  className="w-full bg-gradient-to-r from-brand-blue-light to-brand-blue-dark"
                  asChild
                >
                  <a href="/checkout?service=essentials-credit">
                    Select Essentials Plan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="relative border-2 border-purple-500 shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-purple-500 text-white">PREMIUM</Badge>
              </div>
              <CardHeader className="text-center pb-6 pt-8">
                <CardTitle className="text-2xl mb-2">
                  PREMIUM CREDIT SWEEP
                </CardTitle>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-purple-600">
                    $2,500
                  </div>
                  <div className="text-lg text-gray-600">or $599/mo x5</div>
                </div>
                <CardDescription className="text-lg">
                  Complete credit restoration package
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>
                      Complete removal of: Collections, evictions,
                      repossessions, old phone bills, medical debt, student
                      loans
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />5
                    premium tradelines
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Full credit sweep + client portal
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Dedicated 1-on-1 specialist support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Weekly progress updates
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Priority dispute processing
                  </li>
                </ul>
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  asChild
                >
                  <a href="/checkout?service=premium-credit">
                    Select Premium Plan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Done For You Package */}
          <Card
            className="relative border-2 border-gold shadow-xl"
            style={{ borderColor: "#FFD700" }}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge
                className="text-black"
                style={{ backgroundColor: "#FFD700" }}
              >
                RECOMMENDED
              </Badge>
            </div>
            <CardHeader className="text-center pb-6 pt-8">
              <Award
                className="h-12 w-12 mx-auto mb-4"
                style={{ color: "#FFD700" }}
              />
              <CardTitle className="text-3xl mb-2">
                DONE FOR YOU PACKAGE
              </CardTitle>
              <div className="space-y-2">
                <div
                  className="text-4xl font-bold"
                  style={{ color: "#FFD700" }}
                >
                  $3,997
                </div>
                <div className="text-lg text-gray-600">or $999/mo x4</div>
              </div>
              <CardDescription className="text-xl">
                Complete financial transformation - we handle everything
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-3 text-brand-blue">
                    Credit Repair Includes:
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Complete credit sweep (all negative items)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      10 premium tradelines
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Daily credit monitoring
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Identity theft protection
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-brand-blue">
                    Bonus Services:
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Personal financial coaching (6 sessions)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Debt consolidation strategy
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Credit-building action plan
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Lifetime access to resources
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-center font-medium text-brand-blue">
                  🎯 Our Guarantee: 100+ point improvement or full refund
                </p>
              </div>
              <Button
                className="w-full text-black hover:opacity-90 text-lg py-6"
                style={{ backgroundColor: "#FFD700" }}
                asChild
              >
                <a href="/checkout?service=done-for-you-credit">
                  Get Complete Transformation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What's Included in Every Plan
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive credit repair services and ongoing support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <FileText className="h-12 w-12 text-brand-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Credit Analysis</h3>
              <p className="text-gray-600">
                Complete review of all credit reports and scores
              </p>
            </div>

            <div className="text-center">
              <Shield className="h-12 w-12 text-brand-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Dispute Processing</h3>
              <p className="text-gray-600">
                Professional dispute letters and follow-up
              </p>
            </div>

            <div className="text-center">
              <Users className="h-12 w-12 text-brand-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Dedicated credit specialists and customer service
              </p>
            </div>

            <div className="text-center">
              <Clock className="h-12 w-12 text-brand-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Progress Tracking</h3>
              <p className="text-gray-600">
                Regular updates and score monitoring
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue-light to-brand-blue-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Repair Your Credit?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have improved their credit
            scores with BlueSQ Financials
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-brand-blue hover:bg-gray-100"
            >
              Start Your Credit Repair Today
            </Button>
            <Button
              size="lg"
              className="bg-white text-brand-blue hover:bg-gray-100"
              asChild
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
