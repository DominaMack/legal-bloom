import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import diverseImg from "@/assets/diverse-lawyers.jpg";

const LifestyleSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-2 bg-secondary/10 rounded-3xl blur-[30px]" />
            <img
              src={diverseImg}
              alt="Diverse group of law professionals in a modern office"
              className="relative z-10 rounded-2xl w-full object-cover aspect-[4/3] shadow-lg"
              loading="lazy"
              width={1280}
              height={720}
            />
          </div>
          <div className="space-y-5">
            <h2 className="text-2xl lg:text-3xl font-bold font-heading text-foreground">
              You Belong in This{" "}
              <span className="text-gradient-gold">Profession.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Love Law™ was born from the belief that every law student, every
              bar candidate, and every attorney deserves to feel motivated,
              represented, and supported — every single day.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              We combine culturally relevant messaging, premium lifestyle
              products, and institutional support to create a movement that goes
              beyond motivation — it builds identity, confidence, and community.
            </p>
            <Link to="/research">
              <Button variant="heroOutline">
                Learn More <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
