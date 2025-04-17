
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BuyCrypto from "@/components/p2p/BuyCrypto";
import SellCrypto from "@/components/p2p/SellCrypto";

const P2P = () => {
  return (
    <div className="space-y-6 pb-20 sm:pb-0">
      <div>
        <h1 className="text-2xl font-bold">P2P Trading</h1>
        <p className="text-gray-400">Buy and sell cryptocurrency directly with other users</p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="buy" className="w-full">
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
