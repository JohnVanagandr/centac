import React from "react";
import { sliderData } from "@/data/sliderData";
import { useSlider } from "@/hooks/useSlider";

const Slider = () => {
  const { currentIndex, nextSlide, prevSlide, goToSlide } = useSlider(
    sliderData.length,
  );

  return (
    <section
      id="inicio"
      className="relative h-[85vh] w-full overflow-hidden bg-navy"
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
            <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/50 to-transparent"></div>
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
              {/* Badge Amarilla Estilo CENTAC */}
              <span className="inline-block bg-gold text-navy font-bold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 shadow-lg">
                {slide.badge}
              </span>

              {/* Título Impactante */}
              <h2 className="font-display text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
                {slide.title}{" "}
                <span className="text-brand">{slide.titleHighlight}</span>
              </h2>

              {/* Descripción con Inter (Sans) */}
              <p className="text-gray-200 text-lg md:text-xl mb-10 leading-relaxed max-w-xl font-medium opacity-90">
                {slide.description}
              </p>

              {/* Botón Sólido */}
              <div className="flex items-center gap-6">
                <a
                  href={slide.buttonLink}
                  className="bg-brand hover:bg-brand-dark text-white px-10 py-4 rounded-full font-bold text-lg shadow-brand transition-all transform hover:-translate-y-1 flex items-center gap-3 group"
                >
                  {slide.buttonText}
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Flechas Laterales Minimalistas */}
      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 z-30 flex justify-between pointer-events-none">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/5 text-white/50 hover:bg-brand hover:text-white transition-all cursor-pointer pointer-events-auto backdrop-blur-sm"
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
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/5 text-white/50 hover:bg-brand hover:text-white transition-all cursor-pointer pointer-events-auto backdrop-blur-sm"
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
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Indicadores (Dots) Pro */}
      <div className="absolute bottom-10 left-6 z-30 flex gap-2">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentIndex
                ? "w-10 bg-brand"
                : "w-4 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
