import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Users, FileText, ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

const SampleReportPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="pt-24 pb-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-background" />
      <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
        <h1 className="text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6">
          See a <span className="text-gradient">Sample Report</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          See the kind of insights Love Law™ Enterprise delivers to institutions.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="hero" size="lg"><Download className="h-4 w-4" /> Download Report</Button>
          <Link to="/enterprise"><Button variant="heroOutline" size="lg">Request Proposal</Button></Link>
          {/* <!-- REPORT DOWNLOAD --> */}
        </div>
      </div>
    </section>

    {/* Report Preview */}
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <h2 className="text-xl font-bold font-heading text-foreground mb-6 flex items-center gap-2">
            <FileText className="h-5 w-5 text-secondary" /> Executive Summary
          </h2>
          <p className="text-sm text-muted-foreground mb-8">
            This report summarizes the engagement metrics and outcomes from a 90-day Love Law™ Enterprise
            pilot program with a cohort of 200 law students.
          </p>

          <div className="grid sm:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Users, label: "Participants", value: "200" },
              { icon: BarChart3, label: "Avg Open Rate", value: "92%" },
              { icon: TrendingUp, label: "Engagement Increase", value: "+35%" },
              { icon: Users, label: "Satisfaction", value: "4.8/5" },
            ].map((m) => (
              <div key={m.label} className="rounded-xl border border-border bg-muted/30 p-4 text-center">
                <m.icon className="h-5 w-5 text-secondary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">{m.value}</p>
                <p className="text-xs text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold font-heading text-foreground mb-4">Cohort Breakdown</h3>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { label: "1L Students", engagement: "94%", count: "80" },
              { label: "2L Students", engagement: "91%", count: "70" },
              { label: "3L Students", engagement: "88%", count: "50" },
            ].map((c) => (
              <div key={c.label} className="rounded-xl border border-border p-4">
                <p className="text-sm font-semibold text-foreground">{c.label}</p>
                <p className="text-xs text-muted-foreground">{c.count} participants</p>
                <div className="mt-2 h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-secondary rounded-full" style={{ width: c.engagement }} />
                </div>
                <p className="text-xs text-muted-foreground mt-1">{c.engagement} engagement</p>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold font-heading text-foreground mb-4">Recommendations</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2"><span className="text-secondary">•</span> Expand program to full student body based on strong engagement metrics</li>
            <li className="flex gap-2"><span className="text-secondary">•</span> Introduce role-specific message tracks for bar prep students</li>
            <li className="flex gap-2"><span className="text-secondary">•</span> Add pre/post well-being assessments to measure mental health impact</li>
          </ul>

          <p className="text-xs text-muted-foreground mt-8 italic">Sample Report — Actual results may vary based on implementation and cohort size.</p>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="hero" size="lg"><Download className="h-4 w-4" /> Download Full Report</Button>
          <Link to="/enterprise"><Button variant="heroOutline" size="lg">Book Demo</Button></Link>
          {/* <!-- GHL FORM --> */}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default SampleReportPage;
