
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-crypto-bg-dark text-white">
      <div className="text-center glass-card p-10 rounded-xl max-w-md">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-6">Oops! Page not found</p>
        <p className="text-gray-400 mb-6">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Link to="/dashboard">
          <Button className="bg-crypto-blue hover:bg-crypto-blue/90">
            <Home className="mr-2" size={16} />
            Return to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
