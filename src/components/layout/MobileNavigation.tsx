
import { Home, PieChart, Send, LayoutList, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const MobileNavigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: PieChart, label: "Portfolio", path: "/portfolio" },
    { icon: Send, label: "Transfer", path: "/transfer" },
    { icon: LayoutList, label: "Activity", path: "/activities" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-crypto-card-dark border-t border-white/10 z-10">
      <div className="flex justify-between px-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center py-3 px-4 ${
              isActive(item.path) ? "text-crypto-accent-blue" : "text-gray-400"
            }`}
          >
            <item.icon size={20} />
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNavigation;
