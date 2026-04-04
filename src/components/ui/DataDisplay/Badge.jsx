import React from "react";

export const Badge = ({
  children,
  intent = "neutral",
  variant = "solid",
  className = "",
}) => {
  // PODER BASE: Tipografía corporativa (Barlow), bordes y sombras suaves
  const baseStyles =
    "inline-flex items-center px-2.5 py-1 rounded-lg text-[9px] font-display font-black uppercase tracking-widest border transition-all";

  // MATRIZ DE DISEÑO CENTAC (Variante x Intención)
  const styles = {
    solid: {
      success:
        "bg-emerald-500 text-white border-emerald-600 shadow-sm shadow-emerald-200/50",
      danger:
        "bg-rose-500 text-white border-rose-600 shadow-sm shadow-rose-200/50",
      neutral: "bg-slate-500 text-white border-slate-600 shadow-sm",
      // 🎨 COLORES DE MARCA:
      brand: "bg-brand text-white border-brand-dark shadow-sm shadow-brand/20", // Naranja
      primary:
        "bg-primary text-white border-primary-dark shadow-sm shadow-primary/30", // Azul Eléctrico (#0075FF)
      navy: "bg-navy text-white border-navy-dark shadow-sm shadow-navy/20", // Azul Oscuro
      gold: "bg-gold text-yellow-900 border-yellow-500 shadow-sm shadow-gold/30", // Advertencias/Nuevos
    },
    subtle: {
      success: "bg-emerald-50 text-emerald-700 border-emerald-200",
      danger: "bg-rose-50 text-rose-700 border-rose-200",
      neutral: "bg-slate-100 text-slate-600 border-slate-200",
      // 🎨 COLORES DE MARCA:
      brand: "bg-brand/10 text-brand border-brand/20",
      primary: "bg-primary/10 text-primary-dark border-primary/20",
      navy: "bg-navy/10 text-navy border-navy/20",
      gold: "bg-gold/10 text-yellow-800 border-gold/30",
    },
    soft: {
      success: "bg-emerald-500/20 text-emerald-700 border-emerald-500/30",
      danger: "bg-rose-500/20 text-rose-700 border-rose-500/30",
      neutral: "bg-slate-500/20 text-slate-700 border-slate-500/30",
      // 🎨 COLORES DE MARCA:
      brand: "bg-brand/20 text-brand-dark border-brand/30",
      primary: "bg-primary/20 text-primary-dark border-primary/30",
      navy: "bg-navy/20 text-navy border-navy/30",
      gold: "bg-gold/20 text-yellow-800 border-gold/40",
    },
    outline: {
      success: "bg-transparent text-emerald-600 border-emerald-600",
      danger: "bg-transparent text-rose-600 border-rose-600",
      neutral: "bg-transparent text-slate-400 border-slate-300",
      // 🎨 COLORES DE MARCA:
      brand: "bg-transparent text-brand border-brand",
      primary: "bg-transparent text-primary border-primary",
      navy: "bg-transparent text-navy border-navy",
      gold: "bg-transparent text-yellow-600 border-gold",
    },
    glass: {
      success:
        "bg-emerald-500/20 backdrop-blur-md text-emerald-900 border-emerald-400/30",
      danger:
        "bg-rose-500/20 backdrop-blur-md text-rose-900 border-rose-400/30",
      neutral: "bg-black/20 backdrop-blur-md text-white border-white/10",
      // 🎨 COLORES DE MARCA:
      brand: "bg-brand/20 backdrop-blur-md text-brand-dark border-brand/30",
      primary:
        "bg-white/20 backdrop-blur-md text-white border-white/40 shadow-xl", // Mantenemos tu efecto original genial
      navy: "bg-navy/40 backdrop-blur-md text-white border-white/20",
      gold: "bg-gold/20 backdrop-blur-md text-yellow-900 border-gold/30",
    },
  };

  // Prevenimos que la app se rompa si alguien pasa una variante o intent que no existe
  const safeVariant = styles[variant] ? variant : "solid";
  const safeIntent = styles[safeVariant][intent] ? intent : "neutral";

  return (
    <span
      className={`${baseStyles} ${styles[safeVariant][safeIntent]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
