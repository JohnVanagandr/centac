import React from 'react';
// Si ya no usas 'Link' en ninguna otra parte de este archivo, puedes eliminar esta importación
import { Link } from 'react-router-dom'; 

export const FooterContact = () => {
  return (
    <div className="md:pl-8">
      <h3 className="font-display font-black text-xl mb-6 text-white uppercase tracking-wider">
        Líneas de Atención
      </h3>
      <ul className="space-y-4 text-sm font-body text-slate-400">
        
        {/* Teléfonos originales (Bloque 1) */}
        <li className="flex items-center gap-3">
          <svg className="w-5 h-5 text-brand shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>318 415 2207 - 316 523 5447</span>
        </li>

        {/* Teléfonos originales (Bloque 2) */}
        <li className="flex items-center gap-3">
          <svg className="w-5 h-5 text-brand shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>318 717 0911 - 317 432 3339</span>
        </li>

        {/* Teléfono de Cartera */}
        <li className="flex items-center gap-3">
          <svg className="w-5 h-5 text-brand shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <a href="tel:3164471656" className="hover:text-white transition-colors">
            316 447 1656 (Cartera)
          </a>
        </li>

        {/* Correo Electrónico (Cartera) */}
        <li className="flex items-center gap-3">
          <svg className="w-5 h-5 text-brand shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a href="mailto:cartera@centac.co" className="hover:text-white transition-colors">
            cartera@centac.co
          </a>
        </li>

        {/* Dirección de Asesoría */}
        <li className="flex items-start gap-3">
          <svg className="w-5 h-5 text-brand shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>
            <strong className="text-slate-300 font-semibold">Asesoría:</strong> CRA 33A #18-28, Bucaramanga, Santander
          </span>
        </li>
        
        {/* Documentos Legales Descargables */}
        <li className="pt-6 border-t border-white/10 flex flex-wrap gap-4 font-display font-bold uppercase text-[11px] tracking-widest mt-4 leading-relaxed">
          <a href="/documentos-legales/PEI-CENTAC.pdf" target="_blank" rel="noopener noreferrer" download className="hover:text-brand transition-colors duration-300">
            PEI Institucional
          </a>
          <span className="text-white/20">|</span>
          <a href="/documentos-legales/POLIITICA-DE-TRATAMIENTO-Y-PROTECCION-DE-DATOS-PERSONALES.pdf" target="_blank" rel="noopener noreferrer" download className="hover:text-brand transition-colors duration-300">
            Tratamiento de Datos
          </a>
          <span className="text-white/20">|</span>
          <a href="/documentos-legales/PROTOCOLO-ATENCION-VIOLENCIAS.pdf" target="_blank" rel="noopener noreferrer" download className="hover:text-brand transition-colors duration-300">
            Atención Violencias
          </a>
          <span className="text-white/20">|</span>
          <a href="/documentos-legales/REGLAMENTO-ACADEEMICO-Y-ESTUDIANTIL.pdf" target="_blank" rel="noopener noreferrer" download className="hover:text-brand transition-colors duration-300">
            Reglamento Estudiantil
          </a>
          <span className="text-white/20">|</span>
          <a href="/documentos-legales/TEERMINOS-Y-CONDICIONES-DEL-SITIO-WEB.pdf" target="_blank" rel="noopener noreferrer" download className="hover:text-brand transition-colors duration-300">
            Términos y Condiciones
          </a>
        </li>
      </ul>
    </div>
  );
};