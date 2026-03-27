import React from "react";

const StatItem = ({ 
  icon, 
  label, 
  value, 
  bg = "bg-slate-100", 
  color = "text-slate-600", 
  className = ""
}) => {
  return (
    <div
      className={`bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-5 transition-transform hover:scale-[1.02] cursor-default ${className}`}
    >
      <div
        className={`w-12 h-12 ${bg} ${color} rounded-xl flex items-center justify-center shrink-0`}
      >
        {/* Renderiza el ícono usando Material Symbols */}
        <span className="material-symbols-rounded text-[26px]">
          {icon}
        </span>
      </div>
      
      <div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          {label}
        </p>
        <p className="text-2xl font-black text-slate-800">
          {value}
        </p>
      </div>
    </div>
  );
};

export default StatItem;