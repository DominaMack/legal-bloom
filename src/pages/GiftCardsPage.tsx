import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCtaBar from "@/components/StickyCtaBar";
import { Button } from "@/components/ui/button";
import { Gift, Heart, ArrowRight } from "lucide-react";
import giftMockup from "@/assets/gift-cards-mockup.png";

const amounts = [
  { value: "$25", tier: "Starter Support", color: "border-border" },
  { value: "$50", tier: "Motivation Boost", color: "border-secondary/30" },
  { value: "$100", tier: "Full Support", color: "border-accent/40" },
  { value: "$250", tier: "Elite Support", color: "border-accent/60" },
];

const GiftCardsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero with visual mockup */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs text-accent font-semibold mb-6">
                <Gift className="h-3 w-3" /> Gift Something Meaningful
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mb-4">
                Give the Gift of{" "}
                <span className="text-gradient-gold">Motivation</span>
              </h1>
              <p className="text-muted-foreground mb-6 max-w-md">
                Love Law™ gift cards and gift subscriptions — perfect for law
                students, bar candidates, and attorneys who deserve daily
                encouragement.
              </p>
              <a href="sms:+17173666462&body=LAW">
                <Button variant="hero" size="lg">
                  Send a Gift <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
            <div className="relative">
              <img
                src={giftMockup}
                alt="Love Law gift cards"
                className="rounded-2xl shadow-2xl w-full"
                loading="lazy"
                width={1024}
                height={576}
              />
              <div className="absolute -inset-4 bg-accent/5 rounded-3xl blur-[40px] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Gift Card Tiers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold font-heading text-center text-foreground mb-8">
            Choose a <span className="text-gradient-gold">Gift Card</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {amounts.map((amt) => (
              <div
                key={amt.value}
                className={`card-glow rounded-2xl border ${amt.color} bg-card p-6 text-center`}
              >
                <div className="w-full aspect-[16/10] rounded-xl bg-gradient-to-br from-primary to-secondary/80 mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary-foreground">{amt.value}</p>
                    <p className="text-[10px] text-primary-foreground/70 uppercase tracking-wider">Love Law™</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-foreground mb-1">{amt.tier}</p>
                <Button variant="gold" className="w-full mt-3" size="sm">
                  Buy Gift Card
                </Button>
                {/* <!-- GHL GIFT CARD --> */}
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4">
            Custom amounts also available
          </p>
        </div>
      </section>

      {/* Gift a Subscription */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
            Gift a <span className="text-gradient">Subscription</span>
          </h2>
          <p className="text-sm text-muted-foreground mb-8">
            Send daily SMS motivation to someone you care about. Choose a plan
            and add a personal message.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { title: "Law Student", price: "$59/year" },
              { title: "Bar Prep", price: "$99/year" },
              { title: "Attorney", price: "$79/year" },
            ].map((plan) => (
              <div
                key={plan.title}
                className="card-glow rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="font-bold font-heading text-foreground mb-2">
                  {plan.title}
                </h3>
                <p className="text-2xl font-bold text-foreground mb-4">
                  {plan.price}
                </p>
                <Button variant="heroOutline" className="w-full" size="sm">
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
          <Heart className="h-8 w-8 text-accent mx-auto mb-4" />
          <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
            Why Gift Love Law™?
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            Because every law student, bar candidate, and attorney deserves
            daily encouragement. A Love Law™ gift says "I believe in you" —
            every single day.
          </p>
          <a href="sms:+17173666462&body=LAW">
            <Button variant="hero" size="lg">
              Join Daily Motivation <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </section>

      <div className="pb-16">
        <Footer />
      </div>
      <StickyCtaBar />
    </div>
  );
};

export default GiftCardsPage;
