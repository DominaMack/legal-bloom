import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const products = [
  { name: "Study Mug", emoji: "☕", price: "$18.99" },
  { name: "Bar Prep Hoodie", emoji: "👕", price: "$44.99" },
  { name: "Notebook", emoji: "📓", price: "$14.99" },
  { name: "Tote Bag", emoji: "👜", price: "$22.99" },
  { name: "Candle", emoji: "🕯️", price: "$19.99" },
  { name: "Wall Art", emoji: "🖼️", price: "$29.99" },
  { name: "Tumbler", emoji: "🥤", price: "$24.99" },
  { name: "Sticker Pack", emoji: "✨", price: "$9.99" },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground">Shop <span className="text-gradient-gold">Love Law™</span></h2>
          <p className="text-muted-foreground mt-3">Premium legal lifestyle products</p>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory max-w-6xl mx-auto">
          {products.map((product) => (
            <a key={product.name} href="https://www.etsy.com/shop/LoveLawCompany" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-[200px] snap-start card-glow rounded-2xl border border-border bg-card overflow-hidden group">
              <div className="aspect-square bg-muted/50 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-500">{product.emoji}</div>
              <div className="p-3">
                <p className="text-sm font-semibold text-foreground">{product.name}</p>
                <p className="text-sm text-accent font-bold">{product.price}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/shop"><Button variant="heroOutline">View All Products <ExternalLink className="h-4 w-4" /></Button></Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
