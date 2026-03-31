import React from "react";
import { Reveal } from "@/components/utils";
import { aboutData } from "@/data/abouData";
import IconMapper from "@/components/ui/Icons/IconMapper";

const Nosotros = () => {
  return (
    <section id="nosotros" className="relative z-20 flex flex-col">
      {/* --- PARTE SUPERIOR: Trayectoria (Fondo Navy Deeper) --- */}
      <div className="relative py-24 lg:py-32 bg-navy-deeper overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581092160562-40aa08e29b83?w=1600&q=80"
            alt="Fondo taller industrial"
            className="w-full h-full object-cover opacity-15 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper via-navy-deeper/95 to-navy-deeper/40"></div>
        </div>

        <Reveal className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <span className="text-brand font-display font-black tracking-[0.3em] uppercase text-xs mb-6 block">
            Trayectoria y Excelencia
          </span>
          <h3 className="font-display text-4xl lg:text-7xl font-black text-white uppercase mb-20 leading-[1.1] tracking-tight">
            Formamos talento <br />
            <span className="text-primary-light">para el mundo real</span>
          </h3>

          {/* Grilla de Estadísticas con Divisores Slate */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {aboutData.map((stat) => (
              <div key={stat.id} className="px-6 pt-6 md:pt-0 group">
                <div className="font-display text-6xl lg:text-7xl font-black text-white mb-2 transition-transform group-hover:scale-110 duration-500">
                  {stat.value}
                </div>
                <div className="text-[10px] text-brand uppercase font-black tracking-[0.2em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* --- PARTE INFERIOR: Metodología (Fondo Slate-50) --- */}
      <div className="bg-slate-50 py-24 border-b border-slate-100 relative">
        {/* Detalle visual de fondo sutil */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-brand font-display font-black tracking-widest uppercase text-xs mb-3 block">
              Aprende Haciendo
            </span>
            <h3 className="font-display text-4xl lg:text-5xl font-black text-navy uppercase mb-6 tracking-tight">
              Nuestra Metodología
            </h3>
            <p className="text-slate-500 font-body text-lg md:text-xl leading-relaxed">
              Creemos que el aprendizaje se consolida cuando se aplica. Rompemos
              el esquema tradicional para acercarte desde el primer día a las{" "}
              <span className="text-navy font-bold">dinámicas reales</span> del
              mercado laboral.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Tarjeta 1: Escenarios Reales */}
            <Reveal>
              <article className="bg-white rounded-[2rem] p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group h-full">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary mb-8 transition-all duration-500">
                  <IconMapper iconName="tools" className="w-8 h-8" />
                </div>
                <h4 className="font-display text-2xl font-black text-navy mb-4 uppercase tracking-tight">
                  Escenarios Reales
                </h4>
                <p className="text-slate-500 font-body text-sm leading-relaxed">
                  Contamos con infraestructura moderna y herramientas
                  especializadas. Desarrolla tus habilidades en ambientes
                  controlados que simulan la exigencia real.
                </p>
              </article>
            </Reveal>

            {/* Tarjeta 2: La Tarjeta Premium (70/30) */}
            <Reveal>
              <article className="bg-navy rounded-[2rem] p-10 shadow-2xl shadow-navy/40 transform md:-translate-y-6 relative overflow-hidden group h-full flex flex-col border border-white/5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-full transition-transform group-hover:scale-125 duration-700"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-gold mb-8 shadow-inner">
                    <IconMapper iconName="chart" className="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-2xl lg:text-3xl font-black text-white mb-4 uppercase leading-none">
                    70% Práctica <br />
                    <span className="text-primary-light text-xl">
                      30% Teoría
                    </span>
                  </h4>
                  <p className="text-slate-300 font-body text-sm leading-relaxed mb-10">
                    Programas intensivos diseñados para maximizar tu ejecución.
                    Menos tiempo en el pupitre, más tiempo operando y creando
                    soluciones.
                  </p>
                </div>

                {/* Barra de Progreso Premium */}
                <div className="mt-auto relative z-10">
                  <div className="flex justify-between text-[10px] font-black text-white/50 uppercase tracking-widest mb-2">
                    <span>Enfoque Práctico</span>
                    <span className="text-gold">70%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden p-0.5 border border-white/5">
                    <div
                      className="h-full bg-gradient-to-r from-brand to-gold rounded-full relative"
                      style={{ width: "70%" }}
                    >
                      <div
                        className="absolute inset-0 bg-white/20 animate-shimmer"
                        style={{ backgroundSize: "200% 100%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>

            {/* Tarjeta 3: Acompañamiento Experto */}
            <Reveal>
              <article className="bg-white rounded-[2rem] p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group h-full">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary mb-8 transition-all duration-500">
                  <IconMapper iconName="users" className="w-8 h-8" />
                </div>
                <h4 className="font-display text-2xl font-black text-navy mb-4 uppercase tracking-tight">
                  Guía Experta
                </h4>
                <p className="text-slate-500 font-body text-sm leading-relaxed">
                  Profesionales activos en la industria. Recibirás orientación
                  personalizada paso a paso para dominar cada técnica con
                  precisión.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
