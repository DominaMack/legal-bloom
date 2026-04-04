import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCtaBar from "@/components/StickyCtaBar";
import { Button } from "@/components/ui/button";
import { Check, GraduationCap, BookOpen, Scale, Building, Users, Zap, Brain, Smartphone, Clock, BarChart3, Shield, ArrowRight, TrendingUp, Target } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  { icon: Users, title: "Increase Student Engagement" },
  { icon: BarChart3, title: "Support Bar Exam Readiness" },
  { icon: Shield, title: "Boost Retention" },
  { icon: Brain, title: "Improve Mental Resilience" },
  { icon: Smartphone, title: "No App Required" },
  { icon: Clock, title: "Easy Implementation (48 hrs)" },
];

const segments = [
  { icon: GraduationCap, title: "Law Schools", items: ["1L onboarding", "Academic support", "Bar prep reinforcement"] },
  { icon: BookOpen, title: "Bar Prep Programs", items: ["Daily accountability", "Motivation during study period"] },
  { icon: Scale, title: "Law Firms", items: ["Associate wellness", "Burnout prevention", "Culture building"] },
  { icon: Building, title: "Legal Organizations", items: ["Member engagement", "Professional development"] },
];

const pricing = [
  { title: "Small", users: "Up to 250 users", price: "$499", setup: "$500", features: ["Daily SMS messages", "Basic customization", "Email support", "Monthly reports"], popular: false },
  { title: "Mid-Size", users: "Up to 1,000 users", price: "$1,499", setup: "$1,000", features: ["Everything in Small", "Custom message tracks", "Priority support", "Role-based messaging", "Quarterly reviews"], popular: true },
  { title: "Enterprise", users: "Up to 5,000+ users", price: "$3,500", setup: "$2,500", features: ["Full customization", "Dedicated support", "Analytics dashboard", "Multi-campus support", "Custom integrations"], popular: false },
];

