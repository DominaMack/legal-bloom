import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Scale, Check } from "lucide-react";

const plans = [
  {
    icon: GraduationCap,
    title: "Law Students",
    features: [
      "Daily motivation",
      "Study encouragement",
      "Confidence building",
      "Law school survival tips",
    ],
    cta: "Start Now",
    popular: false,
  },
  {
    icon: BookOpen,
    title: "Bar Prep",
    features: [
      "Daily accountability",
      "Bar exam encouragement",
      "Stress + burnout support",
      "Countdown motivation",
    ],
    cta: "Stay Consistent",
    popular: true,
  },
  {
    icon: Scale,
    title: "Attorneys",
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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading">
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
              className={`card-glow rounded-2xl border p-8 flex flex-col ${
                plan.popular
                  ? "border-primary/50 bg-primary/5 scale-105 relative"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <plan.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold font-heading text-foreground">{plan.title}</h3>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant={plan.popular ? "hero" : "heroOutline"} className="w-full">
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
