import React from "react";
import { Link } from "react-router-dom";

const NavActions = ({
  isHome,
  isScrolled,
  toggleMenu,
  isLoggedIn,
  onLogout,
  user,
}) => (
  <div className="flex items-center gap-3 lg:gap-4">
    {/* Botón público de inscripción (Solo si NO está logueado) */}
    {!isLoggedIn && (
      <Link
        to={isHome ? "#contacto" : "/#contacto"}
        className={`hidden lg:block bg-brand hover:bg-navy text-white rounded-full font-bold transition-all transform hover:-translate-y-1 ${
          isScrolled ? "px-4 py-1.5 text-xs" : "px-6 py-2"
        }`}
      >
        Inscríbete Hoy
      </Link>
    )}

    {/* Contenedor de Acceso (Oculto en móvil, se maneja en el toggleMenu) */}
    <div className="hidden md:flex items-center border-l border-gray-200 ml-2 pl-4">
      {isLoggedIn ? (
        // --- AQUÍ ESTÁ EL BUGFIX ---
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold text-navy hidden lg:block">
            Hola, {user?.name.split(" ")[0]}
          </span>

          {/* NUEVO: Botón para ir al Dashboard */}
          <Link
            to="/dashboard"
            className="flex items-center gap-2 bg-navy text-white px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-brand transition-all shadow-sm hover:-translate-y-0.5"
          >
            <svg
              className="w-4 h-4"
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
            Ir al Panel
          </Link>

          {/* Botón de Salir (Se mantiene, pero más sutil) */}
          <button
            onClick={onLogout}
            title="Cerrar Sesión"
            className="text-gray-400 hover:text-red-500 p-2 rounded-lg hover:bg-red-50 transition-colors flex items-center justify-center"
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
          </button>
        </div>
      ) : (
        // --- Estado: NO Logueado ---
        <Link
          to="/auth/login"
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

    {/* Botón Menú Móvil */}
    <button
      onClick={toggleMenu}
      className="md:hidden text-navy p-2 outline-none hover:bg-gray-50 rounded-lg transition-colors"
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
