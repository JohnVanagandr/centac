import { useState, useEffect, useMemo, useCallback } from 'react';
import { ofertaRepository } from '@/repositories';

export const useOfertas = () => {
  const [ofertas, setOfertas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOfertas = async () => {
      setLoading(true);
      const data = await ofertaRepository.getAll();
      setOfertas(data || []);
      setLoading(false);
    };
    fetchOfertas();
  }, []);

  const featuredOfertas = useMemo(() => 
    ofertas.filter(o => o.isTop), 
  [ofertas]);

  const getOfertaBySlug = useCallback(async (slug) => {
    return await ofertaRepository.getBySlug(slug);
  }, []);

  return { 
    allOfertas: ofertas, 
    featuredOfertas, 
    getOfertaBySlug,
    loading 
  };
};