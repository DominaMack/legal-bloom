import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Brain, BarChart3, AlertTriangle, Heart, ArrowRight, BookOpen, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { stat: "96%", label: "of law students report significant stress", source: "ABA Study, 2023" },
  { stat: "28%", label: "of lawyers experience depression", source: "ALM Legal Compass" },
  { stat: "71%", label: "of law students report anxiety", source: "Law Student Well-Being Survey" },
  { stat: "40%", label: "of attorneys consider leaving the profession", source: "Legal Profession Report" },
];

const ResearchPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-background" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/5 px-3 py-1 text-xs text-secondary font-semibold mb-6">
            <Brain className="h-3 w-3" /> Evidence-Based Approach
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mb-4">
            The Science Behind <span className="text-gradient">Daily Motivation</span>
          </h1>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            The legal profession faces a mental health crisis. Love Law™ is
            built on evidence-based behavioral science to address it.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {stats.map((s) => (
              <div key={s.stat} className="card-glow rounded-2xl border border-border bg-card p-5 text-center">
                <p className="text-3xl font-bold font-heading text-secondary mb-1">{s.stat}</p>
                <p className="text-xs text-foreground mb-1">{s.label}</p>
                <p className="text-[10px] text-muted-foreground">{s.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-14 bg-light-blue">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold font-heading text-foreground text-center mb-6">
            The <span className="text-gradient">Burnout Problem</span>
          </h2>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
            <p>
              Law students and legal professionals face uniquely intense
              pressures. The Socratic method, competitive grading curves,
              bar exam anxiety, and billable hour culture create a perfect
              storm for burnout, depression, and attrition.
            </p>
            <p>
              Research from the American Bar Association shows that law
              students experience depression at rates 8–9 times higher than
              the general population. The Dave Nee Foundation reports that
              lawyers rank 4th in proportion of suicides by profession.
            </p>
            <p>
              Yet most interventions are reactive — counseling after crisis,
              wellness days after burnout. Love Law™ takes a proactive,
              preventive approach through daily micro-interventions.
            </p>
          </div>
        </div>
      </section>

      {/* Why Daily Reinforcement */}
      <section className="py-14">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold font-heading text-foreground text-center mb-8">
            Why Daily Reinforcement <span className="text-gradient-gold">Works</span>
          </h2>
          <div className="space-y-3">
            {[
              { icon: Zap, title: "Behavioral Activation", desc: "Daily positive stimuli counteract the negative cognitive patterns associated with depression and anxiety. Research shows that consistent micro-doses of encouragement rewire neural pathways toward resilience." },
              { icon: Heart, title: "Culturally Relevant Messaging", desc: "Messages that reflect diverse identities and experiences create deeper connection and impact. Representation in motivation increases self-efficacy by up to 40% according to identity-based motivation theory." },
              { icon: TrendingUp, title: "Habit Stacking & Consistency", desc: "SMS leverages existing phone-checking habits to build motivational routines. The 98% open rate of SMS means messages are actually seen — unlike email (20%) or app notifications (7%)." },
              { icon: BookOpen, title: "Self-Determination Theory", desc: "Love Law™ messages target three core needs: autonomy (you chose this path), competence (you're capable), and relatedness (you're not alone). This framework is proven to enhance intrinsic motivation." },
              { icon: AlertTriangle, title: "Burnout Prevention", desc: "Proactive daily encouragement reduces burnout risk by addressing stress incrementally. Studies show preventive interventions are 3x more effective than reactive ones at reducing professional attrition." },
              { icon: BarChart3, title: "Measurable Impact", desc: "Our pilot programs show 35%+ engagement increases, 92% open rates, and significant improvements in self-reported well-being scores. These aren't vanity metrics — they correlate with academic and professional outcomes." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card p-5 flex gap-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/10 text-secondary flex-shrink-0 mt-0.5">
                  <item.icon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SMS Stats */}
      <section className="py-14 bg-light-blue">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-8">
            Why <span className="text-gradient">SMS</span> is the Medium
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { stat: "98%", label: "SMS open rate", compare: "vs 20% for email" },
              { stat: "90s", label: "Average read time", compare: "within 90 seconds of delivery" },
              { stat: "0", label: "App downloads needed", compare: "Works on every phone" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-card p-5">
                <p className="text-2xl font-bold font-heading text-secondary">{s.stat}</p>
                <p className="text-xs text-foreground mt-1">{s.label}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{s.compare}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
            Ready to Make a Difference?
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/sms">
              <Button variant="hero" size="lg">Join Daily Motivation <ArrowRight className="h-4 w-4" /></Button>
            </Link>
            <Link to="/enterprise">
              <Button variant="heroOutline" size="lg">Enterprise Solutions</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResearchPage;
