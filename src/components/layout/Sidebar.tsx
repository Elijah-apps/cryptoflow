
import { Home, PieChart, Send, LayoutList, Settings, Wallet, Repeat } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

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
    { icon: Home, label: "Home", path: "/" },
    { icon: PieChart, label: "Portfolio", path: "/portfolio" },
    { icon: Repeat, label: "P2P", path: "/p2p" },
    { icon: LayoutList, label: "Activities", path: "/activities" },
    { icon: Send, label: "Send/Receive", path: "/transfer" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  // Calculate total balance
  const totalBalance = wallets.reduce((total, wallet) => total + wallet.value, 0);

  return (
    <aside className="w-64 border-r border-white/10 h-screen flex flex-col">
      <div className="p-6">
        <Link to="/" className="flex items-center space-x-2">
          <Wallet className="w-8 h-8 text-crypto-accent-blue" />
          <h1 className="text-xl font-bold crypto-gradient-text">CryptoFlow</h1>
        </Link>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center space-x-3 p-3 rounded-xl transition-colors ${
                  isActive(item.path)
                    ? "bg-crypto-blue/20 text-crypto-accent-blue"
                    : "hover:bg-white/5 text-gray-300"
                }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-white/10">
        <div className="glass-card rounded-xl p-4">
          <p className="text-sm text-gray-400">Total Balance</p>
          <p className="text-xl font-bold crypto-gradient-text">
            ${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
          <div className="mt-4 space-y-2">
            {wallets.map((wallet) => (
              <div key={wallet.symbol} className="flex justify-between text-sm">
                <span className="text-gray-400">{wallet.symbol}</span>
                <span>{wallet.balance} {wallet.symbol}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
