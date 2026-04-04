import React from "react";
import { sliderData } from "@/data/sliderData";
import { useSlider } from "@/features/home/hooks/useSlider";
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
          {/* Fondo con Overlay */}
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
          {/* 1. Ajuste: Reducimos el pb-24 a pb-12 para que no asfixie el contenido hacia arriba */}
          <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center pb-12 md:pb-0">
            <div
              className={`max-w-3xl transition-all duration-1000 delay-300 transform ${
                index === currentIndex
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              {/* Badge: Reducimos el margin bottom (mb-4 en lugar de mb-6) */}
              <div className="mb-4 inline-block">
                <Badge
                  intent="gold"
                  variant="solid"
                  className="px-3 py-1.5 shadow-xl text-xs md:text-sm"
                >
                  {slide.badge}
                </Badge>
              </div>

              {/* 2. TÍTULO: Bajamos a text-4xl en móvil (y sm:text-5xl) para que no se corte */}
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight tracking-tight">
                {slide.title}
                <span className="text-brand"> {slide.titleHighlight}</span>
              </h2>

              {/* 3. DESCRIPCIÓN: Bajamos a text-base en móvil para ahorrar espacio vertical */}
              <p className="text-slate-300 font-body text-base md:text-xl mb-8 leading-relaxed max-w-xl font-medium">
                {slide.description}
              </p>

              {/* Botón */}
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

      {/* Flechas Laterales (Sin cambios) */}
      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 z-30 flex justify-between pointer-events-none opacity-0 md:group-hover/slider:opacity-100 transition-opacity duration-500">
        {/* ... (Tus botones de flechas se mantienen igual) ... */}
      </div>

      {/* INDICADORES (Dots) */}
      {/* 4. Ajuste: Los pegamos un poco más abajo (bottom-4) en móvil para dar más espacio al botón */}
      <div className="absolute bottom-4 md:bottom-10 left-6 md:left-auto md:right-10 z-30 flex gap-2.5">
        {sliderData.map((_, index) => (
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

export default Slider;