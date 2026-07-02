import { useQuery } from "@tanstack/react-query";
import { ofertasAdminService } from "@/services/private/ofertasAdminService";

export const useAdminOfertas = () => {
  return useQuery({
    queryKey: ["admin-ofertas"],
    queryFn: () => ofertasAdminService.getAll(),
    // Mantiene los datos en caché por 5 minutos para evitar peticiones redundantes
    staleTime: 1000 * 60 * 5, 
  });
};