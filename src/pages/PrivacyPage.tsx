import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-16 container mx-auto px-4 max-w-3xl">
      <h1 className="text-3xl font-bold font-heading text-foreground mb-8">Privacy Policy</h1>
      <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>
          Love Law respects your privacy and is committed to protecting the personal
          information you share with us through our website, SMS program, and related services.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Information We Collect</h2>
        <p>
          We may collect information you provide directly to us, including your name,
          email address, phone number, mailing address, payment details, and any other
          information you submit through forms, purchases, or customer support requests.
        </p>
        <h2 className="text-lg font-semibold text-foreground">How We Use Your Information</h2>
        <p>
          We use your information to operate our website, process transactions, deliver
          SMS messages, respond to inquiries, provide customer support, improve our services,
          and communicate with you about your account, purchases, and subscriptions.
        </p>
        <h2 className="text-lg font-semibold text-foreground">SMS Communications</h2>
        <p>
          If you provide your phone number and opt in to receive text messages, we use your
          phone number to send the messages you requested, including motivational content,
          service-related notices, and SMS program updates. Message frequency may vary.
          Message and data rates may apply. Reply STOP to opt out.
        </p>
        <p>
          SMS consent is not shared with third parties or affiliates for their marketing purposes.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Sharing of Information</h2>
        <p>
          We may share information with service providers who help us operate our business,
          such as payment processors, hosting providers, analytics providers, and messaging
          platforms, but only as needed to provide our services. We may also disclose
          information if required by law or to protect our rights.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Data Security</h2>
        <p>
          We use reasonable administrative, technical, and physical safeguards to help protect
          personal information. However, no method of transmission over the internet or electronic
          storage is completely secure.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Your Rights</h2>
        <p>
          Depending on your location, you may have rights to request access to, correction of,
          or deletion of your personal information. To make a request, contact us at{" "}
          <a href="mailto:hello@shoplovelaw.com" className="text-secondary hover:underline">hello@shoplovelaw.com</a>.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Cookies</h2>
        <p>
          We may use cookies and similar technologies to improve site performance, understand
          usage patterns, and enhance your browsing experience. You can control cookies through
          your browser settings.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Policy Updates</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this
          page with a revised effective date.
        </p>
      </div>
    </div>
    <Footer />
  </div>
);

export default PrivacyPage;
