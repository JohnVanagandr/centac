import React, { useEffect, useRef, useState } from "react";

export const Reveal = ({ children, className = "", threshold = 0.15 }) => {
  // 1. useRef: Es como el "getElementById" de React. Nos da una referencia directa a este DIV.
  const domRef = useRef(null);

  // 2. Estado para saber si ya apareció en pantalla
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Recreamos tu lógica exacta de IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActive(true); // Cambiamos el estado en lugar de usar classList.add
            observer.unobserve(entry.target); // Tu misma optimización
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: threshold },
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup: Limpiamos el observador si el componente desaparece
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold]);

  // 3. Renderizado: Inyectamos tus clases CSS nativas (reveal y active)
  return (
    <div
      ref={domRef}
      className={`reveal ${isActive ? "active" : ""} ${className}`}
    >
      {/* 'children' es todo el HTML/Componentes que pongamos dentro de <Reveal></Reveal> */}
      {children}
    </div>
  );
};
