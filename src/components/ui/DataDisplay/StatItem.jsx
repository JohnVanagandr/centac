import React from "react";

const StatItem = ({
  icon,
  label,
  value,
  intent = "primary", // 🔵 Por defecto usa el Azul Eléctrico de interacción
  className = "",
}) => {
  // 🎨 MATRIZ DE COLOR SEMÁNTICO (El ADN de CENTAC)
  const intents = {
    primary: {
      bg: "bg-primary/10",
      text: "text-primary",
      hover: "hover:border-primary/30 hover:shadow-primary/10",
    },
    brand: {
      bg: "bg-brand/10",
      text: "text-brand",
      hover: "hover:border-brand/30 hover:shadow-brand/10",
    },
    navy: {
      bg: "bg-navy/10",
      text: "text-navy",
      hover: "hover:border-navy/30 hover:shadow-navy/10",
    },
    gold: {
      bg: "bg-gold/15",
      text: "text-yellow-700",
      hover: "hover:border-gold/40 hover:shadow-gold/10",
    },
    // Añadimos 'success' porque en estadísticas es común mostrar métricas positivas
    success: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      hover: "hover:border-emerald-300 hover:shadow-emerald-500/10",
    },
  };

  // Protección por si envían un intent que no existe
  const currentIntent = intents[intent] || intents.primary;

  return (
    <div
      className={`bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-5 transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-md ${currentIntent.hover} ${className}`}
    >
      <div
        className={`w-14 h-14 ${currentIntent.bg} ${currentIntent.text} rounded-xl flex items-center justify-center shrink-0 transition-colors`}
      >
        {/* Renderiza el ícono usando Material Symbols */}
        <span className="material-symbols-rounded text-[28px]">{icon}</span>
      </div>

      <div className="flex flex-col justify-center">
        {/* 🌌 Tipografía corporativa para el label */}
        <p className="text-[11px] font-display font-black text-slate-400 uppercase tracking-widest mb-0.5">
          {label}
        </p>
        {/* 🌌 El valor numérico debe tener peso institucional (Navy + Display) */}
        <p className="text-3xl font-display font-black text-navy leading-none">
          {value}
        </p>
      </div>
    </div>
  );
};

export default StatItem;
