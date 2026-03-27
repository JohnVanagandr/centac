// src/components/layout/Navbar/MobileMenu.jsx
import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const MobileMenu = ({
  isMenuOpen,
  closeMenu,
  isHome,
  isLoggedIn,
  onLogout,
}) => (
  <div
    className={`fixed inset-0 bg-navy z-[60] flex flex-col px-6 py-8 md:hidden transition-transform duration-500 ${
      isMenuOpen ? "translate-x-0" : "translate-x-full"
    }`}
  >
    <div className="flex justify-between items-center mb-10">
      <span className="font-display font-black text-white text-2xl uppercase">
        Menú<span className="text-brand">.</span>
      </span>
      <button onClick={closeMenu} className="text-white p-2">
        <svg
          className="w-8 h-8"
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

    <div className="flex-grow">
      <Navigation isHome={isHome} closeMenu={closeMenu} mobile={true} />
    </div>

    {/* Footer del menú móvil con Auth */}
    <div className="border-t border-white/10 pt-8 mt-auto">
      {isLoggedIn ? (
        // --- ESTADO LOGUEADO: Panel + Salir ---
        <div className="flex flex-col gap-3">
          <Link
            to="/dashboard"
            onClick={closeMenu}
            className="w-full bg-brand text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-colors hover:bg-white hover:text-navy"
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
          </Link>
          <button
            onClick={() => {
              onLogout();
              closeMenu();
            }}
            className="w-full bg-red-500/10 text-red-400 py-4 rounded-xl font-bold flex items-center justify-center gap-3"
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
        // --- ESTADO NO LOGUEADO: Solo Ingresar ---
        <Link
          to="/auth/login" // BUGFIX: Ruta corregida
          onClick={closeMenu}
          className="w-full bg-brand text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-colors hover:bg-white hover:text-navy"
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
        </Link>
      )}
    </div>
  </div>
);

export default MobileMenu;
