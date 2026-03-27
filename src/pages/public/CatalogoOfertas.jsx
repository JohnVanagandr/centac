import React from "react";
import { programasData } from "../../data/ofertaData";
import CardOferta from "../../components/sections/Public/Shared/CardOferta"; 

const CatalogoOfertas = () => {  
  console.log(programasData);
  
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Cabecera de la página */}
      <div className="bg-navy py-16 text-center mb-16 px-4">
        <h1 className="font-display text-4xl md:text-5xl font-black text-white uppercase mb-4">
          Catálogo de <span className="text-brand">Programas</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Conoce toda nuestra oferta de formación técnico-práctica y encuentra
          el camino perfecto para tu futuro profesional.
        </p>
      </div>

      {/* Grilla principal con TODAS las tarjetas */}
      <div className="max-w-7xl mx-auto px-4">
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
