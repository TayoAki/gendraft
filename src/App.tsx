
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DirectPrimaryCare from "./pages/DirectPrimaryCare";
import About from "./pages/About";
import IndexBootstrap from "./pages/IndexBootstrap";
import MedicalCannabis from "./pages/MedicalCannabis";
import Registration from "./pages/Registration";
import Community from "./pages/Community";
import NursingClinicals from "./pages/NursingClinicals";
import Payments from "./pages/Payments";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bootstrap" element={<IndexBootstrap />} />
          <Route path="/about" element={<About />} />
          <Route path="/direct-primary-care" element={<DirectPrimaryCare />} />
          <Route path="/medical-cannabis" element={<MedicalCannabis />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/community" element={<Community />} />
          <Route path="/nursing" element={<NursingClinicals />} />
          <Route path="/payments" element={<Payments />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
