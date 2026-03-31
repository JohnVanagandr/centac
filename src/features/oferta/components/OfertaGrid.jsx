import React from "react";
import CardOferta from "./CardOferta";

const OfertaGrid = ({ items = [] }) => {
  // Verificación de seguridad por si no hay datos
  if (!items || items.length === 0) {
    return (
      <div className="w-full py-10 text-center text-slate-400 font-medium">
        No hay ofertas disponibles para mostrar.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {items.map((oferta) => (
        <CardOferta
          key={oferta.id || oferta.slug}
          // --- DATOS PRINCIPALES ---
          title={oferta.title}
          subtitle={oferta.subtitle}
          desc={oferta.desc}
          img={oferta.img}
          
          // --- METADATOS Y DISEÑO ---
          iconName={oferta.iconName}
          isTop={oferta.isTop}
          slug={oferta.slug}
          
          // --- INFORMACIÓN TÉCNICA Y LEGAL ---
          duration={oferta.duration}
          modality={oferta.modality}
          resolution={oferta.resolution}
          titleObtained={oferta.titleObtained}
        />
      ))}
    </div>
  );
};

export default OfertaGrid;