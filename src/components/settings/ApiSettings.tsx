
import { ExternalLink, Database, RefreshCw } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";

interface ApiEndpoint {
  name: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  endpoint: string;
  description: string;
  status: "online" | "offline" | "deprecated";
}

const ApiSettings = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const apiEndpoints: ApiEndpoint[] = [
    {
      name: "Get User Profile",
      method: "GET",
      endpoint: "/api/userProfile",
      description: "Retrieves the current user profile including personal information and wallet address",
      status: "online"
    },
    {
      name: "Get Wallet Address",
      method: "GET",
      endpoint: "/api/walletAddress",
      description: "Retrieves the wallet address for the current user",
      status: "online"
    },
    {
      name: "Get Assets",
      method: "GET",
      endpoint: "/api/assets",
      description: "Retrieves a list of all assets/cryptocurrencies in the user's portfolio",
      status: "online"
    },
    {
      name: "Get Asset By ID",
      method: "GET",
      endpoint: "/api/assets/{id}",
      description: "Retrieves details for a specific asset by its ID",
      status: "online"
    },
    {
      name: "Get Transactions",
      method: "GET",
      endpoint: "/api/transactions",
      description: "Retrieves a list of all transactions for the current user",
      status: "online"
    },
    {
      name: "Send Transaction",
      method: "POST",
      endpoint: "/api/sendTransaction",
      description: "Creates and processes a new cryptocurrency transaction",
      status: "online"
    }
  ];
  
  const refreshApiStatus = () => {
    setIsRefreshing(true);
    
    // Simulate API check
    setTimeout(() => {
      setIsRefreshing(false);
      toast.success("API status refreshed successfully");
    }, 1500);
  };
  
  const getStatusColor = (status: ApiEndpoint["status"]) => {
    switch (status) {
      case "online":
        return "bg-crypto-green/10 text-crypto-green border-crypto-green/20";
      case "offline":
        return "bg-crypto-red/10 text-crypto-red border-crypto-red/20";
      case "deprecated":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
    }
  };
  
  return (
    <div className="glass-card rounded-xl p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold flex items-center">
          <Database size={18} className="mr-2" />
          API Endpoints
        </h2>
        
        <Button 
          variant="outline" 
          size="sm"
          className="border-white/10 bg-crypto-card-dark flex items-center"
          onClick={refreshApiStatus}
          disabled={isRefreshing}
        >
          <RefreshCw size={14} className={`mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
          {isRefreshing ? 'Refreshing...' : 'Refresh Status'}
        </Button>
      </div>
      
      <p className="text-sm text-gray-400">
        These are the available API endpoints for your crypto wallet. You can use these endpoints to integrate with external services.
      </p>
      
      <div className="rounded-lg overflow-hidden border border-white/10">
        <Table>
          <TableHeader className="bg-crypto-card-dark">
            <TableRow className="border-white/10">
              <TableHead className="text-white">Endpoint</TableHead>
              <TableHead className="text-white">Method</TableHead>
              <TableHead className="text-white">Description</TableHead>
              <TableHead className="text-white text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {apiEndpoints.map((endpoint) => (
              <TableRow key={endpoint.endpoint} className="border-white/10 hover:bg-white/5">
                <TableCell className="font-medium">
                  <div>
                    <div className="font-bold">{endpoint.name}</div>
                    <div className="text-xs text-gray-400 flex items-center mt-1">
                      {endpoint.endpoint}
                      <ExternalLink size={12} className="ml-1" />
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={`${
                      endpoint.method === 'GET'
                        ? 'bg-crypto-blue/10 text-crypto-blue border-crypto-blue/20'
                        : endpoint.method === 'POST'
                        ? 'bg-crypto-green/10 text-crypto-green border-crypto-green/20'
                        : endpoint.method === 'PUT'
                        ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                        : 'bg-crypto-red/10 text-crypto-red border-crypto-red/20'
                    }`}
                  >
                    {endpoint.method}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm">{endpoint.description}</TableCell>
                <TableCell className="text-right">
                  <Badge
                    variant="outline"
                    className={getStatusColor(endpoint.status)}
                  >
                    {endpoint.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="bg-crypto-blue/10 border border-crypto-blue/20 rounded-lg p-4 text-sm">
        <h3 className="font-bold mb-2">API Documentation</h3>
        <p className="text-gray-300 mb-3">
          Full API documentation is available for developers who want to integrate with our platform.
        </p>
        <Button 
          variant="outline" 
          className="bg-transparent border-crypto-blue text-crypto-blue hover:bg-crypto-blue/10"
        >
          View Documentation
          <ExternalLink size={14} className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default ApiSettings;
