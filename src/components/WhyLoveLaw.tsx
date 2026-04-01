import { Heart, Compass, Flame, Globe } from "lucide-react";

const features = [
  { icon: Globe, title: "Culturally Relevant", desc: "Motivation that resonates with your identity and journey." },
  { icon: Compass, title: "Built for the Legal Journey", desc: "From 1L orientation to partnership — we're with you." },
  { icon: Flame, title: "Motivation That Sticks", desc: "Daily SMS messages you'll actually look forward to." },
  { icon: Heart, title: "More Than a Brand", desc: "A movement for legal professionals who love what they do." },
];

const WhyLoveLaw = () => {
  return (
    <section id="about" className="py-24 bg-grid">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading">
            Why <span className="text-gradient-gold">Love Law™</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((f) => (
            <div key={f.title} className="card-glow rounded-2xl border border-border bg-card p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold font-heading text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLoveLaw;
