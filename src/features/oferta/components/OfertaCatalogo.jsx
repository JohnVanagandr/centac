import React from "react";
import OfertaGrid from "./OfertaGrid";
// 1. Importamos nuestro hook estrella y el spinner de UI
import { useOfertas } from "../hooks/useOfertas";
import { Spinner } from "@/components/ui/Feedback";


const OfertaCatalogo = () => {
  // 2. Extraemos 'allOfertas' (la lista completa) y el estado de carga
  const { allOfertas, loading } = useOfertas();

  // 3. Estado de Carga: Experiencia de usuario consistente
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Spinner size="lg" intent="primary" />
        <p className="mt-4 text-slate-500 font-medium">Cargando oferta educativa...</p>
      </div>
    );
  }

  // 4. Validación de seguridad: Si no hay ofertas registradas
  if (allOfertas.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-500 italic">No hay ofertas disponibles en este momento.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl px-2 py-12 mx-auto w-full">
      {/* Cabecera interna del catálogo */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h2 className="text-2xl font-black text-navy uppercase tracking-tight">
            Programas Disponibles
          </h2>
          <div className="h-1 w-20 bg-brand mt-1" />
        </div>
        
        <span className="bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full">
          {allOfertas.length} Resultados encontrados
        </span>
      </div>

      {/* 3. Pasamos los datos limpios a la vista */}
      <OfertaGrid items={allOfertas} />
    </div>
  );
};

export default OfertaCatalogo;