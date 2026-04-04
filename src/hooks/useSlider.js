import { useState, useEffect } from 'react';
import { sliderRepository } from '@/repositories';

export const useSliderData = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSlides = async () => {
      const data = await sliderRepository.getAll();
      setSlides(data);
      setLoading(false);
    };
    fetchSlides();
  }, []);

  return { slides, loading };
};