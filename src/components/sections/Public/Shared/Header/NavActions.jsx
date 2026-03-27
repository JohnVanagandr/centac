import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavActions = ({ isScrolled, toggleMenu, isLoggedIn, onLogout, user }) => {
  // 1. Invocamos los hooks de React Router
  const location = useLocation();
  const navigate = useNavigate();

  // 2. Lógica inteligente del botón
  const handleInscribeteClick = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      const section = document.getElementById("contacto");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/#contacto");
    }
  };

  return (
    <div className="flex items-center gap-4 lg:gap-6">
      {!isLoggedIn && (
        <button
          onClick={handleInscribeteClick}
          className={`hidden cursor-pointer lg:flex items-center justify-center bg-brand hover:bg-brand/90 text-white rounded-full font-bold transition-all duration-300 shadow-lg shadow-brand/20 hover:shadow-brand/40 hover:-translate-y-0.5 ${
            isScrolled ? "px-5 py-2 text-[14px]" : "px-7 py-2.5 text-[15px]"
          }`}
        >
          Inscríbete Hoy
        </button>
      )}

      {/* 2. ZONA DE ACCESO */}
      <div className="hidden md:flex items-center border-l-2 border-slate-100 ml-2 pl-6">
        {isLoggedIn ? (
          <div className="flex items-center gap-4">
            <span className="text-[14px] font-medium text-slate-500 hidden lg:block">
              Hola,{" "}
              <span className="font-bold text-navy">
                {user?.name.split(" ")[0]}
              </span>
            </span>

            <Link
              to="/dashboard"
              className="flex items-center gap-2 bg-navy text-white px-4 py-2 rounded-lg font-bold text-[13px] uppercase tracking-wider hover:bg-brand transition-colors duration-300 shadow-sm"
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
                  strokeWidth="2.5"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
              Panel
            </Link>

            <button
              onClick={onLogout}
              title="Cerrar Sesión"
              className="text-slate-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-lg transition-all group"
            >
              <svg
                className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform"
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
          <Link
            to="/auth/login"
            className="text-[15px] font-semibold text-navy hover:text-brand transition-colors flex items-center gap-2 group"
          >
            <svg
              className="w-5 h-5 text-slate-400 group-hover:text-brand transition-colors"
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

      {/* 3. MENÚ HAMBURGUESA (Móviles) */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-navy p-2 outline-none hover:bg-slate-50 rounded-lg transition-colors"
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
};

export default NavActions;
