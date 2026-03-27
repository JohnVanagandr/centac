import React from "react";
import { ChevronDown } from "lucide-react";

const Accordion = ({ number, title, isOpen, onToggle, children }) => {
  return (
    <div
      className={`rounded-xl transition-all duration-300 border ${
        isOpen
          ? "border-primary/30 bg-white shadow-sm shadow-primary/5" // 🔵 PRIMARY: Borde activo
          : "border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300" // Consistencia de grises
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen} // ♿ Accesibilidad vital
        className="w-full flex items-center justify-between p-4 md:p-5 text-left group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-xl"
      >
        <div className="flex items-center gap-4">
          {/* Círculo Numérico (Opcional por si a veces no mandas número) */}
          {number && (
            <div
              className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-sm transition-all duration-300 ${
                isOpen
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-slate-200 text-slate-500 group-hover:bg-primary/10 group-hover:text-primary"
              }`}
            >
              {number}
            </div>
          )}

          {/* Título del Acordeón */}
          <span
            className={`font-display font-bold text-base md:text-lg tracking-wide transition-colors duration-300 pr-4 ${
              isOpen
                ? "text-primary-dark"
                : "text-navy group-hover:text-primary"
            }`}
          >
            {title}
          </span>
        </div>

        {/* Flecha Indicadora */}
        <ChevronDown
          size={20}
          className={`shrink-0 transition-transform duration-500 ${
            isOpen
              ? "rotate-180 text-primary"
              : "text-slate-400 group-hover:text-primary/70"
          }`}
          strokeWidth={2.5}
        />
      </button>

      {/* Contenedor Animado del Contenido */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {/* Cuerpo del texto con la tipografía correcta */}
        <div
          className={`p-5 pt-0 ${number ? "ml-12" : "ml-2"} border-l-2 border-slate-100`}
        >
          <div className="text-slate-600 font-body leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
