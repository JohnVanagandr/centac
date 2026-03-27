import React from "react";

const PageHeader = ({ title, description, category = "Nosotros" }) => {
  return (
    <div className="relative bg-navy py-16 lg:py-24 overflow-hidden border-b-[6px] border-brand">
      {/* Fondo simulado (Gradiente para darle textura sin necesitar imagen aún) */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center md:text-left">
        {/* Migas de pan (Breadcrumbs) */}
        <div className="flex items-center justify-center md:justify-start gap-2 text-brand text-xs font-bold tracking-[0.2em] uppercase mb-4">
          <span>{category}</span>
          <span className="text-white/30">/</span>
          <span className="text-white/90">{title}</span>
        </div>

        {/* Título de la Página */}
        <h1 className="text-3xl md:text-5xl font-display font-black text-white mb-6">
          {title}
        </h1>

        {/* Párrafo Introductorio */}
        {description && (
          <p className="text-white/70 text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
