
import { Asset, Transaction, UserProfile } from './types';
import { mockAssets, mockTransactions, mockUserProfile } from './mockData';

// Simulates API request delay
const simulateDelay = (ms = 800) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * API Service class that abstracts all API communication
 * This implements a mock version now, but can be easily replaced with real API calls
 */
class ApiService {
  // Assets/Wallets endpoints
  async getAssets(): Promise<Asset[]> {
    await simulateDelay();
    return [...mockAssets];
  }

  async getAssetById(id: string): Promise<Asset | undefined> {
    await simulateDelay();
    return mockAssets.find(asset => asset.id === id);
  }

  // Transactions endpoints
  async getTransactions(): Promise<Transaction[]> {
    await simulateDelay();
    return [...mockTransactions];
  }

  async sendTransaction(
    assetId: string, 
    amount: number, 
    recipientAddress: string
  ): Promise<{ success: boolean; txId?: string; error?: string }> {
    await simulateDelay(1500);
    
    // Simple validation
    if (amount <= 0) {
      return { success: false, error: "Amount must be greater than 0" };
    }
    
    const asset = mockAssets.find(a => a.id === assetId);
    if (!asset) {
      return { success: false, error: "Asset not found" };
    }
    
    if (amount > asset.balance) {
      return { success: false, error: "Insufficient funds" };
    }
    
    // In a real implementation, this would create the transaction
    const txId = `tx${Date.now()}`;
    return { success: true, txId };
  }

  // User profile endpoints
  async getUserProfile(): Promise<UserProfile> {
    await simulateDelay();
    return { ...mockUserProfile };
  }

  async getWalletAddress(): Promise<string> {
    await simulateDelay();
    return mockUserProfile.walletAddress;
  }
}

// Export a singleton instance
export const apiService = new ApiService();
