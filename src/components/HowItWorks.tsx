import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const steps = [
  { num: "01", title: "Join", desc: "Text LAW or subscribe online" },
  { num: "02", title: "Receive", desc: "Daily SMS messages delivered every morning" },
  { num: "03", title: "Transform", desc: "Build consistency, confidence, and mental resilience" },
];

const HowItWorks = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-2xl lg:text-3xl font-bold font-heading text-foreground">
            How Love Law <span className="text-gradient">Works</span>
          </h2>
        </div>

        {/* Horizontal Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative flex items-start justify-between">
            {/* Connecting line */}
            <div className="absolute top-4 left-[16%] right-[16%] h-px bg-gradient-to-r from-secondary/40 via-secondary/60 to-secondary/40 hidden md:block" />

            {steps.map((step, i) => (
              <div key={step.num} className="relative flex flex-col items-center text-center flex-1 px-2">
                {/* Glowing node */}
                <div className="relative mb-5">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center relative z-10">
                    <div className="w-3 h-3 rounded-full bg-secondary animate-glow-pulse" />
                  </div>
                  <div className="absolute -inset-2 bg-secondary/10 rounded-full blur-md" />
                </div>

                <span className="text-[10px] font-mono text-accent tracking-widest mb-2">{step.num}</span>
                <h3 className="text-sm font-bold font-heading text-foreground mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-[160px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="sms:+15513685683&body=LAW">
            <Button variant="hero" size="lg">
              Start Your Daily Motivation <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
