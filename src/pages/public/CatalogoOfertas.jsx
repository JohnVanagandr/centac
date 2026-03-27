import React from "react";
import { programasData } from "../../data/ofertaData";
import CardOferta from "../../components/sections/Public/Shared/CardOferta"; 
import PageHeader from "@/components/ui/Layout/PageHeader"; 

const CatalogoOfertas = () => {    
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Cabecera de la página */}
      <PageHeader
        category="Academia"
        title="Oferta Académica"
        description="Explora nuestros programas de formación técnica y tecnológica diseñados para las demandas del mercado laboral actual."
      />
      <div className="max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold text-navy">
            Programas Disponibles
          </h2>
          <span className="text-slate-500 text-sm font-medium">
            Mostrando todos los resultados
          </span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {programasData.map((programa) => (
            <CardOferta key={programa.id} programa={programa} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogoOfertas;
