import { Smartphone, MessageCircle, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Text LAW",
    desc: "Instant access to motivation",
    step: "01",
  },
  {
    icon: MessageCircle,
    title: "Get Daily Messages",
    desc: "Stay consistent and focused",
    step: "02",
  },
  {
    icon: TrendingUp,
    title: "Level Up Your Journey",
    desc: "From law school to career success",
    step: "03",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 relative bg-grid">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading">
            How Love Law <span className="text-gradient">Works</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.step} className="relative text-center group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              <div className="card-glow rounded-2xl border border-border bg-card p-8">
                <div className="text-xs font-mono text-accent mb-4">{step.step}</div>
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <step.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold font-heading text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
