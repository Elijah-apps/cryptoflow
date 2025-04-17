
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TransferForm from "@/components/transfers/TransferForm";
import ReceiveForm from "@/components/transfers/ReceiveForm";
import { useLocation } from "react-router-dom";
import TransferBottomSheet from "@/components/transfers/TransferBottomSheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card } from "@/components/ui/card";
import { ArrowRight, RefreshCw, Clock } from "lucide-react";

const Transfer = () => {
  const [activeTab, setActiveTab] = useState<string>("send");
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Recent transfers data (in a real app, this would come from an API)
  const recentTransfers = [
    { id: 1, type: "sent", asset: "BTC", amount: 0.05, address: "3FZbgi29...", date: "2 hours ago" },
    { id: 2, type: "received", asset: "ETH", amount: 0.8, address: "0x8f7b92...", date: "Yesterday" },
    { id: 3, type: "sent", asset: "SOL", amount: 2.5, address: "GhTu87B2...", date: "3 days ago" },
  ];
  
  // Check if there's a tab parameter in the URL
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tabParam = queryParams.get("tab");
    if (tabParam === "receive") {
      setActiveTab("receive");
    }
  }, [location]);
  
  if (isMobile) {
    return (
      <div className="space-y-6 pb-20 sm:pb-0">
        <div>
          <h1 className="text-2xl font-bold">Transfer</h1>
          <p className="text-gray-400">Send and receive cryptocurrency</p>
        </div>
        
        <div className="flex justify-center mt-8">
          <div className="flex gap-4">
            <TransferBottomSheet initialTab="send" />
            <TransferBottomSheet initialTab="receive" />
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="space-y-6 pb-20 sm:pb-0">
      <div>
        <h1 className="text-2xl font-bold">Transfer</h1>
        <p className="text-gray-400">Send and receive cryptocurrency</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="glass-card rounded-xl p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="send">Send</TabsTrigger>
                <TabsTrigger value="receive">Receive</TabsTrigger>
              </TabsList>
              
              <TabsContent value="send">
                <TransferForm />
              </TabsContent>
              
              <TabsContent value="receive">
                <ReceiveForm />
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        <div className="space-y-6">
          <Card className="bg-crypto-card-dark border-white/10 overflow-hidden">
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <h3 className="font-medium flex items-center">
                <Clock size={16} className="mr-2 text-gray-400" />
                Recent Transfers
              </h3>
              <RefreshCw size={16} className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
            
            <div className="divide-y divide-white/10">
              {recentTransfers.map((transfer) => (
                <div key={transfer.id} className="p-4 flex items-center justify-between">
                  <div>
                    <div className="flex items-center">
                      <span className={`${transfer.type === 'sent' ? 'text-crypto-red' : 'text-crypto-green'} font-medium`}>
                        {transfer.type === 'sent' ? '- ' : '+ '}
                        {transfer.amount} {transfer.asset}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400 mt-1 flex items-center">
                      <span className="truncate max-w-[120px]">{transfer.address}</span>
                      <ArrowRight size={12} className="mx-1" />
                      <span>{transfer.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
