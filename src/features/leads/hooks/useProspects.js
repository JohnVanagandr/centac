// src/hooks/useProspects.js
import { useQuery } from "@tanstack/react-query";
import { leadService } from "@/services/leadService";

export const useProspects = (filters) => {
  const { page = 1, status = "", search = "" } = filters;  

  return useQuery({
    // La llave ahora reacciona a los 3 filtros
    queryKey: ["prospects", page, status, search], 
    
    queryFn: () => leadService.getAllProspectos({ page, status, search }),
    
    keepPreviousData: true,
    staleTime: 1000 * 60 * 5, // Mantiene los datos frescos por 5 mins para evitar peticiones innecesarias
  });
};

export const useProspectSummary = () => {
  return useQuery({
    queryKey: ["prospects-summary"], 
    queryFn: () => leadService.getSummary(),
    // Mantenemos la data fresca por 5 minutos para no saturar la base de datos
    // con cálculos de agregación cada vez que el usuario cambie de página.
    staleTime: 1000 * 60 * 5, 
  });
};