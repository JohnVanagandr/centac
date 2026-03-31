import React from "react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/utils";
import { programasData } from "@/data/ofertaData";
import CardOferta from "@/components/sections/Public/Shared/CardOferta";
import Button from "@/components/ui/Navigation/Button";

const Oferta = () => {
  // Lógica de negocio: Filtramos solo los programas TOP
  const programasDestacados = programasData.filter(
    (prog) => prog.isTop === true,
  );

  return (
    // SLATE: Cambiamos bg-gray-50 por bg-slate-50
    <section id="oferta" className="py-24 bg-slate-50 flex-grow relative">
      {/* Patrón de puntos con un tono slate muy sutil para la textura */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <Reveal className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Cabecera de la Sección */}
        <div className="text-center mb-16">
          <span className="text-brand font-display font-black tracking-widest uppercase text-sm mb-2 block">
            Descubre tu camino
          </span>
          <h3 className="font-display text-4xl lg:text-5xl font-black text-navy uppercase tracking-tight">
            Programas Destacados
          </h3>
          <p className="text-slate-500 font-body mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Nuestros talleres permiten desarrollar prácticas en ambientes
            seguros, reales y con tecnología de estándar industrial.
          </p>
          <div className="w-20 h-1.5 bg-brand mx-auto mt-6 rounded-full opacity-80"></div>
        </div>

        {/* Cuadrícula de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programasDestacados.map((programa) => (
            <CardOferta key={programa.id} programa={programa} />
          ))}
        </div>

        {/* Llamado a la Acción Inferior */}
        <div className="mt-16 text-center">
          <div className="flex justify-center mt-12 pb-4">
            <Button
              as={Link}
              to="/ofertas"
              variant="outline"
              // 🌌 NAVY: Usamos nuestro color estructural para botones secundarios
              intent="navy"
              size="lg"
              className="group"
            >
              Explorar toda la oferta
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
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
