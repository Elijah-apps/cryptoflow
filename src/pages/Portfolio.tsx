
import CryptoChart from "@/components/crypto/CryptoChart";
import { ArrowUpRight, ArrowDownRight, TrendingUp, Wallet, PieChart, Settings } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Mock data for assets
const assets = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23F7931A'%3E%3Cpath d='M23.638 14.904c-1.602 6.425-8.113 10.342-14.542 8.736C2.67 22.033-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.4s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.415-.614.32.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.236-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.52 2.75 2.084v.006z'/%3E%3C/svg%3E",
    balance: 0.45,
    value: 8723.42,
    change: 1.2,
    price: 19385.37,
    trend: 'up' as const,
    color: "#F7931A"
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle cx='16' cy='16' r='16' fill='%23627EEA'/%3E%3Cg fill='%23FFF' fill-rule='nonzero'%3E%3Cpath fill-opacity='.602' d='M16.498 4v8.87l7.497 3.35z'/%3E%3Cpath d='M16.498 4L9 16.22l7.498-3.35z'/%3E%3Cpath fill-opacity='.602' d='M16.498 21.968v6.027L24 17.616z'/%3E%3Cpath d='M16.498 27.995v-6.028L9 17.616z'/%3E%3Cpath fill-opacity='.2' d='M16.498 20.573l7.497-4.353-7.497-3.348z'/%3E%3Cpath fill-opacity='.602' d='M9 16.22l7.498 4.353v-7.701z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
    balance: 2.35,
    value: 3120.25,
    change: -0.8,
    price: 1327.77,
    trend: 'down' as const,
    color: "#627EEA"
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    logo: "data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 50C100 77.6127 77.6127 100 50 100C22.3873 100 0 77.6127 0 50C0 22.3873 22.3873 0 50 0C77.6185 0 100 22.3873 100 50Z' fill='%2315151B'/%3E%3Cpath d='M83.9631 61.4435L71.4546 75.013C71.2329 75.2529 70.9672 75.4736 70.6704 75.6072C70.3736 75.7409 70.0623 75.8438 69.7349 75.8438H17.6029C17.383 75.8438 17.1709 75.7772 16.9921 75.6533C16.8133 75.5295 16.6743 75.3539 16.594 75.1516C16.5138 74.9494 16.4956 74.729 16.5414 74.518C16.5872 74.3071 16.6946 74.1147 16.8491 73.9662L29.3186 60.433C29.5402 60.1932 29.8059 59.9725 30.1027 59.8388C30.3995 59.7052 30.7108 59.6023 31.0382 59.6023H83.2093C83.4291 59.6023 83.6413 59.6689 83.8201 59.7928C83.9989 59.9166 84.1379 60.0922 84.2181 60.2945C84.2984 60.4967 84.3166 60.7171 84.2708 60.9281C84.225 61.139 84.1175 61.3314 83.9631 61.4799V61.4435Z' fill='url(%23paint0_linear_1_39)'/%3E%3Cpath d='M83.9631 39.5068L71.4546 25.9373C71.2329 25.6974 70.9672 25.4767 70.6704 25.3431C70.3736 25.2094 70.0623 25.1064 69.7349 25.1064H17.6029C17.383 25.1064 17.1709 25.1731 16.9921 25.297C16.8133 25.4208 16.6743 25.5964 16.594 25.7987C16.5138 26.0009 16.4956 26.2213 16.5414 26.4322C16.5872 26.6432 16.6946 26.8356 16.8491 26.9841L29.3186 40.5172C29.5402 40.7571 29.8059 40.9778 30.1027 41.1114C30.3995 41.2451 30.7108 41.348 31.0382 41.348H83.2093C83.4291 41.348 83.6413 41.2814 83.8201 41.1575C83.9989 41.0336 84.1379 40.8581 84.2181 40.6558C84.2984 40.4536 84.3166 40.2331 84.2708 40.0222C84.225 39.8112 84.1175 39.6188 83.9631 39.4703V39.5068Z' fill='url(%23paint1_linear_1_39)'/%3E%3Cpath d='M16.85 50.523L29.3586 36.9535C29.5802 36.7136 29.8459 36.4929 30.1427 36.3593C30.4395 36.2256 30.7508 36.1227 31.0782 36.1227H83.2102C83.43 36.1227 83.6422 36.1894 83.821 36.3132C83.9998 36.4371 84.1388 36.6126 84.219 36.8149C84.2993 37.0171 84.3175 37.2376 84.2717 37.4485C84.2259 37.6595 84.1184 37.8519 83.964 38.0003L71.4944 51.5335C71.2728 51.7733 71.0071 51.994 70.7103 52.1277C70.4135 52.2613 70.1022 52.3643 69.7748 52.3643H17.6039C17.384 52.3643 17.1719 52.2976 16.993 52.1738C16.8142 52.0499 16.6753 51.8744 16.595 51.6721C16.5148 51.4699 16.4966 51.2494 16.5424 51.0385C16.5882 50.8275 16.6956 50.6351 16.85 50.4867V50.523Z' fill='url(%23paint2_linear_1_39)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_1_39' x1='78.6538' y1='56.9749' x2='31.965' y2='77.1812' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2300FFA3'/%3E%3Cstop offset='1' stop-color='%23DC1FFF'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_1_39' x1='78.6538' y1='35.0383' x2='31.965' y2='55.2447' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2300FFA3'/%3E%3Cstop offset='1' stop-color='%23DC1FFF'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint2_linear_1_39' x1='78.6538' y1='46.0249' x2='31.965' y2='66.2312' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2300FFA3'/%3E%3Cstop offset='1' stop-color='%23DC1FFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E",
    balance: 15.75,
    value: 577.01,
    change: 3.5,
    price: 36.63,
    trend: 'up' as const,
    color: "#14F195"
  },
  {
    id: "cardano",
    name: "Cardano",
    symbol: "ADA",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000' xml:space='preserve'%3E%3Ccircle cx='500' cy='500' r='500' fill='%230033ad'/%3E%3Cpath fill='%23fff' d='M359.3 400.8c-4.4 0-8.7-2.3-10.9-6.4-3.3-6-1-13.6 5-16.8 45.2-24.7 96.7-37.8 149.9-37.8 53.2 0 104.6 13.1 149.8 37.8 6 3.3 8.3 10.8 5 16.8-3.3 6-10.8 8.3-16.8 5-41.3-22.6-88.4-34.6-138-34.6s-96.7 12-138 34.6c-1.9 1-3.9 1.4-6 1.4zM222.1 320.8c-4.4 0-8.7-2.3-10.9-6.4-3.3-6-1-13.6 5-16.8 85.3-46.6 182.5-71.3 283.8-71.3 101.4 0 198.5 24.6 283.9 71.3 6 3.3 8.3 10.8 5 16.8-3.3 6-10.8 8.3-16.8 5-81-44.3-173.2-67.7-272.1-67.7s-191.1 23.4-272.1 67.7c-1.8 1-3.8 1.4-5.8 1.4zM644.9 597.2c-4.3 0-8.5-2.2-10.9-6.2-3.4-6-1.3-13.5 4.6-16.9 19.9-11.4 32.2-32.2 32.2-54.6 0-34.9-30.1-63.2-67.1-63.2s-67.1 28.3-67.1 63.2c0 22.4 12.3 43.2 32.2 54.6 6 3.4 8.1 10.9 4.6 16.9-3.4 6-10.9 8.1-16.9 4.6-26.5-15.1-42.9-42.9-42.9-76.1 0-46.9 40.4-85.2 90.1-85.2s90.1 38.2 90.1 85.2c0 33.2-16.4 61-42.9 76.1-2 1.1-4.1 1.6-6 1.6zM500 621.6c-11.3 0-20.5-9.2-20.5-20.5s9.2-20.5 20.5-20.5 20.5 9.2 20.5 20.5-9.2 20.5-20.5 20.5zM500 689.4c-11.3 0-20.5-9.2-20.5-20.5s9.2-20.5 20.5-20.5 20.5 9.2 20.5 20.5c0 11.3-9.2 20.5-20.5 20.5zM500 757.2c-11.3 0-20.5-9.2-20.5-20.5s9.2-20.5 20.5-20.5 20.5 9.2 20.5 20.5-9.2 20.5-20.5 20.5zM500 553.8c-11.3 0-20.5-9.2-20.5-20.5s9.2-20.5 20.5-20.5 20.5 9.2 20.5 20.5-9.2 20.5-20.5 20.5zM432.3 587.7c-11.3 0-20.5-9.2-20.5-20.5s9.2-20.5 20.5-20.5 20.5 9.2 20.5 20.5-9.2 20.5-20.5 20.5zM364.5 621.6c-11.3 0-20.5-9.2-20.5-20.5s9.2-20.5 20.5-20.5 20.5 9.2 20.5 20.5-9.2 20.5-20.5 20.5zM432.3 655.5c-11.3 0-20.5-9.2-20.5-20.5s9.2-20.5 20.5-20.5 20.5 9.2 20.5 20.5-9.2 20.5-20.5 20.5zM364.5 689.4c-11.3 0-20.5-9.2-20.5-20.5s9.2-20.5 20.5-20.5 20.5 9.2 20.5 20.5c.1 11.3-9.1 20.5-20.5 20.5zM567.7 587.7c-11.3 0-20.5-9.2-20.5-20.5s9.2-20.5 20.5-20.5 20.5 9.2 20.5 20.5-9.2 20.5-20.5 20.5zM635.5 621.6c-11.3 0-20.5-9.2-20.5-20.5s9.2-20.5 20.5-20.5 20.5 9.2 20.5 20.5-9.2 20.5-20.5 20.5zM567.7 655.5c-11.3 0-20.5-9.2-20.5-20.5s9.2-20.5 20.5-20.5 20.5 9.2 20.5 20.5-9.2 20.5-20.5 20.5zM635.5 689.4c-11.3 0-20.5-9.2-20.5-20.5s9.2-20.5 20.5-20.5 20.5 9.2 20.5 20.5c0 11.3-9.2 20.5-20.5 20.5zM364.5 553.8c-11.3 0-20.5-9.2-20.5-20.5s9.2-20.5 20.5-20.5 20.5 9.2 20.5 20.5-9.2 20.5-20.5 20.5zM635.5 553.8c-11.3 0-20.5-9.2-20.5-20.5s9.2-20.5 20.5-20.5 20.5 9.2 20.5 20.5-9.2 20.5-20.5 20.5zM355.2 598.8c-4.4 0-8.7-2.3-10.9-6.4-3.3-6-1-13.6 5-16.8 41.3-22.6 88.4-34.6 138-34.6 4.9 0 9.7.1 14.5.3 7 .4 12.2 6.3 11.8 13.3-.4 7-6.3 12.2-13.3 11.8-4.3-.2-8.6-.3-13-.3-45.4 0-88.7 11-127.1 31.7-2 1.2-4.1 1.7-6 1.7zM640.7 799.3c-1.9 0-3.8-.4-5.6-1.3-79.4-43.3-133.5-125-143.6-216.9-.9-8.3-1.4-16.8-1.4-25.3 0-31.9 6.2-62.8 18.5-91.8 3.1-7.3 11.5-10.7 18.8-7.6 7.3 3.1 10.7 11.5 7.6 18.8-10.8 25.3-16.3 52.3-16.3 80.6 0 7.5.4 15 1.3 22.3 8.9 81.2 57.1 153.6 127.3 191.6 6.2 3.4 8.4 11.2 5 17.3-2.2 4.1-6.5 6.5-11 6.5-2.1 0-4.2-.5-6.1-1.6 0 0 .1 0 0 0-80.4-45.4-134.5-130.1-143.3-225.8-.8-8.3-1.2-16.8-1.2-25.3 0-38.8 8.3-77.3 24.1-112.8 2.5-5.7 8.2-9.4 14.5-9.4h.5c8.8.3 15.7 7.7 15.4 16.5-.3 8.5-7.2 15.1-15.6 15.1h-.5l1 .5-.5-1.2c-14 31.2-21.4 65.3-21.4 99.8 0 7.5.4 15 1.1 22.3 7.7 84.4 53.6 158.4 122.6 198.6 6.1 3.6 8.2 11.4 4.6 17.6-2.4 4-6.7 6.3-11.2 6.3z'/%3E%3Cpath fill='%23fff' d='M366.9 798c-2 0-3.9-.5-5.7-1.4-6.2-3.1-8.7-10.7-5.6-16.9 36.8-73.3 112.3-118.8 196.1-118.8 5.5 0 10.9.2 16.4.6 6.9.5 12.1 6.5 11.6 13.5-.5 6.9-6.5 12.1-13.5 11.6-4.9-.4-9.7-.5-14.6-.5-74.8 0-142.1 40.5-175.1 105.9-2.2 4.4-6.7 7-11.3 7h-.1c-4.6 0-9-2.6-11.2-7-38-75.8-116.2-122.8-201.4-122.8-7 0-11.5-1-20.9-1.5-6.9-.4-12.3-6.2-11.9-13.2.4-6.9 6.2-12.3 13.2-11.9 10.6.6 16.1 1.8 24.2 1.8 95.8 0 183.1 52.6 225.4 137.4 47.4-89.5 144.6-142.2 245.6-131.7 6.9.7 12 7 11.3 14-.7 6.9-7 12-14 11.3-90.2-9.4-176.2 36.9-219.1 117.9-2.2 4.3-6.5 6.8-11.2 6.8 0-.1-1.3.1-1 0-7.1.1-12.3-6-12.3-13.2z'/%3E%3C/svg%3E",
    balance: 500,
    value: 200.0,
    change: -2.1,
    price: 0.40,
    trend: 'down' as const,
    color: "#0033AD"
  },
];

