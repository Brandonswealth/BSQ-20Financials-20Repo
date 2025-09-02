import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Disclaimer() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>
          <div className="prose max-w-none">
            <p>Information on this website is for educational purposes only and does not constitute legal, tax, or financial advice. Consult qualified professionals for personalized advice.</p>
            <p>Past results do not guarantee future outcomes. Credit and funding results vary by individual profile and lender criteria.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
