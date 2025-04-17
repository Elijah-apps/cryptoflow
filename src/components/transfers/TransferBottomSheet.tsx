
import { useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp, X, ShoppingCart } from "lucide-react";
import TransferForm from "./TransferForm";
import ReceiveForm from "./ReceiveForm";
import ServicesGrid from "../services/ServicesGrid";
import { Link } from "react-router-dom";

interface TransferBottomSheetProps {
  initialTab?: "send" | "receive";
}

const TransferBottomSheet = ({ initialTab = "send" }: TransferBottomSheetProps) => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"send" | "receive">(initialTab);
  
  const handleTabChange = (value: string) => {
    setActiveTab(value as "send" | "receive");
  };
  
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="bg-crypto-blue hover:bg-crypto-blue/90 text-white font-medium flex items-center gap-2">
          {activeTab === "send" ? (
            <>
              <ArrowUp size={16} />
              Send
            </>
          ) : (
            <>
              <ArrowDown size={16} />
              Receive
            </>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-crypto-bg-dark text-white border-t border-white/10">
        <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-white/10 my-2" />
        
        <div className="p-4 max-w-md mx-auto w-full">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Transfer</h2>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <X size={20} />
            </Button>
          </div>
          
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
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

          <div className="mt-6 grid grid-cols-2 gap-4">
            <Link to="/dashboard/p2p?tab=buy">
              <Button className="w-full bg-crypto-purple hover:bg-crypto-purple/90 text-white">
                <ShoppingCart size={16} className="mr-2" />
                Buy
              </Button>
            </Link>
            <Link to="/dashboard/p2p?tab=sell">
              <Button className="w-full bg-crypto-blue hover:bg-crypto-blue/90 text-white">
                <ShoppingCart size={16} className="mr-2" />
                Sell
              </Button>
            </Link>
          </div>

          <ServicesGrid />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default TransferBottomSheet;
