import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";

const SmsCta = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl">
        <div className="inline-flex items-center gap-2 mb-6">
          <Smartphone className="h-5 w-5 text-accent" />
          <span className="text-sm font-semibold text-accent">SMS Motivation</span>
        </div>

        <h2 className="text-3xl lg:text-5xl font-bold font-heading mb-4">
          Get Daily Doses of{" "}
          <span className="text-gradient-gold">Justice™</span>
        </h2>

        <p className="text-muted-foreground text-lg mb-8">
          Motivation, encouragement, and legal inspiration — delivered daily.
        </p>

        <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 mb-8 glow-gold">
          <p className="text-2xl font-heading font-bold text-foreground">
            📲 Text <span className="text-accent">LAW</span> to +1 717-366-6462
          </p>
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          <Button variant="hero" size="lg">Join Now</Button>
          <Button variant="heroOutline" size="lg">Get Sample Message</Button>
        </div>
      </div>
    </section>
  );
};

export default SmsCta;
