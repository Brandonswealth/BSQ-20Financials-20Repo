import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Users, 
  Target,
  Heart,
  Shield,
  TrendingUp,
  Award,
  Phone,
  ArrowRight
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue-light to-brand-blue-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-4">
            About BSQ Financials
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Building Stronger Credit & Smarter Futures
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We believe everyone deserves a fresh start and the right tools to grow. Our mission is simple: 
            to help individuals and businesses repair, manage, and build financial stability while unlocking 
            opportunities that lead to long-term success.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl mb-8">
                At BSQ Financials, we specialize in personal credit repair, business funding, strategic planning, 
                and financial guidance designed to meet you exactly where you are today.
              </p>
              
              <p className="text-lg mb-8">
                Whether you are struggling with personal credit challenges, looking to start a business, or aiming 
                to grow an existing one, our team works directly with you to create a clear, customized path forward. 
                We don't believe in one-size-fits-all solutions. Instead, we provide personalized strategies that 
                not only fix immediate problems but also position you for future opportunities like better loan 
                approvals, business credit, and funding access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Makes BSQ Financials Different</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our focus on empowerment sets us apart from traditional financial services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-blue-light to-brand-blue-dark rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Education & Empowerment</h3>
                    <p className="text-gray-600">
                      We don't just handle your credit or financial needs – we also educate and guide you 
                      so you understand the process, the "why" behind every step, and how to maintain 
                      long-term financial health.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-blue-light to-brand-blue-dark rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Personalized Approach</h3>
                    <p className="text-gray-600">
                      Every client receives a customized strategy tailored to their unique situation and goals. 
                      No cookie-cutter solutions – just personalized guidance that works.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-blue-light to-brand-blue-dark rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Long-term Success</h3>
                    <p className="text-gray-600">
                      We focus on building sustainable financial health, not just quick fixes. Our strategies 
                      position you for continued growth and future opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="p-8 border-2 border-brand-blue">
                <CardHeader className="text-center pb-6">
                  <Award className="h-16 w-16 text-brand-blue mx-auto mb-4" />
                  <CardTitle className="text-2xl">Our Commitment</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Transparent communication throughout your journey</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Educational resources and ongoing support</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Customized strategies for your specific needs</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Long-term relationship, not just a transaction</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Who We Serve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We work with clients from all backgrounds, each with unique financial goals and challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-6">
                <Users className="h-16 w-16 text-brand-blue mx-auto mb-4" />
                <CardTitle className="text-xl">Individuals</CardTitle>
                <CardDescription>Seeking personal credit solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  People looking to repair their credit, improve their scores, and gain access to better 
                  financial opportunities and loan approvals.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-6">
                <TrendingUp className="h-16 w-16 text-brand-blue mx-auto mb-4" />
                <CardTitle className="text-xl">Entrepreneurs</CardTitle>
                <CardDescription>Needing start-up funding and structure</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Business founders who need help with business formation, credit building, and securing 
                  funding to launch their ventures successfully.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-6">
                <Shield className="h-16 w-16 text-brand-blue mx-auto mb-4" />
                <CardTitle className="text-xl">Business Owners</CardTitle>
                <CardDescription>Ready to scale and grow</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Small to medium-sized businesses that want to take things to the next level with 
                  strategic financial planning and growth funding.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Our Promise to You</h2>
            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p className="text-xl leading-relaxed">
                No matter your situation, our goal is to help you achieve stability, growth, and confidence 
                in your financial journey. At BSQ Financials, your future is our priority. Together, we 
                build stronger credit, smarter funding, and better opportunities.
              </p>
            </div>
            
            <Card className="p-8 bg-gradient-to-r from-brand-blue-light to-brand-blue-dark text-white">
              <CardContent className="text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Financial Journey?</h3>
                <p className="text-xl mb-6 text-blue-100">
                  Let's work together to build the financial future you deserve
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100">
                    <Phone className="mr-2 h-5 w-5" />
                    Schedule Free Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-blue" asChild>
                    <a href="/services">
                      View Our Services
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-light to-brand-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm">Honest, transparent communication in all our interactions</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-light to-brand-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Partnership</h3>
              <p className="text-gray-600 text-sm">Working alongside you as a trusted financial partner</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-light to-brand-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Results</h3>
              <p className="text-gray-600 text-sm">Focused on delivering measurable financial improvements</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-blue-light to-brand-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">Committed to the highest standards in financial services</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
