import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import iphoneMockup from "@/assets/iphone-mockup.png";

const messages = [
  { text: "You belong in this profession.", time: "8:01 AM" },
  { text: "Your future clients need you. Keep going.", time: "8:02 AM" },
  { text: "Today's effort becomes tomorrow's success.", time: "8:03 AM" },
  { text: "Bar prep is hard. You are harder.", time: "8:04 AM" },
  { text: "You didn't come this far to quit.", time: "8:05 AM" },
];

const HeroSection = () => {
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    if (visibleCount >= messages.length) return;
    const timer = setTimeout(() => setVisibleCount((c) => c + 1), 2200);
    return () => clearTimeout(timer);
  }, [visibleCount]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/5" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[160px]" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left */}
        <div className="space-y-6 animate-slide-in-left max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs text-accent font-semibold tracking-wide uppercase">
            Daily SMS Motivation Platform
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold font-heading leading-[1.1] text-foreground">
            Law School Is Hard.{" "}
            <br className="hidden sm:block" />
            Burnout Is Real.{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient">We Keep You Going.</span>
          </h1>

          <p className="text-base text-muted-foreground leading-relaxed max-w-md">
            Daily motivation, mindset support, and legal inspiration delivered
            directly to your phone.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link to="/sms">
              <Button variant="hero" size="lg">
                Get Daily Motivation <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="sms:+17173666462&body=LAW">
              <Button variant="heroOutline" size="lg">Get Sample Message</Button>
            </a>
          </div>

          {/* SMS Box */}
          <div className="rounded-xl border border-accent/20 bg-accent/5 p-4 max-w-sm">
            <p className="text-foreground font-heading text-base font-bold">
              📲 Text <span className="text-accent">LAW</span> to +1 717-366-6462
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Get a free sample instantly • No app required
            </p>
          </div>
        </div>

        {/* Right — iPhone with overlay messages */}
        <div className="relative flex justify-center animate-slide-in-right">
          <div className="relative w-[260px] sm:w-[300px]">
            {/* iPhone image */}
            <img
              src={iphoneMockup}
              alt="Love Law SMS on iPhone"
              className="w-full h-auto relative z-10"
              width={512}
              height={1024}
            />

            {/* Message overlay on top of phone screen */}
            <div className="absolute top-[18%] left-[12%] right-[8%] bottom-[22%] z-20 flex flex-col justify-start overflow-hidden rounded-2xl">
              {/* Screen header */}
              <div className="bg-card/90 backdrop-blur-sm px-3 py-2 border-b border-border/50">
                <p className="text-[10px] text-muted-foreground text-center">Messages</p>
                <p className="text-xs font-semibold text-foreground text-center">Love Law™</p>
              </div>

              {/* Messages */}
              <div className="flex-1 bg-background/90 backdrop-blur-sm px-3 py-3 space-y-2.5 overflow-hidden">
                {messages.slice(0, visibleCount).map((msg, i) => (
                  <div
                    key={msg.text}
                    className="animate-fade-up"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="bg-secondary/15 rounded-2xl rounded-tl-sm px-3 py-2 max-w-[92%]">
                      <p className="text-[11px] text-foreground leading-snug">{msg.text}</p>
                    </div>
                    <p className="text-[8px] text-muted-foreground mt-0.5 pl-1">
                      {msg.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Glow */}
            <div className="absolute -inset-8 bg-secondary/8 rounded-full blur-[60px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
