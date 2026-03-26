import React from "react";
import Reveal from "../../../common/Reveal";

const CourseAbout = ({ desc, highlights }) => {
  return (
    <section className="py-20 bg-gray-50 border-b border-gray-100">
      <Reveal className="max-w-7xl mx-auto px-4">
        {/* 1. Descripción Principal (Centrada como en tu PDF) */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-black text-navy uppercase mb-6">
            Acerca del <span className="text-brand">Programa</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            {desc}
          </p>
        </div>

        {/* 2. Tarjetas de Impacto (El reemplazo moderno a los óvalos) */}
        {highlights && highlights.length >= 2 && (
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Tarjeta Azul (Navy) */}
            <div className="bg-navy text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden group">
              {/* Elemento decorativo sutil de fondo */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>

              <p className="text-lg md:text-xl leading-relaxed font-light relative z-10">
                {highlights[0]}
              </p>
            </div>

            {/* Tarjeta Naranja (Brand) */}
            <div className="bg-brand text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-brand/20 hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden group">
              {/* Elemento decorativo sutil de fondo */}
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>

              <p className="text-lg md:text-xl leading-relaxed font-medium relative z-10">
                {highlights[1]}
              </p>
            </div>
          </div>
        )}
      </Reveal>
    </section>
  );
};

export default CourseAbout;
