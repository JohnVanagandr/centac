import React from "react";

// Mapeo de tamaños para reutilización
const sizeClasses = {
  xs: "w-4 h-4",
  sm: "w-6 h-6",
  md: "w-10 h-10", // predeterminado
  lg: "w-16 h-16",
  xl: "w-24 h-24",
};

// Mapeo de grosores de borde según el tamaño
const borderClasses = {
  xs: "border-2",
  sm: "border-2",
  md: "border-4",
  lg: "border-[6px]",
  xl: "border-8",
};

// Mapeo de colores (intents)
const colorClasses = {
  brand: "text-brand", // naranja SENA
  primary: "text-primary", // azul eléctrico
  navy: "text-navy", // azul oscuro
  white: "text-white",
  gold: "text-gold",
};

/**
 * Componente Spinner maestro para indicar estados de carga.
 * @param {string} size - Tamaño del spinner: xs, sm, md, lg, xl.
 * @param {string} intent - Color del spinner: brand, primary, navy, white, gold.
 * @param {string} className - Clases adicionales opcionales.
 */
export const Spinner = ({ 
  size = "md", 
  intent = "primary", 
  className = "" 
}) => {
  // Combinación de clases base con las dinámicas
  const classes = [
    "animate-spin", // Animación nativa de Tailwind
    "rounded-full", // Forma circular
    "border-solid", // Estilo de borde
    "border-t-transparent", // CLAVE: Solo el borde superior es transparente para crear el efecto de giro
    "border-current", // Usa el color de texto definido en colorClasses
    sizeClasses[size],
    borderClasses[size],
    colorClasses[intent],
    className,
  ].join(" ");

  return (
    // Accesibilidad (A11y): role="status" indica que es un indicador de estado
    <div role="status" className="flex items-center justify-center">
      <div className={classes}></div>
      {/* Texto oculto solo para lectores de pantalla */}
      <span className="sr-only">Cargando...</span>
    </div>
  );
};