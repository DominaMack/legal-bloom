import { Star, User } from "lucide-react";

const testimonials = [
  { text: "Love Law makes me feel seen as a law student. The daily messages are everything.", name: "Jasmine R.", role: "2L Student" },
  { text: "Perfect gift for law grads. My whole study group is subscribed now!", name: "Marcus T.", role: "Recent Graduate" },
  { text: "Motivation I didn't know I needed. This keeps me going during bar prep.", name: "Aisha K.", role: "Bar Candidate" },
];

const Testimonials = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading">
            What They're <span className="text-gradient">Saying</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="card-glow rounded-2xl border border-border bg-card p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <User className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
