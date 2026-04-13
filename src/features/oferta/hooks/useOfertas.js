import { useQuery } from '@tanstack/react-query';
import { ofertaService } from '@/services/ofertaService';

/**
 * 1. HOOK GENERAL: Obtiene toda la lista
 */
export const useOfertas = () => {
  return useQuery({
    queryKey: ['ofertas'],
    queryFn: () => ofertaService.listarOfertas(),
    staleTime: 1000 * 60 * 10, // 10 minutos
  });
};

/**
 * 2. HOOK ESPECIALIZADO: Ofertas Destacadas
 * 💡 Usamos 'select' para filtrar la misma caché sin hacer otra petición
 */
export const useFeaturedOfertas = () => {
  return useQuery({
    queryKey: ['ofertas'], // Usamos la misma llave para compartir la caché
    queryFn: () => ofertaService.listarOfertas(),
    staleTime: 1000 * 60 * 10,
    select: (ofertas) => ofertas.filter(o => o.isTop), // 🌟 Transformación atómica
  });
};

/**
 * 3. HOOK DETALLE: Búsqueda por Slug
 */
export const useOfertaBySlug = (slug) => {
  return useQuery({
    queryKey: ['oferta', slug],
    queryFn: () => ofertaService.obtenerPorSlug(slug),
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
  });
};