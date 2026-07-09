import { useQuery } from "@tanstack/react-query";
import { prospectsService } from "@/services/private/prospectsService";

export const useProspectsSummary = () => {
  return useQuery({
    queryKey: ["prospects-summary"],
    queryFn: () => prospectsService.getSummary(),
    staleTime: 1000 * 60 * 2, // Refresca en segundo plano cada 2 minutos
  });
};