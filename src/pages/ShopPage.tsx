import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCtaBar from "@/components/StickyCtaBar";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ExternalLink, Gift, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const collections = [
  { name: "Law Student Essentials", items: ["Study Mug", "Motivational Notebook", "Sticker Pack", "Tote Bag"] },
  { name: "Bar Prep Survival", items: ["Bar Prep Hoodie", "Study Tumbler", "Countdown Candle", "Desk Mat"] },
  { name: "Attorney Lifestyle", items: ["Attorney Mug", "Wall Art", "Desk Organizer", "Premium Tumbler"] },
  { name: "Desk + Office", items: ["Desk Mat", "Pen Set", "Wall Print", "Notepad"] },
  { name: "Gifts That Mean Something", items: ["Gift Card", "Gift Box Set", "Bundle Pack", "Custom Message"] },
];

const featuredProducts = [
  { name: "Love Law™ Mug", price: "$18.99", category: "Drinkware", emoji: "☕" },
  { name: "Bar Prep Hoodie", price: "$44.99", category: "Apparel", emoji: "👕" },
  { name: "Motivational Notebook", price: "$14.99", category: "Stationery", emoji: "📓" },
  { name: "Tote Bag", price: "$22.99", category: "Accessories", emoji: "👜" },
  { name: "Study Candle", price: "$19.99", category: "Home", emoji: "🕯️" },
  { name: "Wall Art Print", price: "$29.99", category: "Decor", emoji: "🖼️" },
  { name: "Stainless Tumbler", price: "$24.99", category: "Drinkware", emoji: "🥤" },
  { name: "Sticker Pack", price: "$9.99", category: "Accessories", emoji: "✨" },
];

const ShopPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold font-heading text-foreground mb-4">
              Shop <span className="text-gradient-gold">Love Law™</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Premium legal lifestyle products for law students, bar candidates, and attorneys.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="https://www.etsy.com/shop/LoveLawCompany" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg">
                  Browse Full Store <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
              <Link to="/gift-cards">
                <Button variant="gold" size="lg">
                  <Gift className="h-4 w-4" /> Buy a Gift Card
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {collections.map((col) => (
              <button
                key={col.name}
                className="flex-shrink-0 px-5 py-2.5 rounded-full border border-border bg-card text-sm font-medium text-muted-foreground hover:text-foreground hover:border-secondary transition-colors"
              >
                {col.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-8 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {featuredProducts.map((product) => (
              <a
                key={product.name}
                href="https://www.etsy.com/shop/LoveLawCompany"
                target="_blank"
                rel="noopener noreferrer"
                className="group card-glow rounded-2xl border border-border bg-card overflow-hidden"
              >
                <div className="aspect-square bg-muted/50 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-500">
                  {product.emoji}
                </div>
                <div className="p-4">
                  <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                  <h3 className="text-sm font-semibold text-foreground mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-foreground">{product.price}</p>
                    <Button variant="outline" size="sm" className="text-xs">
                      Buy on Etsy <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Upsell */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
            Add Daily Motivation to Your Order
          </h2>
          <p className="text-muted-foreground mb-6">
            Pair your Love Law™ merch with daily SMS motivation — the perfect combo.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/sms"><Button variant="hero">Add SMS Subscription <ArrowRight className="h-4 w-4" /></Button></Link>
            <Link to="/gift-cards"><Button variant="gold"><Gift className="h-4 w-4" /> Gift a Plan</Button></Link>
          </div>
        </div>
      </section>

      <div className="pb-16"><Footer /></div>
      <StickyCtaBar />
    </div>
  );
};

export default ShopPage;
