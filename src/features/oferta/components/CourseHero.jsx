import React from "react";
import Button from "@/components/ui/Navigation/Button"; 
import { useOferta } from "../hooks/useOferta";

// Cambiamos a exportación nombrada por convención
const CourseHero = ({ data }) => {
  // Extraemos nuestra función mágica de scroll
  const { scrollToSection } = useOferta();

  return (
    <section
      className="relative bg-navy text-white bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${data.heroBgImg || data.img})` }}
    >
      {/* OVERLAY OSCURO */}
      <div className="absolute inset-0 bg-navy/85 z-0"></div>

      {/* CONTENEDOR */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 md:pt-40 md:pb-28">
        <div className="max-w-4xl">
          
          {/* 1. Resolución */}
          {data.resolution && (
            <p className="text-slate-400 text-sm md:text-base mb-4 font-normal tracking-wide">
              {data.resolution}
            </p>
          )}

          {/* 2. Título Principal */}
          <h1 className="font-display font-black uppercase leading-[1.1] tracking-tighter mb-5">
            <span className="text-white block text-3xl md:text-4xl lg:text-5xl mb-2">
              TÉCNICO LABORAL
            </span>
            <span className="text-brand block text-4xl md:text-5xl lg:text-6xl">
              {data.title}
            </span>
          </h1>

          {/* 3. Subtítulo */}
          {data.subtitle && (
            <p className="text-white text-lg md:text-xl mt-6 font-normal tracking-wide max-w-2xl opacity-90">
              {data.subtitle}
            </p>
          )}

          {/* 4. BOTONES: Aquí está la magia del Hook */}
          <div className="flex flex-wrap gap-5 mt-10 mb-16">
            <Button
              as="button" // 👈 CAMBIO CLAVE: Ya no es un enlace 'a', es un 'button'
              onClick={() => scrollToSection('inscripcion')} // 👈 LLamamos a la función
              intent="brand" 
              size="lg"
              className="animate-pulse-soft"
            >
              Inscríbete Ahora
            </Button>

            <Button variant="outline" intent="white" size="lg">
              Ver clase demostrativa
            </Button>
          </div>

          {/* 5. Bloques de Información (Sin cambios, tu estructura está genial) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 max-w-3xl">
            {/* Duración */}
            <div className="flex items-start gap-4">
              <span className="text-brand mt-1 flex-shrink-0">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <div>
                <p className="text-white font-extrabold text-lg leading-none">Duración:</p>
                <p className="text-slate-300 text-lg mt-1">{data.duration}</p>
              </div>
            </div>

            {/* Modalidad */}
            <div className="flex items-start gap-4">
              <span className="text-brand mt-1 flex-shrink-0">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <div>
                <p className="text-white font-extrabold text-lg leading-none">Modalidad:</p>
                <p className="text-slate-300 text-lg mt-1">{data.modality}</p>
              </div>
            </div>

            {/* Certificación */}
            <div className="flex items-start gap-4 md:col-span-2 mt-2">
              <span className="text-brand mt-1 flex-shrink-0">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </span>
              <div>
                <p className="text-white font-extrabold text-lg leading-none">Título que obtiene:</p>
                <p className="text-slate-300 text-lg mt-1 leading-snug">{data.titleObtained}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CourseHero;