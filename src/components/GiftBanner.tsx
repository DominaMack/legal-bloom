import { Button } from "@/components/ui/button";
import { Gift, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const GiftBanner = () => (
  <section className="py-16 bg-light-blue">
    <div className="container mx-auto px-4 text-center max-w-2xl">
      <Gift className="h-8 w-8 text-accent mx-auto mb-4" />
      <h2 className="text-2xl lg:text-3xl font-bold font-heading text-foreground mb-3">
        Give the Gift of <span className="text-gradient-gold">Motivation</span>
      </h2>
      <p className="text-muted-foreground mb-6">
        Gift cards and subscriptions — the perfect gift for the future attorney in your life.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link to="/gift-cards">
          <Button variant="gold" size="lg"><Gift className="h-4 w-4" /> Buy a Gift Card</Button>
        </Link>
        <Link to="/gift-cards">
          <Button variant="heroOutline" size="lg">Gift a Subscription <ArrowRight className="h-4 w-4" /></Button>
        </Link>
      </div>
    </div>
  </section>
);

export default GiftBanner;
