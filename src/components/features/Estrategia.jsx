import React from "react";
import Reveal from "../common/Reveal";

// 1. LOS DATOS (Centralizamos la información en un arreglo)
const pilaresData = [
  {
    id: 1,
    titleTop: "Técnico-Práctica",
    titleBrand: "Certificada",
    desc: "Enfoque formativo 100% orientado al 'saber hacer' con herramientas profesionales reales.",
    // Clases específicas que tenías en tu HTML para el espaciado
    spacingClasses: "",
    // Ícono SVG nativo (Llave inglesa)
    icon: (
      <svg
        className="w-12 h-12 mx-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        ></path>
      </svg>
    ),
  },
  {
    id: 2,
    titleTop: "Instructores",
    titleBrand: "Capacitados",
    desc: "Acompañamiento por profesionales técnicos y operativos actualmente activos en la industria.",
    spacingClasses: "pt-12 md:pt-0",
    // Ícono SVG nativo (Profesor/Usuarios)
    icon: (
      <svg
        className="w-12 h-12 mx-auto"
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
    ),
  },
  {
    id: 3,
    titleTop: "Aprendizaje",
    titleBrand: "Certificado",
    desc: "Titulación oficial avalada que respalda tus competencias para el exigente mercado laboral.",
    spacingClasses: "pt-12 lg:pt-0",
    // Ícono SVG nativo (Diploma/Medalla)
    icon: (
      <svg
        className="w-12 h-12 mx-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 14l9-5-9-5-9 5 9 5z"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        ></path>
      </svg>
    ),
  },
  {
    id: 4,
    titleTop: "Formación con",
    titleBrand: "Salida Laboral",
    desc: "Te preparamos con las habilidades precisas que las empresas y talleres están buscando hoy.",
    spacingClasses: "pt-12 lg:pt-0",
    // Ícono SVG nativo (Maletín)
    icon: (
      <svg
        className="w-12 h-12 mx-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        ></path>
      </svg>
    ),
  },
];

// 2. EL SUB-COMPONENTE (La plantilla que se repite, recibe Props)
const PilarCard = ({ icon, titleTop, titleBrand, desc, spacingClasses }) => {
  return (
    <article className={`px-6 text-center group ${spacingClasses}`}>
      <div className="text-brand mb-6 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h4 className="font-display text-2xl font-black text-navy uppercase leading-tight mb-3">
        {titleTop}
        <br />
        <span className="text-brand">{titleBrand}</span>
      </h4>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </article>
  );
};

// 3. EL COMPONENTE PRINCIPAL
const Estrategia = () => {
  return (
    <section
      id="estrategia"
      className="py-24 bg-white relative z-20 border-b border-gray-100"
    >
      {/* REEMPLAZAMOS EL DIV POR NUESTRO COMPONENTE REVEAL */}
      <Reveal className="max-w-7xl mx-auto px-4">
        {/* Cabecera de la sección */}
        <div className="text-center mb-20">
          <span className="text-brand font-bold tracking-widest uppercase text-sm mb-3 flex items-center justify-center gap-2">
            <div className="w-8 h-[2px] bg-brand"></div>
            Lo que nos define
            <div className="w-8 h-[2px] bg-brand"></div>
          </span>
          <h3 className="font-display text-4xl lg:text-5xl font-black text-navy uppercase mb-6">
            Nuestra{" "}
            <span className="bg-gradient-to-r from-brand to-gold bg-clip-text text-transparent">
              Estrategia Educativa
            </span>
          </h3>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Estructuramos nuestro modelo de enseñanza en cuatro pilares
            fundamentales para garantizar un proceso formativo ágil, pertinente
            y directamente conectado con el sector productivo.
          </p>
        </div>

        {/* Grilla dinámica de Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 md:gap-y-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {pilaresData.map((pilar) => (
            <PilarCard
              key={pilar.id}
              icon={pilar.icon}
              titleTop={pilar.titleTop}
              titleBrand={pilar.titleBrand}
              desc={pilar.desc}
              spacingClasses={pilar.spacingClasses}
            />
          ))}
        </div>
      </Reveal>
      {/* FIN DEL COMPONENTE REVEAL */}
    </section>
  );
};

export default Estrategia;
