import React from "react";

export const EnDesarrollo = ({
  mensaje = "Estamos estructurando el contenido de esta sección para brindarte la mejor experiencia.",
}) => {
  return (
    <div className="flex-grow flex items-center justify-center p-6 lg:p-12">
      <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 text-center max-w-lg w-full">
        <div className="w-20 h-20 bg-brand/10 text-brand rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-6">
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-navy mb-3">
          Sección en Desarrollo
        </h2>
        <p className="text-slate-500 mb-8 leading-relaxed">{mensaje}</p>
        <div className="inline-block px-5 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-bold tracking-wide uppercase">
          Próximamente
        </div>
      </div>
    </div>
  );
};
