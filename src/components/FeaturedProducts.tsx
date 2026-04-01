import { ShoppingBag } from "lucide-react";

const products = [
  { name: "Mug", emoji: "☕" },
  { name: "Hoodie", emoji: "🧥" },
  { name: "Notebook", emoji: "📓" },
  { name: "Tote Bag", emoji: "👜" },
  { name: "Candle", emoji: "🕯️" },
  { name: "Wall Art", emoji: "🖼️" },
  { name: "Tumbler", emoji: "🥤" },
  { name: "Sticker Pack", emoji: "✨" },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-sm text-secondary mb-4">
            <ShoppingBag className="h-4 w-4" />
            Featured Products
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold font-heading">
            Legal Lifestyle <span className="text-gradient">Essentials</span>
          </h2>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {products.map((product) => (
            <a
              key={product.name}
              href="https://shoplovelaw.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-shrink-0 w-44"
            >
              <div className="card-glow rounded-xl border border-border bg-card p-6 text-center cursor-pointer">
                <div className="text-5xl mb-4">{product.emoji}</div>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
