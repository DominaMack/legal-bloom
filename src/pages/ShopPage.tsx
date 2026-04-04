import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCtaBar from "@/components/StickyCtaBar";
import { Button } from "@/components/ui/button";
import { ExternalLink, Gift, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import studyMug from "@/assets/products/study-mug.jpg";
import barPrepHoodie from "@/assets/products/bar-prep-hoodie.jpg";
import notebook from "@/assets/products/notebook.jpg";
import toteBag from "@/assets/products/tote-bag.jpg";
import candle from "@/assets/products/candle.jpg";
import wallArt from "@/assets/products/wall-art.jpg";
import tumbler from "@/assets/products/tumbler.jpg";
import stickerPack from "@/assets/products/sticker-pack.jpg";

const collections = [
  "All Products",
  "Law Student Essentials",
  "Bar Prep Survival",
  "Attorney Lifestyle",
  "Desk + Office",
  "Gifts",
];

const featuredProducts = [
  { name: "Future Esquire Mug", price: "$18.99", category: "Drinkware", img: studyMug },
  { name: "Bar Prep Mode Hoodie", price: "$44.99", category: "Apparel", img: barPrepHoodie },
  { name: "Law Notes Notebook", price: "$14.99", category: "Stationery", img: notebook },
  { name: "Love Law Tote Bag", price: "$22.99", category: "Accessories", img: toteBag },
  { name: "Justice Candle", price: "$19.99", category: "Home", img: candle },
  { name: "Order in the Court Print", price: "$29.99", category: "Decor", img: wallArt },
  { name: "Esq. Tumbler", price: "$24.99", category: "Drinkware", img: tumbler },
  { name: "Legal Sticker Pack", price: "$9.99", category: "Accessories", img: stickerPack },
];

const ShopPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-background" />
        <div className="container mx-auto px-4 relative z-10 max-w-3xl text-center">
          <h1 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mb-3">
            Shop <span className="text-gradient-gold">Love Law™</span>
          </h1>
          <p className="text-muted-foreground mb-6">
            Premium legal lifestyle products for law students, bar candidates, and attorneys.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://www.etsy.com/shop/LoveLawCompany" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg">Browse Full Store <ExternalLink className="h-4 w-4" /></Button>
            </a>
            <Link to="/gift-cards">
              <Button variant="gold" size="lg"><Gift className="h-4 w-4" /> Gift Cards</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Collection filters */}
      <section className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {collections.map((col, i) => (
              <button
                key={col}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                  i === 0
                    ? "bg-secondary text-secondary-foreground"
                    : "border border-border bg-card text-muted-foreground hover:text-foreground hover:border-secondary"
                }`}
              >
                {col}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-8 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {featuredProducts.map((product) => (
              <a
                key={product.name}
                href="https://www.etsy.com/shop/LoveLawCompany"
                target="_blank"
                rel="noopener noreferrer"
                className="group card-glow rounded-2xl border border-border bg-card overflow-hidden"
              >
                <div className="aspect-square overflow-hidden bg-muted/30">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={340}
                    height={340}
                  />
                </div>
                <div className="p-4">
                  <p className="text-[10px] text-muted-foreground mb-0.5 uppercase tracking-wider">{product.category}</p>
                  <h3 className="text-sm font-semibold text-foreground mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-base font-bold text-foreground">{product.price}</p>
                    <Button variant="outline" size="sm" className="text-xs h-8">
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
      <section className="py-14 bg-light-blue">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-xl font-bold font-heading text-foreground mb-3">Add Daily Motivation to Your Order</h2>
          <p className="text-sm text-muted-foreground mb-6">Pair your Love Law™ merch with daily SMS motivation — the perfect combo.</p>
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
