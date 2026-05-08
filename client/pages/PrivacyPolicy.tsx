import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Header />
      <div style={{ maxWidth: "900px", margin: "auto", padding: "40px", fontFamily: "Arial", lineHeight: "1.7" }}>
        <h1>BlueSQ Capital Solutions SMS Privacy Policy</h1>

        <h2>1. Mobile Messaging Privacy</h2>

        <p>
          BlueSQ Capital Solutions is committed to protecting your privacy. This section explains how we collect, use, and protect information collected through our SMS and mobile messaging services.
        </p>

        <h2>2. Information We Collect</h2>

        <p>
          When you opt in to receive SMS communications from BlueSQ Capital Solutions, we may collect:
        </p>

        <ul>
          <li>Your mobile phone number</li>
          <li>Your SMS opt-in preferences and consent records</li>
          <li>Message history between your device and our systems</li>
          <li>Customer communication preferences</li>
        </ul>

        <h2>3. How We Use Your Information</h2>

        <p>
          We use this information solely to provide requested services and communications, including:
        </p>

        <ul>
          <li>Appointment reminders</li>
          <li>Account notifications</li>
          <li>Two-factor authentication alerts</li>
          <li>Bookkeeping and financial updates</li>
          <li>Customer support responses</li>
          <li>Payment reminders</li>
          <li>Business funding preparation updates</li>
        </ul>

        <p>
          We may also use messaging data to improve communication quality, response times, and customer experience.
        </p>

        <h2>4. Third-Party Sharing</h2>

        <p>
          No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.
        </p>

        <p>
          All categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties except as required by law.
        </p>

        <h2>5. Your Choices & Opt-Out</h2>

        <p>
          You may opt out of receiving SMS messages from BlueSQ Capital Solutions at any time by replying <strong>STOP</strong> to any text message you receive from us.
        </p>

        <p>
          After texting STOP, you will receive one final message confirming your opt-out request. You may also reply <strong>HELP</strong> for assistance.
        </p>

        <h2>6. Contact Information</h2>

        <p>
          BlueSQ Capital Solutions<br />
          Email: support.team@bluesq.co<br />
          Phone: (888) 651-9714
        </p>

        <h2>7. SMS Opt-In Consent</h2>

        <p>
          By submitting your phone number through our website forms, consultation requests, onboarding forms, or other communication channels, you consent to receive SMS communications from BlueSQ Capital Solutions.
        </p>

        <p>
          Consent is not a condition of purchase. Message frequency varies. Message and data rates may apply.
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
