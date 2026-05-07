import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CreditRepair from "./pages/CreditRepair";
import CFOServices from "./pages/CFOServices";
import Services from "./pages/Services";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SMSTerms from "./pages/SMSTerms";
import TermsAndConditions from "./pages/TermsAndConditions";
import FinancialPlanning from "./pages/FinancialPlanning";
import DebtConsolidation from "./pages/DebtConsolidation";
import BusinessConsulting from "./pages/BusinessConsulting";
import AdminOrders from "./pages/admin/Orders";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/credit-repair" element={<CreditRepair />} />
          <Route path="/cfo-services" element={<CFOServices />} />
          <Route path="/services" element={<Services />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/sms-terms" element={<SMSTerms />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/financial-planning" element={<FinancialPlanning />} />
          <Route path="/debt-consolidation" element={<DebtConsolidation />} />
          <Route path="/business-consulting" element={<BusinessConsulting />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
