import React from "react";
import { Spinner } from "../Feedback";

export const Button = ({
  as: Component = "button",
  children,
  variant = "solid",
  intent = "primary", // Por defecto será el Azul eléctrico
  size = "md",
  isLoading = false,
  className = "",
  ...props
}) => {
  // 1. PODERES BASE: Tipografía Barlow y efectos
  const baseStyles = `
    inline-flex items-center justify-center 
    font-display font-bold uppercase tracking-wider 
    transition-all duration-300 transform 
    active:scale-95 hover:-translate-y-0.5 
    rounded-xl 
    cursor-pointer
    disabled:cursor-not-allowed
    disabled:opacity-70 disabled:transform-none
    whitespace-nowrap gap-2
  `;

  // 2. PODERES DE DISEÑO
  const variants = {
    solid: "",
    outline: "bg-transparent border-2",
  };

  // 3. PODERES DE COLOR: Mapeo exacto al Manual de Marca
  const intents = {
    // BRAND (El Naranja CTA - Conversión)
    brand:
      variant === "solid"
        ? "bg-brand hover:bg-brand-dark text-white shadow-lg shadow-brand/40"
        : "border-brand text-brand hover:bg-brand/10",

    // PRIMARY (El Azul Eléctrico - Interacción estándar)
    primary:
      variant === "solid"
        ? "bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/40"
        : "border-primary text-primary hover:bg-primary/10",

    // NAVY (El Azul Oscuro - Estructural)
    navy:
      variant === "solid"
        ? "bg-navy hover:bg-navy-dark text-white shadow-lg shadow-navy/20"
        : "border-navy text-navy hover:bg-navy/10",

    // GOLD (Para destacar novedades o complementos)
    gold:
      variant === "solid"
        ? "bg-gold hover:bg-yellow-500 text-navy shadow-lg shadow-gold/30"
        : "border-gold text-gold hover:bg-gold/10",

    // BLANCO (Para fondos oscuros como el Header o Footer)
    white:
      variant === "solid"
        ? "bg-white hover:bg-slate-100 text-navy shadow-xl"
        : "border-white text-white hover:bg-white/10",

    // GHOST (Botones sutiles, ideal para el Dashboard)
    ghost:
      "border border-slate-200 text-slate-500 hover:text-brand hover:bg-slate-50 hover:border-brand/20 shadow-none",
  };

  // 4. PODERES DE TAMAÑO
  const sizes = {
    xs: "px-4 py-1.5 text-[11px]",
    sm: "px-5 py-2 text-[13px]",
    md: "px-7 py-2.5 text-[15px]", // Tamaño estándar ajustado a la nueva tipografía del menú
    lg: "px-10 py-3.5 text-base",
    full: "w-full py-3.5 text-base",
  };

  const finalStyles = `
    ${baseStyles} 
    ${variants[variant]} 
    ${intents[intent]} 
    ${sizes[size]} 
    ${className}
  `
    .replace(/\s+/g, " ")
    .trim();

  return (
    <Component
      className={finalStyles}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center gap-2">
          <Spinner
            size="sm"
            color={variant === "solid" ? "white" : "currentColor"}
          />
          <span>Cargando...</span>
        </div>
      ) : (
        children
      )}
    </Component>
  );
};

export default Button;
