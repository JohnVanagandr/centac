import { useQuery } from '@tanstack/react-query';
import { prospectsService } from '@/services/private/prospectsService';

/**
 * Hook para obtener la lista paginada de prospectos/solicitudes
 * @param {number} page - Página actual
 * @param {string} status - Filtro de estado (vacío = todos)
 */
export const useProspects = (page = 1, status = '') => {
  return useQuery({
    queryKey: ['admin', 'prospects', page, status],
    queryFn: () => prospectsService.getAll(page, status),
    staleTime: 1000 * 60 * 5, // 5 minutos de cache
    keepPreviousData: true, // Evita parpadeos al cambiar de página
  });
};
