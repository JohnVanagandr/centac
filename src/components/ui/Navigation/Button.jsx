import React from "react";
import { Spinner } from "../Feedback";

const Button = ({
  as: Component = "button",
  children,
  variant = "solid",
  intent = "primary",
  size = "md",
  isLoading = false,
  className = "",
  ...props
}) => {
  // 1. PODERES BASE: Tipografía Barlow (font-display) y efectos de tu tema v4
const baseStyles = `
    inline-flex items-center justify-center 
    font-display font-bold uppercase tracking-wider 
    transition-all duration-300 transform 
    active:scale-95 hover:-translate-y-0.5 
    rounded-xl 
    cursor-pointer
    disabled:cursor-not-allowed
    disabled:opacity-70 
    whitespace-nowrap gap-2
`;

  // 2. PODERES DE DISEÑO: Base para Sólido vs Outline
  const variants = {
    solid: "", // El color lo define el intent
    outline: "bg-transparent border-2",
  };

  // 3. PODERES DE COLOR: Mapeo inteligente de intenciones
  const intents = {
    // NARANJA BRAND
    primary:
      variant === "solid"
        ? "bg-brand hover:bg-brand-dark text-white shadow-brand"
        : "border-brand text-brand hover:bg-brand/5",

    // AZUL NAVY
    secondary:
      variant === "solid"
        ? "bg-navy hover:bg-navy-dark text-white shadow-navy/20"
        : "border-navy text-navy hover:bg-navy/5",

    // ORO/GOLD
    accent:
      variant === "solid"
        ? "bg-gold hover:bg-gold-dark text-navy shadow-gold/20"
        : "border-gold text-gold hover:bg-gold/5",

    // BLANCO (El salvavidas para fondos oscuros)
    white:
      variant === "solid"
        ? "bg-white hover:bg-gray-100 text-navy shadow-xl"
        : "border-white text-white hover:bg-white/10",
    // GHOST (Para el Dashboard)
    ghost: "border border-slate-200 text-slate-500 hover:text-brand hover:bg-slate-50 hover:border-brand/20 shadow-none",
  };

  // 4. PODERES DE TAMAÑO
  const sizes = {
    xs: "px-4 py-2 text-[10px]", 
    sm: "px-6 py-2.5 text-xs",
    md: "px-8 py-3 text-sm",
    lg: "px-10 py-4 text-base",
    full: "w-full py-4 text-base",
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
