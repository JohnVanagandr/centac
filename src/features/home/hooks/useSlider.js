import { useState, useEffect, useCallback } from "react";
import { sliderService } from '@/services/sliderService';

/**
 * Hook personalizado para manejar la lógica del carrusel y sus datos
 * @param {number} intervalTime - Tiempo en milisegundos para el cambio automático
 */
export const useSlider = (intervalTime = 6000) => {
  // 1. ESTADOS
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // --------------------------------------------------------
  // 1. LÓGICA DE PETICIÓN (Buscar en la API)
  // --------------------------------------------------------
  useEffect(() => {
    const fetchSlides = async () => {
      setLoading(true);
      const data = await sliderService.obtenerSliders();
      
      // ESCUDO PROTECTOR: Si la API falla, aseguramos un arreglo vacío
      setSlides(data || []); 
      setLoading(false);
    };

    fetchSlides();
  }, []);

  // --------------------------------------------------------
  // 2. LÓGICA DE NAVEGACIÓN (Botones y Flechas)
  // --------------------------------------------------------
  
  // Usamos slides.length en lugar de totalSlides
  const nextSlide = useCallback(() => {
    if (slides.length === 0) return;
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    if (slides.length === 0) return;
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // --------------------------------------------------------
  // 3. LÓGICA DE TEMPORIZADOR (Autoplay)
  // --------------------------------------------------------
  useEffect(() => {
    // Si no hay imágenes, o solo hay 1, no tiene sentido activar el temporizador
    if (slides.length <= 1) return;

    // Encendemos el cronómetro
    const slideTimer = setInterval(nextSlide, intervalTime);

    // LIMPIEZA: Apagamos el cronómetro si el usuario cambia de página
    return () => clearInterval(slideTimer);
    
  }, [nextSlide, intervalTime, slides.length]); // Se reinicia si cambian estas variables

  // --------------------------------------------------------
  // RETORNO DE HERRAMIENTAS
  // --------------------------------------------------------
  return {
    slides, 
    loading,
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
  };
};