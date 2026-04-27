import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Enterprise from "./pages/Enterprise";
import SmsPage from "./pages/SmsPage";
import ShopPage from "./pages/ShopPage";
import GiftCardsPage from "./pages/GiftCardsPage";
import LoginPage from "./pages/LoginPage";
import ContactPage from "./pages/ContactPage";
import ResearchPage from "./pages/ResearchPage";
import PilotPage from "./pages/PilotPage";
import SampleReportPage from "./pages/SampleReportPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import SmsTermsPage from "./pages/SmsTermsPage";
import DoNotSellPage from "./pages/DoNotSellPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sms" element={<SmsPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/gift-cards" element={<GiftCardsPage />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/pilot" element={<PilotPage />} />
          <Route path="/sample-report" element={<SampleReportPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/sms-terms" element={<SmsTermsPage />} />
          <Route path="/do-not-sell" element={<DoNotSellPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
