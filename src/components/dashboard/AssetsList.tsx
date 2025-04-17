
import { ArrowUpRight, ArrowDownRight, ChevronRight, Bitcoin, Coins } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for crypto assets
const assets = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    balance: 0.45,
    value: 8723.42,
    change: 1.2,
    price: 19385.37,
    walletType: "Bitcoin Wallet",
    color: "#F7931A"
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    balance: 2.35,
    value: 3120.25,
    change: -0.8,
    price: 1327.77,
    walletType: "Ethereum Wallet",
    color: "#627EEA"
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    balance: 15.75,
    value: 577.01,
    change: 3.5,
    price: 36.63,
    walletType: "Solana Wallet",
    color: "#14F195"
  },
  {
    id: "usdt",
    name: "USDT",
    symbol: "USDT",
    balance: 1250.50,
    value: 1250.50,
    change: 0.0,
    price: 1.00,
    walletType: "USDT Wallet",
    color: "#26A17B"
  },
];

// Component to render crypto icon based on ID
const CryptoIcon = ({ id, className = "w-full h-full" }: { id: string, className?: string }) => {
  switch (id) {
    case "bitcoin":
      return <Bitcoin className={`${className} text-[#F7931A]`} />;
    case "ethereum":
      return <Coins className={`${className} text-[#627EEA]`} />;
    case "solana":
      return <Coins className={`${className} text-[#14F195]`} />;
    case "usdt":
      return <Coins className={`${className} text-[#26A17B]`} />;
    default:
      return <Coins className={className} />;
  }
};

const AssetsList = () => {
  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <div className="p-4 border-b border-white/10 flex justify-between items-center">
        <h2 className="font-bold text-lg">My Wallets</h2>
        <Link to="/portfolio" className="text-crypto-accent-blue text-sm flex items-center">
          View All
          <ChevronRight size={16} />
        </Link>
      </div>
      
      <div className="divide-y divide-white/10">
        {assets.map((asset) => (
          <div key={asset.id} className="p-4 hover:bg-white/5 transition-colors">
            <div className="flex items-center">
              <div className="w-10 h-10 mr-3 flex-shrink-0 rounded-full overflow-hidden bg-white/5 flex items-center justify-center">
                <CryptoIcon id={asset.id} />
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium">{asset.name}</h3>
                    <div className="flex items-center text-sm text-gray-400">
                      <span>{asset.walletType}</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-medium">{asset.balance} {asset.symbol}</p>
                    <p className="text-sm text-gray-400">
                      ${asset.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between mt-2">
                  <div className="flex items-center text-xs text-gray-400">
                    <span>${asset.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  
                  <div className={`text-xs flex items-center ${asset.change >= 0 ? 'text-crypto-green' : asset.change < 0 ? 'text-crypto-red' : 'text-gray-400'}`}>
                    {asset.change > 0 ? (
                      <ArrowUpRight size={14} className="mr-1" />
                    ) : asset.change < 0 ? (
                      <ArrowDownRight size={14} className="mr-1" />
                    ) : null}
                    {asset.change > 0 ? '+' : ''}{asset.change}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssetsList;
