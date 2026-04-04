import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCtaBar from "@/components/StickyCtaBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      toast.error("Please agree to the privacy policy");
      return;
    }
    toast.success("Message sent! We'll get back to you soon.");
    setName(""); setEmail(""); setMessage(""); setConsent(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h1 className="text-4xl lg:text-5xl font-bold font-heading text-foreground mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Have a question? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* <!-- GHL CONTACT --> */}
              <Input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required maxLength={100} className="bg-card" />
              <Input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} required maxLength={255} className="bg-card" />
              <Textarea placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)} required maxLength={1000} rows={5} className="bg-card" />
              <label className="flex items-start gap-2 text-sm text-muted-foreground">
                <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 rounded border-border" />
                I agree to the <a href="/privacy" className="text-secondary underline">Privacy Policy</a>
              </label>
              <Button variant="hero" type="submit" className="w-full">Send Message</Button>
            </form>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "hello@shoplovelaw.com", href: "mailto:hello@shoplovelaw.com" },
                { icon: Phone, label: "Phone", value: "+1 717-366-6462", href: "tel:+17173666462" },
                { icon: Clock, label: "Hours", value: "Mon–Fri, 9am–5pm", href: undefined },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary flex-shrink-0">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-foreground hover:text-secondary transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="pb-16"><Footer /></div>
      <StickyCtaBar />
    </div>
  );
};

export default ContactPage;
