import { useState, useEffect, useMemo } from 'react';
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

  return { 
    allOfertas: ofertas, 
    featuredOfertas, 
    loading 
  };
};