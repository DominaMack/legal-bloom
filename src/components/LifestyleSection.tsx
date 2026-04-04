import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import lifestyleImg from "@/assets/lifestyle.jpg";

const LifestyleSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-2 bg-secondary/10 rounded-3xl blur-[30px]" />
            <img src={lifestyleImg} alt="Diverse law professionals" className="relative z-10 rounded-2xl w-full object-cover aspect-[4/3] shadow-lg" />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground">You Belong in This <span className="text-gradient-gold">Profession.</span></h2>
            <p className="text-muted-foreground leading-relaxed">Love Law™ was born from the belief that every law student, every bar candidate, and every attorney deserves to feel motivated, represented, and supported — every single day.</p>
            <p className="text-muted-foreground leading-relaxed">We combine culturally relevant messaging, premium lifestyle products, and institutional support to create a movement that goes beyond motivation — it builds identity, confidence, and community.</p>
            <Link to="/research"><Button variant="heroOutline">Learn More <ArrowRight className="h-4 w-4" /></Button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
