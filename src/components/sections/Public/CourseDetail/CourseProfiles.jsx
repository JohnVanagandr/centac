import React from "react";
import IconMapper from "../../../ui/Icons/IconMapper"; // Importamos nuestro maestro de SVGs

const CourseProfiles = ({ profiles }) => {
  if (!profiles) return null;

  return (
    // 🌌 NAVY: Base oscura con borde sutil para destacar
    <div className="bg-navy rounded-[2rem] p-8 shadow-2xl shadow-navy/20 text-white border border-white/5 relative overflow-hidden group">
      {/* Detalle visual de fondo (Brillo suave) */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-700"></div>

      <div className="relative z-10">
        {/* --- 1. Perfil del Egresado --- */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-5">
            {/* 🟠 BRAND: Burbuja de ícono de acción */}
            <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-brand/20">
              <IconMapper iconName="flask" className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-display font-black text-xl uppercase tracking-tight">
              Perfil del <span className="text-brand">Egresado</span>
            </h4>
          </div>
          {/* 🌌 SLATE: Textos largos en tonos fríos para legibilidad */}
          <p className="text-slate-300 text-sm leading-relaxed font-body font-light">
            {profiles.egresado}
          </p>
        </div>

        {/* Separador */}
        <div className="w-full h-px bg-white/10 mb-10"></div>

        {/* --- 2. Perfil Profesional (Campo Ocupacional) --- */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            {/* 🔵 PRIMARY: Burbuja de ícono secundaria */}
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/10 group-hover:border-primary/50 transition-colors duration-500">
              <IconMapper
                iconName="briefcase"
                className="w-6 h-6 text-primary"
              />
            </div>
            <h4 className="font-display font-black text-xl uppercase tracking-tight">
              Perfil <span className="text-primary">Profesional</span>
            </h4>
          </div>

          <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em] mb-4 font-display font-black">
            Podrás desempeñarte como:
          </p>

          <ul className="space-y-3">
            {profiles.profesional.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm text-slate-200 font-body group/list"
              >
                {/* 🔵 PRIMARY: La viñeta (bullet) cambia al hacer hover sobre el item */}
                <span className="text-brand mt-0.5 text-lg leading-none group-hover/list:translate-x-1 group-hover/list:text-primary transition-all duration-300">
                  ▸
                </span>
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseProfiles;
