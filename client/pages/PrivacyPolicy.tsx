import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Header />
      <div style={{ maxWidth: "900px", margin: "auto", padding: "40px", fontFamily: "Arial", lineHeight: "1.7" }}>
        <h1>BSQ Financials SMS Privacy Policy</h1>

        <h2>Mobile Messaging Privacy</h2>
        <p>
          BSQ Financials is committed to protecting your privacy. This section explains how we collect, use, and safeguard information related to our SMS messaging services.
        </p>

        <h2>Information We Collect</h2>
        <ul>
          <li>Your mobile phone number</li>
          <li>Your opt-in preferences and consent records</li>
          <li>A history of messages sent to and received from your device</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use your information solely to provide services you requested, including:</p>

        <ul>
          <li>Account alerts</li>
          <li>Two-factor authentication</li>
          <li>Payment reminders</li>
          <li>Financial updates</li>
          <li>Appointment confirmations</li>
        </ul>

        <h2>Third-Party Sharing</h2>

        <p>
          No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.
        </p>

        <p>
          All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties except as required by law.
        </p>

        <h2>Your Choices &amp; Opt-Out</h2>

        <p>
          You may opt out of receiving SMS messages from BSQ Financials at any time by replying STOP to any message you receive.
        </p>

        <p>
          After texting STOP, you will receive one final confirmation message and no further SMS messages will be sent unless you opt in again.
        </p>

        <p>
          For assistance, reply HELP or contact us directly:
        </p>

        <p>
          Phone: (888) 651-9714<br />
          Email: support@bsqfinancials.pro
        </p>
      </div>
      <Footer />
    </div>
  );
}
