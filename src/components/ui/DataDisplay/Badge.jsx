import React from "react";

const Badge = ({ children, intent = "neutral", variant = "solid", className = "" }) => {
  const baseStyles =
    "inline-flex items-center px-2.5 py-1 rounded-lg text-[9px] font-display font-black uppercase tracking-widest border transition-all shadow-sm";

  const styles = {
    solid: {
      success: "bg-emerald-500 text-white border-emerald-600 shadow-emerald-200/50",
      warning: "bg-amber-500 text-white border-amber-600 shadow-amber-200/50",
      info: "bg-blue-500 text-white border-blue-600 shadow-blue-200/50",
      danger: "bg-rose-500 text-white border-rose-600 shadow-rose-200/50",
      primary: "bg-brand text-white border-brand-dark shadow-brand/20",
      secondary: "bg-navy text-white border-navy-dark shadow-navy/20",
      neutral: "bg-slate-500 text-white border-slate-600",
    },
    subtle: {
      success: "bg-emerald-50 text-emerald-700 border-emerald-200",
      warning: "bg-amber-50 text-amber-700 border-amber-200",
      info: "bg-blue-50 text-blue-700 border-blue-200",
      danger: "bg-rose-50 text-rose-700 border-rose-200",
      primary: "bg-brand/10 text-brand border-brand/20",
      secondary: "bg-navy/10 text-navy border-navy-200",
      neutral: "bg-slate-100 text-slate-600 border-slate-200",
    },
    soft: {
      success: "bg-emerald-500/20 text-emerald-700 border-emerald-500/30",
      warning: "bg-amber-500/20 text-amber-700 border-amber-500/30",
      info: "bg-blue-500/20 text-blue-700 border-blue-500/30",
      danger: "bg-rose-500/20 text-rose-700 border-rose-500/30",
      primary: "bg-brand/20 text-brand border-brand/30",
      secondary: "bg-navy/20 text-navy border-navy/30",
      neutral: "bg-slate-500/20 text-slate-700 border-slate-500/30",
    },    
    outline: {
      success: "bg-transparent text-emerald-600 border-emerald-600 shadow-none",
      warning: "bg-transparent text-amber-600 border-amber-600 shadow-none",
      info: "bg-transparent text-blue-600 border-blue-600 shadow-none",
      danger: "bg-transparent text-rose-600 border-rose-600 shadow-none",
      primary: "bg-transparent text-brand border-brand shadow-none",
      secondary: "bg-transparent text-navy border-navy shadow-none",
      neutral: "bg-transparent text-slate-400 border-slate-300 shadow-none",
    },
    glass: {
      success: "bg-emerald-500/20 backdrop-blur-md text-emerald-900 border-emerald-400/30",
      warning: "bg-amber-500/20 backdrop-blur-md text-amber-900 border-amber-400/30",
      info: "bg-blue-500/20 backdrop-blur-md text-blue-900 border-blue-400/30",
      danger: "bg-rose-500/20 backdrop-blur-md text-rose-900 border-rose-400/30",
      primary: "bg-white/20 backdrop-blur-md text-white border-white/40 shadow-xl",
      secondary: "bg-navy/40 backdrop-blur-md text-white border-white/20",
      neutral: "bg-black/20 backdrop-blur-md text-white border-white/10",
    }     
  };

  return (
    <span className={`${baseStyles} ${styles[variant][intent]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;