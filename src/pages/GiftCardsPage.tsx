import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCtaBar from "@/components/StickyCtaBar";
import { Button } from "@/components/ui/button";
import { Gift, Heart, ArrowRight } from "lucide-react";

const amounts = [
  { value: "$25", desc: "A thoughtful gesture" },
  { value: "$50", desc: "Perfect for a friend" },
  { value: "$100", desc: "Premium gift" },
  { value: "$250", desc: "Ultimate support" },
];

const GiftCardsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-background" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-sm text-accent font-medium mb-6">
            <Gift className="h-3.5 w-3.5" /> Gift Something Meaningful
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6">
            Give the Gift of <span className="text-gradient-gold">Motivation</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Love Law™ gift cards and gift subscriptions — perfect for law students,
            bar candidates, and attorneys who deserve daily encouragement.
          </p>
        </div>
      </section>

      {/* Gift Card Amounts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold font-heading text-center text-foreground mb-8">
            Buy a <span className="text-gradient-gold">Gift Card</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {amounts.map((amt) => (
              <div key={amt.value} className="card-glow rounded-2xl border border-accent/20 bg-card p-6 text-center cursor-pointer hover:border-accent/50 transition-colors">
                <p className="text-3xl font-bold font-heading text-foreground mb-2">{amt.value}</p>
                <p className="text-sm text-muted-foreground mb-4">{amt.desc}</p>
                <Button variant="gold" className="w-full">Buy Gift Card</Button>
                {/* <!-- GHL GIFT CARD --> */}
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">Custom amounts also available</p>
        </div>
      </section>

      {/* Gift a Subscription */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
            Gift a <span className="text-gradient">Subscription</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Send daily SMS motivation to someone you care about. Choose a plan and add a personal message.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { title: "Law Student", price: "$59/year" },
              { title: "Bar Prep", price: "$99/year" },
              { title: "Attorney", price: "$79/year" },
            ].map((plan) => (
              <div key={plan.title} className="card-glow rounded-2xl border border-border bg-card p-6">
                <h3 className="font-bold font-heading text-foreground mb-2">{plan.title}</h3>
                <p className="text-2xl font-bold text-foreground mb-4">{plan.price}</p>
                <Button variant="heroOutline" className="w-full">
                  <Gift className="h-4 w-4" /> Send as Gift
                </Button>
                {/* <!-- GHL GIFT SUBSCRIPTION --> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Gift */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <Heart className="h-10 w-10 text-accent mx-auto mb-4" />
          <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
            Why Gift Love Law™?
          </h2>
          <p className="text-muted-foreground mb-8">
            Because every law student, bar candidate, and attorney deserves daily
            encouragement. A Love Law™ gift says "I believe in you" — every single day.
          </p>
          <a href="sms:+17173666462&body=LAW">
            <Button variant="hero" size="lg">
              Join Daily Motivation <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </section>

      <div className="pb-16"><Footer /></div>
      <StickyCtaBar />
    </div>
  );
};

export default GiftCardsPage;
