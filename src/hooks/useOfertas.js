import { useState, useEffect } from 'react';
import { ofertaRepository } from '@/repositories';

export const useOfertas = () => {
  const [ofertas, setOfertas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOfertas = async () => {
      const data = await ofertaRepository.getAll();
      setOfertas(data);
      setLoading(false);
    };
    fetchOfertas();
  }, []);

  return { ofertas, loading };
};