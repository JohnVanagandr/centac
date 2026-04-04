import React from 'react';
import { Link } from 'react-router-dom'; // IMPORTANTE para evitar recargas

export const FooterContact = () => {
  return (
    <div className="md:pl-8">
      <h3 className="font-display font-black text-xl mb-6 text-white uppercase tracking-wider">
        Líneas de Atención
      </h3>
      <ul className="space-y-4 text-sm font-body text-slate-400">
        <li className="flex items-center gap-3">
          <svg className="w-5 h-5 text-brand shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>318 713 0911 - 317 432 3339</span>
        </li>
        <li className="flex items-center gap-3">
          <svg className="w-5 h-5 text-brand shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>318 415 2207 - 316 523 5447</span>
        </li>
        
        {/* Enlaces legales orquestados con React Router */}
        <li className="pt-6 border-t border-white/10 flex flex-wrap gap-4 font-display font-bold uppercase text-[11px] tracking-widest mt-4">
          <Link to="/aviso-legal" className="hover:text-brand transition-colors duration-300">
            Aviso legal
          </Link>
          <span className="text-white/20">|</span>
          <Link to="/politica-privacidad" className="hover:text-brand transition-colors duration-300">
            Política de Privacidad
          </Link>
        </li>
      </ul>
    </div>
  );
};