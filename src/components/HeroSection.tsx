import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-grid pt-16">
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="space-y-8 animate-slide-in-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm text-secondary">
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
            Legal Motivation Platform
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading leading-tight">
            From 1L to Esq. —{" "}
            <span className="text-gradient">Stay Motivated</span>{" "}
            Every Step.
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Love Law™ delivers daily motivation, legal lifestyle products, and
            culturally relevant inspiration for the next generation of attorneys.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="https://shoplovelaw.com" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg">Shop Now</Button>
            </a>
            <a href="#pricing">
              <Button variant="heroOutline" size="lg">Join Daily Motivation</Button>
            </a>
          </div>

          {/* SMS CTA */}
          <div className="relative rounded-xl border border-accent/30 bg-accent/5 p-5 max-w-md">
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

        {/* Right */}
        <div className="relative flex justify-center animate-slide-in-right">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-[60px]" />
            <img
              src={heroPhone}
              alt="Love Law SMS motivation messages on a smartphone"
              width={600}
              height={800}
              className="relative z-10 max-w-sm lg:max-w-md animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
