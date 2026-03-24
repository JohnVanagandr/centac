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
        <button
          onClick={() => {
            onLogout();
            closeMenu();
          }}
          className="w-full bg-red-500/10 text-red-400 py-4 rounded-xl font-bold flex items-center justify-center gap-3"
        >
          Cerrar Sesión
        </button>
      ) : (
        <Link
          to="/login"
          onClick={closeMenu}
          className="w-full bg-brand text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3"
        >
          Ingresar al Portal
        </Link>
      )}
    </div>
  </div>
);

export default MobileMenu;
