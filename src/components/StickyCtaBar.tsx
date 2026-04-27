import { Button } from "@/components/ui/button";
import { MessageCircle, ShoppingBag } from "lucide-react";

const StickyCtaBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-xl py-2 px-4 md:py-3">
      <div className="container mx-auto flex items-center justify-between gap-2 max-w-4xl">
        <a href="sms:+15513685683&body=LAW" className="flex-1">
          <Button variant="hero" size="sm" className="w-full text-xs md:text-sm">
            <MessageCircle className="h-3.5 w-3.5" />
            Text LAW
          </Button>
        </a>
        <a href="#pricing" className="flex-1">
          <Button variant="gold" size="sm" className="w-full text-xs md:text-sm">
            Join Now
          </Button>
        </a>
        <a href="https://shoplovelaw.com" target="_blank" rel="noopener noreferrer" className="flex-1">
          <Button variant="outline" size="sm" className="w-full text-xs md:text-sm">
            <ShoppingBag className="h-3.5 w-3.5" />
            Shop
          </Button>
        </a>
      </div>
    </div>
  );
};

export default StickyCtaBar;
