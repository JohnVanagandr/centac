import React from "react";
import { Link } from "react-router-dom";

// Añadimos 'user' a las props
const NavActions = ({
  isHome,
  isScrolled,
  toggleMenu,
  isLoggedIn,
  onLogout,
  user,
}) => (
  <div className="flex items-center gap-3 lg:gap-4">
    {!isLoggedIn && (
      <a
        href={isHome ? "#contacto" : "/#contacto"}
        className={`hidden lg:block bg-brand hover:bg-navy text-white rounded-full font-bold transition-all transform hover:-translate-y-1 ${
          isScrolled ? "px-4 py-1.5 text-xs" : "px-6 py-2"
        }`}
      >
        Inscríbete Hoy
      </a>
    )}

    <div className="hidden md:flex items-center border-l border-gray-200 ml-2 pl-4">
      {isLoggedIn ? (
        <div className="flex items-center gap-4">
          {/* Mostramos un saludo con el nombre del usuario (solo el primer nombre) */}
          <span className="text-sm font-bold text-navy hidden lg:block">
            Hola, {user?.name.split(" ")[0]}
          </span>
          <button
            onClick={onLogout}
            className="text-gray-500 font-bold text-sm hover:text-red-500 transition-colors flex items-center gap-2"
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
            Salir
          </button>
        </div>
      ) : (
        <Link
          to="/login"
          className="text-navy font-bold text-sm hover:text-brand transition-colors flex items-center gap-2"
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
          Ingresar
        </Link>
      )}
    </div>

    <button
      onClick={toggleMenu}
      className="md:hidden text-navy p-2 outline-none"
    >
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </div>
);

export default NavActions;
