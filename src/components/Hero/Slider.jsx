// src/components/Hero/Slider.jsx
import React, { useState, useEffect } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      badge: "Nuestra Estrategia Educativa",
      badgeStyle: "bg-white/10 border-white/20 text-brand-light",
      titlePre: "Formación ",
      titleHighlight: "Técnico-Práctica",
      titlePost: "Certificada",
      desc: "Docentes capacitados. Aprendizaje certificado. Formación con salida laboral garantizada a través del fortalecimiento de tus habilidades.",
      btnText: "Ver Programas",
      btnStyle: "bg-brand text-white shadow-brand hover:bg-brand-light",
      bgImg:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80",
    },
    {
      id: 2,
      badge: "Aprende Haciendo",
      badgeStyle: "bg-gold text-navy",
      titlePre: "Aprende en ",
      titleHighlight: "Escenarios Reales",
      titlePost: "",
      desc: "Nuestros talleres están perfectamente acondicionados y dotados con equipos, materiales y herramientas profesionales.",
      btnText: "Conectar con Asesor",
      btnStyle:
        "bg-white/10 text-white border border-white/30 hover:bg-white/20",
      bgImg:
        "https://images.unsplash.com/photo-1581092160562-40aa08e29b83?w=1600&q=80",
    },
    {
      id: 3,
      badge: "Tu Futuro Profesional",
      badgeStyle: "bg-brand text-white",
      titlePre: "Impulsa tu ",
      titleHighlight: "Éxito Laboral",
      titlePost: "Efectivo",
      desc: "Nuestros egresados cuentan con una alta tasa de vinculación. Te conectamos con las demandas reales de las empresas líderes.",
      btnText: "Iniciar mi Registro",
      btnStyle: "bg-brand text-white shadow-brand hover:bg-brand-light",
      bgImg:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80",
    },
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-navy-dark">
      {/* Recorremos las slides. Todas están posicionadas absolutamente una sobre otra */}
      {slides.map((slide, index) => {
        // Determinamos si este slide es el que debería verse actualmente
        const isActive = index === currentIndex;

        return (
          <div
            key={slide.id}
            // La transición de opacidad hace el efecto de "Fade-in / Fade-out"
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* 1. Fondo con efecto Ken Burns (Zoom lento) */}
            {/* Si está activo, hace un zoom a scale-105 durante 5 segundos */}
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] ease-linear opacity-30 ${
                isActive ? "scale-105" : "scale-100"
              }`}
              style={{ backgroundImage: `url(${slide.bgImg})` }}
            ></div>

            {/* 2. Capa de degradado oscuro (se mantiene igual) */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy to-navy/80"></div>

            {/* 3. Contenedor del Texto centrado verticalmente */}
            <div className="relative z-20 h-full max-w-7xl mx-auto px-4 w-full flex flex-col justify-center">
              {/* Animación del texto: Sube y aparece solo cuando el slide está activo */}
              <div
                className={`transform transition-all duration-1000 delay-300 ${
                  isActive
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
              >
                <span
                  className={`inline-block py-1 px-3 rounded-full text-xs font-bold uppercase tracking-widest mb-6 ${slide.badgeStyle}`}
                >
                  {slide.badge}
                </span>

                <h2 className="font-display text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
                  {slide.titlePre}{" "}
                  <span className="bg-gradient-to-r from-brand to-gold bg-clip-text text-transparent">
                    {slide.titleHighlight}
                  </span>
                  <br />
                  {slide.titlePost}
                </h2>

                <p className="text-lg text-gray-300 max-w-xl mb-8">
                  {slide.desc}
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#contacto"
                    className={`px-8 py-3 rounded-full font-bold transition-colors ${slide.btnStyle}`}
                  >
                    {slide.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Controles del Slider */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/30 text-white rounded-full backdrop-blur-sm transition-all cursor-pointer"
        aria-label="Anterior slide"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/30 text-white rounded-full backdrop-blur-sm transition-all cursor-pointer"
        aria-label="Siguiente slide"
      >
        &#10095;
      </button>
    </section>
  );
};

export default Slider;
