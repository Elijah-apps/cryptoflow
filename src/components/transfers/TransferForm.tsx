
import { useState } from "react";
import { ArrowRight, Send, ChevronDown, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const TransferForm = () => {
  const [selectedAsset, setSelectedAsset] = useState({ symbol: "BTC", name: "Bitcoin", balance: 0.45 });
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
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
            <label className="block text-sm text-gray-400 mb-1">Select Asset</label>
            <div className="glass-card rounded-lg p-3 flex items-center justify-between cursor-pointer hover:bg-white/5">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-orange-500 mr-2 flex items-center justify-center text-white font-bold">
                  {selectedAsset.symbol.charAt(0)}
                </div>
                <div>
                  <p className="font-medium">{selectedAsset.name}</p>
                  <p className="text-xs text-gray-400">Balance: {selectedAsset.balance} {selectedAsset.symbol}</p>
                </div>
              </div>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
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
                Send Now
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
