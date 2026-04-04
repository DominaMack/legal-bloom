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
        <p>By accessing and using Love Law™ services, you agree to these Terms & Conditions. If you do not agree, please do not use our services.</p>
        <h2 className="text-lg font-semibold text-foreground">2. Services</h2>
        <p>Love Law™ provides daily SMS-based motivational messages, merchandise, and enterprise engagement solutions for legal professionals.</p>
        <h2 className="text-lg font-semibold text-foreground">3. SMS Subscription</h2>
        <p>By subscribing to our SMS service, you consent to receiving recurring text messages. Message and data rates may apply. Text STOP to cancel. Text HELP for help.</p>
        <h2 className="text-lg font-semibold text-foreground">4. Payments & Refunds</h2>
        <p>All subscription payments are processed securely. You may cancel your subscription at any time. Refunds are handled on a case-by-case basis.</p>
        <h2 className="text-lg font-semibold text-foreground">5. Intellectual Property</h2>
        <p>Love Law™, The Real Dispute™, and all associated logos, content, and messaging are trademarks and intellectual property of Love Law™.</p>
        <h2 className="text-lg font-semibold text-foreground">6. Limitation of Liability</h2>
        <p>Love Law™ provides motivational content for informational purposes only. We are not responsible for legal advice or professional outcomes.</p>
        <h2 className="text-lg font-semibold text-foreground">7. Contact</h2>
        <p>For questions about these terms, contact us at <a href="mailto:hello@shoplovelaw.com" className="text-secondary hover:underline">hello@shoplovelaw.com</a>.</p>
      </div>
    </div>
    <Footer />
  </div>
);

export default TermsPage;
