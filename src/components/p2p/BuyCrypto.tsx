
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, Search } from "lucide-react";

const BuyCrypto = () => {
  const [selectedCrypto, setSelectedCrypto] = useState({ symbol: "BTC", name: "Bitcoin" });
  
  return (
    <div className="space-y-6">
      <div className="glass-card p-6 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="glass-card rounded-lg p-3 flex items-center justify-between cursor-pointer hover:bg-white/5">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-orange-500 mr-2 flex items-center justify-center text-white font-bold">
                  {selectedCrypto.symbol.charAt(0)}
                </div>
                <span className="font-medium">{selectedCrypto.name}</span>
              </div>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
          
          <div className="flex-1">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search by price, payment..."
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card divide-y divide-white/10">
        <div className="grid grid-cols-5 gap-4 p-4 text-sm text-gray-400">
          <div>Advertiser</div>
          <div>Price</div>
          <div>Limit/Available</div>
          <div>Payment</div>
          <div></div>
        </div>
        
        {/* Sample trading offers */}
        {[1, 2, 3].map((item) => (
          <div key={item} className="grid grid-cols-5 gap-4 p-4 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-crypto-purple flex items-center justify-center text-white">
                U
              </div>
              <div>
                <div className="font-medium">User{item}</div>
                <div className="text-xs text-gray-400">98.3% completion</div>
              </div>
            </div>
            <div className="font-medium">$41,235</div>
            <div>
              <div>$1,000 - $10,000</div>
              <div className="text-sm text-gray-400">$5,000 available</div>
            </div>
            <div className="flex gap-2">
              <span className="bg-crypto-card-dark px-2 py-1 rounded text-xs">Bank Transfer</span>
            </div>
            <div>
              <Button variant="secondary">Buy BTC</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCrypto;
