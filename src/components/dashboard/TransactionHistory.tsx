
import { ArrowUpRight, ArrowDownLeft, Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTransactions } from "@/hooks/useTransactions";

const TransactionHistory = () => {
  const { data: transactions, isLoading, error } = useTransactions();
  
  if (isLoading) {
    return (
      <div className="glass-card rounded-xl p-4">
        <p className="text-center py-10">Loading transactions...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="glass-card rounded-xl p-4">
        <p className="text-center py-10 text-crypto-red">Failed to load transactions</p>
      </div>
    );
  }
  
  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <div className="p-4 border-b border-white/10 flex justify-between items-center">
        <h2 className="font-bold text-lg">Recent Transactions</h2>
        <Link to="/activities" className="text-crypto-accent-blue text-sm flex items-center">
          View All
          <ChevronRight size={16} />
        </Link>
      </div>
      
      <div className="divide-y divide-white/10">
        {transactions && transactions.map((tx) => (
          <div key={tx.id} className="p-4 hover:bg-white/5 transition-colors">
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
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium capitalize">{tx.type}</h3>
                    <div className="flex items-center text-sm text-gray-400">
                      <span>{tx.from} → {tx.to}</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-medium">
                      {tx.type === "receive" ? "+" : "-"}{tx.amount} {tx.symbol}
                    </p>
                    <p className="text-sm text-gray-400">
                      ${tx.value.toLocaleString()}
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-between mt-2">
                  <div className="flex items-center text-xs text-gray-400">
                    <Clock size={12} className="mr-1" />
                    {tx.timestamp}
                  </div>
                  
                  <div className={`crypto-tag ${
                    tx.status === "completed" ? "bg-crypto-green/10 text-crypto-green" : 
                    tx.status === "pending" ? "bg-yellow-500/10 text-yellow-500" :
                    "bg-crypto-red/10 text-crypto-red"
                  }`}>
                    {tx.status}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
