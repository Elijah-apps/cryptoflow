
import { Asset, Transaction, UserProfile } from './types';

// Mock Assets/Wallets data
export const mockAssets: Asset[] = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    balance: 0.45,
    value: 8723.42,
    change: 1.2,
    price: 19385.37,
    walletType: "Bitcoin Wallet",
    color: "#F7931A",
    address: "0x1a2b...3c4d",
    trend: 'up'
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    balance: 2.35,
    value: 3120.25,
    change: -0.8,
    price: 1327.77,
    walletType: "Ethereum Wallet",
    color: "#627EEA",
    address: "0x3e7c...9a2b",
    trend: 'down'
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    balance: 15.75,
    value: 577.01,
    change: 3.5,
    price: 36.63,
    walletType: "Solana Wallet",
    color: "#14F195",
    address: "0xf21a...7e9c",
    trend: 'up'
  },
  {
    id: "usdt",
    name: "USDT",
    symbol: "USDT",
    balance: 1250.50,
    value: 1250.50,
    change: 0.0,
    price: 1.00,
    walletType: "USDT Wallet",
    color: "#26A17B",
    address: "0x6b9d...1c4e",
    trend: 'volatile'
  },
];

// Mock transactions data
export const mockTransactions: Transaction[] = [
  {
    id: "tx1",
    type: "receive",
    amount: 0.05,
    symbol: "BTC",
    value: 968.55,
    from: "0x8a1b...3f7d",
    to: "You",
    timestamp: "2h ago",
    status: "completed"
  },
  {
    id: "tx2",
    type: "send",
    amount: 0.75,
    symbol: "ETH",
    value: 994.50,
    from: "You",
    to: "0x3e7c...9a2b",
    timestamp: "Yesterday",
    status: "completed"
  },
  {
    id: "tx3",
    type: "receive",
    amount: 5.5,
    symbol: "SOL",
    value: 201.68,
    from: "0xf21a...7e9c",
    to: "You",
    timestamp: "Apr 15",
    status: "completed"
  },
  {
    id: "tx4",
    type: "send",
    amount: 0.01,
    symbol: "BTC",
    value: 193.85,
    from: "You",
    to: "0x6b9d...1c4e",
    timestamp: "Apr 12",
    status: "pending"
  },
];

// Mock user profile data
export const mockUserProfile: UserProfile = {
  id: "user1",
  username: "cryptouser",
  email: "user@example.com",
  walletAddress: "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t",
  totalBalance: 13671.18, // Sum of all assets
  changePercentage: 2.4
};
