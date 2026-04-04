import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const scrollMessages = [
  "You belong in this profession.",
  "Today's discipline is tomorrow's freedom.",
  "Your future clients are counting on you.",
  "Don't let imposter syndrome win today.",
  "You've survived 100% of your hardest days.",
  "The bar exam doesn't define you — your persistence does.",
];

const SmsCta = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollY((prev) => prev + 1);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-accent/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl lg:text-4xl font-bold font-heading text-foreground mb-4">
              Get Daily Doses of{" "}
              <span className="text-gradient-gold">Justice™</span>
            </h2>

            <p className="text-muted-foreground mb-6">
              Motivation, encouragement, and legal inspiration — delivered daily.
            </p>

            {/* Why SMS Works */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { stat: "98%", label: "Open rate" },
                { stat: "0", label: "Apps required" },
                { stat: "< 3s", label: "Delivery time" },
                { stat: "Daily", label: "Habit building" },
              ].map((s) => (
                <div key={s.label} className="rounded-lg border border-border bg-card/50 p-3 text-center">
                  <p className="text-lg font-bold font-heading text-secondary">{s.stat}</p>
                  <p className="text-[10px] text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-accent/30 bg-accent/5 p-5 mb-6 glow-gold">
              <p className="text-xl font-heading font-bold text-foreground">
                📲 Text <span className="text-accent">LAW</span> to +1 717-366-6462
              </p>
            </div>

            <div className="flex justify-center lg:justify-start gap-3 flex-wrap">
              <Link to="/sms">
                <Button variant="hero" size="lg">Join Now <ArrowRight className="h-4 w-4" /></Button>
              </Link>
              <a href="sms:+17173666462&body=LAW">
                <Button variant="gold" size="lg">Get Sample Message</Button>
              </a>
            </div>
          </div>

          {/* Right — scrolling phone messages */}
          <div className="flex justify-center">
            <div className="w-[260px] rounded-[2.5rem] border-[3px] border-foreground/10 bg-card shadow-2xl p-3 pb-6 relative overflow-hidden">
              <div className="flex items-center justify-between px-3 pt-2 pb-2">
                <span className="text-[10px] text-muted-foreground font-medium">9:41</span>
                <div className="flex gap-1">
                  <div className="w-3 h-1.5 rounded-sm bg-muted-foreground/30" />
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                </div>
              </div>
              <div className="text-center pb-2 border-b border-border/50 mb-3">
                <p className="text-[10px] text-muted-foreground">Messages</p>
                <p className="text-xs font-semibold text-foreground">Love Law™</p>
              </div>

              <div className="h-[300px] overflow-hidden relative">
                <div
                  className="space-y-3 transition-transform duration-[60ms] ease-linear"
                  style={{ transform: `translateY(-${scrollY % 400}px)` }}
                >
                  {[...scrollMessages, ...scrollMessages, ...scrollMessages].map((msg, i) => (
                    <div key={i}>
                      <div className="bg-secondary/15 rounded-2xl rounded-tl-sm px-3 py-2.5 max-w-[92%]">
                        <p className="text-[11px] text-foreground leading-snug">{msg}</p>
                      </div>
                      <p className="text-[8px] text-muted-foreground mt-0.5 pl-1">
                        Love Law™ • 8:{String(i % 60).padStart(2, '0')} AM
                      </p>
                    </div>
                  ))}
                </div>
                {/* Fade edges */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-card to-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-card to-transparent z-10" />
              </div>

              <div className="absolute -inset-6 bg-secondary/8 rounded-full blur-[50px] -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmsCta;
