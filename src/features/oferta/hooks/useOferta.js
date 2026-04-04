import { useMemo, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { programasData } from "@/data/ofertaData";

export const useOferta = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // 1. Lógica de búsqueda de datos (Memoizada para rendimiento)
  const programa = useMemo(() => {
    return programasData.find((prog) => prog.slug === slug);
  }, [slug]);

  // 2. Lógica de Scroll Suave (La que reemplaza a los enlaces #)
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // 3. (Opcional) Función para volver atrás si el programa no existe
  const goBack = useCallback(() => {
    navigate('/oferta');
  }, [navigate]);

  return {
    programa,
    slug,
    isValid: !!programa,
    scrollToSection,
    goBack
  };
};