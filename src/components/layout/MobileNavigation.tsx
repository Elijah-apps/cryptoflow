
import { Home, PieChart, Send, LayoutList, Settings, Repeat } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import TransferBottomSheet from "@/components/transfers/TransferBottomSheet";

const MobileNavigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname.includes(path);
  };

  const navItems = [
    { icon: Home, label: "Home", path: "/dashboard" },
    { icon: PieChart, label: "Portfolio", path: "/dashboard/portfolio" },
    { icon: Repeat, label: "P2P", path: "/dashboard/p2p" },
    { icon: LayoutList, label: "Activities", path: "/dashboard/activities" },
    { icon: Settings, label: "Settings", path: "/dashboard/settings" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-crypto-card-dark border-t border-white/10 z-10">
      <div className="flex justify-between items-center px-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center py-3 px-3 ${
              isActive(item.path) ? "text-crypto-accent-blue" : "text-gray-400"
            }`}
          >
            <item.icon size={20} />
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
        
        <div className="flex flex-col items-center py-2 px-3 relative">
          <div className="absolute -top-5">
            <TransferBottomSheet />
          </div>
          <Send size={20} className="opacity-0 mt-1" />
          <span className="text-xs mt-5 text-crypto-accent-blue">Transfer</span>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
