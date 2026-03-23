import React from "react";
import Reveal from "../common/Reveal";

// 1. LOS DATOS (Simulando lo que vendría de una Base de Datos o API)
const programasData = [
  {
    id: 1,
    title: "Electricidad",
    desc: "Domina las instalaciones eléctricas industriales y residenciales aplicando normatividad vigente en módulos altamente prácticos.",
    img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80",
    duration: "2 a 8 Meses",
    isTop: true, // <-- Esta variable controla la insignia roja
    // SVG Rayo
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Soldadura",
    desc: "Manejo de equipos profesionales y técnicas de soldadura avanzada preparadas para la alta exigencia del sector metalmecánico.",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
    duration: "2 a 8 Meses",
    isTop: false,
    // SVG Fuego
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Refrigeración",
    desc: "Especialízate en el mantenimiento e instalación de sistemas de refrigeración comercial, industrial y aire acondicionado.",
    img: "https://images.unsplash.com/photo-1585435421671-0c16764628ce?w=600&q=80",
    duration: "2 a 8 Meses",
    isTop: false,
    // SVG Copo de Nieve (Aproximación con diseño geométrico)
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 3v18m0-18l-3 3m3-3l3 3M12 21l-3-3m3 3l3-3M3 12h18m-18 0l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Mecánica de Motos",
    desc: "Conviértete en un experto en diagnóstico, reparación y mantenimiento preventivo de motocicletas de diversos cilindrajes.",
    img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80",
    duration: "2 a 8 Meses",
    isTop: false,
    // SVG Tuerca/Engranaje
    icon: (
      <svg
        className="w-6 h-6"
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
    ),
  },
];

// 2. EL COMPONENTE DE TARJETA (El Molde)
const CardPrograma = ({ programa }) => {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group flex flex-col h-full">
      {/* Cabecera de la Tarjeta (Imagen e Insignias) */}
      <div className="h-56 overflow-hidden relative">
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          {/* RENDERIZADO CONDICIONAL: Solo aparece si programa.isTop es true */}
          {programa.isTop && (
            <span className="bg-brand text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
              Top
            </span>
          )}
          <span className="bg-navy/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
            70% Práctica
          </span>
        </div>

        <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/10 transition-colors duration-500 z-10"></div>
        <img
          src={programa.img}
          alt={programa.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* Cuerpo de la Tarjeta */}
      <div className="p-6 flex flex-col flex-grow relative">
        {/* Ícono Flotante */}
        <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-brand text-2xl absolute -top-12 right-6 z-30 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
          {programa.icon}
        </div>

        <h4 className="font-display text-2xl font-black text-navy mb-3 uppercase group-hover:text-brand transition-colors">
          {programa.title}
        </h4>

        <p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">
          {programa.desc}
        </p>

        {/* Footer de la Tarjeta (Duración y Botón) */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-5 mt-auto">
          <div className="flex items-center gap-2 text-xs text-gray-400 font-bold uppercase tracking-wider">
            {/* SVG Reloj */}
            <svg
              className="w-4 h-4 text-navy"
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
            {programa.duration}
          </div>
          <a
            href="#contacto"
            className="inline-flex items-center text-brand font-black hover:text-navy transition-colors"
          >
            Inscribirme
            {/* SVG Flecha */}
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

// 3. EL COMPONENTE PRINCIPAL (Orquestador de la Sección)
const Oferta = () => {
  return (
    <section id="oferta" className="py-24 bg-gray-50 flex-grow relative">
      {/* Patrón de fondo (Tailwind soporta estos valores arbitrarios perfectos) */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <Reveal className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Cabecera de la Sección */}
        <div className="text-center mb-16">
          <span className="text-brand font-bold tracking-widest uppercase text-sm mb-2 block">
            Descubre tu camino
          </span>
          <h3 className="font-display text-4xl lg:text-5xl font-black text-navy uppercase">
            Programas Destacados
          </h3>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Nuestros talleres permiten desarrollar prácticas en ambientes
            seguros, reales y controlados, alineados con las exigencias del
            sector productivo.
          </p>
          <div className="w-20 h-1.5 bg-brand mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Grilla de Programas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Iteramos sobre el arreglo para generar las tarjetas dinámicamente */}
          {programasData.map((programa) => (
            <CardPrograma key={programa.id} programa={programa} />
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Oferta;
