import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function SMSTerms() {
  return (
    <div className="min-h-screen">
      <Header />
      <div style={{ maxWidth: "900px", margin: "auto", padding: "40px", fontFamily: "Arial", lineHeight: "1.7" }}>
        <h1>BSQ Financials SMS Terms &amp; Conditions</h1>

        <h2>1. Program Description</h2>

        <p>
          BSQ Financials provides SMS communications for:
        </p>

        <ul>
          <li>Account notifications</li>
          <li>Security alerts and two-factor authentication</li>
          <li>Payment reminders</li>
          <li>Appointment scheduling</li>
          <li>Customer support updates</li>
          <li>Requested financial updates</li>
        </ul>

        <h2>2. User Opt-In</h2>

        <p>
          By providing your mobile number and opting in through our website, forms, or verbal consent, you agree to receive text messages from BSQ Financials.
        </p>

        <p>
          Consent is not a condition of purchase or service.
        </p>

        <h2>3. Message Frequency</h2>

        <p>
          Message frequency varies based on account activity and customer interaction.
          Users may receive approximately 2–10 messages per month, though security alerts may occur as needed.
        </p>

        <h2>4. Cost</h2>

        <p>
          BSQ Financials does not charge for SMS messages. However, message and data rates may apply depending on your mobile carrier plan.
        </p>

        <h2>5. Supported Carriers</h2>

        <p>
          Our messaging services are supported by major U.S. carriers including AT&amp;T, Verizon, T-Mobile, and others.
        </p>

        <p>
          Carriers are not liable for delayed or undelivered messages.
        </p>

        <h2>6. Opt-Out</h2>

        <p>
          You can cancel SMS services at any time by texting STOP to (888) 651-9714.
        </p>

        <p>
          After sending STOP, you will receive a confirmation message and will no longer receive text messages from us unless you opt in again.
        </p>

        <h2>7. Support</h2>

        <p>
          For help, text HELP or contact:
        </p>

        <p>
          Email: support@bsqfinancials.pro<br />
          Phone: (888) 651-9714
        </p>

        <h2>8. Privacy</h2>

        <p>
          Your privacy is important to us. Mobile information and SMS opt-in data will never be sold or shared with third parties for marketing purposes.
        </p>

        <p>
          Please review our Privacy Policy for additional information.
        </p>
      </div>
      <Footer />
    </div>
  );
}
