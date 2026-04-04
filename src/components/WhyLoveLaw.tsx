import { Heart, Shield, Flame, Users } from "lucide-react";

const features = [
  { icon: Heart, title: "Culturally Relevant", desc: "Messages that reflect the diverse experiences and identities of legal professionals." },
  { icon: Shield, title: "Built for the Legal Journey", desc: "From 1L orientation to partnership — we cover every stage." },
  { icon: Flame, title: "Motivation That Sticks", desc: "Daily micro-doses of encouragement backed by behavioral science principles." },
  { icon: Users, title: "More Than a Brand", desc: "A movement, a community, and a support system for the legal profession." },
];

const WhyLoveLaw = () => {
  return (
    <section className="py-24 bg-light-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground">Why <span className="text-gradient-gold">Love Law™</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((f) => (
            <div key={f.title} className="card-glow rounded-2xl border border-border bg-card p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold font-heading text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLoveLaw;
