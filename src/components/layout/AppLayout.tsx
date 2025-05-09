
import { useState } from "react";
import { Outlet } from "react-router-dom";
import MobileNavigation from "./MobileNavigation";
import Sidebar from "./Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

const AppLayout = () => {
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen h-screen flex bg-crypto-bg-dark text-white">
      {!isMobile && <Sidebar />}
      
      <main className="flex-1 overflow-auto">
        <div className="h-full container px-4 py-6 max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>

      {isMobile && <MobileNavigation />}
    </div>
  );
};

export default AppLayout;
