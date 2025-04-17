
// Define types for our API responses and requests

// Asset/Wallet types
export interface Asset {
  id: string;
  name: string;
  symbol: string;
  balance: number;
  value: number;
  change: number;
  price: number;
  walletType?: string;
  color: string;
  address?: string;
  logo?: string;
  trend?: 'up' | 'down' | 'volatile';
}

// Transaction types
export interface Transaction {
  id: string;
  type: 'send' | 'receive';
  amount: number;
  symbol: string;
  value: number;
  from: string;
  to: string;
  timestamp: string;
  status: 'completed' | 'pending' | 'failed';
}

// User profile
export interface UserProfile {
  id: string;
  username: string;
  email: string;
  walletAddress: string;
  totalBalance: number;
  changePercentage: number;
}
