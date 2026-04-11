import React from "react";
import { Reveal } from "@/components/utils";
import { pilaresData } from "@/mocks/estrategiaData";
import { IconMapper } from "@/components/ui/Icons";


const PilarCard = ({
  iconName,
  titleTop,
  titleBrand,
  desc,
  spacingClasses,
}) => {
  return (
    <article
      className={`px-8 text-center group transition-all duration-500 ${spacingClasses}`}
    >
      {/* PRIMARY: El icono brilla en azul eléctrico al interactuar */}
      <div className="text-slate-400 mb-8 transform group-hover:scale-110 group-hover:text-primary transition-all duration-500 flex justify-center">
        <div className="p-4 rounded-2xl bg-slate-50 group-hover:bg-primary/5 transition-colors">
          <IconMapper iconName={iconName} className="w-12 h-12" />
        </div>
      </div>

      <h4 className="font-display text-2xl font-black text-navy uppercase leading-tight mb-4">
        {titleTop}
        <br />
        <span className="text-brand">{titleBrand}</span>
      </h4>

      <p className="font-body text-sm text-slate-500 leading-relaxed max-w-[200px] mx-auto">
        {desc}
      </p>
    </article>
  );
};

// 2. EL COMPONENTE PRINCIPAL
export const Estrategia = () => {
  return (
    <section
      id="estrategia"
      className="py-24 bg-white relative z-20 border-b border-slate-100"
    >
      <Reveal className="max-w-7xl mx-auto px-6">
        {/* Cabecera de la sección */}
        <div className="text-center mb-20">
          <span className="text-brand font-display font-black tracking-[0.3em] uppercase text-xs mb-4 flex items-center justify-center gap-4">
            <div className="w-12 h-[2px] bg-brand/30"></div>
            Lo que nos define
            <div className="w-12 h-[2px] bg-brand/30"></div>
          </span>

          <h3 className="font-display text-4xl lg:text-6xl font-black text-navy uppercase mb-8 tracking-tight">
            Nuestra{" "}
            <span className="bg-gradient-to-r from-brand to-gold bg-clip-text text-transparent">
              Estrategia Educativa
            </span>
          </h3>

          <p className="text-slate-500 font-body max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Estructuramos nuestro modelo de enseñanza en cuatro pilares
            fundamentales para garantizar un proceso formativo{" "}
            <span className="text-navy font-bold">ágil, pertinente</span> y
            conectado con el sector productivo.
          </p>
        </div>

        {/* Grilla dinámica con divisores refinados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 md:gap-y-0 divide-y md:divide-y-0 lg:divide-x divide-slate-100">
          {pilaresData.map((pilar) => (
            <PilarCard
              key={pilar.id}
              iconName={pilar.iconName}
              titleTop={pilar.titleTop}
              titleBrand={pilar.titleBrand}
              desc={pilar.desc}
              spacingClasses={pilar.spacingClasses}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
};
