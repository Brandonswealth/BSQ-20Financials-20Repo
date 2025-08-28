import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function CreditRepair() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Credit Repair Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            This page is under construction. Please continue prompting to fill in the detailed content for our credit repair services.
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Coming Soon</CardTitle>
            <CardDescription>Detailed credit repair service information will be available here</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-gradient-to-r from-brand-blue-light to-brand-blue-dark">
              <a href="/">Return to Homepage</a>
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
}
