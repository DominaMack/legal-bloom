import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Clock, Rocket, Target, BarChart3 } from "lucide-react";

const PilotPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-24 pb-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-background" />
      <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/5 px-4 py-1.5 text-sm text-secondary font-medium mb-6">
          <Rocket className="h-3.5 w-3.5" /> Pilot Program
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6">
          Start a <span className="text-gradient">Pilot Program</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          Test Love Law™ Enterprise with your institution — risk-free, measurable, and impactful.
        </p>
        <Button variant="hero" size="lg">Apply for Pilot Program <ArrowRight className="h-4 w-4" /></Button>
        {/* <!-- GHL PILOT FORM --> */}
      </div>
    </section>

    <section className="py-16 bg-light-blue">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: Clock,
              title: "30-Day Pilot",
              desc: "Quick validation of impact on student engagement and well-being.",
              features: ["Up to 100 participants", "Daily motivational SMS", "Post-pilot engagement report", "Setup in 24-48 hours"],
            },
            {
              icon: Target,
              title: "90-Day Pilot",
              desc: "Comprehensive data on retention, engagement trends, and bar readiness impact.",
              features: ["Up to 250 participants", "Custom message tracks", "Monthly progress reports", "Dedicated support"],
            },
          ].map((pilot) => (
            <div key={pilot.title} className="card-glow rounded-2xl border border-border bg-card p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary mb-4">
                <pilot.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-heading text-foreground mb-2">{pilot.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{pilot.desc}</p>
              <ul className="space-y-2">
                {pilot.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-secondary flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Outcomes */}
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold font-heading text-foreground mb-8">Expected <span className="text-gradient-gold">Outcomes</span></h2>
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { stat: "+35%", label: "Engagement increase" },
            { stat: "90%+", label: "SMS open rate" },
            { stat: "4.8/5", label: "Participant satisfaction" },
          ].map((o) => (
            <div key={o.label} className="rounded-2xl border border-border bg-card p-6">
              <p className="text-3xl font-bold font-heading text-secondary">{o.stat}</p>
              <p className="text-sm text-muted-foreground mt-1">{o.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <Button variant="hero" size="lg">Apply Now <ArrowRight className="h-4 w-4" /></Button>
      </div>
    </section>

    <Footer />
  </div>
);

export default PilotPage;
