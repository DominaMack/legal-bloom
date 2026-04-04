import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const DoNotSellPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your request has been submitted. We'll process it within 30 days.");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold font-heading text-foreground mb-8">Do Not Sell My Personal Information</h1>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <p>Under the California Consumer Privacy Act (CCPA) and similar state laws, you have the right to opt out of the sale of your personal information.</p>
          <p>Love Law™ does not sell personal information to third parties. However, if you wish to submit a formal request, please use the form below.</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 max-w-md space-y-4">
          <Input type="email" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-card" />
          <Button variant="hero" type="submit">Submit Request</Button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default DoNotSellPage;
