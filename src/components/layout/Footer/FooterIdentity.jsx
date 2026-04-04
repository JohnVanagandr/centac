import React from 'react';

export const FooterIdentity = () => {
  return (
    <div>
      <img
        src="/logo-blanco.png"
        alt="CENTAC Logo"
        className="h-14 mb-5 opacity-90"
      />
      <p className="text-sm text-slate-300 mb-4 leading-relaxed font-bold font-display tracking-wide uppercase">
        Corporación Educativa de Tecnología, Arte y Conocimiento
      </p>
      <p className="text-sm text-slate-400 mb-8 leading-relaxed font-body">
        Formamos talento a través de programas de corta duración, con un
        enfoque práctico y orientado al mundo real.
      </p>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="font-bold font-display tracking-widest uppercase text-xs text-slate-300 mr-2">
          ¡Conéctate!
        </p>
        <div className="flex gap-3">
          {/* Icono Facebook */}
          <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand hover:border-brand hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group" aria-label="Facebook">
             <svg className="w-5 h-5 fill-current text-slate-400 group-hover:text-white transition-colors" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
             </svg>
          </a>
          {/* Icono Instagram */}
          <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand hover:border-brand hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group" aria-label="Instagram">
             <svg className="w-5 h-5 fill-current text-slate-400 group-hover:text-white transition-colors" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.778 6.98 6.978 1.28.058 1.688.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
             </svg>
          </a>
        </div>
      </div>
    </div>
  );
};