import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          <div className="prose max-w-none">
            <p>By using our website and services, you agree to these terms.</p>
            <h2>Services</h2>
            <p>We provide credit and business financial services as described on our site. Deliverables and timelines may vary based on your circumstances.</p>
            <h2>Payments</h2>
            <p>All fees are due as agreed at checkout. Certain services may offer installment options. Late or missed payments may pause services.</p>
            <h2>No Guarantee</h2>
            <p>We do not guarantee specific credit scores, funding amounts, or outcomes. Results depend on many factors outside our control.</p>
            <h2>Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, BSQ Financials is not liable for indirect or consequential damages.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
