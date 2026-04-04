import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const products = [
  { name: "Study Mug", price: "$18.99", img: "https://i.etsystatic.com/44229498/r/il/04a0c8/5746050430/il_680x540.5746050430_jcxf.jpg" },
  { name: "Bar Prep Hoodie", price: "$44.99", img: "https://i.etsystatic.com/44229498/r/il/5e90e3/5793821375/il_680x540.5793821375_1a2k.jpg" },
  { name: "Notebook", price: "$14.99", img: "https://i.etsystatic.com/44229498/r/il/df79a9/5698298280/il_680x540.5698298280_h07m.jpg" },
  { name: "Tote Bag", price: "$22.99", img: "https://i.etsystatic.com/44229498/r/il/5c1ee3/5793821387/il_680x540.5793821387_cnkj.jpg" },
  { name: "Candle", price: "$19.99", img: "https://i.etsystatic.com/44229498/r/il/b94e81/5698298284/il_680x540.5698298284_c1h1.jpg" },
  { name: "Wall Art", price: "$29.99", img: "https://i.etsystatic.com/44229498/r/il/0e87f2/5746050468/il_680x540.5746050468_4k0d.jpg" },
  { name: "Tumbler", price: "$24.99", img: "https://i.etsystatic.com/44229498/r/il/8c2e6c/5698298276/il_680x540.5698298276_jxvp.jpg" },
  { name: "Sticker Pack", price: "$9.99", img: "https://i.etsystatic.com/44229498/r/il/2e1b5a/5746050472/il_680x540.5746050472_nj04.jpg" },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold font-heading text-foreground">
            Shop <span className="text-gradient-gold">Love Law™</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-2">Premium legal lifestyle products</p>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory max-w-6xl mx-auto scrollbar-hide">
          {products.map((product) => (
            <a
              key={product.name}
              href="https://www.etsy.com/shop/LoveLawCompany"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[200px] snap-start card-glow rounded-2xl border border-border bg-card overflow-hidden group"
            >
              <div className="aspect-square overflow-hidden bg-muted/30">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  width={200}
                  height={200}
                />
              </div>
              <div className="p-3">
                <p className="text-sm font-semibold text-foreground">{product.name}</p>
                <p className="text-sm text-accent font-bold">{product.price}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/shop">
            <Button variant="heroOutline">
              View All Products <ExternalLink className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
