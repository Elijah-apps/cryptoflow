
import { ArrowUpRight, ChevronRight, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const BalanceCard = () => {
  const [showBalance, setShowBalance] = useState(true);
  const walletAddress = "0x1a2b...3c4d";

  const toggleBalance = () => {
    setShowBalance(!showBalance);
  };

  const copyAddress = () => {
    // In a real app, we would use the full address
    navigator.clipboard.writeText(walletAddress);
    toast.success("Address copied to clipboard");
  };

  return (
    <div className="wallet-card relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-crypto-gradient opacity-10"
        style={{ filter: "blur(40px)" }}
      ></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-gray-300 text-sm font-medium">Total Balance</h2>
            <div className="flex items-center mt-1">
              <p className="text-3xl font-bold">
                {showBalance ? "$12,420.69" : "••••••••"}
              </p>
              <button 
                onClick={toggleBalance}
                className="ml-2 p-1 rounded-full hover:bg-white/10"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  {showBalance ? (
                    <>
                      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                      <line x1="2" x2="22" y1="2" y2="22" />
                    </>
                  ) : (
                    <>
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </>
                  )}
                </svg>
              </button>
            </div>
            <div className="flex items-center mt-1">
              <span className="text-crypto-green flex items-center text-xs font-medium">
                <ArrowUpRight size={14} className="mr-1" />
                +2.4%
              </span>
              <span className="text-xs text-gray-400 ml-2">24h change</span>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="url(#paint0_linear)" strokeWidth="2"/>
                <path d="M16 12L12 8M12 8L8 12M12 8V16" stroke="url(#paint1_linear)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3B82F6"/>
                    <stop offset="1" stopColor="#8B5CF6"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear" x1="8" y1="12" x2="16" y2="12" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3B82F6"/>
                    <stop offset="1" stopColor="#8B5CF6"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-300">Wallet Address</p>
            <button 
              onClick={copyAddress}
              className="text-xs flex items-center text-crypto-accent-blue"
            >
              <Copy size={12} className="mr-1" />
              Copy
            </button>
          </div>
          <p className="text-sm font-mono mt-1">{walletAddress}</p>
        </div>
        
        <div className="mt-6 flex space-x-2">
          <button className="action-button flex-1 bg-crypto-blue">
            Send
          </button>
          <button className="action-button flex-1 bg-crypto-purple">
            Receive
          </button>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
