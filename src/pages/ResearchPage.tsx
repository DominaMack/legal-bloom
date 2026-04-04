import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Brain, BarChart3, AlertTriangle, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { stat: "96%", label: "of law students report significant stress", source: "ABA Study" },
  { stat: "28%", label: "of lawyers experience depression", source: "ALM Survey" },
  { stat: "71%", label: "of law students report anxiety", source: "Law Student Well-Being" },
  { stat: "40%", label: "of attorneys consider leaving the profession", source: "Legal Profession Report" },
];

const ResearchPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-background" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/5 px-4 py-1.5 text-sm text-secondary font-medium mb-6">
            <Brain className="h-3.5 w-3.5" /> The Research
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6">
            Why Daily Motivation <span className="text-gradient">Matters</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            The legal profession faces a mental health crisis. Love Law™ is built on
            evidence-based principles to address it.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((s) => (
              <div key={s.stat} className="card-glow rounded-2xl border border-border bg-card p-6 text-center">
                <p className="text-4xl font-bold font-heading text-secondary mb-2">{s.stat}</p>
                <p className="text-sm text-foreground mb-2">{s.label}</p>
                <p className="text-xs text-muted-foreground">{s.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold font-heading text-foreground text-center mb-8">
            How Love Law™ <span className="text-gradient-gold">Helps</span>
          </h2>
          <div className="space-y-4">
            {[
              { icon: Heart, title: "Daily Micro-Doses of Encouragement", desc: "Research shows consistent, small motivational inputs improve resilience and reduce burnout." },
              { icon: Brain, title: "Culturally Relevant Messaging", desc: "Messages that reflect diverse identities and experiences create deeper connection and impact." },
              { icon: BarChart3, title: "Accountability Through Consistency", desc: "Daily touchpoints create habits that support long-term success in law school and practice." },
              { icon: AlertTriangle, title: "Burnout Prevention", desc: "Proactive motivation reduces the risk of burnout by addressing stress before it escalates." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card p-6 flex gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary flex-shrink-0">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
            Ready to Make a Difference?
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/sms"><Button variant="hero" size="lg">Join Daily Motivation <ArrowRight className="h-4 w-4" /></Button></Link>
            <Link to="/enterprise"><Button variant="heroOutline" size="lg">Enterprise Solutions</Button></Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResearchPage;
