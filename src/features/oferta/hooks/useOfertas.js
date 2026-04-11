import { useState, useEffect, useMemo, useCallback } from 'react';
import { ofertaService } from '@/services/ofertaService';

export const useOfertas = () => {
  const [ofertas, setOfertas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOfertas = async () => {
      setLoading(true);
      
      const data = await ofertaService.listarOfertas();
      
      // Como el servicio destapa la caja, 'data' ya es el arreglo limpio (o un array vacío si falla)
      setOfertas(data || []);
      setLoading(false);
    };
    
    fetchOfertas();
  }, []);

  // Filtramos las ofertas destacadas (memorizado para rendimiento)
  const featuredOfertas = useMemo(() => 
    ofertas.filter(o => o.isTop), 
  [ofertas]);

  const getOfertaBySlug = useCallback(async (slug) => {
    return await ofertaService.obtenerPorSlug(slug);
  }, []);

  return { 
    allOfertas: ofertas, 
    featuredOfertas, 
    getOfertaBySlug,
    loading 
  };
};