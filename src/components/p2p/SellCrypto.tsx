
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

const SellCrypto = () => {
  return (
    <div className="space-y-6">
      <div className="glass-card p-6">
        <div className="flex items-center gap-2 text-yellow-500">
          <AlertCircle size={20} />
          <span>KYC verification required to become a seller</span>
        </div>
        
        <div className="mt-4">
          <Button variant="secondary" className="w-full sm:w-auto">
            Complete KYC Verification
          </Button>
        </div>
      </div>

      <div className="glass-card p-6">
        <h3 className="text-lg font-medium mb-4">Seller Requirements</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Badge variant="outline">Level 1</Badge>
            <span>Complete basic KYC verification</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline">Level 2</Badge>
            <span>Government ID verification</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline">Level 3</Badge>
            <span>Advanced verification for higher limits</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellCrypto;
