
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Tv } from "lucide-react";

const TV = () => {
  const [provider, setProvider] = useState("");
  const [tvPackage, setTvPackage] = useState("");
  const [smartcardNumber, setSmartcardNumber] = useState("");

  const providers = [
    { id: "dstv", name: "DSTV" },
    { id: "gotv", name: "GOtv" },
    { id: "startimes", name: "StarTimes" },
  ];

  const packages = {
    dstv: [
      { id: "premium", name: "Premium", price: 24500 },
      { id: "compact-plus", name: "Compact Plus", price: 16600 },
      { id: "compact", name: "Compact", price: 10500 },
    ],
    gotv: [
      { id: "max", name: "GOtv Max", price: 4850 },
      { id: "jolli", name: "GOtv Jolli", price: 3300 },
      { id: "jinja", name: "GOtv Jinja", price: 2250 },
    ],
    startimes: [
      { id: "nova", name: "Nova", price: 1200 },
      { id: "basic", name: "Basic", price: 1700 },
      { id: "classic", name: "Classic", price: 2500 },
    ],
  };

  const selectedPackages = provider ? packages[provider as keyof typeof packages] : [];

  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log("Subscribing with:", { provider, tvPackage, smartcardNumber });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">TV Subscriptions</h1>
        <p className="text-gray-400">Subscribe to your favorite TV packages</p>
      </div>

      <Card className="p-6 bg-crypto-card-dark border-white/10">
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-400">Select Provider</label>
            <Select value={provider} onValueChange={setProvider}>
              <SelectTrigger className="w-full mt-1">
                <SelectValue placeholder="Select a TV provider" />
              </SelectTrigger>
              <SelectContent>
                {providers.map((p) => (
                  <SelectItem key={p.id} value={p.id}>
                    {p.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm text-gray-400">Select Package</label>
            <Select value={tvPackage} onValueChange={setTvPackage}>
              <SelectTrigger className="w-full mt-1" disabled={!provider}>
                <SelectValue placeholder="Select a package" />
              </SelectTrigger>
              <SelectContent>
                {selectedPackages.map((p) => (
                  <SelectItem key={p.id} value={p.id}>
                    {p.name} - ₦{p.price.toLocaleString()}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm text-gray-400">Smartcard Number</label>
            <Input
              type="text"
              placeholder="Enter your smartcard number"
              value={smartcardNumber}
              onChange={(e) => setSmartcardNumber(e.target.value)}
              className="mt-1"
            />
          </div>

          <Button
            onClick={handleSubscribe}
            className="w-full"
            disabled={!provider || !tvPackage || !smartcardNumber}
          >
            <Tv className="mr-2" size={20} />
            Subscribe Now
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default TV;
