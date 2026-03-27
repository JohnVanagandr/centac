import React, { useState, useEffect } from "react";

const BackToTop = () => {
  // 1. Estado para controlar si el botón se muestra o no
  const [isVisible, setIsVisible] = useState(false);

  // 2. Lógica para detectar el scroll
  useEffect(() => {
    const toggleVisibility = () => {
      // Si el usuario baja más de 300px, mostramos el botón
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Agregamos el listener al objeto global window
    window.addEventListener("scroll", toggleVisibility);

    // REGLA DE ORO: Limpieza del evento cuando el componente se destruye
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // 3. Función para hacer el scroll suave hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Volver al inicio"
      className={`fixed bottom-8 right-8 z-50 bg-brand hover:bg-navy text-white w-14 h-14 rounded-full shadow-brand flex items-center justify-center text-xl transition-all duration-500 transform cursor-pointer group focus:outline-none focus:ring-4 focus:ring-brand/50 ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      {/* SVG de flecha hacia arriba (Reemplazando FontAwesome) */}
      <svg
        className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default BackToTop;
