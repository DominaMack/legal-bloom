import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Scale, FileText, Users, ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const RealDisputePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-background" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/5 px-4 py-1.5 text-sm text-secondary font-medium mb-6">
            <Scale className="h-3.5 w-3.5" />
            Powered by The Real Dispute™
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6">
            Mediation & <span className="text-gradient">Arbitration Services</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Professional, culturally competent dispute resolution services for individuals,
            businesses, and organizations.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="hero" size="lg">Request Mediation <ArrowRight className="h-4 w-4" /></Button>
            <Button variant="heroOutline" size="lg">Learn More</Button>
            {/* <!-- REAL DISPUTE FORM --> */}
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Users, title: "Mediation", desc: "Facilitated negotiation to reach mutually beneficial agreements without litigation." },
              { icon: Scale, title: "Arbitration", desc: "Binding or non-binding arbitration for efficient, private dispute resolution." },
              { icon: FileText, title: "Dispute Resolution", desc: "Comprehensive dispute management services tailored to your unique situation." },
            ].map((service) => (
              <div key={service.title} className="card-glow rounded-2xl border border-border bg-card p-8 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold font-heading text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-8">Why Choose Us</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: Shield, label: "Confidential" },
              { icon: Clock, label: "Efficient" },
              { icon: CheckCircle, label: "Results-Driven" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <item.icon className="h-8 w-8 text-accent mx-auto mb-2" />
                <p className="text-sm font-semibold text-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RealDisputePage;
