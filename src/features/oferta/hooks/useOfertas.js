import { useQuery } from '@tanstack/react-query';
import { ofertaService } from '@/services/ofertaService';

export const useOfertas = () => {
  return useQuery({
    queryKey: ['ofertas'],
    queryFn: () => ofertaService.listarOfertas(),
    staleTime: 1000 * 60 * 10,
  });
};

export const useFeaturedOfertas = () => {
  return useQuery({
    queryKey: ['ofertas'], 
    queryFn: () => ofertaService.listarOfertas(),
    staleTime: 1000 * 60 * 10,
    select: (ofertas) => ofertas.filter(o => o.isTop),
  });
};

export const useOfertaBySlug = (slug) => {
  return useQuery({
    queryKey: ['oferta', slug],
    queryFn: () => ofertaService.obtenerPorSlug(slug),
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
  });
};