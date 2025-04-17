
import { Home, PieChart, Send, LayoutList, Settings, Wallet, Repeat } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

// Define wallet balances
const wallets = [
  { name: "Bitcoin", symbol: "BTC", balance: 0.45, value: 8723.42 },
  { name: "Ethereum", symbol: "ETH", balance: 2.35, value: 3120.25 },
  { name: "Solana", symbol: "SOL", balance: 15.75, value: 577.01 },
  { name: "USDT", symbol: "USDT", balance: 1250.50, value: 1250.50 },
];

const Sidebar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { icon: Home, label: "Home", path: "/dashboard" },
    { icon: PieChart, label: "Portfolio", path: "/dashboard/portfolio" },
    { icon: Repeat, label: "P2P", path: "/dashboard/p2p" },
    { icon: LayoutList, label: "Activities", path: "/dashboard/activities" },
    { icon: Send, label: "Send/Receive", path: "/dashboard/transfer" },
    { icon: Settings, label: "Settings", path: "/dashboard/settings" },
  ];

  // Calculate total balance
  const totalBalance = wallets.reduce((total, wallet) => total + wallet.value, 0);

  return (
    <motion.aside 
      className="w-64 border-r border-white/10 h-screen flex flex-col"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <Link to="/dashboard" className="flex items-center space-x-2">
          <Wallet className="w-8 h-8 text-crypto-accent-blue" />
          <h1 className="text-xl font-bold crypto-gradient-text">CryptoFlow</h1>
        </Link>
      </div>
      
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <motion.li 
              key={item.path}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to={item.path}
                className={`flex items-center space-x-3 p-3 rounded-xl transition-all ${
                  isActive(item.path)
                    ? "bg-crypto-blue/20 text-crypto-accent-blue"
                    : "hover:bg-white/5 text-gray-300"
                }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
                {isActive(item.path) && (
                  <motion.div
                    className="absolute left-0 w-1 h-8 bg-crypto-accent-blue rounded-r-full"
                    layoutId="sidebar-indicator"
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
      
      <motion.div 
        className="p-4 border-t border-white/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <div className="glass-card rounded-xl p-4 hover:shadow-lg transition-all">
          <p className="text-sm text-gray-400">Total Balance</p>
          <p className="text-xl font-bold crypto-gradient-text">
            ${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
          <div className="mt-4 space-y-2">
            {wallets.map((wallet, index) => (
              <motion.div 
                key={wallet.symbol} 
                className="flex justify-between text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.1), duration: 0.2 }}
              >
                <span className="text-gray-400">{wallet.symbol}</span>
                <span>{wallet.balance} {wallet.symbol}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.aside>
  );
};

export default Sidebar;
