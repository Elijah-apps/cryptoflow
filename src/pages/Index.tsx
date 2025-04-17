import BalanceCard from "@/components/dashboard/BalanceCard";
import AssetsList from "@/components/dashboard/AssetsList";
import TransactionHistory from "@/components/dashboard/TransactionHistory";
import CryptoChart from "@/components/crypto/CryptoChart";
import ServicesGrid from "@/components/services/ServicesGrid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useUserProfile } from "@/hooks/useUserProfile";

const Index = () => {
  const { data: userProfile } = useUserProfile();
  
  const changePercentage = userProfile?.changePercentage || 0;
  const isPositiveChange = changePercentage >= 0;
  
  return (
    <div className="space-y-6 pb-20 sm:pb-0">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-gray-400">Welcome back to your crypto wallet</p>
        </div>
        
        <div className="flex items-center">
          <div className="glass-card px-3 py-1.5 rounded-lg flex items-center">
            <div className="w-2 h-2 rounded-full bg-crypto-green animate-pulse mr-2"></div>
            <span className="text-sm font-medium">Network: Mainnet</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <BalanceCard />
        </div>
        
        <div className="glass-card rounded-xl p-4">
          <h2 className="font-bold mb-2">Portfolio Growth</h2>
          <Tabs defaultValue="week" className="w-full">
            <div className="flex justify-between items-center mb-4">
              <TabsList className="bg-crypto-card-dark">
                <TabsTrigger value="day">Day</TabsTrigger>
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="month">Month</TabsTrigger>
                <TabsTrigger value="year">Year</TabsTrigger>
              </TabsList>
              
              <Badge 
                variant="outline" 
                className={`${isPositiveChange 
                  ? 'bg-crypto-green/10 text-crypto-green border-crypto-green/20' 
                  : 'bg-crypto-red/10 text-crypto-red border-crypto-red/20'}`}
              >
                {isPositiveChange ? '+' : ''}{changePercentage}%
              </Badge>
            </div>
            
            <TabsContent value="day">
              <CryptoChart trend="volatile" color="#14B8A6" />
            </TabsContent>
            <TabsContent value="week">
              <CryptoChart trend="up" color="#3B82F6" />
            </TabsContent>
            <TabsContent value="month">
              <CryptoChart trend="up" color="#8B5CF6" />
            </TabsContent>
            <TabsContent value="year">
              <CryptoChart trend="up" color="#EC4899" />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <ServicesGrid />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AssetsList />
        <TransactionHistory />
      </div>
    </div>
  );
};

export default Index;
