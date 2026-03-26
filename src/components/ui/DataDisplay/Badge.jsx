import React from "react";

const Badge = ({ children, intent = "neutral", className = "" }) => {
  // 1. BASE: Tipografía Barlow Condensed para que combine con los botones
  const baseStyles =
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-display font-black uppercase tracking-widest border transition-all";

  // 2. INTENCIONES: Conectadas a tu index.css
  const intents = {
    // Para "NUEVO" o "OFERTA"
    accent: "bg-gold/10 text-gold border-gold/30 shadow-sm shadow-gold/10",
    // Para "ÚLTIMOS CUPOS"
    primary: "bg-brand/10 text-brand border-brand/20",
    // Para "CERTIFICADO" o "OFICIAL"
    secondary: "bg-navy/10 text-navy border-navy/20",
    // Por defecto
    neutral: "bg-slate-100 text-slate-600 border-slate-200",
  };

  return (
    <span className={`${baseStyles} ${intents[intent]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
