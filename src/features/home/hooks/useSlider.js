import { useState, useEffect, useCallback } from "react";
import { useQuery } from "@tanstack/react-query"; 
import { sliderService } from '@/services/sliderService';

export const useSlider = (intervalTime = 6000) => {
  
  // 1. GESTIÓN DE DATOS (Server State)
  const { 
    data: slides = [], 
    isLoading: loading,
    isError,
    error,
    refetch // Por si quiere un botón de "reintentar" en la UI
  } = useQuery({
    queryKey: ['sliders'], 
    queryFn: () => sliderService.obtenerSliders(),
    // Opcional: staleTime: 1000 * 60 * 10 (mantiene los sliders frescos por 10 min)
  });

  // 2. ESTADO LOCAL (Navegación del Carrusel)
  const [currentIndex, setCurrentIndex] = useState(0);

  // 3. LÓGICA DE NAVEGACIÓN (Memoizada para el temporizador)
  const nextSlide = useCallback(() => {
    if (slides.length === 0) return;
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    if (slides.length === 0) return;
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => setCurrentIndex(index);

  // 4. LÓGICA DE TEMPORIZADOR
  useEffect(() => {
    if (slides.length <= 1) return;
    const slideTimer = setInterval(nextSlide, intervalTime);
    return () => clearInterval(slideTimer);
  }, [nextSlide, intervalTime, slides.length]);

  return {
    slides, 
    loading,
    isError,
    error,
    refetch,
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
  };
};