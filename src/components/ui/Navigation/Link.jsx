import React from "react";
import { Link as RouterLink } from "react-router-dom";

export const Link = ({
  to,
  href,
  children,
  variant = "nav",       // nav | text | button | icon | social
  intent = "primary",    // brand | primary | navy | white | ghost | slate
  size = "md",           // sm | md | lg
  isExternal = false,
  className = "",
  ...props
}) => {
  // 1. DETERMINAR ENRUTADOR O ETIQUETA HTML
  // Si pasas "to", usa RouterLink (SPA); si pasas "href", usa <a> estándar.
  const Component = to ? RouterLink : "a";
  const destination = to || href || "#";

  // 2. CONFIGURACIÓN AUTOMÁTICA DE SEGURIDAD PARA EXTERNOS
  const externalProps =
    isExternal || destination.toString().startsWith("http")
      ? {
          target: "_blank",
          rel: "noopener noreferrer",
        }
      : {};

  // 3. BASE ESTILÍSTICA (Alineada a tu sistema de diseño)
  const baseStyles = `
    inline-flex items-center gap-2 font-display 
    transition-all duration-300 cursor-pointer 
    focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/50
  `;

  // 4. MAPEO DE COLORES SEGÚN INTENCIÓN
  const intents = {
    brand: "text-brand hover:text-brand-dark",
    primary: "text-primary hover:text-primary-dark",
    navy: "text-navy hover:text-primary",
    white: "text-white/80 hover:text-white",
    slate: "text-slate-500 hover:text-slate-800",
    ghost: "text-slate-400 hover:text-brand",
  };

  // 5. VARIANTES ESTRUCTURALES
  const variants = {
    // Para barras de navegación o encabezados
    nav: `
      font-bold uppercase tracking-wider
      hover:-translate-y-0.5 active:scale-95
      ${intents[intent]}
    `,

    // Para párrafos, avisos legales o pies de página (Efecto subrayado suave)
    text: `
      font-medium underline underline-offset-4 decoration-current/30
      hover:decoration-current hover:underline-offset-6
      ${intents[intent]}
    `,

    // Para íconos o redes sociales en el Footer/TopBar (Contenedor con fondo suave)
    social: `
      justify-center rounded-xl border transition-all duration-300
      hover:-translate-y-1 hover:shadow-lg active:scale-95
      ${
        intent === "white"
          ? "bg-white/5 border-white/10 text-slate-400 hover:bg-brand hover:border-brand hover:text-white hover:shadow-brand/30"
          : "bg-slate-100 border-transparent text-slate-600 hover:bg-brand hover:text-white hover:shadow-brand/20"
      }
    `,

    // Para enlaces simples que son solo un icono
    icon: `
      justify-center rounded-lg p-2
      hover:bg-slate-100 active:scale-90
      ${intents[intent]}
    `,

    // Alimenta visualmente como un botón sólido pero semánticamente es un enlace
    button: `
      justify-center font-bold uppercase tracking-wider rounded-xl shadow-lg
      transform active:scale-95 hover:-translate-y-0.5 whitespace-nowrap
      ${
        intent === "brand"
          ? "bg-brand hover:bg-brand-dark text-white shadow-brand/40"
          : intent === "primary"
          ? "bg-primary hover:bg-primary-dark text-white shadow-primary/40"
          : intent === "navy"
          ? "bg-navy hover:bg-navy-dark text-white shadow-navy/20"
          : "bg-white hover:bg-slate-100 text-navy shadow-xl"
      }
    `,
  };

  // 6. MAPEO DE TAMAÑOS (Ajustado dinámicamente según la variante)
  const sizes = {
    sm: variant === "social" ? "w-8 h-8 text-xs" : "text-xs py-1",
    md: variant === "social" ? "w-10 h-10 text-sm" : "text-sm py-1.5",
    lg: variant === "social" ? "w-12 h-12 text-base" : "text-base py-2",
  };

  // 7. COMPOSICIÓN DE CLASES
  const finalStyles = `
    ${baseStyles}
    ${variants[variant] || variants.nav}
    ${sizes[size] || sizes.md}
    ${className}
  `
    .replace(/\s+/g, " ")
    .trim();

  return (
    <Component
      to={to ? destination : undefined}
      href={!to ? destination : undefined}
      className={finalStyles}
      {...externalProps}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Link;