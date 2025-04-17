
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone } from "lucide-react";

const Airtime = () => {
  const [amount, setAmount] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle airtime purchase
  };

  return (
    <div className="space-y-6 pb-20 sm:pb-0">
      <div>
        <h1 className="text-2xl font-bold">Buy Airtime</h1>
        <p className="text-gray-400">Purchase airtime for any network</p>
      </div>

      <div className="max-w-md mx-auto">
        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center mb-6">
            <Phone className="mr-2" size={20} />
            <h2 className="text-xl font-bold">Airtime Purchase</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Phone Number</label>
              <Input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter phone number"
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
              Buy Airtime
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Airtime;
