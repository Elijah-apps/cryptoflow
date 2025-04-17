
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BuyCrypto from "@/components/p2p/BuyCrypto";
import SellCrypto from "@/components/p2p/SellCrypto";
import { useLocation } from "react-router-dom";
import { AlertCircle, BadgeInfo } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const P2P = () => {
  const [activeTab, setActiveTab] = useState<"buy" | "sell">("buy");
  const location = useLocation();
  
  // Check if there's a tab parameter in the URL
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tabParam = queryParams.get("tab");
    if (tabParam === "sell") {
      setActiveTab("sell");
    } else if (tabParam === "buy") {
      setActiveTab("buy");
    }
  }, [location]);
  
  return (
    <div className="space-y-6 pb-20 sm:pb-0">
      <div className="flex justify-between items-start flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold">P2P Trading</h1>
          <p className="text-gray-400">Buy and sell cryptocurrency directly with other users</p>
        </div>
      </div>
      
      <Alert className="bg-crypto-blue/10 border-crypto-blue/20 text-white">
        <BadgeInfo className="h-4 w-4 text-crypto-blue" />
        <AlertDescription>
          Peer-to-peer trading lets you trade directly with other users. Always verify payment details before completing a transaction.
        </AlertDescription>
      </Alert>
      
      <div className="max-w-5xl mx-auto">
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "buy" | "sell")} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="buy">Buy</TabsTrigger>
            <TabsTrigger value="sell">Sell</TabsTrigger>
          </TabsList>
          
          <TabsContent value="buy">
            <BuyCrypto />
          </TabsContent>
          
          <TabsContent value="sell">
            <SellCrypto />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default P2P;
