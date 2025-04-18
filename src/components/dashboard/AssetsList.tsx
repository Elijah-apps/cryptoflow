
import { ArrowUpRight, ArrowDownRight, ChevronRight, Bitcoin, Coins } from "lucide-react";
import { Link } from "react-router-dom";
import { useAssets } from "@/hooks/useAssets";

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
  const { data: assets, isLoading, error } = useAssets();
  
  if (isLoading) {
    return (
      <div className="glass-card rounded-xl p-4">
        <p className="text-center py-10">Loading assets...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="glass-card rounded-xl p-4">
        <p className="text-center py-10 text-crypto-red">Failed to load assets</p>
      </div>
    );
  }
  
  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <div className="p-4 border-b border-white/10 flex justify-between items-center">
        <h2 className="font-bold text-lg">My Wallets</h2>
        <Link to="/dashboard/portfolio" className="text-crypto-accent-blue text-sm flex items-center">
          View All
          <ChevronRight size={16} />
        </Link>
      </div>
      
      <div className="divide-y divide-white/10">
        {assets && assets.map((asset) => (
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
