import { Button } from "@/components/ui/button";
import { Smartphone, ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const messages = [
  "You didn't come this far to quit.",
  "Bar prep is hard. You are harder.",
  "You belong in this profession.",
  "Your future clients need you. Keep going.",
  "Today's effort is tomorrow's success.",
];

const HeroSection = () => {
  const [currentMsg, setCurrentMsg] = useState(0);
  const [displayedMessages, setDisplayedMessages] = useState<string[]>([messages[0]]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMsg((prev) => {
        const next = (prev + 1) % messages.length;
        setDisplayedMessages((msgs) => {
          const updated = [...msgs, messages[next]];
          return updated.slice(-3);
        });
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 pb-24">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left */}
        <div className="space-y-8 animate-slide-in-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/5 px-4 py-1.5 text-sm text-secondary font-medium">
            <Sparkles className="h-3.5 w-3.5" />
            Legal Motivation Platform
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading leading-[1.1] text-foreground">
            From 1L to Esq. —{" "}
            <span className="text-gradient">Stay Motivated</span>{" "}
            Every Step.
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Daily motivation, legal lifestyle products, and support for law students,
            bar candidates, attorneys, and institutions.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="/sms">
              <Button variant="hero" size="lg">
                Join Daily Motivation <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a href="sms:+17173666462&body=LAW">
              <Button variant="heroOutline" size="lg">Get Free Sample</Button>
            </a>
            <a href="/shop">
              <Button variant="outline" size="lg">Shop Merch</Button>
            </a>
          </div>

          {/* SMS CTA */}
          <div className="relative rounded-2xl border border-accent/30 bg-accent/5 p-5 max-w-md">
            <div className="flex items-center gap-3 mb-2">
              <Smartphone className="h-5 w-5 text-accent" />
              <span className="text-sm font-semibold text-accent">SMS Motivation</span>
            </div>
            <p className="text-foreground font-heading text-lg font-bold">
              📲 Text <span className="text-accent">LAW</span> to +1 717-366-6462
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Get a free sample message instantly
            </p>
          </div>
        </div>

        {/* Right — Phone mockup with real messages */}
        <div className="relative flex justify-center animate-slide-in-right">
          <div className="relative w-[280px] md:w-[320px]">
            {/* Phone frame */}
            <div className="rounded-[2.5rem] border-4 border-foreground/10 bg-card shadow-2xl p-3 pb-6">
              {/* Status bar */}
              <div className="flex items-center justify-between px-4 pt-2 pb-3">
                <span className="text-xs text-muted-foreground font-medium">9:41</span>
                <div className="flex gap-1">
                  <div className="w-4 h-2 rounded-sm bg-muted-foreground/30" />
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                </div>
              </div>

              {/* Header */}
              <div className="text-center pb-3 border-b border-border">
                <p className="text-xs text-muted-foreground">Messages</p>
                <p className="text-sm font-semibold text-foreground">Love Law™</p>
              </div>

              {/* Messages */}
              <div className="space-y-3 pt-4 px-1 min-h-[280px]">
                {displayedMessages.map((msg, i) => (
                  <div
                    key={`${msg}-${i}`}
                    className="animate-fade-up"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="bg-secondary/10 rounded-2xl rounded-tl-md px-4 py-3 max-w-[90%]">
                      <p className="text-sm text-foreground leading-relaxed">{msg}</p>
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-1 pl-1">
                      Love Law™ • Just now
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Glow behind phone */}
            <div className="absolute -inset-4 bg-secondary/10 rounded-[3rem] blur-[40px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
