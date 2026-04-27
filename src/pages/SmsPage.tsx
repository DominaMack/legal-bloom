import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCtaBar from "@/components/StickyCtaBar";
import { Button } from "@/components/ui/button";
import { Smartphone, MessageCircle, TrendingUp, Check, ArrowRight, Star, Shield, Clock } from "lucide-react";

const sampleMessages = [
  "You didn't come this far to quit.",
  "Bar prep is hard. You are harder.",
  "You belong in this profession.",
  "Your future clients need you. Keep going.",
  "Today's effort is tomorrow's success.",
  "Rest if you must, but don't quit.",
  "You're building a legacy, not just a career.",
  "Every case you study brings you closer.",
];

const SmsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-background" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-sm text-accent font-medium mb-6">
            <Smartphone className="h-3.5 w-3.5" />
            SMS Motivation Platform
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6">
            Daily Motivation, <span className="text-gradient">Delivered by Text</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Culturally relevant, daily SMS messages designed for law students,
            bar candidates, and attorneys.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <a href="sms:+15513685683&body=LAW">
              <Button variant="hero" size="lg">Join Daily Motivation <ArrowRight className="h-4 w-4" /></Button>
            </a>
            <a href="sms:+15513685683&body=LAW">
              <Button variant="heroOutline" size="lg">Get Free Sample</Button>
            </a>
          </div>
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6 max-w-sm mx-auto glow-gold">
            <p className="text-xl font-heading font-bold text-foreground">
              📲 Text <span className="text-accent">LAW</span> to +1 551-368-5683
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-light-blue">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-center text-foreground mb-12">
            How It <span className="text-gradient">Works</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Smartphone, title: "Text LAW", desc: "Send LAW to +1 551-368-5683" },
              { icon: MessageCircle, title: "Receive Daily Messages", desc: "Motivational texts every morning" },
              { icon: TrendingUp, title: "Stay Consistent", desc: "Build mental resilience daily" },
            ].map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <step.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold font-heading text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Messages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-center text-foreground mb-12">
            Sample <span className="text-gradient-gold">Messages</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {sampleMessages.map((msg) => (
              <div key={msg} className="card-glow rounded-xl border border-border bg-card p-5">
                <div className="flex gap-1 mb-3">
                  <Star className="h-3 w-3 fill-accent text-accent" />
                  <Star className="h-3 w-3 fill-accent text-accent" />
                  <Star className="h-3 w-3 fill-accent text-accent" />
                </div>
                <p className="text-sm text-foreground font-medium leading-relaxed">"{msg}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-light-blue">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-center text-foreground mb-4">
            Choose Your <span className="text-gradient">Plan</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">Cancel anytime • No app required</p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
            {[
              { title: "Law Students", price: "$7.99", quarterly: "$21.99", annual: "$59", features: ["Daily motivation", "Study encouragement", "Confidence building", "Law school survival tips"], popular: false },
              { title: "Bar Prep", price: "$12.99", quarterly: "$36.99", annual: "$99", features: ["Daily accountability", "Bar exam encouragement", "Stress + burnout support", "Countdown motivation"], popular: true },
              { title: "Attorneys", price: "$9.99", quarterly: "$29.99", annual: "$79", features: ["Career motivation", "Burnout prevention", "Leadership mindset", "Daily inspiration"], popular: false },
            ].map((plan) => (
              <div key={plan.title} className={`card-glow rounded-2xl border p-8 flex flex-col ${plan.popular ? "border-secondary/50 bg-secondary/5 scale-105 relative shadow-lg" : "border-border bg-card"}`}>
                {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-4 py-1 text-xs font-semibold text-secondary-foreground">Most Popular</div>}
                <h3 className="text-xl font-bold font-heading text-foreground mb-3">{plan.title}</h3>
                <p className="text-3xl font-bold text-foreground">{plan.price}<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
                <div className="flex gap-2 mt-1 mb-6 text-xs text-muted-foreground">
                  <span>{plan.quarterly} / 90-day</span><span>•</span><span>{plan.annual} / year</span>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-secondary flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.popular ? "hero" : "heroOutline"} className="w-full">Start Monthly</Button>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><Shield className="h-3.5 w-3.5" /> Cancel anytime</span>
            <span className="flex items-center gap-1"><Smartphone className="h-3.5 w-3.5" /> No app required</span>
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> Instant delivery</span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mb-4">
            Ready to Stay <span className="text-gradient-gold">Motivated?</span>
          </h2>
          <p className="text-muted-foreground mb-8">Join thousands of legal professionals who start their day with Love Law™.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="sms:+15513685683&body=LAW"><Button variant="hero" size="lg">Join Now</Button></a>
            <a href="sms:+15513685683&body=LAW"><Button variant="gold" size="lg">Get Free Sample</Button></a>
          </div>
        </div>
      </section>

      <div className="pb-16"><Footer /></div>
      <StickyCtaBar />
    </div>
  );
};

export default SmsPage;
