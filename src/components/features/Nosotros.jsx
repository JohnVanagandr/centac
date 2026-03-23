import React from "react";
import Reveal from "../common/Reveal";
import { aboutData } from "../../data/abouData";

const Nosotros = () => {


  return (
    <section id="nosotros" className="relative z-20 flex flex-col">
      {/* --- PARTE SUPERIOR: Trayectoria (Fondo Oscuro) --- */}
      <div className="relative py-24 lg:py-32 bg-navy-deeper overflow-hidden">
        {/* Fondo con imagen y degradado */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581092160562-40aa08e29b83?w=1600&q=80"
            alt="Taller CENTAC"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper via-navy-deeper/90 to-navy-deeper/40"></div>
        </div>

        {/* Contenido Superior Animado */}
        <Reveal className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="text-brand font-bold tracking-widest uppercase text-sm mb-6 block">
            Trayectoria y Excelencia
          </span>
          <h3 className="font-display text-4xl lg:text-6xl font-black text-white uppercase mb-20 leading-tight">
            Formamos talento <br />
            <span className="text-brand-light">para el mundo real</span>
          </h3>

          {/* Grilla de Estadísticas Dinámica */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {aboutData.map((stat) => (
              <div key={stat.id} className="px-4 pt-4 md:pt-0">
                <div className="font-display text-6xl lg:text-7xl font-black text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-xs text-brand uppercase font-bold tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* --- PARTE INFERIOR: Metodología (Fondo Claro) --- */}
      <div className="bg-gray-50 py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          {/* Cabecera Metodología */}
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span
              className="text-brand font-bold tracking-widest uppercase text-sm mb-2 block"
              aria-hidden="true"
            >
              Aprende Haciendo
            </span>
            <h3 className="font-display text-4xl lg:text-5xl font-black text-navy uppercase mb-6">
              Nuestra Metodología
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Creemos firmemente que el aprendizaje se consolida cuando se
              aplica. Rompemos el esquema tradicional para acercarte desde el
              primer día a las verdaderas dinámicas del mercado laboral y el
              sector productivo.
            </p>
          </Reveal>

          {/* Grilla de Tarjetas (Como son visualmente distintas, las maquetamos directamente) */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Tarjeta 1: Escenarios Reales */}
            <Reveal>
              <article className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-card transition-all duration-300 group h-full">
                <header>
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl shadow-sm flex items-center justify-center text-brand text-3xl mb-6 group-hover:scale-110 transition-transform">
                    {/* SVG Casco */}
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="font-display text-2xl font-black text-navy mb-3 uppercase">
                    Escenarios Reales
                  </h4>
                </header>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Contamos con infraestructura moderna y herramientas
                  especializadas. Desarrolla tus habilidades en ambientes
                  seguros y controlados que simulan la exigencia real de la
                  industria.
                </p>
              </article>
            </Reveal>

            {/* Tarjeta 2: La Tarjeta Premium (Oscura con barra de progreso) */}
            <Reveal>
              <article className="bg-navy rounded-3xl p-8 shadow-brand-lg transform md:-translate-y-4 relative overflow-hidden group h-full flex flex-col">
                <div
                  className="absolute top-0 right-0 w-32 h-32 bg-brand opacity-20 rounded-bl-full transition-transform group-hover:scale-110"
                  aria-hidden="true"
                ></div>

                <header className="relative z-10">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-gold text-3xl mb-6">
                    {/* SVG Gráfico de Pastel */}
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="font-display text-2xl font-black text-white mb-3 uppercase">
                    70% Práctica <br />
                    <span className="text-brand-light text-xl">30% Teoría</span>
                  </h4>
                </header>
                <p className="text-gray-300 text-sm leading-relaxed mb-8 relative z-10">
                  Programas intensivos diseñados para maximizar tu tiempo de
                  ejecución en el taller. Menos tiempo en el pupitre, más tiempo
                  operando, creando y solucionando problemas.
                </p>

                {/* Barra de Progreso - Fíjate cómo pasamos el style en React */}
                <div
                  className="w-full bg-white/20 rounded-full h-2.5 mt-auto relative z-10 overflow-hidden"
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="bg-gradient-to-r from-brand to-gold h-full rounded-full relative"
                    style={{ width: "70%" }}
                  >
                    <div className="absolute top-0 left-0 bottom-0 w-full bg-white/30 animate-[pulse_2s_ease-in-out_infinite]"></div>
                  </div>
                </div>
              </article>
            </Reveal>

            {/* Tarjeta 3: Acompañamiento Experto */}
            <Reveal>
              <article className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-card transition-all duration-300 group h-full">
                <header>
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl shadow-sm flex items-center justify-center text-brand text-3xl mb-6 group-hover:scale-110 transition-transform">
                    {/* SVG Usuarios y Engranaje */}
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="font-display text-2xl font-black text-navy mb-3 uppercase">
                    Acompañamiento Experto
                  </h4>
                </header>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Trabajamos con profesionales activos en sus respectivas áreas.
                  Recibirás orientación personalizada paso a paso para
                  garantizar que domines cada técnica correctamente.
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
