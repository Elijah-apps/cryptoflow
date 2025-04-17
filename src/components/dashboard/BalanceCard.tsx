
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
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23F7931A'%3E%3Cpath d='M23.638 14.904c-1.602 6.425-8.113 10.342-14.542 8.736C2.67 22.033-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.4s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.415-.614.32.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.236-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.52 2.75 2.084v.006z'/%3E%3C/svg%3E",
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
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle cx='16' cy='16' r='16' fill='%23627EEA'/%3E%3Cg fill='%23FFF' fill-rule='nonzero'%3E%3Cpath fill-opacity='.602' d='M16.498 4v8.87l7.497 3.35z'/%3E%3Cpath d='M16.498 4L9 16.22l7.498-3.35z'/%3E%3Cpath fill-opacity='.602' d='M16.498 21.968v6.027L24 17.616z'/%3E%3Cpath d='M16.498 27.995v-6.028L9 17.616z'/%3E%3Cpath fill-opacity='.2' d='M16.498 20.573l7.497-4.353-7.497-3.348z'/%3E%3Cpath fill-opacity='.602' d='M9 16.22l7.498 4.353v-7.701z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
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
    icon: "data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 50C100 77.6127 77.6127 100 50 100C22.3873 100 0 77.6127 0 50C0 22.3873 22.3873 0 50 0C77.6185 0 100 22.3873 100 50Z' fill='%2315151B'/%3E%3Cpath d='M83.9631 61.4435L71.4546 75.013C71.2329 75.2529 70.9672 75.4736 70.6704 75.6072C70.3736 75.7409 70.0623 75.8438 69.7349 75.8438H17.6029C17.383 75.8438 17.1709 75.7772 16.9921 75.6533C16.8133 75.5295 16.6743 75.3539 16.594 75.1516C16.5138 74.9494 16.4956 74.729 16.5414 74.518C16.5872 74.3071 16.6946 74.1147 16.8491 73.9662L29.3186 60.433C29.5402 60.1932 29.8059 59.9725 30.1027 59.8388C30.3995 59.7052 30.7108 59.6023 31.0382 59.6023H83.2093C83.4291 59.6023 83.6413 59.6689 83.8201 59.7928C83.9989 59.9166 84.1379 60.0922 84.2181 60.2945C84.2984 60.4967 84.3166 60.7171 84.2708 60.9281C84.225 61.139 84.1175 61.3314 83.9631 61.4799V61.4435Z' fill='url(%23paint0_linear_1_39)'/%3E%3Cpath d='M83.9631 39.5068L71.4546 25.9373C71.2329 25.6974 70.9672 25.4767 70.6704 25.3431C70.3736 25.2094 70.0623 25.1064 69.7349 25.1064H17.6029C17.383 25.1064 17.1709 25.1731 16.9921 25.297C16.8133 25.4208 16.6743 25.5964 16.594 25.7987C16.5138 26.0009 16.4956 26.2213 16.5414 26.4322C16.5872 26.6432 16.6946 26.8356 16.8491 26.9841L29.3186 40.5172C29.5402 40.7571 29.8059 40.9778 30.1027 41.1114C30.3995 41.2451 30.7108 41.348 31.0382 41.348H83.2093C83.4291 41.348 83.6413 41.2814 83.8201 41.1575C83.9989 41.0336 84.1379 40.8581 84.2181 40.6558C84.2984 40.4536 84.3166 40.2331 84.2708 40.0222C84.225 39.8112 84.1175 39.6188 83.9631 39.4703V39.5068Z' fill='url(%23paint1_linear_1_39)'/%3E%3Cpath d='M16.85 50.523L29.3586 36.9535C29.5802 36.7136 29.8459 36.4929 30.1427 36.3593C30.4395 36.2256 30.7508 36.1227 31.0782 36.1227H83.2102C83.43 36.1227 83.6422 36.1894 83.821 36.3132C83.9998 36.4371 84.1388 36.6126 84.219 36.8149C84.2993 37.0171 84.3175 37.2376 84.2717 37.4485C84.2259 37.6595 84.1184 37.8519 83.964 38.0003L71.4944 51.5335C71.2728 51.7733 71.0071 51.994 70.7103 52.1277C70.4135 52.2613 70.1022 52.3643 69.7748 52.3643H17.6039C17.384 52.3643 17.1719 52.2976 16.993 52.1738C16.8142 52.0499 16.6753 51.8744 16.595 51.6721C16.5148 51.4699 16.4966 51.2494 16.5424 51.0385C16.5882 50.8275 16.6956 50.6351 16.85 50.4867V50.523Z' fill='url(%23paint2_linear_1_39)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_1_39' x1='78.6538' y1='56.9749' x2='31.965' y2='77.1812' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2300FFA3'/%3E%3Cstop offset='1' stop-color='%23DC1FFF'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_1_39' x1='78.6538' y1='35.0383' x2='31.965' y2='55.2447' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2300FFA3'/%3E%3Cstop offset='1' stop-color='%23DC1FFF'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint2_linear_1_39' x1='78.6538' y1='46.0249' x2='31.965' y2='66.2312' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2300FFA3'/%3E%3Cstop offset='1' stop-color='%23DC1FFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E",
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
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 2000'%3E%3Cpath d='M1000,0c552.26,0,1000,447.74,1000,1000S1552.24,2000,1000,2000,0,1552.26,0,1000,447.78,0,1000,0' fill='%2326a17b'/%3E%3Cpath d='M1123.42,866.76V718H1463.6V491.34H537.28V718H877.5V866.64C601,879.34,393.1,934.1,393.1,999.7s208,120.36,484.4,133.14v476.5h246V1132.8c276-12.74,483.48-67.46,483.48-133s-207.48-120.26-483.48-133m0,225.64v-0.12c-6.94.44-42.6,2.58-122,2.58-63.48,0-108.14-1.8-123.88-2.62v0.2C633.34,1081.66,451,1039.12,451,988.22S633.36,894.84,877.62,884V1050.1c16,1.1,61.76,3.8,124.92,3.8,75.86,0,114-3.16,121-3.8V884c243.8,10.86,425.72,53.44,425.72,104.16s-182,93.32-425.72,104.18' fill='%23fff'/%3E%3C/svg%3E",
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
                  <div className="w-6 h-6" dangerouslySetInnerHTML={{ __html: selectedWallet.icon }}></div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-crypto-card-dark border-white/10">
                {wallets.map((wallet) => (
                  <DropdownMenuItem
                    key={wallet.id}
                    onClick={() => setSelectedWallet(wallet)}
                    className={`flex items-center space-x-2 cursor-pointer ${selectedWallet.id === wallet.id ? 'bg-white/10' : ''}`}
                  >
                    <div className="w-5 h-5" dangerouslySetInnerHTML={{ __html: wallet.icon }}></div>
                    <span>{wallet.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold flex items-center">
            <div className="w-5 h-5 mr-2" dangerouslySetInnerHTML={{ __html: selectedWallet.icon }}></div>
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
