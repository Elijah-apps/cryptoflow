
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Database } from "lucide-react";

const Data = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle data purchase
  };

  const dataPlans = [
    { id: "1", name: "1GB - 1 Day", price: "300" },
    { id: "2", name: "3GB - 7 Days", price: "1000" },
    { id: "3", name: "10GB - 30 Days", price: "3000" },
  ];

  return (
    <div className="space-y-6 pb-20 sm:pb-0">
      <div>
        <h1 className="text-2xl font-bold">Buy Data</h1>
        <p className="text-gray-400">Purchase mobile data bundles</p>
      </div>

      <div className="max-w-md mx-auto">
        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center mb-6">
            <Database className="mr-2" size={20} />
            <h2 className="text-xl font-bold">Data Bundle</h2>
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
              <label className="block text-sm text-gray-400 mb-1">Select Plan</label>
              <div className="space-y-2">
                {dataPlans.map((plan) => (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`w-full p-4 rounded-lg border ${
                      selectedPlan === plan.id
                        ? "border-crypto-accent-blue bg-crypto-accent-blue/10"
                        : "border-white/10 hover:border-white/20"
                    } transition-colors`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{plan.name}</span>
                      <span className="font-bold">₦{plan.price}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <Button 
              type="submit"
              className="w-full bg-crypto-gradient hover:opacity-90"
              disabled={!selectedPlan}
            >
              Buy Data
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Data;
