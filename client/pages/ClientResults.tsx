import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  CheckCircle,
  Award,
  Users,
  BarChart3,
  ArrowRight,
} from "lucide-react";

export default function ClientResults() {
  const results = [
    {
      title: "Credit Score Breakthrough",
      description: "From struggling to Good credit in 6 months",
      score: "717",
      scoreLabel: "Good",
      improvement: "+108 pts",
      image: "https://cdn.builder.io/api/v1/image/assets%2F73cef5d45d4148daa57a98053c90e59f%2F964f4141e23546a7afa1bf4dfdbaec6d?format=webp&width=800&height=1200",
      testimonial: "The team helped me clean up my credit report and I'm now qualified for loans I never thought I'd get.",
    },
    {
      title: "Negative Items Removed",
      description: "Collection accounts successfully deleted",
      score: "Multiple",
      scoreLabel: "Deleted",
      improvement: "Collections Gone",
      image: "https://cdn.builder.io/api/v1/image/assets%2F73cef5d45d4148daa57a98053c90e59f%2F4e6e2eafde4a4430adeb99000cbe3986?format=webp&width=800&height=1200",
      testimonial: "I couldn't believe how many items were removed from my credit report. The results speak for themselves!",
    },
    {
      title: "$50,000 Business Funding Approved",
      description: "SBA funding transaction successfully processed",
      score: "$50K",
      scoreLabel: "FUNDED",
      improvement: "Business Secured",
      image: "https://cdn.builder.io/api/v1/image/assets%2F73cef5d45d4148daa57a98053c90e59f%2F2deda91ed4f14b93a85d795ce8340402?format=webp&width=800&height=1200",
      testimonial: "Thanks to BSQ Capital Solutions' preparation and strategy, my business got approved for the funding we needed to scale.",
    },
    {
      title: "Fair Credit Achievement",
      description: "Improved credit profile in 90 days",
      score: "698",
      scoreLabel: "Fair",
      improvement: "+92 pts",
      image: "https://cdn.builder.io/api/v1/image/assets%2F73cef5d45d4148daa57a98053c90e59f%2F06bcdcfa5a7b464f9892128d3cd10ee4?format=webp&width=800&height=1200",
      testimonial: "The personalized strategy sessions really helped me understand my credit and how to improve it quickly.",
    },
    {
      title: "Multiple Deletions Confirmed",
      description: "Dispute results with multiple removed accounts",
      score: "Multiple",
      scoreLabel: "Deleted",
      improvement: "Items Removed",
      image: "https://cdn.builder.io/api/v1/image/assets%2F73cef5d45d4148daa57a98053c90e59f%2F8b19d030e724499b9b9460821e813fe1?format=webp&width=800&height=1200",
      testimonial: "Seeing all those negative items removed from my report was incredible. My financial future just got so much brighter!",
    },
    {
      title: "Good Credit Score Achieved",
      description: "Successfully reached Good credit tier",
      score: "717",
      scoreLabel: "Good",
      improvement: "Score Improved",
      image: "https://cdn.builder.io/api/v1/image/assets%2F73cef5d45d4148daa57a98053c90e59f%2F0c6fc667cd73475496995cfe4e10d81e?format=webp&width=800&height=1200",
      testimonial: "I'm finally in a position to get approved for better terms. The team really delivered on their promise.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue-light to-brand-blue-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              Real Client Results
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              See What's Possible
              <span className="block text-yellow-300">With BSQ Capital Solutions</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Thousands of clients have transformed their credit profiles and
              secured business funding. Here are their real results.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold">500+</div>
                <div className="text-blue-200">Clients Helped</div>
              </div>
              <div>
                <div className="text-4xl font-bold">$50M+</div>
                <div className="text-blue-200">Funding Secured</div>
              </div>
              <div>
                <div className="text-4xl font-bold">98%</div>
                <div className="text-blue-200">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real clients just like you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-96 bg-gray-200 overflow-hidden">
                  <img
                    src={result.image}
                    alt={result.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {result.title}
                    </h3>
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  </div>
                  <p className="text-gray-600 mb-4">{result.description}</p>

                  <div className="bg-gradient-to-r from-brand-blue-light to-brand-blue-dark text-white rounded-lg p-4 mb-4 text-center">
                    <div className="text-3xl font-bold">{result.score}</div>
                    <div className="text-sm text-blue-100">{result.scoreLabel}</div>
                    <div className="text-lg font-semibold text-yellow-300 mt-1">
                      {result.improvement}
                    </div>
                  </div>

                  <p className="text-gray-700 italic text-sm">
                    "{result.testimonial}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results by Category */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What Our Clients Achieve
            </h2>
            <p className="text-xl text-gray-600">
              Measurable results across credit repair and business funding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Average Score Increase</h3>
              <p className="text-4xl font-bold text-brand-blue mb-2">100+</p>
              <p className="text-gray-600">points in 90 days</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Negative Items Removed</h3>
              <p className="text-4xl font-bold text-brand-blue mb-2">95%</p>
              <p className="text-gray-600">successful dispute rate</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <Award className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Business Funding</h3>
              <p className="text-4xl font-bold text-brand-blue mb-2">$50M+</p>
              <p className="text-gray-600">total secured for clients</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <Users className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Satisfied Clients</h3>
              <p className="text-4xl font-bold text-brand-blue mb-2">500+</p>
              <p className="text-gray-600">transformed their futures</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Breakdown */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              How We Help
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <BarChart3 className="h-8 w-8 text-brand-blue mr-3" />
                Credit Repair Results
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Negative Items Removed:</strong> Collections, charge-offs, inquiries, late payments
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Score Improvements:</strong> Average 100+ point increase in 90 days
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Tradeline Addition:</strong> Build credit history with strategic accounts
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Utilization Optimization:</strong> Lower credit card balances strategically
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Award className="h-8 w-8 text-brand-blue mr-3" />
                Business Funding Results
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>SBA Funding:</strong> $5K–$350K+ secured for business growth
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Business Credit Built:</strong> From startup to fundable in 6 months
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Lender Approval:</strong> 98% success rate for prepared clients
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Funding Strategy:</strong> Personalized roadmap to capital access
                  </span>
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
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join over 500 clients who have transformed their credit and business finances.
            Your results could be next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-brand-blue hover:bg-gray-100"
              asChild
            >
              <a href="/credit-repair">
                Start Credit Repair
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-white text-brand-blue hover:bg-gray-100"
              asChild
            >
              <a href="/cfo-services">
                Start Business Setup
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-white text-brand-blue hover:bg-gray-100"
              asChild
            >
              <a href="https://calendly.com/brandonswealth/15min" target="_blank" rel="noopener noreferrer">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
