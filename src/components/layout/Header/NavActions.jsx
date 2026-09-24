import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@/components/ui/Navigation/Button";

export const NavActions = ({ isScrolled, toggleMenu }) => {
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
      
      {/* 1. CTA PRINCIPAL */}
      <div className="hidden lg:block">
        <Button
          onClick={handleInscribeteClick}
          intent="brand"
          size={isScrolled ? "sm" : "md"}
        >
          Inscríbete Hoy
        </Button>
      </div>

      {/* 2. ZONA DE ACCESO Q10 (Sustituye al antiguo login) */}
      <div className="hidden md:flex items-center border-l-2 border-slate-200 ml-2 pl-6">
        <a
          href="https://site.q10.com/login?aplentId=4ff98c47-d3ca-4b6b-8123-1465eaec89d1" // Reemplaza por la URL real de tu Q10
          target="_blank"
          rel="noopener noreferrer"
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
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          Plataforma Q10
        </a>
      </div>

      {/* 3. MENÚ HAMBURGUESA (Móviles) */}
      <button
        onClick={toggleMenu}
        aria-label="Abrir menú de navegación"
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