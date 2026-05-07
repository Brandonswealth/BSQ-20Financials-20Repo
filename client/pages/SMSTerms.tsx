import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function SMSTerms() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold mb-6">SMS Terms</h1>
          <div className="prose max-w-none">
            <h2>SMS Communications</h2>
            <p>
              By opting in to SMS communications, you agree to receive text
              messages from BSQ Financials related to your account, services,
              and important updates.
            </p>
            <h2>Message Frequency</h2>
            <p>
              Message frequency may vary depending on your account activity and
              service engagement. Standard messaging rates may apply through
              your carrier.
            </p>
            <h2>Opting Out</h2>
            <p>
              To unsubscribe from SMS communications at any time, reply STOP to
              any message or contact support@bluesq.pro.
            </p>
            <h2>Privacy</h2>
            <p>
              We respect your privacy and will not share your phone number with
              third parties without your consent.
            </p>
            <h2>Compliance</h2>
            <p>
              All SMS communications comply with applicable laws and regulations
              including TCPA and similar messaging regulations.
            </p>
            <p>Effective date: {new Date().getFullYear()}.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
