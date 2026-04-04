import React from "react";

export const TopBar = () => {
  return (
    <div className="bg-navy text-slate-300 py-2 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* IZQUIERDA: Contacto */}
        <div className="flex items-center gap-2 group">
          {/* 🔵 PRIMARY: El icono de utilidad va en azul para no competir con los CTAs naranjas */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary transition-transform duration-300 group-hover:scale-110 group-hover:text-primary-light"
          >
            <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10Z" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <a
            href="mailto:info@centac.edu.co"
            className="text-[11px] font-display font-bold uppercase tracking-widest hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded"
          >
            info@centac.edu.co
          </a>
        </div>

        {/* DERECHA: Redes Sociales (Facebook, Instagram, YouTube, TikTok) */}
        <div className="flex items-center gap-5">
          {/* Facebook */}
          <a
            href="#"
            aria-label="Síguenos en Facebook"
            className="text-slate-400 hover:text-primary transition-all duration-300 transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="#"
            aria-label="Síguenos en Instagram"
            className="text-slate-400 hover:text-primary transition-all duration-300 transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="#"
            aria-label="Suscríbete en YouTube"
            className="text-slate-400 hover:text-primary transition-all duration-300 transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2.5 17a2.5 2.5 0 0 0 2.5 2.5h14a2.5 2.5 0 0 0 2.5-2.5V7a2.5 2.5 0 0 0-2.5-2.5H5A2.5 2.5 0 0 0 2.5 7v10Z" />
              <path d="m10 15 5-3-5-3z" />
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="#"
            aria-label="Síguenos en TikTok"
            className="text-slate-400 hover:text-primary transition-all duration-300 transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              <path d="M12 12V4" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};