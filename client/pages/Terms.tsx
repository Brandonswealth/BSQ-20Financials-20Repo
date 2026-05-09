import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen">
      <Header />
      <div style={{ maxWidth: "900px", margin: "auto", padding: "40px", fontFamily: "Arial", lineHeight: "1.7" }}>
        <h1>Terms of Service</h1>

        <p>
          <strong>Effective Date:</strong> 2026
        </p>

        <p>
          By using the BlueSQ Capital Solutions website https://www.bsqfinancials.pro and any associated websites, landing pages, forms, or services ("Website"), you agree to these Terms of Service.
        </p>

        <p>
          BlueSQ Capital Solutions reserves the right to update or modify these Terms at any time without prior notice. Continued use of the Website after changes are posted constitutes acceptance of those changes.
        </p>

        <h2>1. Account Terms</h2>

        <ul>
          <li>Accounts, consultations, and applications must be submitted by real individuals. Automated bots or false registrations are prohibited.</li>
          <li>Users must provide accurate information including full legal name, valid email address, and working phone number.</li>
          <li>You are responsible for maintaining the confidentiality and security of any account information or communications associated with your use of our services.</li>
        </ul>

        <h2>2. Payment Terms</h2>

        <p>
          Payments for services may be processed through third-party payment providers. BlueSQ Capital Solutions does not store full credit card information on our servers.
        </p>

        <p>
          By purchasing services, you agree to applicable pricing, payment schedules, and service terms communicated during onboarding or invoicing.
        </p>

        <h2>3. SMS & Messaging Terms</h2>

        <p>
          By opting into our messaging services, you consent to receive SMS communications from BlueSQ Capital Solutions related to customer care, appointments, bookkeeping updates, account notifications, funding preparation, reminders, and business support services.
        </p>

        <ul>
          <li>
            <strong>Consent:</strong> Consent to receive automated text messages is not a condition of purchase or service approval.
          </li>
          <li>
            <strong>SMS Consent Communication:</strong> Phone numbers and SMS consent information collected during the opt-in process will not be shared with third parties or affiliates for marketing purposes.
          </li>
          <li>
            <strong>Types of SMS Communications:</strong> Clients may receive customer care messages, appointment reminders, account updates, onboarding notices, financial service notifications, and follow-up communications.
          </li>
          <li>
            <strong>Example Message:</strong><br />
            "BlueSQ Capital Solutions: Reminder — your consultation is scheduled for Thursday at 2:00 PM EST. Reply STOP to opt out or HELP for assistance."
          </li>
          <li>
            <strong>Message Frequency:</strong> Message frequency varies depending on customer activity and requested services. Clients may receive up to 10 messages per week during active onboarding or support periods.
          </li>
          <li>
            <strong>Potential Fees:</strong> Standard message and data rates may apply based on your wireless carrier plan.
          </li>
          <li>
            <strong>Opt-In Method:</strong> Users may opt in through website forms, intake forms, consultation requests, applications, or verbal consent.
          </li>
          <li>
            <strong>Opt-Out Method:</strong> You may opt out at any time by replying <strong>STOP</strong> to any SMS message received from us.
          </li>
          <li>
            <strong>Help:</strong> For assistance, reply <strong>HELP</strong> or contact us directly at support.team@bluesq.co.
          </li>
          <li>
            <strong>Standard Messaging Disclosures:</strong><br />
            Message and data rates may apply.<br />
            Message frequency varies.<br />
            Reply STOP to unsubscribe.<br />
            Reply HELP for assistance.
          </li>
        </ul>

        <h2>4. Cancellation and Termination</h2>

        <ul>
          <li>Cancellations and refunds are subject to the terms outlined within your specific service agreement or invoice.</li>
          <li>BlueSQ Capital Solutions reserves the right to suspend, deny, or terminate services for violations of these Terms or misuse of our services.</li>
        </ul>

        <h2>5. Service and Pricing Modifications</h2>

        <p>
          Service offerings, pricing, and packages may be updated or modified at any time. Significant changes may be communicated through our website, email communications, or direct customer notifications.
        </p>

        <h2>6. Copyright and Content Ownership</h2>

        <ul>
          <li>You retain ownership of materials and information submitted to us for service purposes.</li>
          <li>All branding, content, graphics, systems, website designs, documents, and original materials created by BlueSQ Capital Solutions remain the intellectual property of BlueSQ Capital Solutions unless otherwise stated.</li>
          <li>Unauthorized duplication, resale, or redistribution is prohibited.</li>
        </ul>

        <h2>7. Limitation of Liability</h2>

        <p>
          BlueSQ Capital Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from the use or inability to use our services, website, messaging systems, or third-party integrations.
        </p>

        <h2>8. Entire Agreement</h2>

        <p>
          These Terms of Service, along with our Privacy Policy and SMS Terms, constitute the complete agreement between you and BlueSQ Capital Solutions regarding use of our services and website.
        </p>

        <p>
          By submitting forms through https://www.bsqfinancials.pro, you agree to receive customer support and service-related communications from BlueSQ Capital Solutions.
        </p>

        <p>
          You may reply <strong>STOP</strong> to opt out of messaging at any time.
        </p>

        <p>
          Reply <strong>HELP</strong> for customer support.
        </p>

        <p>
          Message and data rates may apply. Message frequency varies.
        </p>

        <h2>9. Contact Information</h2>

        <p>
          <strong>BlueSQ Capital Solutions</strong><br />
          Email: support.team@bluesq.co<br />
          Phone: (888) 651-9714<br />
          Website: https://www.bsqfinancials.pro
        </p>

        <hr style={{ marginTop: "40px", marginBottom: "20px" }} />

        <p>
          © 2020–2026 BlueSQ Capital Solutions. All Rights Reserved.
        </p>

        <p>
          <a href="/privacy-policy">Privacy Policy</a> | <a href="/sms-terms">SMS Terms</a> | <a href="/terms-and-conditions">Terms & Conditions</a>
        </p>
      </div>
      <Footer />
    </div>
  );
}
