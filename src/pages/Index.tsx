import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import WhyLoveLaw from "@/components/WhyLoveLaw";
import LifestyleSection from "@/components/LifestyleSection";
import Testimonials from "@/components/Testimonials";
import SmsCta from "@/components/SmsCta";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <HowItWorks />
      <PricingSection />
      <WhyLoveLaw />
      <LifestyleSection />
      <Testimonials />
      <SmsCta />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
