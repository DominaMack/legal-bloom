import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SmsTermsPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-16 container mx-auto px-4 max-w-3xl">
      <h1 className="text-3xl font-bold font-heading text-foreground mb-8">SMS Terms of Service</h1>
      <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2 className="text-lg font-semibold text-foreground">SMS Program</h2>
        <p>
          By texting LAW to +1 551-368-5683 or otherwise providing your phone number through
          our website, you agree to receive SMS messages from Love Law.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Message Frequency</h2>
        <p>
          Message frequency may vary based on the program you joined, your interactions with us,
          and operational needs.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Opt-Out</h2>
        <p>Text <strong>STOP</strong> at any time to unsubscribe. You will receive a one-time confirmation message.</p>
        <h2 className="text-lg font-semibold text-foreground">Help</h2>
        <p>Text <strong>HELP</strong> for assistance. You can also contact us at <a href="mailto:hello@shoplovelaw.com" className="text-secondary hover:underline">hello@shoplovelaw.com</a> or +1 551-368-5683.</p>
        <h2 className="text-lg font-semibold text-foreground">Rates</h2>
        <p>Message and data rates may apply. Check your mobile plan for details.</p>
        <h2 className="text-lg font-semibold text-foreground">Consent</h2>
        <p>
          Your consent to receive SMS messages is not a condition of purchase. By providing your
          phone number, you agree to receive SMS messages from Love Law. Message frequency may vary.
          Message & data rates may apply. Reply STOP to opt out.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Privacy</h2>
        <p>Your phone number and personal data are handled according to our <a href="/privacy" className="text-secondary hover:underline">Privacy Policy</a>. We do not share your phone number with third parties for marketing purposes.</p>
        <h2 className="text-lg font-semibold text-foreground">Carriers</h2>
        <p>Supported carriers include AT&T, T-Mobile, Verizon, Sprint, and most other major US carriers. Carriers are not liable for delayed or undelivered messages.</p>
      </div>
    </div>
    <Footer />
  </div>
);

export default SmsTermsPage;
