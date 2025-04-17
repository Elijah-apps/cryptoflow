
import { useQuery } from '@tanstack/react-query';
import { apiService } from '../services/api/apiService';

export function useUserProfile() {
  return useQuery({
    queryKey: ['userProfile'],
    queryFn: () => apiService.getUserProfile(),
  });
}

export function useWalletAddress() {
  return useQuery({
    queryKey: ['walletAddress'],
    queryFn: () => apiService.getWalletAddress(),
  });
}
