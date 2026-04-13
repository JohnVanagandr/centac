import React from "react";
import OfertaGrid from "./OfertaGrid";
import { Spinner } from "@/components/ui/Feedback";
// 🌟 Importamos el hook especializado que usa el 'select'
import { useFeaturedOfertas } from '@/features/oferta/hooks/useOfertas';

const OfertaDestacada = () => {
  // 1. Extraemos 'data' renombrada a 'featuredOfertas'
  // 🌟 Importante: El motor de caché ya hizo el filtro por nosotros gracias al 'select'
  const { 
    data: featuredOfertas = [], 
    isLoading: loading,
    isError 
  } = useFeaturedOfertas();

  // 2. Estado de Carga (Spinner con color de marca)
  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <Spinner intent="brand" size="md" />
      </div>
    );
  }

  // 3. Manejo de error silencioso o placeholder (opcional)
  if (isError) return null;

  // 4. Si no hay destacadas, no renderizamos el bloque
  if (featuredOfertas.length === 0) return null;

  return (
    <>
      <OfertaGrid items={featuredOfertas} />
    </>
  );
};

export default OfertaDestacada;