const Portfolio = () => {
  const totalValue = assets.reduce((total, asset) => total + asset.value, 0);
  
  return (
    <div className="space-y-6 pb-20 sm:pb-0">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div>
          <h1 className="text-2xl font-bold">Portfolio</h1>
          <p className="text-gray-400">Track and manage your crypto assets</p>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="glass-card p-2 rounded-lg hover:bg-white/10">
            <PieChart size={20} className="text-crypto-accent-blue" />
          </button>
          <button className="glass-card p-2 rounded-lg hover:bg-white/10">
            <Settings size={20} className="text-crypto-accent-blue" />
          </button>
        </div>
      </div>
      
      <div className="glass-card rounded-xl p-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <p className="text-gray-400">Total Portfolio Value</p>
            <h2 className="text-3xl font-bold">${totalValue.toLocaleString()}</h2>
            <div className="flex items-center mt-1 text-sm">
              <span className="text-crypto-green flex items-center">
                <ArrowUpRight size={14} className="mr-1" />
                +5.34%
              </span>
              <span className="text-gray-400 ml-2">24h change</span>
            </div>
          </div>
          
          <div className="mt-4 md:mt-0 flex space-x-3">
            <button className="action-button bg-crypto-blue px-4 py-2">
              <TrendingUp size={16} className="mr-1 inline-block" />
              Trade
            </button>
            <button className="action-button bg-crypto-purple px-4 py-2">
              <Wallet size={16} className="mr-1 inline-block" />
              Deposit
            </button>
          </div>
        </div>
        
        <div className="mt-8">
          <Tabs defaultValue="week" className="w-full">
            <div className="flex justify-between items-center mb-4">
              <TabsList className="bg-crypto-card-dark">
                <TabsTrigger value="day">Day</TabsTrigger>
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="month">Month</TabsTrigger>
                <TabsTrigger value="year">Year</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="day">
              <CryptoChart trend="volatile" color="#14B8A6" height={240} />
            </TabsContent>
            <TabsContent value="week">
              <CryptoChart trend="up" color="#3B82F6" height={240} />
            </TabsContent>
            <TabsContent value="month">
              <CryptoChart trend="up" color="#8B5CF6" height={240} />
            </TabsContent>
            <TabsContent value="year">
              <CryptoChart trend="up" color="#EC4899" height={240} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <div>
        <h2 className="text-xl font-bold mb-4">Your Assets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {assets.map((asset) => (
            <div key={asset.id} className="glass-card rounded-xl p-4 hover-scale">
              <div className="flex items-center">
                <div className="w-10 h-10 mr-3 rounded-full overflow-hidden">
                  <div dangerouslySetInnerHTML={{ __html: asset.logo }} className="w-full h-full" />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{asset.name}</h3>
                    <Badge 
                      variant="outline" 
                      className={`${
                        asset.change >= 0 
                          ? 'bg-crypto-green/10 text-crypto-green border-crypto-green/20' 
                          : 'bg-crypto-red/10 text-crypto-red border-crypto-red/20'
                      }`}
                    >
                      {asset.change >= 0 ? '+' : ''}{asset.change}%
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm text-gray-400">{asset.balance} {asset.symbol}</span>
                    <span className="text-sm font-medium">${asset.value.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <CryptoChart trend={asset.trend} color={asset.color} height={100} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
