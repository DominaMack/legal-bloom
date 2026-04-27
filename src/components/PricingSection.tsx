import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Scale, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    icon: GraduationCap,
    title: "Law Students",
    monthly: "$7.99",
    quarterly: "$21.99",
    annual: "$59",
    features: [
      "Daily motivation",
      "Study encouragement",
      "Confidence building",
      "Law school survival tips",
    ],
    cta: "Start Your Journey",
    popular: false,
  },
  {
    icon: BookOpen,
    title: "Bar Prep",
    monthly: "$12.99",
    quarterly: "$36.99",
    annual: "$99",
    features: [
      "Daily accountability",
      "Bar exam encouragement",
      "Stress + burnout support",
      "Countdown motivation",
    ],
    cta: "Stay Locked In",
    popular: true,
  },
  {
    icon: Scale,
    title: "Attorneys",
    monthly: "$9.99",
    quarterly: "$29.99",
    annual: "$79",
    features: [
      "Career motivation",
      "Burnout prevention",
      "Leadership mindset",
      "Daily inspiration",
    ],
    cta: "Elevate Your Practice",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground">
            Choose Your <span className="text-gradient">Path</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Daily SMS motivation tailored to your stage in the legal journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`card-glow rounded-2xl border p-8 flex flex-col text-center ${
                plan.popular
                  ? "border-secondary/50 bg-secondary/5 scale-105 relative shadow-lg"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-4 py-1 text-xs font-semibold text-secondary-foreground">
                  Most Popular
                </div>
              )}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  <plan.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold font-heading text-foreground">{plan.title}</h3>
              </div>

              <div className="mb-6">
                <p className="text-3xl font-bold font-heading text-foreground">
                  {plan.monthly}<span className="text-sm font-normal text-muted-foreground">/mo</span>
                </p>
                <div className="flex justify-center gap-3 mt-2 text-xs text-muted-foreground">
                  <span>{plan.quarterly} / 90-day</span>
                  <span>•</span>
                  <span>{plan.annual} / year</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-secondary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="space-y-2">
                <Button variant={plan.popular ? "hero" : "heroOutline"} className="w-full">
                  {plan.cta} <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="ghost" className="w-full text-xs text-muted-foreground">
                  Get Sample Message
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Cancel anytime • No app required • Pay by text available
        </p>

        {/* CTA Loop */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold font-heading text-foreground mb-4">
            Stay Consistent. Stay Focused.
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/sms"><Button variant="hero">Join Now</Button></Link>
            <a href="sms:+15513685683&body=LAW"><Button variant="heroOutline">Get Sample</Button></a>
            <Link to="/shop"><Button variant="outline">Shop</Button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
