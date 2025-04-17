
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BuyCrypto from "@/components/p2p/BuyCrypto";
import SellCrypto from "@/components/p2p/SellCrypto";

interface TradingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: "buy" | "sell";
}

const TradingModal = ({ isOpen, onClose, initialTab = "buy" }: TradingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-crypto-bg-dark border-white/10">
        <DialogHeader>
          <DialogTitle>Trade Crypto</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue={initialTab} className="w-full">
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
      </DialogContent>
    </Dialog>
  );
};

export default TradingModal;
