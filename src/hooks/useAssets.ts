
import { useQuery } from '@tanstack/react-query';
import { apiService } from '../services/api/apiService';

export function useAssets() {
  return useQuery({
    queryKey: ['assets'],
    queryFn: () => apiService.getAssets(),
  });
}

export function useAssetById(id: string | undefined) {
  return useQuery({
    queryKey: ['asset', id],
    queryFn: () => id ? apiService.getAssetById(id) : Promise.resolve(undefined),
    enabled: !!id, // Only run if id is provided
  });
}
