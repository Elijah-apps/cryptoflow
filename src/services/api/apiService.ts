
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
  
  // Authentication endpoints
  async login(email: string, password: string): Promise<{ success: boolean; error?: string }> {
    await simulateDelay(1000);
    
    // Mock login validation
    if (!email || !password) {
      return { success: false, error: "Email and password are required" };
    }
    
    // In a real implementation, this would verify credentials
    return { success: true };
  }
  
  async signUp(name: string, email: string, password: string): Promise<{ success: boolean; error?: string }> {
    await simulateDelay(1500);
    
    // Mock signup validation
    if (!name || !email || !password) {
      return { success: false, error: "All fields are required" };
    }
    
    // In a real implementation, this would create a new user
    return { success: true };
  }
  
  async requestPasswordReset(email: string): Promise<{ success: boolean; error?: string }> {
    await simulateDelay(1000);
    
    // Mock validation
    if (!email) {
      return { success: false, error: "Email is required" };
    }
    
    // In a real implementation, this would send an OTP to the user's email
    return { success: true };
  }
  
  async verifyOTP(email: string, otp: string): Promise<{ success: boolean; error?: string }> {
    await simulateDelay(1000);
    
    // Mock OTP validation
    if (!email || !otp) {
      return { success: false, error: "Email and OTP are required" };
    }
    
    // In a real implementation, this would verify the OTP against the database
    // For demo purposes, we'll accept "123456" as the valid OTP
    if (otp === "123456") {
      return { success: true };
    }
    
    return { success: false, error: "Invalid OTP" };
  }
  
  async resetPassword(email: string, newPassword: string): Promise<{ success: boolean; error?: string }> {
    await simulateDelay(1000);
    
    // Mock validation
    if (!email || !newPassword) {
      return { success: false, error: "Email and new password are required" };
    }
    
    // In a real implementation, this would update the user's password
    return { success: true };
  }
  
  async updateUsername(newUsername: string): Promise<{ success: boolean; error?: string }> {
    await simulateDelay(1000);
    
    // Mock validation
    if (!newUsername) {
      return { success: false, error: "Username is required" };
    }
    
    // In a real implementation, this would update the user's name in the database
    mockUserProfile.username = newUsername;
    
    return { success: true };
  }
}

// Export a singleton instance
export const apiService = new ApiService();
