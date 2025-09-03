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
import { CheckCircle, Calendar } from "lucide-react";

export default function FinancialPlanning() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="bg-gradient-to-r from-brand-blue-light to-brand-blue-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Financial Planning</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Custom plans for budgeting, savings, debt payoff, and long‑term
            goals.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              "Personalized budget and cash flow plan",
              "Goal-based savings roadmap",
              "Investment and retirement guidance",
            ].map((t) => (
              <Card key={t} className="p-6">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    {t}
                  </CardTitle>
                  <CardDescription>
                    Clear, actionable steps you can follow.
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <Card className="p-8 text-center">
            <CardContent>
              <p className="text-lg mb-6">Ready to build your plan?</p>
              <Button
                className="bg-gradient-to-r from-brand-blue-light to-brand-blue-dark"
                asChild
              >
                <a
                  href="https://calendly.com/brandonswealth/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Free Consultation
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
}
