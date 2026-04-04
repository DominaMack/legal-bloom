import { Star, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const testimonials = [
  { text: "Love Law makes me feel seen as a law student. The daily messages are everything.", name: "Jasmine R.", role: "2L Student" },
  { text: "Perfect gift for law grads. My whole study group is subscribed now!", name: "Marcus T.", role: "Recent Graduate" },
  { text: "Motivation I didn't know I needed. This keeps me going during bar prep.", name: "Aisha K.", role: "Bar Candidate" },
  { text: "Our law school saw a 35% engagement boost in the first semester.", name: "Dean Williams", role: "Law School Administrator" },
  { text: "As a solo practitioner, these messages remind me why I chose law.", name: "David C.", role: "Attorney" },
  { text: "The enterprise dashboard gave us real data to justify continuing the program.", name: "Prof. Martinez", role: "Bar Prep Director" },
];

const Testimonials = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground">
            What They're <span className="text-gradient">Saying</span>
          </h2>
          <p className="text-muted-foreground mt-3">Students, attorneys, and institutions trust Love Law™</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="card-glow rounded-2xl border border-border bg-card p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed text-sm">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary/10 text-secondary">
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

        <div className="text-center mt-12">
          <Link to="/sms">
            <Button variant="hero">Join Daily Motivation</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
