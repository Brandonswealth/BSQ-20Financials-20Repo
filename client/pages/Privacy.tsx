import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <div className="prose max-w-none">
            <p>We respect your privacy. We collect only the information necessary to provide our services and communicate with you. We do not sell your data.</p>
            <h2>Information We Collect</h2>
            <p>Contact details you provide (name, email, phone), service preferences, and communications with us.</p>
            <h2>How We Use Information</h2>
            <p>To deliver services, process inquiries and payments, improve our offerings, and comply with legal obligations.</p>
            <h2>Security</h2>
            <p>We use industry-standard safeguards to protect your information.</p>
            <h2>Your Choices</h2>
            <p>You may request access, correction, or deletion of your information at any time by contacting info@bsqfinancials.com.</p>
            <p>Effective date: {new Date().getFullYear()}.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
