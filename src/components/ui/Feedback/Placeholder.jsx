import React from "react";
import { Link } from "react-router-dom";
import Button from "../Navigation/Button";

const Placeholder = ({ title, icon = "construction", progress = 65 }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[65vh] text-center px-6">
      {/* 1. Icono con Pulso */}
      <div className="w-24 h-24 bg-slate-50 border border-slate-100 rounded-3xl flex items-center justify-center mb-8 shadow-inner group">
        <span className="material-symbols-rounded text-5xl text-slate-300 group-hover:text-brand transition-colors duration-500 animate-pulse">
          {icon}
        </span>
      </div>

      {/* 2. Textos Principales */}
      <h1 className="text-3xl font-black text-navy mb-3 uppercase tracking-tighter">
        {title}
      </h1>
      <p className="text-slate-500 font-medium max-w-md mb-10 leading-relaxed">
        Estamos preparando algo increíble para este módulo. La plataforma <span className="text-brand font-bold">CENTAC</span> sigue evolucionando para ti.
      </p>

      {/* 3. Barra de Progreso Animada */}
      <div className="w-full max-w-sm mb-12">
        <div className="flex justify-between items-end mb-2">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Estado del desarrollo</span>
          <span className="text-xs font-bold text-brand">{progress}%</span>
        </div>
        <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/50 p-0.5">
          <div 
            className="h-full bg-brand rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            {/* Brillo animado que recorre la barra */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" 
                 style={{ backgroundSize: '200% 100%' }}>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Acción de Retorno */}
      <Button 
        as={Link} 
        to="/dashboard" 
        variant="ghost" 
        intent="slate" 
        size="sm"
        className="hover:gap-4 transition-all"
      >
        <span className="material-symbols-rounded text-sm">arrow_back</span>
        Regresar al Tablero principal
      </Button>

      {/* Estilo para la animación del brillo (Shimmer) */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
      `}} />
    </div>
  );
};

export default Placeholder;