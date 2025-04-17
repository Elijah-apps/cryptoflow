
import { useState } from "react";
import { ArrowUpRight, ArrowDownLeft, Clock, Calendar, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for transactions
const transactions = [
  {
    id: "tx1",
    type: "receive",
    amount: 0.05,
    symbol: "BTC",
    value: 968.55,
    from: "0x8a1b...3f7d",
    to: "Your Wallet",
    timestamp: "2h ago",
    date: "Apr 16, 2025",
    status: "completed",
    hash: "0x3f7d8a1b3f7d8a1b3f7d8a1b3f7d8a1b3f7d8a1b3f7d8a1b"
  },
  {
    id: "tx2",
    type: "send",
    amount: 0.75,
    symbol: "ETH",
    value: 994.50,
    from: "Your Wallet",
    to: "0x3e7c...9a2b",
    timestamp: "Yesterday",
    date: "Apr 15, 2025",
    status: "completed",
    hash: "0x9a2b3e7c9a2b3e7c9a2b3e7c9a2b3e7c9a2b3e7c9a2b3e7c"
  },
  {
    id: "tx3",
    type: "receive",
    amount: 5.5,
    symbol: "SOL",
    value: 201.68,
    from: "0xf21a...7e9c",
    to: "Your Wallet",
    timestamp: "Apr 15",
    date: "Apr 15, 2025",
    status: "completed",
    hash: "0x7e9cf21a7e9cf21a7e9cf21a7e9cf21a7e9cf21a7e9cf21a"
  },
  {
    id: "tx4",
    type: "send",
    amount: 0.01,
    symbol: "BTC",
    value: 193.85,
    from: "Your Wallet",
    to: "0x6b9d...1c4e",
    timestamp: "Apr 12",
    date: "Apr 12, 2025",
    status: "pending",
    hash: "0x1c4e6b9d1c4e6b9d1c4e6b9d1c4e6b9d1c4e6b9d1c4e6b9d"
  },
  {
    id: "tx5",
    type: "receive",
    amount: 125,
    symbol: "ADA",
    value: 50.00,
    from: "0x2d5e...8f3a",
    to: "Your Wallet",
    timestamp: "Apr 10",
    date: "Apr 10, 2025",
    status: "completed",
    hash: "0x8f3a2d5e8f3a2d5e8f3a2d5e8f3a2d5e8f3a2d5e8f3a2d5e"
  },
  {
    id: "tx6",
    type: "send",
    amount: 1.2,
    symbol: "SOL",
    value: 43.96,
    from: "Your Wallet",
    to: "0xa4b7...c9d2",
    timestamp: "Apr 8",
    date: "Apr 8, 2025",
    status: "completed",
    hash: "0xc9d2a4b7c9d2a4b7c9d2a4b7c9d2a4b7c9d2a4b7c9d2a4b7"
  },
];

const Activities = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  return (
    <div className="space-y-6 pb-20 sm:pb-0">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-2xl font-bold">Activity</h1>
          <p className="text-gray-400">View your transaction history</p>
        </div>
      </div>
      
      <div className="glass-card rounded-xl p-6">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <TabsList className="bg-crypto-card-dark">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="send">Send</TabsTrigger>
              <TabsTrigger value="receive">Receive</TabsTrigger>
            </TabsList>
            
            <div className="flex w-full sm:w-auto gap-2">
              <div className="relative flex-1 sm:flex-none">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input
                  placeholder="Search transactions"
                  className="pl-9 bg-crypto-card-dark border-white/10"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
              
              <Button variant="outline" className="border-white/10 bg-crypto-card-dark">
                <Filter size={16} />
              </Button>
            </div>
          </div>
          
          <TabsContent value="all">
            <div className="space-y-4">
              {transactions
                .filter(tx => 
                  tx.symbol.toLowerCase().includes(searchTerm.toLowerCase()) || 
                  tx.hash.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  tx.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  tx.to.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((tx) => (
                  <div key={tx.id} className="glass-card rounded-xl p-4 hover:bg-white/5 transition-colors">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 mr-3 rounded-full flex items-center justify-center ${
                        tx.type === "receive" ? "bg-crypto-green/10" : "bg-crypto-blue/10"
                      }`}>
                        {tx.type === "receive" ? (
                          <ArrowDownLeft size={20} className="text-crypto-green" />
                        ) : (
                          <ArrowUpRight size={20} className="text-crypto-blue" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                          <div>
                            <h3 className="font-medium capitalize">{tx.type} {tx.symbol}</h3>
                            <div className="flex items-center text-sm text-gray-400 mt-1">
                              <Clock size={14} className="mr-1" />
                              <span>{tx.timestamp}</span>
                              <span className="mx-2">•</span>
                              <span className={`crypto-tag ${
                                tx.status === "completed" ? "bg-crypto-green/10 text-crypto-green" : 
                                "bg-yellow-500/10 text-yellow-500"
                              }`}>
                                {tx.status}
                              </span>
                            </div>
                          </div>
                          
                          <div className="sm:text-right mt-2 sm:mt-0">
                            <p className={`font-medium ${tx.type === "receive" ? "text-crypto-green" : ""}`}>
                              {tx.type === "receive" ? "+" : "-"}{tx.amount} {tx.symbol}
                            </p>
                            <p className="text-sm text-gray-400">
                              ${tx.value.toLocaleString()}
                            </p>
                          </div>
                        </div>
                        
                        <div className="mt-3 pt-3 border-t border-white/10">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                            <div>
                              <p className="text-gray-400">From</p>
                              <p className="font-mono">{tx.from}</p>
                            </div>
                            <div>
                              <p className="text-gray-400">To</p>
                              <p className="font-mono">{tx.to}</p>
                            </div>
                          </div>
                          <div className="mt-2">
                            <p className="text-gray-400 text-sm">Transaction Hash</p>
                            <p className="font-mono text-sm truncate">{tx.hash}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="send">
            <div className="space-y-4">
              {transactions
                .filter(tx => tx.type === "send")
                .filter(tx => 
                  tx.symbol.toLowerCase().includes(searchTerm.toLowerCase()) || 
                  tx.hash.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  tx.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  tx.to.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((tx) => (
                  <div key={tx.id} className="glass-card rounded-xl p-4 hover:bg-white/5 transition-colors">
                    <div className="flex items-center">
                      <div className="w-10 h-10 mr-3 rounded-full flex items-center justify-center bg-crypto-blue/10">
                        <ArrowUpRight size={20} className="text-crypto-blue" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                          <div>
                            <h3 className="font-medium capitalize">{tx.type} {tx.symbol}</h3>
                            <div className="flex items-center text-sm text-gray-400 mt-1">
                              <Clock size={14} className="mr-1" />
                              <span>{tx.timestamp}</span>
                              <span className="mx-2">•</span>
                              <span className={`crypto-tag ${
                                tx.status === "completed" ? "bg-crypto-green/10 text-crypto-green" : 
                                "bg-yellow-500/10 text-yellow-500"
                              }`}>
                                {tx.status}
                              </span>
                            </div>
                          </div>
                          
                          <div className="sm:text-right mt-2 sm:mt-0">
                            <p className="font-medium">
                              -{tx.amount} {tx.symbol}
                            </p>
                            <p className="text-sm text-gray-400">
                              ${tx.value.toLocaleString()}
                            </p>
                          </div>
                        </div>
                        
                        <div className="mt-3 pt-3 border-t border-white/10">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                            <div>
                              <p className="text-gray-400">From</p>
                              <p className="font-mono">{tx.from}</p>
                            </div>
                            <div>
                              <p className="text-gray-400">To</p>
                              <p className="font-mono">{tx.to}</p>
                            </div>
                          </div>
                          <div className="mt-2">
                            <p className="text-gray-400 text-sm">Transaction Hash</p>
                            <p className="font-mono text-sm truncate">{tx.hash}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="receive">
            <div className="space-y-4">
              {transactions
                .filter(tx => tx.type === "receive")
                .filter(tx => 
                  tx.symbol.toLowerCase().includes(searchTerm.toLowerCase()) || 
                  tx.hash.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  tx.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  tx.to.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((tx) => (
                  <div key={tx.id} className="glass-card rounded-xl p-4 hover:bg-white/5 transition-colors">
                    <div className="flex items-center">
                      <div className="w-10 h-10 mr-3 rounded-full flex items-center justify-center bg-crypto-green/10">
                        <ArrowDownLeft size={20} className="text-crypto-green" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                          <div>
                            <h3 className="font-medium capitalize">{tx.type} {tx.symbol}</h3>
                            <div className="flex items-center text-sm text-gray-400 mt-1">
                              <Clock size={14} className="mr-1" />
                              <span>{tx.timestamp}</span>
                              <span className="mx-2">•</span>
                              <span className={`crypto-tag ${
                                tx.status === "completed" ? "bg-crypto-green/10 text-crypto-green" : 
                                "bg-yellow-500/10 text-yellow-500"
                              }`}>
                                {tx.status}
                              </span>
                            </div>
                          </div>
                          
                          <div className="sm:text-right mt-2 sm:mt-0">
                            <p className="font-medium text-crypto-green">
                              +{tx.amount} {tx.symbol}
                            </p>
                            <p className="text-sm text-gray-400">
                              ${tx.value.toLocaleString()}
                            </p>
                          </div>
                        </div>
                        
                        <div className="mt-3 pt-3 border-t border-white/10">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                            <div>
                              <p className="text-gray-400">From</p>
                              <p className="font-mono">{tx.from}</p>
                            </div>
                            <div>
                              <p className="text-gray-400">To</p>
                              <p className="font-mono">{tx.to}</p>
                            </div>
                          </div>
                          <div className="mt-2">
                            <p className="text-gray-400 text-sm">Transaction Hash</p>
                            <p className="font-mono text-sm truncate">{tx.hash}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Activities;
