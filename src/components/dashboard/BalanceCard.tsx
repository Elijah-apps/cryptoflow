
import { ArrowUpRight, ChevronRight, Copy, Plus, Wallet } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

// Define wallet types and their data
const wallets = [
  {
    id: "btc",
    name: "Bitcoin",
    symbol: "BTC",
    address: "0x1a2b...3c4d",
    balance: 0.45,
    value: 8723.42,
    change: 1.2,
    color: "#F7931A"
  },
  {
    id: "eth",
    name: "Ethereum",
    symbol: "ETH",
    address: "0x3e7c...9a2b",
    balance: 2.35,
    value: 3120.25,
    change: -0.8,
    color: "#627EEA"
  },
  {
    id: "sol",
    name: "Solana",
    symbol: "SOL",
    address: "0xf21a...7e9c",
    balance: 15.75,
    value: 577.01,
    change: 3.5,
    color: "#14F195"
  },
  {
    id: "usdt",
    name: "USDT",
    symbol: "USDT",
    address: "0x6b9d...1c4e",
    balance: 1250.50,
    value: 1250.50,
    change: 0.0,
    color: "#26A17B"
  },
];

const BalanceCard = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [selectedWallet, setSelectedWallet] = useState(wallets[0]);

  const toggleBalance = () => {
    setShowBalance(!showBalance);
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(selectedWallet.address);
    toast.success("Address copied to clipboard");
  };

  const totalBalance = wallets.reduce((total, wallet) => total + wallet.value, 0);

  // Function to render wallet icon based on wallet type
  const renderWalletIcon = (walletId: string) => {
    switch (walletId) {
      case "btc":
        return <Wallet className="w-full h-full text-[#F7931A]" />;
      case "eth":
        return <Wallet className="w-full h-full text-[#627EEA]" />;
      case "sol":
        return <Wallet className="w-full h-full text-[#14F195]" />;
      case "usdt":
        return <Wallet className="w-full h-full text-[#26A17B]" />;
      default:
        return <Wallet className="w-full h-full" />;
    }
  };

  return (
    <div className="wallet-card relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-crypto-gradient opacity-10"
        style={{ filter: "blur(40px)" }}
      ></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-gray-300 text-sm font-medium">Total Balance</h2>
            <div className="flex items-center mt-1">
              <p className="text-3xl font-bold">
                {showBalance ? `$${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : "••••••••"}
              </p>
              <button 
                onClick={toggleBalance}
                className="ml-2 p-1 rounded-full hover:bg-white/10"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  {showBalance ? (
                    <>
                      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                      <line x1="2" x2="22" y1="2" y2="22" />
                    </>
                  ) : (
                    <>
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </>
                  )}
                </svg>
              </button>
            </div>
            <div className="flex items-center mt-1">
              <span className="text-crypto-green flex items-center text-xs font-medium">
                <ArrowUpRight size={14} className="mr-1" />
                +2.4%
              </span>
              <span className="text-xs text-gray-400 ml-2">24h change</span>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <DropdownMenu>
              <DropdownMenuTrigger className="hover:bg-white/10 rounded-full p-1">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6">
                    {renderWalletIcon(selectedWallet.id)}
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-crypto-card-dark border-white/10">
                {wallets.map((wallet) => (
                  <DropdownMenuItem
                    key={wallet.id}
                    onClick={() => setSelectedWallet(wallet)}
                    className={`flex items-center space-x-2 cursor-pointer ${selectedWallet.id === wallet.id ? 'bg-white/10' : ''}`}
                  >
                    <div className="w-5 h-5">
                      {renderWalletIcon(wallet.id)}
                    </div>
                    <span>{wallet.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold flex items-center">
            <div className="w-5 h-5 mr-2">
              {renderWalletIcon(selectedWallet.id)}
            </div>
            {selectedWallet.name} Wallet
          </h3>
          <div className="text-right">
            <p className="text-lg font-medium">
              {showBalance ? `${selectedWallet.balance} ${selectedWallet.symbol}` : "••••••••"}
            </p>
            <p className="text-sm text-gray-400">
              {showBalance ? `$${selectedWallet.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : "••••••••"}
            </p>
          </div>
        </div>
        
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-300">Wallet Address</p>
            <button 
              onClick={copyAddress}
              className="text-xs flex items-center text-crypto-accent-blue"
            >
              <Copy size={12} className="mr-1" />
              Copy
            </button>
          </div>
          <p className="text-sm font-mono mt-1">{selectedWallet.address}</p>
        </div>
        
        <div className="mt-6 flex space-x-2">
          <button className="action-button flex-1 bg-crypto-blue">
            Send
          </button>
          <button className="action-button flex-1 bg-crypto-purple">
            Receive
          </button>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
