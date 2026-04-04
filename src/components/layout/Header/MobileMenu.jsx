import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "./";
import { Button } from "@/components/ui/Navigation";

export const MobileMenu = ({
  isMenuOpen,
  closeMenu,
  isHome,
  isLoggedIn,
  onLogout,
}) => (
  <div
    // 🌌 NAVY-DEEPER: Usamos el fondo oscuro corporativo real en lugar de slate
    // ♿ A11Y: aria-hidden evita que los lectores de pantalla lean el menú si está cerrado
    aria-hidden={!isMenuOpen}
    className={`fixed inset-0 h-screen bg-navy-deeper z-[60] flex flex-col md:hidden transition-transform duration-500 ease-in-out ${
      isMenuOpen ? "translate-x-0" : "translate-x-full"
    }`}
  >
    {/* 1. HEADER DEL MENÚ (Fijo arriba) */}
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

    {/* 2. CUERPO DEL MENÚ (Área con Scroll) */}
    <div className="flex-grow overflow-y-auto px-6 py-8 overscroll-contain">
      <Navigation closeMenu={closeMenu} mobile={true} />
    </div>

    {/* 3. FOOTER DEL MENÚ (Fijo abajo) */}
    <div className="px-6 py-6 border-t border-white/5 bg-navy-deeper/90 backdrop-blur-md">
      {isLoggedIn ? (
        // --- ESTADO LOGUEADO ---
        <div className="flex flex-col gap-3">
          {/* 🔵 PRIMARY: La interacción del panel es Azul Eléctrico */}
          <Button
            as={Link}
            to="/dashboard"
            onClick={closeMenu}
            intent="primary"
            size="lg"
            className="w-full justify-center text-lg gap-2"
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
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            Ir a mi Panel
          </Button>

          <button
            onClick={() => {
              onLogout();
              closeMenu();
            }}
            className="w-full bg-red-500/10 text-red-400 py-3.5 rounded-xl font-bold font-body flex items-center justify-center gap-2 hover:bg-red-500/20 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50"
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
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Cerrar Sesión
          </button>
        </div>
      ) : (
        // --- ESTADO NO LOGUEADO ---
        // 🔵 PRIMARY: Mantenemos la consistencia con NavActions (Ingresar = Azul)
        <Button
          as={Link}
          to="/auth/login"
          onClick={closeMenu}
          intent="primary"
          size="lg"
          className="w-full justify-center text-lg gap-2"
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
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          Ingresar al Portal
        </Button>
      )}
    </div>
  </div>
);