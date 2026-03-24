import React from "react";
import { Link } from "react-router-dom"; // Importamos Link
import Reveal from "../common/Reveal";
import { programasData } from "../../data/ofertaData";
import CardOferta from "../common/CardOferta"; // Importamos la pieza de Lego

const Oferta = () => {
const programasDestacados = programasData.filter((prog) => prog.isTop === true);
  // Si prefieres mostrar las 4 primeras, cambia a: programasData.slice(0, 4);

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
          <Link
            to="/ofertas"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-black text-white uppercase tracking-wider transition-all duration-300 transform rounded-full bg-navy hover:bg-brand hover:-translate-y-1 shadow-xl hover:shadow-brand/40 group"
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
          </Link>
        </div>
      </Reveal>
    </section>
  );
};

export default Oferta;
