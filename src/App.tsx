
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import Activities from "./pages/Activities";
import Transfer from "./pages/Transfer";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import P2P from "./pages/P2P";
import KYC from "./pages/KYC";
import Services from "./pages/Services";
import Airtime from "./pages/services/Airtime";
import Data from "./pages/services/Data";
import Electricity from "./pages/services/Electricity";
import AppLayout from "./components/layout/AppLayout";
import SplashScreen from "./pages/SplashScreen";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import CreateNewPassword from "./pages/CreateNewPassword";

// Create a client with default configurations
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: true,
      retry: 1,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Toaster />
        <Sonner />
        <Routes>
          {/* Start with splash screen */}
          <Route path="/" element={<Navigate to="/splash" replace />} />
          <Route path="/splash" element={<SplashScreen />} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<CreateNewPassword />} />
          
          {/* Protected Routes */}
          <Route path="/dashboard" element={<AppLayout />}>
            <Route index element={<Index />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="activities" element={<Activities />} />
            <Route path="transfer" element={<Transfer />} />
            <Route path="settings" element={<Settings />} />
            <Route path="p2p" element={<P2P />} />
            <Route path="kyc" element={<KYC />} />
            <Route path="services" element={<Services />} />
            <Route path="services/airtime" element={<Airtime />} />
            <Route path="services/data" element={<Data />} />
            <Route path="services/electricity" element={<Electricity />} />
          </Route>
          
          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
