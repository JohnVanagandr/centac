import React from "react";
import { sliderData } from "@/data/sliderData";
import { useSlider } from "@/hooks/useSlider";
import Button from "@/components/ui/Navigation/Button";
import Badge from "@/components/ui/DataDisplay/Badge";

const Slider = () => {
  const { currentIndex, nextSlide, prevSlide, goToSlide } = useSlider(
    sliderData.length,
  );

  return (
    <section
      id="inicio"
      className="relative h-[85vh] w-full overflow-hidden bg-navy-deeper group/slider"
    >
      {sliderData.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Fondo con Overlay de Marca */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              // Efecto Ken Burns (scale-110 a scale-100 lento)
              className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-linear ${
                index === currentIndex ? "scale-110" : "scale-100"
              }`}
            />
            {/* 🌌 NAVY: Un degradado más profundo para asegurar legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy-deeper/95 via-navy/70 to-transparent"></div>
          </div>

          {/* Contenido Central */}
          <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
            <div
              className={`max-w-3xl transition-all duration-1000 delay-300 transform ${
                index === currentIndex
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              {/* 🟡 GOLD: Usamos el Badge Maestro */}
              <div className="mb-6 inline-block">
                <Badge
                  intent="gold"
                  variant="solid"
                  className="px-3 py-1.5 shadow-xl"
                >
                  {slide.badge}
                </Badge>
              </div>

              {/* Título Impactante */}
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                {slide.title} {/* 🟠 BRAND: Acento en la palabra clave */}
                <span className="text-brand">{slide.titleHighlight}</span>
              </h2>

              {/* Descripción (Usando text-slate en lugar de gray) */}
              <p className="text-slate-300 font-body text-lg md:text-xl mb-10 leading-relaxed max-w-xl font-medium">
                {slide.description}
              </p>

              {/* 🟠 BRAND: Botón Sólido de Conversión usando nuestro componente maestro */}
              <div className="flex items-center gap-6">
                <Button
                  as="a"
                  href={slide.buttonLink}
                  intent="brand"
                  size="lg"
                  className="shadow-brand/30 hover:shadow-brand/50 group/btn"
                >
                  {slide.buttonText}
                  <svg
                    className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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
          </div>
        </div>
      ))}

      {/* 🧭 Controles de Navegación */}
      {/* Flechas Laterales (Visibles solo al hacer hover en desktop, o siempre en móvil) */}
      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 z-30 flex justify-between pointer-events-none opacity-0 md:group-hover/slider:opacity-100 transition-opacity duration-500">
        {/* 🔵 PRIMARY: La navegación es azul eléctrico */}
        <button
          onClick={prevSlide}
          aria-label="Diapositiva anterior"
          className="p-3 md:p-4 rounded-full bg-white/5 text-white/70 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer pointer-events-auto backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 hover:scale-110"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          aria-label="Siguiente diapositiva"
          className="p-3 md:p-4 rounded-full bg-white/5 text-white/70 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer pointer-events-auto backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 hover:scale-110"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Indicadores (Dots) Pro */}
      <div className="absolute bottom-10 left-6 md:left-auto md:right-10 z-30 flex gap-2.5">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a la diapositiva ${index + 1}`}
            // 🔵 PRIMARY: El punto activo se ilumina en azul
            className={`h-1.5 rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
              index === currentIndex
                ? "w-10 bg-primary shadow-[0_0_10px_rgba(0,117,255,0.5)]"
                : "w-4 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
