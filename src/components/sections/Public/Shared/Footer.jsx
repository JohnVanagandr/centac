import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-deeper text-white pt-16 pb-8 border-t-[6px] border-brand">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 mb-12">
        {/* COLUMNA 1: Identidad y Redes */}
        <div>
          <h2 className="font-display font-black text-3xl mb-4 text-white uppercase tracking-wider">
            CENTAC
          </h2>
          <p className="text-sm text-gray-400 mb-4 leading-relaxed font-bold">
            Corporación Educativa de Tecnología, Arte y Conocimiento
          </p>
          <p className="text-sm text-gray-400 mb-6 leading-relaxed">
            Formamos talento a través de programas de corta duración, con un
            enfoque práctico y orientado al mundo real.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="font-bold text-sm mr-2">¡Conéctate con nosotros!</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand transition-colors group"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand transition-colors group"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.778 6.98 6.978 1.28.058 1.688.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* COLUMNA 2: Contacto Directo */}
        <div>
          <h3 className="font-display font-bold text-xl mb-6 text-brand uppercase tracking-wide">
            Líneas de Atención
          </h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-brand"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>318 713 0911 - 317 4129</span>
            </li>
            <li className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-brand"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>318 415 7207 - 318 523 5447</span>
            </li>
            <li className="pt-6 border-t border-white/10 flex flex-wrap gap-4 font-bold uppercase text-[10px]">
              <a href="#" className="hover:text-brand transition-colors">
                Aviso legal
              </a>
              <span className="text-white/20">|</span>
              <a href="#" className="hover:text-brand transition-colors">
                Política de Privacidad
              </a>
            </li>
          </ul>
        </div>

        {/* COLUMNA 3: Marco Institucional */}
        <div>
          <h3 className="font-display font-bold text-xl mb-6 text-brand uppercase tracking-wide">
            Marco Institucional
          </h3>
          <p className="text-[11px] text-gray-400 leading-relaxed text-justify opacity-80 border-l-2 border-white/10 pl-4">
            Institución sujeta a inspección y vigilancia por parte de la
            Secretaría de Educación. Licencia de Funcionamiento otorgada por el
            Ministerio de Educación Nacional: No. 2616 del 06 de agosto de 2019.
            Resolución: 0932 del 11 de abril de 2015, registro del Técnico
            Laboral en Instalaciones Eléctricas Industriales. Resolución 3241
            del 27 de septiembre de 2022.
          </p>
        </div>
      </div>

      {/* FOOTER INFERIOR: Derechos y Firma de Autor (Modificado) */}
      <div className="max-w-7xl mx-auto px-4 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-xs text-gray-500 font-bold tracking-widest uppercase text-center md:text-left">
          &copy; {currentYear} CENTAC. TODOS LOS DERECHOS RESERVADOS.
        </div>

        {/* Enlace de WhatsApp Minimalista */}
        <a
          href="https://wa.me/573152533960?text=Hola,%20visité%20la%20plataforma%20de%20CENTAC%20y%20me%20gustaría%20hacerte%20una%20consulta."
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 text-[10px] text-gray-500 hover:text-white font-bold tracking-widest uppercase transition-colors"
          title="Contactar al desarrollador"
        >
          <span>Desarrollado por John Becerra Dev</span>
          <svg
            className="w-4 h-4 text-brand group-hover:scale-110 transition-transform"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
