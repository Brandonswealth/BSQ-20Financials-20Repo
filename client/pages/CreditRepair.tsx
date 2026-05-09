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
              Credit Profile Sweep Packages
            </h2>
            <p className="text-xl text-gray-600">
              Professional credit restoration packages tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Essential Sweep */}
            <Card className="relative border-2 border-green-500 shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-500 text-white">STARTER</Badge>
              </div>
              <CardHeader className="text-center pb-6 pt-8">
                <CardTitle className="text-2xl mb-2">Essential Sweep</CardTitle>
                <div className="text-4xl font-bold text-green-600">$297</div>
                <CardDescription className="text-lg">
                  Quick credit improvements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Up to 3 negative items addressed
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Credit profile analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Strategy recommendations for score improvement
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Hard inquiry review (up to 2)
                  </li>
                </ul>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  asChild
                >
                  <a href="/checkout?service=essential-sweep">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Standard Credit Sweep */}
            <Card className="relative border-2 border-blue-500 shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white">POPULAR</Badge>
              </div>
              <CardHeader className="text-center pb-6 pt-8">
                <CardTitle className="text-2xl mb-2">Standard Credit Sweep</CardTitle>
                <div className="text-4xl font-bold text-blue-600">$500</div>
                <CardDescription className="text-lg">
                  Comprehensive credit evaluation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Up to 5 negative items addressed
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Collections, charge-offs, and inquiries
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Full credit profile review and strategy
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Ongoing support and monitoring
                  </li>
                </ul>
                <Button
                  className="w-full bg-gradient-to-r from-brand-blue-light to-brand-blue-dark"
                  asChild
                >
                  <a href="/checkout?service=standard-sweep">
                    Select Plan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Advanced Credit Sweep */}
            <Card className="relative border-2 border-purple-500 shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-purple-500 text-white">ADVANCED</Badge>
              </div>
              <CardHeader className="text-center pb-6 pt-8">
                <CardTitle className="text-2xl mb-2">Advanced Credit Sweep</CardTitle>
                <div className="text-4xl font-bold text-purple-600">$1,000</div>
                <CardDescription className="text-lg">
                  Comprehensive transformation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Up to 10 negative items addressed
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Collections and charge-offs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Hard inquiry strategy
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Creditor goodwill letters when appropriate
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Priority processing
                  </li>
                </ul>
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  asChild
                >
                  <a href="/checkout?service=advanced-sweep">
                    Select Plan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Elite Credit Transformation */}
            <Card className="relative border-2 border-gold shadow-xl" style={{ borderColor: "#FFD700" }}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="text-black" style={{ backgroundColor: "#FFD700" }}>
                  ELITE
                </Badge>
              </div>
              <CardHeader className="text-center pb-6 pt-8">
                <Award className="h-12 w-12 mx-auto mb-4" style={{ color: "#FFD700" }} />
                <CardTitle className="text-2xl mb-2">Elite Credit Transformation</CardTitle>
                <div className="text-4xl font-bold" style={{ color: "#FFD700" }}>$2,500</div>
                <CardDescription className="text-lg">
                  Complete credit restoration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Up to 25 negative items addressed
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Advanced dispute strategy
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Credit utilization optimization plan
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Private strategy sessions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Two complimentary premium services included
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    90-day priority service
                  </li>
                </ul>
                <Button
                  className="w-full text-black hover:opacity-90 text-lg py-6"
                  style={{ backgroundColor: "#FFD700" }}
                  asChild
                >
                  <a href="/checkout?service=elite-transformation">
                    Get Elite Package
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Premium Specialty Services */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Premium Specialty Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Eviction Processing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-brand-blue">$400 - $800</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Repossession Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-brand-blue">$400 - $900</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Student Loan Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-brand-blue">$200 - $500</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Funding Readiness */}
          <Card className="mt-12 border-2 border-brand-blue">
            <CardHeader>
              <CardTitle>Funding Readiness Strategy</CardTitle>
              <CardDescription>
                Prepare for major approvals: business funding, auto loans, or mortgage applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-3xl font-bold text-brand-blue">$750 - $1,500</p>
                  <p className="text-gray-600 mt-2">Includes:</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Full funding analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Utilization optimization plan
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Lender targeting strategy
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Private strategy consultation
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Monthly Management Plans */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">Credit Profile Management (Monthly)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Credit Guard</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-brand-blue">$79<span className="text-lg">/mo</span></p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Credit Optimize</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-brand-blue">$129<span className="text-lg">/mo</span></p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Credit Wealth Builder</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-brand-blue">$229<span className="text-lg">/mo</span></p>
                </CardContent>
              </Card>
            </div>
          </div>
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
            scores with BlueSQ Capital Solutions
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
