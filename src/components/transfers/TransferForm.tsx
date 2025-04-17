
import { useState } from "react";
import { ArrowRight, Send, ChevronDown, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Mock data for wallets with proper icon handling
const wallets = [
  {
    id: "btc",
    name: "Bitcoin",
    symbol: "BTC",
    balance: 0.45,
    color: "#F7931A"
  },
  {
    id: "eth",
    name: "Ethereum",
    symbol: "ETH",
    balance: 2.35,
    color: "#627EEA"
  },
  {
    id: "sol",
    name: "Solana",
    symbol: "SOL",
    balance: 15.75,
    color: "#14F195"
  },
  {
    id: "usdt",
    name: "USDT",
    symbol: "USDT",
    balance: 1250.50,
    color: "#26A17B"
  }
];

// Simple component to render crypto icons
const CryptoIcon = ({ id, className = "" }: { id: string, className?: string }) => {
  let bgColor;
  
  switch (id) {
    case "btc":
      bgColor = "#F7931A";
      break;
    case "eth":
      bgColor = "#627EEA";
      break;
    case "sol":
      bgColor = "#14F195";
      break;
    case "usdt":
      bgColor = "#26A17B";
      break;
    default:
      bgColor = "#777777";
  }
  
  return (
    <div 
      className={`w-full h-full rounded-full flex items-center justify-center ${className}`}
      style={{ backgroundColor: bgColor + "33" }} // Adding 33 for opacity
    >
      <div 
        className="w-3/4 h-3/4 rounded-full" 
        style={{ backgroundColor: bgColor }}
      ></div>
    </div>
  );
};

const TransferForm = () => {
  const [selectedAsset, setSelectedAsset] = useState(wallets[0]);
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showAssetSelector, setShowAssetSelector] = useState(false);
  
  const handleMaxAmount = () => {
    setAmount(selectedAsset.balance.toString());
  };
  
  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || !address) {
      toast.error("Please fill in all fields");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate a transaction
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`${amount} ${selectedAsset.symbol} sent successfully!`);
      setAmount("");
      setAddress("");
    }, 2000);
  };
  
  return (
    <div className="glass-card rounded-xl p-6">
      <h2 className="text-xl font-bold mb-6 flex items-center">
        <Send size={18} className="mr-2" />
        Send Crypto
      </h2>
      
      <form onSubmit={handleTransfer}>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Select Wallet</label>
            <div 
              className="glass-card rounded-lg p-3 flex items-center justify-between cursor-pointer hover:bg-white/5"
              onClick={() => setShowAssetSelector(!showAssetSelector)}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full mr-2 flex items-center justify-center">
                  <CryptoIcon id={selectedAsset.id} />
                </div>
                <div>
                  <p className="font-medium">{selectedAsset.name} Wallet</p>
                  <p className="text-xs text-gray-400">Balance: {selectedAsset.balance} {selectedAsset.symbol}</p>
                </div>
              </div>
              <ChevronDown size={16} className={`text-gray-400 transition-transform ${showAssetSelector ? 'rotate-180' : ''}`} />
            </div>
            
            {showAssetSelector && (
              <div className="mt-2 glass-card rounded-lg p-2 border border-white/10 absolute z-10 w-[calc(100%-3rem)] bg-crypto-card-dark">
                {wallets.map((wallet) => (
                  <div 
                    key={wallet.id}
                    className={`p-2 rounded flex items-center hover:bg-white/10 cursor-pointer ${selectedAsset.id === wallet.id ? 'bg-white/5' : ''}`}
                    onClick={() => {
                      setSelectedAsset(wallet);
                      setShowAssetSelector(false);
                    }}
                  >
                    <div className="w-6 h-6 mr-2">
                      <CryptoIcon id={wallet.id} />
                    </div>
                    <div>
                      <p className="font-medium">{wallet.name}</p>
                      <p className="text-xs text-gray-400">{wallet.balance} {wallet.symbol}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div>
            <label className="block text-sm text-gray-400 mb-1">Amount</label>
            <div className="relative">
              <Input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="bg-crypto-card-dark border-white/10 pl-8"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{selectedAsset.symbol}</span>
              <button
                type="button"
                onClick={handleMaxAmount}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-crypto-accent-blue"
              >
                MAX
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm text-gray-400 mb-1">Recipient Address</label>
            <Input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter wallet address"
              className="bg-crypto-card-dark border-white/10"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full py-6 bg-crypto-gradient hover:opacity-90 transition-opacity rounded-xl font-bold mt-6 flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <RefreshCw size={16} className="mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                Send {selectedAsset.symbol}
                <ArrowRight size={16} className="ml-2" />
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TransferForm;
