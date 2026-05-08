import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function SMSTerms() {
  return (
    <div className="min-h-screen">
      <Header />
      <div style={{ maxWidth: "900px", margin: "auto", padding: "40px", fontFamily: "Arial", lineHeight: "1.7" }}>
        <h1>BlueSQ Capital Solutions SMS Terms & Conditions</h1>

        <h2>1. Program Description</h2>

        <p>
          BlueSQ Capital Solutions ("we," "us," or "our") provides a mobile messaging program designed to send clients account notifications, appointment reminders, bookkeeping updates, funding preparation updates, security alerts including two-factor authentication, payment reminders, and requested financial service communications.
        </p>

        <h2>2. User Opt-In</h2>

        <p>
          By providing your mobile phone number and opting in through our website, intake forms, applications, consultation requests, or verbal agreement, you authorize BlueSQ Capital Solutions to send text messages to your mobile device.
        </p>

        <p>
          Enrollment in SMS messaging is not a condition of purchase or financial service approval.
        </p>

        <h2>3. Message Frequency</h2>

        <p>
          Message frequency varies depending on customer interaction, account activity, and requested services. Clients may receive approximately 2–10 messages per month for routine communication, while security alerts and support updates may be sent as needed.
        </p>

        <h2>4. Cost</h2>

        <p>
          BlueSQ Capital Solutions does not charge fees for SMS communications. However, standard message and data rates may apply depending on your wireless carrier and service plan.
        </p>

        <h2>5. Supported Carriers</h2>

        <p>
          Our messaging services are compatible with most major U.S. carriers including AT&amp;T, Verizon, T-Mobile, Sprint, and others.
        </p>

        <p>
          Wireless carriers are not liable for delayed or undelivered messages.
        </p>

        <h2>6. Opt-Out (How To Stop)</h2>

        <p>
          You may cancel SMS communications at any time by texting <strong>STOP</strong> to (888) 651-9714.
        </p>

        <p>
          After sending STOP, you will receive a final confirmation message confirming your opt-out status. After this confirmation, you will no longer receive SMS messages from BlueSQ Capital Solutions unless you opt in again.
        </p>

        <h2>7. Support (How To Get Help)</h2>

        <p>
          If you need assistance with our messaging program, reply <strong>HELP</strong> to any message or contact our support team directly:
        </p>

        <p>
          Email: support.team@bluesq.co<br />
          Phone: (888) 651-9714
        </p>

        <h2>8. Privacy</h2>

        <p>
          Your privacy is important to us. Mobile information and SMS opt-in data will never be shared, sold, rented, or disclosed to third parties or affiliates for marketing or promotional purposes.
        </p>

        <p>
          For more information, please review our Privacy Policy.
        </p>

        <hr style={{ marginTop: "40px", marginBottom: "20px" }} />

        <p>
          © 2026 BlueSQ Capital Solutions. All rights reserved.
        </p>

        <p>
          Support Email: support.team@bluesq.co<br />
          Phone: (888) 651-9714
        </p>

        <p>
          <a href="/privacy-policy">Privacy Policy</a> | <a href="/sms-terms">SMS Terms</a> | <a href="/terms-and-conditions">Terms & Conditions</a>
        </p>
      </div>
      <Footer />
    </div>
  );
}
