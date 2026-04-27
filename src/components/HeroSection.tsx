import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { pickRandomHeroMedia } from "@/lib/hero-media";

const messages = [
  { text: "Don't let imposter syndrome win today.", time: "8:02 AM" },
  { text: "You've survived 100% of your hardest days.", time: "8:03 AM" },
  { text: "The bar exam doesn't define you - your persistence does.", time: "8:04 AM" },
  { text: "You belong in this profession.", time: "8:05 AM" },
];

const HeroSection = () => {
  const [visibleCount, setVisibleCount] = useState(1);
  const [heroVideo] = useState(() => pickRandomHeroMedia());

  useEffect(() => {
    if (visibleCount >= messages.length) return;
    const timer = setTimeout(() => setVisibleCount((c) => c + 1), 2200);
    return () => clearTimeout(timer);
  }, [visibleCount]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16">
      <div className="absolute inset-0">
        <video
          key={heroVideo.id}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={heroVideo.poster}
        >
          <source src={heroVideo.src} type="video/mp4" />
        </video>
      </div>

      {/* Background overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.2),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.84)_42%,rgba(255,255,255,0.28)_100%)] dark:bg-[linear-gradient(115deg,rgba(5,10,18,0.9)_0%,rgba(5,10,18,0.72)_45%,rgba(5,10,18,0.45)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/35 via-background/25 to-background/80 dark:from-background/25 dark:via-background/35 dark:to-background/85" />
      <div className="absolute top-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[160px]" />
      <div className="absolute bottom-1/4 left-1/3 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[120px]" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left */}
        <div className="space-y-6 animate-slide-in-left max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-xs text-accent font-semibold tracking-wide uppercase">
            Daily SMS Motivation Platform
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold font-heading leading-[1.1] text-foreground">
            From 1L to Esq. —{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient">Stay Motivated Every Step.</span>
          </h1>

          <p className="text-base text-muted-foreground leading-relaxed max-w-md">
            Daily motivation, legal lifestyle products, and support for law students, bar candidates, attorneys, and institutions.
          </p>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/75 px-3 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-white/90">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Now playing: {heroVideo.title}
          </div>

          <div className="flex flex-wrap gap-3 sm:flex-nowrap sm:items-center">
            <Link to="/sms">
              <Button variant="hero" size="lg">
                Join Daily Motivation <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="sms:+15513685683&body=LAW">
              <Button variant="heroOutline" size="lg">
                Try a Free Sample <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <Link to="/shop">
              <Button variant="gold" size="lg">
                <ShoppingBag className="h-4 w-4" /> Shop Merch
              </Button>
            </Link>
          </div>

          <p className="text-[11px] leading-relaxed text-muted-foreground max-w-lg">
            By providing your phone number, you agree to receive SMS messages from Love Law.
            Message frequency may vary. Message & data rates may apply. Reply STOP to opt out.
          </p>

          {/* SMS Box */}
          <div className="rounded-xl border border-accent/20 bg-accent/5 p-4 max-w-sm">
            <p className="text-foreground font-heading text-base font-bold">
              📲 Text <span className="text-accent">LAW</span> to{" "}
              <span className="inline-flex items-center rounded-full border border-accent/30 bg-white/80 px-3 py-1 text-[0.95em] font-extrabold tracking-[0.08em] text-foreground shadow-sm">
                <span className="text-foreground">+1 551-</span>
                <span className="text-accent">LoveLaw</span>
              </span>
              {" "}for your Daily Dose of Justice™
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Text STUDENT, BAR, or ATTORNEY to personalize your motivation.
            </p>
          </div>
        </div>

        {/* Right — iPhone-style SMS mockup */}
        <div className="relative flex justify-center animate-slide-in-right">
          <div className="relative w-[290px] sm:w-[350px] lg:w-[390px]">
            <div className="absolute inset-x-[8%] top-[5%] h-8 rounded-full bg-black/90 blur-sm" />
            <div className="relative rounded-[2.5rem] border border-white/60 bg-white/90 p-3 shadow-[0_30px_90px_rgba(31,78,173,0.18)] backdrop-blur-xl">
              <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-[#fbfbfd]">
                <div className="flex items-center justify-between px-6 pt-5 text-[11px] font-medium text-slate-400">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                  </div>
                </div>

                <div className="border-b border-slate-100 px-6 pb-4 pt-3 text-center">
                  <p className="text-sm text-slate-400">Messages</p>
                  <p className="text-[1.65rem] font-heading font-bold leading-none text-slate-800">
                    Love Law™
                  </p>
                </div>

                <div className="space-y-4 bg-white px-5 pb-6 pt-5">
                  <p className="text-[11px] text-slate-300">Love Law™ • 8:02 AM</p>

                  <div className="space-y-3">
                    {messages.slice(0, visibleCount).map((msg, i) => (
                      <div
                        key={msg.text}
                        className="animate-fade-up"
                        style={{ animationDelay: `${i * 0.12}s` }}
                      >
                        <div className="rounded-[1.35rem] rounded-tl-md bg-secondary/15 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
                          <p className="text-[15px] leading-[1.35] text-slate-700">{msg.text}</p>
                        </div>
                        <p className="mt-1.5 pl-1 text-[11px] text-slate-400">
                          Love Law™ • {msg.time}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <div className="rounded-full bg-slate-100 px-4 py-3 text-sm text-slate-300">
                      iMessage
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute -bottom-10 right-0 h-40 w-40 rounded-full bg-secondary/10 blur-3xl" />
            <div className="absolute inset-x-10 bottom-[-22px] h-12 rounded-full bg-secondary/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
