import React from "react";
import PublicLayout from "@/layouts/PublicLayout";
import {OfertaCatalogo} from '@/features/oferta';

const CatalogoOfertas = () => {    
  return (
    <PublicLayout
        category="Academia"
        title="Oferta Académica"
        description="Explora nuestros programas de formación técnica y tecnológica diseñados para las demandas del mercado laboral actual."
    >
      <OfertaCatalogo />
      
    </PublicLayout>
  );
};

export default CatalogoOfertas;
