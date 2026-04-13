import React from "react";
import { useParams } from "react-router-dom";
// 🌟 Importamos el hook especializado
import { useOfertaBySlug } from '@/features/oferta/hooks/useOfertas';
import OfertaDetalleView from "./OfertaDetalleView";
import { Spinner, Placeholder } from "@/components/ui/Feedback";

const OfertaDetalleContenedor = () => {
  const { slug } = useParams();

  // 🌟 LA CLAVE: No pedimos una función, pedimos los datos directamente.
  // TanStack Query detecta el slug y dispara la petición automáticamente.
  const { 
    data: oferta, 
    isLoading: loading, 
    isError 
  } = useOfertaBySlug(slug);

  // 1. Estado de Carga (Gestionado automáticamente por el motor)
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Spinner size="lg" intent="primary" />
        <p className="mt-4 text-slate-500 font-medium">Cargando oferta educativa...</p>
      </div>
    );
  }

  // 2. Estado de Error o No Encontrado
  if (isError || !oferta) {
    return (
      <Placeholder 
        title="Oferta no encontrada" 
        description="Lo sentimos, el programa académico que buscas no existe o fue movido." 
      />
    );
  }

  // 3. Renderizado de Éxito
  return <OfertaDetalleView data={oferta} />;
};

export default OfertaDetalleContenedor;