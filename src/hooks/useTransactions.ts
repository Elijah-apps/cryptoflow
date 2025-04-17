
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiService } from '../services/api/apiService';
import { toast } from 'sonner';

export function useTransactions() {
  return useQuery({
    queryKey: ['transactions'],
    queryFn: () => apiService.getTransactions(),
  });
}

export function useSendTransaction() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ 
      assetId, 
      amount, 
      recipientAddress 
    }: { 
      assetId: string; 
      amount: number; 
      recipientAddress: string;
    }) => {
      return apiService.sendTransaction(assetId, amount, recipientAddress);
    },
    onSuccess: () => {
      // Invalidate queries to refetch data
      queryClient.invalidateQueries({ queryKey: ['assets'] });
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
      toast.success('Transaction completed successfully!');
    },
    onError: (error) => {
      toast.error(`Transaction failed: ${error}`);
    }
  });
}
