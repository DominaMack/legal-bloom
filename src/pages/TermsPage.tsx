import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-16 container mx-auto px-4 max-w-3xl">
      <h1 className="text-3xl font-bold font-heading text-foreground mb-8">Terms & Conditions</h1>
      <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2 className="text-lg font-semibold text-foreground">1. Acceptance of Terms</h2>
        <p>
          By accessing or using the Love Law website, products, SMS program, or related services,
          you agree to these Terms & Conditions. If you do not agree, please do not use our services.
        </p>
        <h2 className="text-lg font-semibold text-foreground">2. Services</h2>
        <p>
          Love Law provides daily SMS-based motivational messages, merchandise, educational and
          lifestyle content, and related offerings for law students, bar candidates, attorneys,
          and organizations.
        </p>
        <h2 className="text-lg font-semibold text-foreground">3. SMS Subscription</h2>
        <p>
          By providing your phone number, you agree to receive SMS messages from Love Law.
          Message frequency may vary. Message & data rates may apply. Reply STOP to opt out.
          Reply HELP for help.
        </p>
        <h2 className="text-lg font-semibold text-foreground">4. Orders, Billing, and Refunds</h2>
        <p>
          If you purchase products or subscription services from Love Law, you agree to provide
          accurate billing information. Prices and offerings may change at any time. Refunds,
          credits, and cancellations are handled according to the specific offer or at our discretion
          unless otherwise required by law.
        </p>
        <h2 className="text-lg font-semibold text-foreground">5. Acceptable Use</h2>
        <p>
          You agree not to misuse the website or services, interfere with normal operation,
          attempt unauthorized access, violate applicable law, or use Love Law content in a way
          that infringes the rights of others.
        </p>
        <h2 className="text-lg font-semibold text-foreground">6. Intellectual Property</h2>
        <p>
          Love Law, The Real Dispute, related branding, logos, graphics, text, videos, and other
          site content are owned by Love Law or used with permission and may not be copied or used
          without authorization.
        </p>
        <h2 className="text-lg font-semibold text-foreground">7. No Legal Advice</h2>
        <p>
          Love Law content is provided for motivational, informational, and brand purposes only.
          Nothing on this website or in our messages is legal advice and should not be relied on as
          a substitute for advice from a qualified professional.
        </p>
        <h2 className="text-lg font-semibold text-foreground">8. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Love Law is not liable for indirect, incidental,
          consequential, or special damages arising out of or related to your use of the website,
          SMS program, products, or services.
        </p>
        <h2 className="text-lg font-semibold text-foreground">9. Changes to Terms</h2>
        <p>
          We may update these Terms & Conditions from time to time. Continued use of the website
          or services after changes are posted means you accept the revised terms.
        </p>
        <h2 className="text-lg font-semibold text-foreground">10. Contact</h2>
        <p>
          For questions about these terms, contact us at{" "}
          <a href="mailto:hello@shoplovelaw.com" className="text-secondary hover:underline">hello@shoplovelaw.com</a>.
        </p>
      </div>
    </div>
    <Footer />
  </div>
);

export default TermsPage;
