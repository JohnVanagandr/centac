import { useQuery } from "@tanstack/react-query";
import { leadService } from "@/services/leadService";

export const useProspects = (page, statusFilter) => {

  return useQuery({
    // 🌟 REGLA DE ORO: Si 'page' no está aquí adentro, la tabla JAMÁS cambiará de página.
    queryKey: ["prospects", page, statusFilter], 
    
    queryFn: () => leadService.getAllProspectos(page, statusFilter),
    
    // Evita que la tabla parpadee o se ponga en blanco mientras carga la nueva página
    keepPreviousData: true 
  });
};