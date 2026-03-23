import { useState, useEffect, useCallback } from "react";

/**
 * Hook personalizado para manejar la lógica de cualquier carrusel/slider
 * @param {number} totalSlides - Cantidad total de elementos
 * @param {number} intervalTime - Tiempo en milisegundos para el cambio automático
 */
export const useSlider = (totalSlides, intervalTime = 6000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Usamos useCallback para que la función no se recree en cada renderizado
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Manejo del temporizador automático
  useEffect(() => {
    const timer = setInterval(nextSlide, intervalTime);

    // LIMPIEZA: Importante para evitar fugas de memoria y comportamientos erráticos
    return () => clearInterval(timer);
  }, [nextSlide, intervalTime]);

  return {
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
  };
};
