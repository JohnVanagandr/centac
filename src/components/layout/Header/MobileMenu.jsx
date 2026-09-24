import React from "react";
import { Navigation } from "./";

export const MobileMenu = ({
  isMenuOpen,
  closeMenu,
  isHome,
}) => (
  <div
    aria-hidden={!isMenuOpen}
    className={`fixed inset-0 h-screen bg-navy-deeper z-[60] flex flex-col md:hidden transition-transform duration-500 ease-in-out ${
      isMenuOpen ? "translate-x-0" : "translate-x-full"
    }`}
  >
    {/* 1. HEADER DEL MENÚ */}
    <div className="flex justify-between items-center px-6 py-6 border-b border-white/5 bg-navy-deeper z-10">
      <span className="font-display font-black text-white text-xl tracking-wider uppercase">
        Navegación<span className="text-brand">.</span>
      </span>
      <button
        onClick={closeMenu}
        aria-label="Cerrar menú"
        className="text-white/70 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    {/* 2. CUERPO DEL MENÚ */}
    <div className="flex-grow overflow-y-auto px-6 py-8 overscroll-contain">
      <Navigation closeMenu={closeMenu} mobile={true} />
    </div>

    {/* 3. FOOTER DEL MENÚ */}
    <div className="px-6 py-6 border-t border-white/5 bg-navy-deeper/90 backdrop-blur-md">
      <a
        href="https://site.q10.com/login?aplentId=4ff98c47-d3ca-4b6b-8123-1465eaec89d1" // Reemplaza por la URL real de tu Q10
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-display font-black flex items-center justify-center gap-2 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
        Plataforma Q10
      </a>
    </div>
  </div>
);