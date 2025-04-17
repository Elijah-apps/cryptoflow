
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Wallet } from "lucide-react";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen w-full bg-crypto-bg-dark flex flex-col items-center justify-center">
      <div className="animate-pulse-glow animate-float">
        <Wallet className="w-24 h-24 text-crypto-accent-blue mb-4" />
        <h1 className="text-4xl font-bold crypto-gradient-text text-center">CryptoFlow</h1>
      </div>
      <p className="mt-8 text-gray-400 animate-pulse">Loading your secure wallet...</p>
    </div>
  );
};

export default SplashScreen;
