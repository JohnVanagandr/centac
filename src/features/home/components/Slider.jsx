import React from "react";
import { Spinner } from "@/components/ui/Feedback"; 
import { Button } from "@/components/ui/Navigation";
import { Badge } from "@/components/ui/DataDisplay";

// 🌟 Única importación: nuestro Hook unificado que hace todo el trabajo
import { useSlider } from "../hooks/useSlider";

export const Slider = () => {
  // 1. Extraemos TODA la lógica (datos y estado visual) del mismo hook
  // Le pasamos 6000ms (6 segundos) para la rotación automática
  const { 
    slides, 
    loading, 
    currentIndex, 
    nextSlide, 
    prevSlide, 
    goToSlide 
  } = useSlider(6000);
  
  

  // 2. ESTADO DE CARGA: Mostramos el Spinner mientras llegan los datos de la API
  if (loading) {
    return (
      <section className="relative h-[85vh] w-full flex items-center justify-center bg-navy-deeper">
        <Spinner size="xl" intent="brand" />
      </section>
    );
  }

  // 3. ESTADO VACÍO: Protegemos la vista si la API no devuelve nada
  if (!slides || slides.length === 0) {
    return null; // Opcional: Aquí puede agregar un diseño de "fallback" o error
  }

  // 4. RENDERIZADO PRINCIPAL
  return (
    <section
      id="inicio"
      className="relative h-[85vh] w-full overflow-hidden bg-navy-deeper group/slider"
    >
      {/* MAPEO DE SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Fondo con Overlay y efecto Ken Burns (Zoom in) */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-linear ${
                index === currentIndex ? "scale-110" : "scale-100"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-deeper/95 via-navy/70 to-transparent"></div>
          </div>

          {/* CONTENIDO CENTRAL */}
          <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center pb-12 md:pb-0">
            <div
              className={`max-w-3xl transition-all duration-1000 delay-300 transform ${
                index === currentIndex
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <div className="mb-4 inline-block">
                <Badge
                  intent="gold"
                  variant="solid"
                  className="px-3 py-1.5 shadow-xl text-xs md:text-sm"
                >
                  {slide.badge}
                </Badge>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight tracking-tight">
                {slide.title}
                <span className="text-brand"> {slide.titleHighlight}</span>
              </h2>

              <p className="text-slate-300 font-body text-base md:text-xl mb-8 leading-relaxed max-w-xl font-medium">
                {slide.description}
              </p>

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

      {/* CONTROLES: Flechas Laterales */}
      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 z-30 flex justify-between pointer-events-none opacity-0 md:group-hover/slider:opacity-100 transition-opacity duration-500">
        <button
          onClick={prevSlide}
          aria-label="Diapositiva anterior"
          className="p-3 md:p-4 rounded-full bg-white/5 text-white/70 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer pointer-events-auto backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 hover:scale-110"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          aria-label="Siguiente diapositiva"
          className="p-3 md:p-4 rounded-full bg-white/5 text-white/70 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer pointer-events-auto backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 hover:scale-110"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* CONTROLES: Indicadores (Dots) */}
      <div className="absolute bottom-4 md:bottom-10 left-6 md:left-auto md:right-10 z-30 flex gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a la diapositiva ${index + 1}`}
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