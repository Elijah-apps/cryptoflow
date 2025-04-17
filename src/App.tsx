import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import Activities from "./pages/Activities";
import Transfer from "./pages/Transfer";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import P2P from "./pages/P2P";
import KYC from "./pages/KYC";
import AppLayout from "./components/layout/AppLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/p2p" element={<P2P />} />
            <Route path="/kyc" element={<KYC />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
