import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
          <div className="prose max-w-none">
            <p>By using our website and services, you agree to these terms and conditions.</p>
            <h2>Services Description</h2>
            <p>
              BSQ Financials provides credit and business financial services as
              described on our website. Deliverables and timelines may vary based
              on your individual circumstances.
            </p>
            <h2>User Responsibilities</h2>
            <p>
              You agree to provide accurate information and use our services in
              compliance with all applicable laws and regulations. Unauthorized
              use is prohibited.
            </p>
            <h2>Payment Terms</h2>
            <p>
              All fees are due as agreed at checkout. We may offer installment
              options for certain services. Late or missed payments may result
              in service suspension.
            </p>
            <h2>No Guarantees</h2>
            <p>
              We do not guarantee specific credit scores, funding amounts, loan
              approvals, or financial outcomes. Results depend on many factors
              outside our control.
            </p>
            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, BSQ Financials and its
              owners are not liable for indirect, incidental, special, or
              consequential damages.
            </p>
            <h2>Intellectual Property</h2>
            <p>
              All content on our website, including text, graphics, and materials,
              is the property of BSQ Financials or its content suppliers and is
              protected by copyright.
            </p>
            <h2>Modifications</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes
              will be effective upon posting to our website.
            </p>
            <p>Effective date: {new Date().getFullYear()}.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
