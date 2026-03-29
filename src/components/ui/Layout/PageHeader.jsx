import React from "react";

const PageHeader = ({ title, description, category = "Nosotros" }) => {
  return (
    <div className="relative bg-navy pt-36 pb-16 lg:pt-48 lg:pb-24 overflow-hidden border-b-[6px] border-brand">
      {/* REFLEJO CORPORATIVO: 
          Uso exacto de tu --color-primary (#0075FF) para dar un brillo 
          tecnológico desde la esquina superior derecha sobre el fondo Navy. */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/30 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center md:text-left z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* MIGAS DE PAN (Breadcrumbs): 
            Uso de --color-brand (Naranja) para guiar al usuario visualmente. */}
        <div className="flex items-center justify-center md:justify-start gap-2 text-brand text-xs font-display font-black tracking-[0.2em] uppercase mb-5">
          <span className="cursor-pointer hover:text-white transition-colors duration-300">
            {category}
          </span>
          <span className="text-white/30">/</span>
          <span className="text-white/90">{title}</span>
        </div>

        {/* TÍTULO DE LA PÁGINA */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6 tracking-tight drop-shadow-sm">
          {title}
        </h1>

        {/* PÁRRAFO INTRODUCTORIO */}
        {description && (
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto md:mx-0 leading-relaxed font-body">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
