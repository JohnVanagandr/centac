import React from "react";
import { Link } from "react-router-dom"; // Importamos Link
import { Reveal } from "@/components/utils";
import { programasData } from "@/data/ofertaData";
import CardOferta from "@/components/sections/Public/Shared/CardOferta"; 
import { Button } from "@/components/ui/Navigation";

const Oferta = () => {
  const programasDestacados = programasData.filter((prog) => prog.isTop === true);  

  return (
    <section id="oferta" className="py-24 bg-gray-50 flex-grow relative">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <Reveal className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand font-bold tracking-widest uppercase text-sm mb-2 block">
            Descubre tu camino
          </span>
          <h3 className="font-display text-4xl lg:text-5xl font-black text-navy uppercase">
            Programas Destacados
          </h3>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Nuestros talleres permiten desarrollar prácticas en ambientes
            seguros y reales.
          </p>
          <div className="w-20 h-1.5 bg-brand mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Mapeamos usando el componente reutilizable */}
          {programasDestacados.map((programa) => (
            <CardOferta key={programa.id} programa={programa} />
          ))}
        </div>

        <div className="mt-16 text-center">
          {/* Reemplazamos <a> por <Link> apuntando a la nueva vista */}
          <div className="flex justify-center mt-12 pb-10">
            <Button
              as={Link}
              to="/ofertas"
              variant="outline" // Cambio clave: Outline para que sea más ligero
              intent="secondary" // Usamos tu azul Navy corporativo
              size="lg"
              className="group" // Para animar el icono
            >
              Explorar toda la oferta
              <svg
                className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Oferta;