const Enterprise = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-background" />
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6 animate-slide-in-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/5 px-3 py-1 text-xs text-secondary font-semibold">
              <Zap className="h-3 w-3" /> Enterprise Solutions
            </div>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold font-heading leading-tight text-foreground">
              Increase Bar Pass Rates.{" "}
              <span className="text-gradient">Reduce Burnout. Improve Retention.</span>
            </h1>
            <p className="text-base text-muted-foreground max-w-lg">
              Love Law™ Enterprise delivers daily motivation and engagement
              through SMS to improve student success, retention, and bar
              readiness.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="hero" size="lg">Schedule a Demo</Button>
              <Button variant="heroOutline" size="lg">Request Pricing</Button>
              {/* <!-- GHL CALENDAR --> */}
            </div>
            <p className="text-xs text-muted-foreground flex items-center gap-2">
              📲 <span className="text-accent font-semibold">90%+</span> open rates with SMS engagement
            </p>
          </div>

          {/* Enhanced Dashboard */}
          <div className="relative animate-slide-in-right">
            <div className="rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
              {/* Dashboard header */}
              <div className="px-5 py-3 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive" />
                  <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary" />
                </div>
                <span className="text-[10px] text-muted-foreground">Love Law™ Enterprise Dashboard</span>
              </div>

              <div className="p-5 space-y-4">
                {/* Metrics row */}
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { label: "Active Users", value: "847", change: "+12%", up: true },
                    { label: "Open Rate", value: "92.4%", change: "+3.1%", up: true },
                    { label: "Consistency", value: "87/100", change: "+8", up: true },
                    { label: "Engagement", value: "94.2%", change: "+5.7%", up: true },
                  ].map((m) => (
                    <div key={m.label} className="rounded-lg border border-border bg-muted/30 p-2.5">
                      <p className="text-[9px] text-muted-foreground">{m.label}</p>
                      <p className="text-sm font-bold text-secondary">{m.value}</p>
                      <p className="text-[9px] text-secondary">▲ {m.change}</p>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="rounded-lg border border-border bg-muted/30 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[10px] text-muted-foreground">Engagement Trend — 30 Days</p>
                    <div className="flex gap-3 text-[9px] text-muted-foreground">
                      <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Open Rate</span>
                      <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> Participation</span>
                    </div>
                  </div>
                  <div className="flex items-end gap-[3px] h-20">
                    {[40, 55, 45, 60, 50, 65, 70, 60, 75, 80, 70, 85, 90, 80, 92, 88, 91, 85, 93, 89].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col gap-[1px]">
                        <div className="bg-secondary/60 rounded-t" style={{ height: `${h}%` }} />
                        <div className="bg-accent/40 rounded-t" style={{ height: `${h * 0.7}%` }} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cohort breakdown */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-lg border border-border bg-muted/30 p-2.5">
                    <p className="text-[9px] text-muted-foreground mb-1">Cohort Breakdown</p>
                    <div className="space-y-1.5">
                      {[
                        { label: "1L Students", pct: 92 },
                        { label: "2L Students", pct: 87 },
                        { label: "3L Students", pct: 78 },
                        { label: "Bar Prep", pct: 95 },
                      ].map((c) => (
                        <div key={c.label} className="flex items-center gap-2">
                          <p className="text-[8px] text-foreground w-14 flex-shrink-0">{c.label}</p>
                          <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
                            <div className="h-full bg-secondary rounded-full" style={{ width: `${c.pct}%` }} />
                          </div>
                          <p className="text-[8px] text-muted-foreground w-6">{c.pct}%</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-lg border border-border bg-muted/30 p-2.5">
                    <p className="text-[9px] text-muted-foreground mb-1">Well-Being Index</p>
                    <div className="flex items-center justify-center h-16">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-accent">8.4</p>
                        <p className="text-[8px] text-muted-foreground">out of 10</p>
                        <p className="text-[8px] text-secondary">▲ +1.2 vs baseline</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-[9px] text-muted-foreground text-center pb-3 italic">
                Sample Dashboard — Actual results may vary
              </p>
            </div>
            <div className="absolute -inset-4 bg-secondary/5 rounded-3xl blur-[40px] -z-10" />
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-light-blue">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold font-heading text-foreground">
              Case Study: <span className="text-gradient-gold">HBCU Law Program Pilot</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { stat: "+35%", label: "Student engagement increase" },
              { stat: "92%", label: "Average SMS open rate" },
              { stat: "4.8/5", label: "Student satisfaction score" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-accent/20 bg-card p-6 text-center">
                <p className="text-3xl font-bold font-heading text-accent">{s.stat}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground max-w-lg mx-auto">
            A 90-day pilot with 200+ students showed measurable improvements in
            daily engagement, study consistency, and reported well-being.
          </p>
          <div className="text-center mt-6">
            <Link to="/pilot">
              <Button variant="hero">Start a Pilot Program <ArrowRight className="h-4 w-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl lg:text-3xl font-bold font-heading text-foreground mb-8">
            The Challenge Facing <span className="text-gradient">Legal Institutions</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {["Student burnout and disengagement", "Bar exam stress and low consistency", "Lack of daily motivation systems", "Limited scalable student support"].map((p) => (
              <div key={p} className="rounded-xl border border-border bg-card p-4 text-left flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-destructive flex-shrink-0" />
                <p className="text-sm text-muted-foreground">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-light-blue">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold font-heading text-center text-foreground mb-10">
            Built for <span className="text-gradient-gold">Impact</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {benefits.map((b) => (
              <div key={b.title} className="card-glow rounded-xl border border-border bg-card p-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/10 text-secondary flex-shrink-0">
                  <b.icon className="h-4 w-4" />
                </div>
                <p className="font-semibold text-foreground text-sm">{b.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold font-heading text-center text-foreground mb-10">
            Who It's <span className="text-gradient">For</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {segments.map((s) => (
              <div key={s.title} className="card-glow rounded-2xl border border-border bg-card p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/10 text-secondary mb-3">
                  <s.icon className="h-4 w-4" />
                </div>
                <h3 className="font-bold font-heading text-foreground text-sm mb-2">{s.title}</h3>
                <ul className="space-y-1.5">
                  {s.items.map((item) => (
                    <li key={item} className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <ArrowRight className="h-2.5 w-2.5 text-secondary flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-light-blue">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold font-heading text-center text-foreground mb-3">
            Enterprise <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-center text-sm text-muted-foreground mb-10">
            Simple, transparent pricing for institutions.
          </p>

          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto items-stretch">
            {pricing.map((plan) => (
              <div
                key={plan.title}
                className={`card-glow rounded-2xl border p-7 flex flex-col ${
                  plan.popular
                    ? "border-secondary/50 bg-secondary/5 md:scale-105 relative shadow-lg"
                    : "border-border bg-card"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-3 py-0.5 text-[10px] font-semibold text-secondary-foreground">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-bold font-heading text-foreground">{plan.title}</h3>
                <p className="text-xs text-muted-foreground mb-1">{plan.users}</p>
                <p className="text-3xl font-bold font-heading text-foreground mb-1">
                  {plan.price}
                  <span className="text-sm font-normal text-muted-foreground">/month</span>
                </p>
                <p className="text-xs text-muted-foreground mb-4">Setup: {plan.setup}</p>
                <ul className="space-y-2 my-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Check className="h-3.5 w-3.5 text-secondary flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.popular ? "hero" : "heroOutline"} className="w-full">
                  Get Started
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-sm mx-auto text-center rounded-xl border border-accent/30 bg-accent/5 p-5 glow-gold">
            <p className="text-base font-heading font-bold text-foreground">
              Starting at just <span className="text-accent">$1–$2</span> per student/month
            </p>
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-8">
            Designed for <span className="text-gradient-gold">Impact</span>
          </h2>
          <div className="grid sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {[
              { icon: TrendingUp, stat: "+35%", label: "Engagement increase" },
              { icon: BarChart3, stat: "92%", label: "Average open rate" },
              { icon: Target, stat: "4.8/5", label: "Satisfaction score" },
              { icon: Clock, stat: "48hrs", label: "Time to launch" },
            ].map((r) => (
              <div key={r.label} className="rounded-xl border border-border bg-card p-5">
                <r.icon className="h-5 w-5 text-secondary mx-auto mb-2" />
                <p className="text-xl font-bold font-heading text-foreground">{r.stat}</p>
                <p className="text-[10px] text-muted-foreground">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="py-12 bg-light-blue">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/sample-report"><Button variant="heroOutline" size="sm">View Sample Report</Button></Link>
            <Link to="/pilot"><Button variant="heroOutline" size="sm">Start a Pilot</Button></Link>
            <Link to="/research"><Button variant="heroOutline" size="sm">View Research</Button></Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-accent/5" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl">
          <h2 className="text-2xl lg:text-4xl font-bold font-heading text-foreground mb-6">
            Let's Support Your Students — <span className="text-gradient">Every Day.</span>
          </h2>
          <div className="flex justify-center gap-3 flex-wrap">
            <Button variant="hero" size="lg">Schedule a Demo</Button>
            <Link to="/pilot">
              <Button variant="gold" size="lg">Start a Pilot Program</Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="pb-16"><Footer /></div>
      <StickyCtaBar />
    </div>
  );
};

export default Enterprise;
