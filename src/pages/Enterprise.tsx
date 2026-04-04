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
  { title: "Small", icon: "🏫", users: "Up to 250 users", price: "$499", setup: "$500", features: ["Daily SMS messages", "Basic customization", "Email support", "Monthly reports"], popular: false },
  { title: "Mid-Size", icon: "🏢", users: "Up to 1,000 users", price: "$1,499", setup: "$1,000", features: ["Everything in Small", "Custom message tracks", "Priority support", "Role-based messaging", "Quarterly reviews"], popular: true },
  { title: "Enterprise", icon: "🏛️", users: "Up to 5,000+ users", price: "$3,500", setup: "$2,500", features: ["Full customization", "Dedicated support", "Analytics dashboard", "Multi-campus support", "Custom integrations"], popular: false },
];

const dashboardMetrics = [
  { label: "Active Users", value: "847", change: "+12%", color: "text-secondary" },
  { label: "Open Rate", value: "92.4%", change: "+3.1%", color: "text-secondary" },
  { label: "Consistency Score", value: "87/100", change: "+8", color: "text-accent" },
  { label: "Engagement", value: "94.2%", change: "+5.7%", color: "text-secondary" },
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
            <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/5 px-4 py-1.5 text-sm text-secondary font-medium">
              <Zap className="h-3 w-3" /> Enterprise Solutions
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold font-heading leading-tight text-foreground">
              Support Your People.{" "}
              <span className="text-gradient">Strengthen Your Outcomes.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Love Law™ Enterprise delivers daily motivation and engagement through SMS
              to improve student success, retention, and bar readiness.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">Schedule a Demo</Button>
              <Button variant="heroOutline" size="lg">Request Pricing</Button>
              {/* <!-- GHL CALENDAR --> */}
            </div>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              📲 <span className="text-accent font-semibold">90%+</span> open rates with SMS engagement
            </p>
          </div>

          {/* Dashboard Preview */}
          <div className="relative animate-slide-in-right">
            <div className="rounded-2xl border border-border bg-card shadow-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-foreground">Enterprise Dashboard</h3>
                <span className="text-xs text-muted-foreground">Sample Data</span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {dashboardMetrics.map((m) => (
                  <div key={m.label} className="rounded-xl border border-border bg-muted/30 p-3">
                    <p className="text-xs text-muted-foreground">{m.label}</p>
                    <p className={`text-xl font-bold ${m.color}`}>{m.value}</p>
                    <p className="text-xs text-secondary">{m.change}</p>
                  </div>
                ))}
              </div>
              {/* Mini chart */}
              <div className="rounded-xl border border-border bg-muted/30 p-3">
                <p className="text-xs text-muted-foreground mb-2">Engagement Trend (30 days)</p>
                <div className="flex items-end gap-1 h-16">
                  {[40, 55, 45, 60, 50, 65, 70, 60, 75, 80, 70, 85, 90, 80, 92].map((h, i) => (
                    <div key={i} className="flex-1 bg-secondary/60 rounded-t" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <p className="text-[10px] text-muted-foreground mt-3 text-center italic">
                Sample Dashboard — Actual results may vary
              </p>
            </div>
            <div className="absolute -inset-4 bg-secondary/5 rounded-3xl blur-[40px] -z-10" />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 bg-light-blue">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mb-8">
            The Challenge Facing <span className="text-gradient">Legal Institutions</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {["Student burnout and disengagement", "Bar exam stress and low consistency", "Lack of daily motivation systems", "Limited scalable student support"].map((p) => (
              <div key={p} className="card-glow rounded-xl border border-border bg-card p-5 text-left flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-destructive flex-shrink-0" />
                <p className="text-sm text-muted-foreground">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mb-12">
            A Simple System That <span className="text-gradient">Works Daily</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Enroll Students", desc: "Easy opt-in compliant onboarding" },
              { step: "02", title: "Send Daily Motivation via SMS", desc: "Automated, culturally relevant messages" },
              { step: "03", title: "Improve Confidence + Outcomes", desc: "Measurable impact on engagement" },
            ].map((s, i) => (
              <div key={s.step} className="relative">
                {i < 2 && <div className="hidden md:block absolute top-8 left-[60%] w-full h-px bg-gradient-to-r from-secondary/50 to-transparent" />}
                <div className="card-glow rounded-2xl border border-border bg-card p-8 shadow-sm">
                  <div className="text-xs font-mono text-accent mb-3">{s.step}</div>
                  <h3 className="font-bold font-heading text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-light-blue">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-center text-foreground mb-12">
            Built for <span className="text-gradient-gold">Impact</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((b) => (
              <div key={b.title} className="card-glow rounded-xl border border-border bg-card p-6 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary flex-shrink-0">
                  <b.icon className="h-5 w-5" />
                </div>
                <p className="font-semibold text-foreground text-sm">{b.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-center text-foreground mb-12">
            Who It's <span className="text-gradient">For</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {segments.map((s) => (
              <div key={s.title} className="card-glow rounded-2xl border border-border bg-card p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary mb-4">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold font-heading text-foreground mb-3">{s.title}</h3>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                      <ArrowRight className="h-3 w-3 text-secondary flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-light-blue">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-center text-foreground mb-4">
            Enterprise <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">Simple, transparent pricing for institutions.</p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
            {pricing.map((plan) => (
              <div key={plan.title} className={`card-glow rounded-2xl border p-8 flex flex-col ${plan.popular ? "border-secondary/50 bg-secondary/5 scale-105 relative shadow-lg" : "border-border bg-card"}`}>
                {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-4 py-1 text-xs font-semibold text-secondary-foreground">Most Popular</div>}
                <div className="text-3xl mb-2">{plan.icon}</div>
                <h3 className="text-lg font-bold font-heading text-foreground">{plan.title}</h3>
                <p className="text-xs text-muted-foreground mb-1">{plan.users}</p>
                <p className="text-3xl font-bold font-heading text-foreground mb-1">{plan.price}<span className="text-sm font-normal text-muted-foreground">/month</span></p>
                <p className="text-xs text-muted-foreground mb-4">Setup: {plan.setup}</p>
                <ul className="space-y-2 my-4 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground"><Check className="h-4 w-4 text-secondary flex-shrink-0" />{f}</li>
                  ))}
                </ul>
                <Button variant={plan.popular ? "hero" : "heroOutline"} className="w-full">Get Started</Button>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-md mx-auto text-center rounded-2xl border border-accent/30 bg-accent/5 p-6 glow-gold">
            <p className="text-lg font-heading font-bold text-foreground">
              Starting at just <span className="text-accent">$1–$2</span> per student per month
            </p>
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-heading text-foreground mb-8">Designed for <span className="text-gradient-gold">Impact</span></h2>
          <div className="grid sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: TrendingUp, stat: "+35%", label: "Engagement increase" },
              { icon: BarChart3, stat: "92%", label: "Average open rate" },
              { icon: Target, stat: "4.8/5", label: "Satisfaction score" },
              { icon: Clock, stat: "48hrs", label: "Time to launch" },
            ].map((r) => (
              <div key={r.label} className="rounded-2xl border border-border bg-card p-6">
                <r.icon className="h-6 w-6 text-secondary mx-auto mb-2" />
                <p className="text-2xl font-bold font-heading text-foreground">{r.stat}</p>
                <p className="text-xs text-muted-foreground">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/sample-report"><Button variant="heroOutline">View Sample Report</Button></Link>
            <Link to="/pilot"><Button variant="heroOutline">Start a Pilot</Button></Link>
            <Link to="/research"><Button variant="heroOutline">View Research</Button></Link>
          </div>
        </div>
      </section>

      {/* Cultural Impact */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mb-6">
            Built for the Next Generation of <span className="text-gradient-gold">Legal Leaders</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Love Law™ centers representation, motivation, and identity in the legal
            profession. Our platform isn't just a messaging tool — it's a commitment to
            helping every student and attorney feel supported and seen.
          </p>
        </div>
      </section>

      {/* Implementation */}
      <section className="py-24 bg-light-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mb-12">
            Easy to <span className="text-gradient">Launch</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { step: "1", title: "Provide student list", desc: "Opt-in compliant" },
              { step: "2", title: "Activate messaging", desc: "We handle the setup" },
              { step: "3", title: "Students receive messages", desc: "Daily motivation begins" },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary font-bold font-heading text-lg">{s.step}</div>
                <h3 className="font-bold font-heading text-foreground mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-accent font-semibold">⏱ Live in 24–48 hours</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-accent/5" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl">
          <h2 className="text-3xl lg:text-5xl font-bold font-heading text-foreground mb-6">
            Let's Support Your Students — <span className="text-gradient">Every Day.</span>
          </h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button variant="hero" size="lg">Schedule a Demo</Button>
            <Link to="/pilot"><Button variant="gold" size="lg">Start a Pilot Program</Button></Link>
          </div>
        </div>
      </section>

      <div className="pb-16"><Footer /></div>
      <StickyCtaBar />
    </div>
  );
};

export default Enterprise;
