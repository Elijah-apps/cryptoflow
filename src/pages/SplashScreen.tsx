
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Wallet } from "lucide-react";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Slightly longer loading time for better splash screen effect
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen w-full bg-gradient-to-br from-crypto-bg-dark to-[#1a103d] flex flex-col items-center justify-center overflow-hidden">
      <div className="relative">
        {/* Animated circles in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-crypto-accent-blue/10 rounded-full animate-ping-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-crypto-accent-blue/5 rounded-full animate-ping-slower"></div>
        
        {/* Main logo and content */}
        <div className="relative z-10 flex flex-col items-center animate-float">
          <div className="bg-crypto-card-dark p-6 rounded-full shadow-glow mb-4">
            <Wallet className="w-20 h-20 text-crypto-accent-blue animate-pulse-subtle" />
          </div>
          <h1 className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-crypto-accent-blue to-purple-400">
            CryptoFlow
          </h1>
          <p className="text-gray-400 text-lg">Secure Crypto Management</p>
        </div>
      </div>
      
      <div className="absolute bottom-16 flex flex-col items-center">
        <div className="w-10 h-1 bg-crypto-accent-blue/50 rounded-full mb-4 animate-pulse"></div>
        <p className="text-gray-400 animate-pulse">Loading your secure wallet...</p>
      </div>
    </div>
  );
};

export default SplashScreen;
