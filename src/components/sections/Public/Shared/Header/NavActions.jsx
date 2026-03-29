import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// ¡Importamos nuestro componente maestro!
import Button from "@/components/ui/Navigation/Button";

const NavActions = ({ isScrolled, toggleMenu, isLoggedIn, onLogout, user }) => {
  const location = useLocation();
  const navigate = useNavigate();

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
      {/* 1. CTA PRINCIPAL: Usamos nuestro <Button> maestro */}
      {!isLoggedIn && (
        <div className="hidden lg:block">
          <Button
            onClick={handleInscribeteClick}
            intent="brand"
            // Hacemos el botón un poco más compacto cuando hay scroll
            size={isScrolled ? "sm" : "md"}
          >
            Inscríbete Hoy
          </Button>
        </div>
      )}

      {/* 2. ZONA DE ACCESO */}
      <div className="hidden md:flex items-center border-l-2 border-slate-200 ml-2 pl-6">
        {isLoggedIn ? (
          <div className="flex items-center gap-4">
            <span className="text-[14px] font-body text-slate-500 hidden lg:block">
              Hola,{" "}
              <span className="font-display font-bold text-navy">
                {user?.name.split(" ")[0]}
              </span>
            </span>

            {/* PANEL: Usamos <Button> como Link en tono Primary */}
            <Button
              as={Link}
              to="/dashboard"
              intent="primary"
              size="sm"
              className="gap-2 px-4"
            >
              <svg
                className="w-4 h-4 shrink-0"
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
            </Button>

            {/* BOTÓN SALIR: Semántica de peligro (rojo) y accesible */}
            <button
              onClick={onLogout}
              title="Cerrar Sesión"
              aria-label="Cerrar Sesión"
              className="text-slate-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-lg transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50"
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
            // 🔵 PRIMARY: La interacción del enlace "Ingresar" es azul, no naranja
            className="text-[15px] font-display font-bold text-navy hover:text-primary transition-colors duration-300 flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-lg px-2 py-1"
          >
            <svg
              className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors duration-300"
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
        aria-label="Abrir menú de navegación"
        // 🔵 PRIMARY: El hover del menú hamburguesa se ilumina sutilmente en azul
        className="md:hidden text-navy p-2 outline-none hover:bg-primary/10 hover:text-primary rounded-xl transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-primary/50"
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
