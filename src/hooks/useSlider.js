import { useState, useEffect, useCallback } from 'react';
import { sliderService } from '@/services/sliderService';

export const useSlider = (autoPlayInterval = 5000) => {
  // 1. Estado de los Datos
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // 2. Estado de la Navegación
  const [currentIndex, setCurrentIndex] = useState(0);

  // --------------------------------------------------------
  // LÓGICA DE PETICIÓN (API)
  // --------------------------------------------------------
  useEffect(() => {
    const fetchSlides = async () => {
      setLoading(true);
      const data = await sliderService.obtenerSliders();
      setSlides(data);
      setLoading(false);
    };

    fetchSlides();
  }, []);

  // --------------------------------------------------------
  // LÓGICA DE NAVEGACIÓN (Carrusel)
  // --------------------------------------------------------
  
  // Función para avanzar (memoizada con useCallback para no redibujar el useEffect innecesariamente)
  const nextSlide = useCallback(() => {
    if (slides.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  }, [slides.length]);

  // Función para retroceder
  const prevSlide = () => {
    if (slides.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  // Función para ir a un slide específico (los dots)
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // --------------------------------------------------------
  // LÓGICA DE AUTOPLAY
  // --------------------------------------------------------
  useEffect(() => {
    if (slides.length <= 1) return; // Si hay 0 o 1 slide, no hay nada que rotar

    const slideTimer = setInterval(nextSlide, autoPlayInterval);

    // Función de limpieza al desmontar el componente o al cambiar de slide
    return () => clearInterval(slideTimer);
  }, [nextSlide, autoPlayInterval, slides.length]);

  // --------------------------------------------------------
  // RETORNO DE LA HERRAMIENTA UNIFICADA
  // --------------------------------------------------------
  return { 
    slides, 
    loading, 
    currentIndex, 
    nextSlide, 
    prevSlide, 
    goToSlide 
  };
};