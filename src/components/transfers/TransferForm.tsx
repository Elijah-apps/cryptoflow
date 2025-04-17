
import { useState } from "react";
import { ArrowRight, Send, ChevronDown, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Define wallet types
const wallets = [
  {
    id: "btc",
    name: "Bitcoin",
    symbol: "BTC",
    balance: 0.45,
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23F7931A'%3E%3Cpath d='M23.638 14.904c-1.602 6.425-8.113 10.342-14.542 8.736C2.67 22.033-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.4s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.415-.614.32.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.236-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.52 2.75 2.084v.006z'/%3E%3C/svg%3E",
  },
  {
    id: "eth",
    name: "Ethereum",
    symbol: "ETH",
    balance: 2.35,
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle cx='16' cy='16' r='16' fill='%23627EEA'/%3E%3Cg fill='%23FFF' fill-rule='nonzero'%3E%3Cpath fill-opacity='.602' d='M16.498 4v8.87l7.497 3.35z'/%3E%3Cpath d='M16.498 4L9 16.22l7.498-3.35z'/%3E%3Cpath fill-opacity='.602' d='M16.498 21.968v6.027L24 17.616z'/%3E%3Cpath d='M16.498 27.995v-6.028L9 17.616z'/%3E%3Cpath fill-opacity='.2' d='M16.498 20.573l7.497-4.353-7.497-3.348z'/%3E%3Cpath fill-opacity='.602' d='M9 16.22l7.498 4.353v-7.701z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
  },
  {
    id: "sol",
    name: "Solana",
    symbol: "SOL",
    balance: 15.75,
    icon: "data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 50C100 77.6127 77.6127 100 50 100C22.3873 100 0 77.6127 0 50C0 22.3873 22.3873 0 50 0C77.6185 0 100 22.3873 100 50Z' fill='%2315151B'/%3E%3Cpath d='M83.9631 61.4435L71.4546 75.013C71.2329 75.2529 70.9672 75.4736 70.6704 75.6072C70.3736 75.7409 70.0623 75.8438 69.7349 75.8438H17.6029C17.383 75.8438 17.1709 75.7772 16.9921 75.6533C16.8133 75.5295 16.6743 75.3539 16.594 75.1516C16.5138 74.9494 16.4956 74.729 16.5414 74.518C16.5872 74.3071 16.6946 74.1147 16.8491 73.9662L29.3186 60.433C29.5402 60.1932 29.8059 59.9725 30.1027 59.8388C30.3995 59.7052 30.7108 59.6023 31.0382 59.6023H83.2093C83.4291 59.6023 83.6413 59.6689 83.8201 59.7928C83.9989 59.9166 84.1379 60.0922 84.2181 60.2945C84.2984 60.4967 84.3166 60.7171 84.2708 60.9281C84.225 61.139 84.1175 61.3314 83.9631 61.4799V61.4435Z' fill='url(%23paint0_linear_1_39)'/%3E%3Cpath d='M83.9631 39.5068L71.4546 25.9373C71.2329 25.6974 70.9672 25.4767 70.6704 25.3431C70.3736 25.2094 70.0623 25.1064 69.7349 25.1064H17.6029C17.383 25.1064 17.1709 25.1731 16.9921 25.297C16.8133 25.4208 16.6743 25.5964 16.594 25.7987C16.5138 26.0009 16.4956 26.2213 16.5414 26.4322C16.5872 26.6432 16.6946 26.8356 16.8491 26.9841L29.3186 40.5172C29.5402 40.7571 29.8059 40.9778 30.1027 41.1114C30.3995 41.2451 30.7108 41.348 31.0382 41.348H83.2093C83.4291 41.348 83.6413 41.2814 83.8201 41.1575C83.9989 41.0336 84.1379 40.8581 84.2181 40.6558C84.2984 40.4536 84.3166 40.2331 84.2708 40.0222C84.225 39.8112 84.1175 39.6188 83.9631 39.4703V39.5068Z' fill='url(%23paint1_linear_1_39)'/%3E%3Cpath d='M16.85 50.523L29.3586 36.9535C29.5802 36.7136 29.8459 36.4929 30.1427 36.3593C30.4395 36.2256 30.7508 36.1227 31.0782 36.1227H83.2102C83.43 36.1227 83.6422 36.1894 83.821 36.3132C83.9998 36.4371 84.1388 36.6126 84.219 36.8149C84.2993 37.0171 84.3175 37.2376 84.2717 37.4485C84.2259 37.6595 84.1184 37.8519 83.964 38.0003L71.4944 51.5335C71.2728 51.7733 71.0071 51.994 70.7103 52.1277C70.4135 52.2613 70.1022 52.3643 69.7748 52.3643H17.6039C17.384 52.3643 17.1719 52.2976 16.993 52.1738C16.8142 52.0499 16.6753 51.8744 16.595 51.6721C16.5148 51.4699 16.4966 51.2494 16.5424 51.0385C16.5882 50.8275 16.6956 50.6351 16.85 50.4867V50.523Z' fill='url(%23paint2_linear_1_39)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_1_39' x1='78.6538' y1='56.9749' x2='31.965' y2='77.1812' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2300FFA3'/%3E%3Cstop offset='1' stop-color='%23DC1FFF'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_1_39' x1='78.6538' y1='35.0383' x2='31.965' y2='55.2447' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2300FFA3'/%3E%3Cstop offset='1' stop-color='%23DC1FFF'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint2_linear_1_39' x1='78.6538' y1='46.0249' x2='31.965' y2='66.2312' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2300FFA3'/%3E%3Cstop offset='1' stop-color='%23DC1FFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E",
  },
  {
    id: "usdt",
    name: "USDT",
    symbol: "USDT",
    balance: 1250.50,
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 2000'%3E%3Cpath d='M1000,0c552.26,0,1000,447.74,1000,1000S1552.24,2000,1000,2000,0,1552.26,0,1000,447.78,0,1000,0' fill='%2326a17b'/%3E%3Cpath d='M1123.42,866.76V718H1463.6V491.34H537.28V718H877.5V866.64C601,879.34,393.1,934.1,393.1,999.7s208,120.36,484.4,133.14v476.5h246V1132.8c276-12.74,483.48-67.46,483.48-133s-207.48-120.26-483.48-133m0,225.64v-0.12c-6.94.44-42.6,2.58-122,2.58-63.48,0-108.14-1.8-123.88-2.62v0.2C633.34,1081.66,451,1039.12,451,988.22S633.36,894.84,877.62,884V1050.1c16,1.1,61.76,3.8,124.92,3.8,75.86,0,114-3.16,121-3.8V884c243.8,10.86,425.72,53.44,425.72,104.16s-182,93.32-425.72,104.18' fill='%23fff'/%3E%3C/svg%3E",
  }
];

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
                  <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: selectedAsset.icon }}></div>
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
                      <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: wallet.icon }}></div>
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
