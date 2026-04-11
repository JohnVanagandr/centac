import React from "react";

// 1. Estandarizamos a exportación nombrada
export const PageHeader = ({ title, description, category = "Nosotros" }) => {
  return (
    <div 
      // 2. LA DIETA: Cambiamos pt-36 pb-16 por un simple py-10 en móvil.
      // En escritorio (md, lg) lo dejamos un poco más amplio (py-16, py-20)
      className="relative bg-navy pt-[140px] pb-10 md:pt-[160px] md:pb-16 lg:pt-[180px] lg:pb-20 overflow-hidden border-b-[6px] border-brand"
    >
      {/* Overlay decorativo */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/30 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center md:text-left z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        {/* 3. BREADCRUMBS: Reducimos a text-[10px] en móvil y mb-3 para no desperdiciar espacio */}
        <div className="flex items-center justify-center md:justify-start gap-2 text-brand text-[10px] md:text-xs font-display font-black tracking-[0.2em] uppercase mb-3 md:mb-5">
          <span className="cursor-pointer hover:text-white transition-colors duration-300">
            {category}
          </span>
          <span className="text-white/30">/</span>
          <span className="text-white/90 truncate">{title}</span>
        </div>
        
        {/* 4. TÍTULO: Bajamos de 4xl a 3xl en móvil */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white mb-4 md:mb-6 tracking-tight drop-shadow-sm">
          {title}
        </h1>
        
        {/* 5. DESCRIPCIÓN: Bajamos a text-base en móvil */}
        {description && (
          <p className="text-slate-300 text-base md:text-lg lg:text-xl max-w-2xl mx-auto md:mx-0 leading-relaxed font-body">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};