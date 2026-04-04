import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-16 container mx-auto px-4 max-w-3xl">
      <h1 className="text-3xl font-bold font-heading text-foreground mb-8">Privacy Policy</h1>
      <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2 className="text-lg font-semibold text-foreground">Information We Collect</h2>
        <p>We collect information you provide directly, including name, email, phone number, and payment information when you subscribe to our services or purchase products.</p>
        <h2 className="text-lg font-semibold text-foreground">How We Use Your Information</h2>
        <p>We use your information to deliver SMS messages, process orders, improve our services, and communicate with you about your account.</p>
        <h2 className="text-lg font-semibold text-foreground">SMS Communications</h2>
        <p>When you opt in to our SMS service, we use your phone number solely to deliver motivational messages. We do not share your phone number with third parties for marketing purposes.</p>
        <h2 className="text-lg font-semibold text-foreground">Data Security</h2>
        <p>We implement industry-standard security measures to protect your personal information. No method of transmission over the internet is 100% secure.</p>
        <h2 className="text-lg font-semibold text-foreground">Your Rights</h2>
        <p>You have the right to access, update, or delete your personal information. Contact us at <a href="mailto:hello@shoplovelaw.com" className="text-secondary hover:underline">hello@shoplovelaw.com</a>.</p>
        <h2 className="text-lg font-semibold text-foreground">Cookies</h2>
        <p>We use cookies and similar technologies to improve your experience. You can manage cookie preferences through your browser settings.</p>
      </div>
    </div>
    <Footer />
  </div>
);

export default PrivacyPage;
