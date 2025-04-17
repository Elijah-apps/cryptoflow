
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Zap } from "lucide-react";

const Electricity = () => {
  const [meterNumber, setMeterNumber] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle electricity bill payment
  };

  return (
    <div className="space-y-6 pb-20 sm:pb-0">
      <div>
        <h1 className="text-2xl font-bold">Pay Electricity Bill</h1>
        <p className="text-gray-400">Purchase electricity units</p>
      </div>

      <div className="max-w-md mx-auto">
        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center mb-6">
            <Zap className="mr-2" size={20} />
            <h2 className="text-xl font-bold">Electricity Payment</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Meter Number</label>
              <Input
                type="text"
                value={meterNumber}
                onChange={(e) => setMeterNumber(e.target.value)}
                placeholder="Enter meter number"
                className="bg-crypto-card-dark border-white/10"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">Amount</label>
              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="bg-crypto-card-dark border-white/10"
              />
            </div>

            <Button 
              type="submit"
              className="w-full bg-crypto-gradient hover:opacity-90"
            >
              Pay Bill
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Electricity;
