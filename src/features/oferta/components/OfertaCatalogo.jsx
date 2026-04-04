import React from "react";
// 1. Aquí centralizamos la LÓGICA (saber las ofertas)
import { ofertaData } from "@/data"; 
// 2. Traemos la VISTA (el componente tonto que pinta las tarjetas)
import OfertaGrid from "./OfertaGrid";

const OfertaCatalogo = () => {
  const ofertas = ofertaData;

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
          {ofertas.length} Resultados encontrados
        </span>
      </div>

      {/* 3. Pasamos los datos limpios a la vista */}
      <OfertaGrid items={ofertas} />
    </div>
  );
};

export default OfertaCatalogo;