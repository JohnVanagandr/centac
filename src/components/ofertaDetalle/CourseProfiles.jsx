import React from "react";

const CourseProfiles = ({ profiles }) => {
  if (!profiles) return null;

  return (
    <div className="bg-navy rounded-3xl p-6 md:p-8 shadow-xl text-white">
      {/* Perfil del Egresado */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center shrink-0">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
          </div>
          <h4 className="font-display font-black text-xl uppercase tracking-wide">
            Perfil del <span className="text-brand">Egresado</span>
          </h4>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed font-light">
          {profiles.egresado}
        </p>
      </div>

      <div className="w-full h-px bg-white/10 mb-8"></div>

      {/* Perfil Profesional (Campo Ocupacional) */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0 border border-white/20">
            <svg
              className="w-6 h-6 text-brand"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h4 className="font-display font-black text-xl uppercase tracking-wide">
            Perfil <span className="text-brand">Profesional</span>
          </h4>
        </div>
        <p className="text-gray-400 text-xs uppercase tracking-widest mb-3 font-bold">
          Podrás desempeñarte como:
        </p>
        <ul className="space-y-2">
          {profiles.profesional.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm text-gray-200"
            >
              <span className="text-brand mt-1">▸</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseProfiles;
