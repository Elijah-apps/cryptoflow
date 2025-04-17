
import { useState } from "react";
import { ArrowRight, Send, ChevronDown, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAssets } from "@/hooks/useAssets";
import { useSendTransaction } from "@/hooks/useTransactions";

// Simple component to render crypto icons
const CryptoIcon = ({ id, className = "" }: { id: string, className?: string }) => {
  let bgColor;
  
  switch (id) {
    case "bitcoin":
      bgColor = "#F7931A";
      break;
    case "ethereum":
      bgColor = "#627EEA";
      break;
    case "solana":
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
  const { data: assets, isLoading } = useAssets();
  const sendTransaction = useSendTransaction();
  
  const [selectedAssetId, setSelectedAssetId] = useState<string>("bitcoin");
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const [showAssetSelector, setShowAssetSelector] = useState(false);
  
  // Find the selected asset from the assets data
  const selectedAsset = assets?.find(asset => asset.id === selectedAssetId);
  
  const handleMaxAmount = () => {
    if (selectedAsset) {
      setAmount(selectedAsset.balance.toString());
    }
  };
  
  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || !address || !selectedAsset) {
      return;
    }
    
    sendTransaction.mutate({
      assetId: selectedAssetId,
      amount: parseFloat(amount),
      recipientAddress: address
    });
  };
  
  if (isLoading) {
    return (
      <div className="glass-card rounded-xl p-6">
        <p className="text-center py-10">Loading wallets...</p>
      </div>
    );
  }
  
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
              {selectedAsset && (
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full mr-2 flex items-center justify-center">
                    <CryptoIcon id={selectedAsset.id} />
                  </div>
                  <div>
                    <p className="font-medium">{selectedAsset.name} Wallet</p>
                    <p className="text-xs text-gray-400">Balance: {selectedAsset.balance} {selectedAsset.symbol}</p>
                  </div>
                </div>
              )}
              <ChevronDown size={16} className={`text-gray-400 transition-transform ${showAssetSelector ? 'rotate-180' : ''}`} />
            </div>
            
            {showAssetSelector && assets && (
              <div className="mt-2 glass-card rounded-lg p-2 border border-white/10 absolute z-10 w-[calc(100%-3rem)] bg-crypto-card-dark">
                {assets.map((asset) => (
                  <div 
                    key={asset.id}
                    className={`p-2 rounded flex items-center hover:bg-white/10 cursor-pointer ${selectedAssetId === asset.id ? 'bg-white/5' : ''}`}
                    onClick={() => {
                      setSelectedAssetId(asset.id);
                      setShowAssetSelector(false);
                    }}
                  >
                    <div className="w-6 h-6 mr-2">
                      <CryptoIcon id={asset.id} />
                    </div>
                    <div>
                      <p className="font-medium">{asset.name}</p>
                      <p className="text-xs text-gray-400">{asset.balance} {asset.symbol}</p>
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
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                {selectedAsset?.symbol}
              </span>
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
            disabled={sendTransaction.isPending}
          >
            {sendTransaction.isPending ? (
              <>
                <RefreshCw size={16} className="mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                Send {selectedAsset?.symbol}
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
