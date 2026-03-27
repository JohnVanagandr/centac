import React from "react";
import { Button } from "../../../ui/Navigation";

const CourseHero = ({ data }) => {
  return (
    // SECCIÓN PRINCIPAL: Usamos la imagen como fondo de toda la franja
    <section
      className="relative bg-navy text-white bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${data.heroBgImg || data.img})` }}
    >
      {/* OVERLAY OSCURO AUTOMÁTICO: Garantiza legibilidad del texto */}
      <div className="absolute inset-0 bg-navy/85 z-0"></div>

      {/* CONTENEDOR DE CONTENIDO: Izquierda-alineado y limitado en ancho */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 md:py-36">
        <div className="max-w-3xl">
          {/* 1. Línea de Resolución (Texto pequeño y gris arriba) */}
          {data.resolution && (
            <p className="text-gray-400 text-sm md:text-base mb-4 font-normal tracking-wide">
              {data.resolution}
            </p>
          )}

          {/* 2. Título Principal (Combinación Blanco y Naranja) */}
          <h1 className="font-display font-black uppercase leading-[1.1] tracking-tighter mb-5">
            <span className="text-white block text-4xl md:text-5xl lg:text-6xl mb-2">
              TÉCNICO LABORAL
            </span>
            <span className="text-brand block text-5xl md:text-6xl lg:text-7xl">
              {data.title}
            </span>
          </h1>

          {/* 3. Subtítulo (Texto blanco normal) */}
          {data.subtitle && (
            <p className="text-white text-xl md:text-2xl mt-6 font-normal tracking-wide max-w-2xl">
              {data.subtitle}
            </p>
          )}

          {/* 4. Botones (Naranja y Azul) */}
          <div className="flex flex-wrap gap-5 mt-14 mb-24">
            <Button
              as="a"
              href="#inscripcion"
              intent="primary"
              size="lg"
              className="animate-pulse-soft"
            >
              Inscríbete Ahora
            </Button>

            {/* Botón Secundario (Borde Blanco para contraste total) */}
            <Button variant="outline" intent="white" size="lg">
              Ver clase demostrativa
            </Button>
          </div>

          {/* 5. Bloques de Información (Abajo a la izquierda con iconos naranjas) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 max-w-2xl mt-auto">
            {/* Duración */}
            <div className="flex items-start gap-4">
              <span className="text-brand mt-1 flex-shrink-0">
                {/* SVG Reloj - Estilo línea naranja */}
                <svg
                  className="w-9 h-9"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <p className="text-gray-200 text-lg leading-snug">
                <strong className="text-white font-extrabold text-xl">
                  Duración:
                </strong>
                <br />
                {data.duration}
              </p>
            </div>

            {/* Modalidad */}
            <div className="flex items-start gap-4">
              <span className="text-brand mt-1 flex-shrink-0">
                {/* SVG Engranajes - Estilo línea naranja */}
                <svg
                  className="w-9 h-9"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              <p className="text-gray-200 text-lg leading-snug">
                <strong className="text-white font-extrabold text-xl">
                  Modalidad:
                </strong>
                <br />
                {data.modality}
              </p>
            </div>

            {/* Título que obtiene (Ocupa dos columnas en desktop si es largo) */}
            <div className="flex items-start gap-4 md:col-span-2 mt-2">
              <span className="text-brand mt-1 flex-shrink-0">
                {/* SVG Medalla/Diploma - Estilo línea naranja */}
                <svg
                  className="w-9 h-9"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-8.062 3.42 3.42 0 01-1.397-1.397 3.42 3.42 0 00-8.062-1.946 3.42 3.42 0 01-1.397 1.397 3.42 3.42 0 00-1.946 8.062 3.42 3.42 0 011.397 1.397 3.42 3.42 0 008.062 1.946 3.42 3.42 0 011.397-1.397z"
                  />
                </svg>
              </span>
              <p className="text-gray-200 text-lg leading-tight">
                <strong className="text-white font-extrabold text-xl">
                  Título que obtiene:
                </strong>
                <br />
                {data.titleObtained}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
