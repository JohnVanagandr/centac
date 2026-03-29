import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    // REGLA DE ORO: Limpieza del evento cuando el componente se desmonta
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

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
      // 🔵 PRIMARY: Usamos el azul eléctrico. Cambié rounded-full por rounded-2xl
      // para mantener la consistencia cuadrada/redondeada del resto de la interfaz.
      className={`fixed bottom-8 right-8 z-[90] bg-primary hover:bg-primary-dark text-white w-12 h-12 md:w-14 md:h-14 rounded-2xl shadow-lg shadow-primary/30 flex items-center justify-center transition-all duration-500 transform cursor-pointer group focus:outline-none focus:ring-4 focus:ring-primary/50 ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <svg
        className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5" // Un poco más fino para que luzca más moderno
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default BackToTop;
