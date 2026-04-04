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
import StickyCtaBar from "@/components/StickyCtaBar";
import GiftBanner from "@/components/GiftBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <HowItWorks />
      <PricingSection />
      <GiftBanner />
      <WhyLoveLaw />
      <LifestyleSection />
      <Testimonials />
      <SmsCta />
      <ContactSection />
      <div className="pb-16">
        <Footer />
      </div>
      <StickyCtaBar />
    </div>
  );
};

export default Index;
