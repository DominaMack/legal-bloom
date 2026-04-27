import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const Index = lazy(() => import("./pages/Index"));
const Enterprise = lazy(() => import("./pages/Enterprise"));
const SmsPage = lazy(() => import("./pages/SmsPage"));
const ShopPage = lazy(() => import("./pages/ShopPage"));
const GiftCardsPage = lazy(() => import("./pages/GiftCardsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ResearchPage = lazy(() => import("./pages/ResearchPage"));
const PilotPage = lazy(() => import("./pages/PilotPage"));
const SampleReportPage = lazy(() => import("./pages/SampleReportPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const SmsTermsPage = lazy(() => import("./pages/SmsTermsPage"));
const DoNotSellPage = lazy(() => import("./pages/DoNotSellPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
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
        </Suspense>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
