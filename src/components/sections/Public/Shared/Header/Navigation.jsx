import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// Asumiendo que navLinks viene de tu archivo de datos
import { navLinks } from "@/data/navigationData";

const NavItem = ({ link, closeMenu, mobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  // CLASES BASE: Ajustadas al Manual de Marca (Hover en Primary)
  const baseClass = mobile
    ? "block w-full text-left font-display font-bold text-3xl hover:text-primary transition-colors py-2"
    : "text-[15px] font-semibold text-navy hover:text-primary transition-all duration-300 py-7 relative group flex items-center gap-1.5 cursor-pointer";

  // RENDERIZADO DEL SUBMENÚ (Dropdown)
  if (link.subItems) {
    return (
      <div
        className="relative h-full"
        // Movemos el control del mouse a este contenedor principal para evitar parpadeos
        onMouseEnter={() => !mobile && setIsOpen(true)}
        onMouseLeave={() => !mobile && setIsOpen(false)}
      >
        <button
          onClick={() => mobile && setIsOpen(!isOpen)}
          className={baseClass}
          aria-expanded={isOpen}
        >
          {link.name}
          <svg
            className={`w-4 h-4 text-slate-400 group-hover:text-primary transition-transform duration-300 ${
              isOpen ? "rotate-180 text-primary" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Caja del Submenú Corporativa */}
        <div
          className={`
            ${isOpen ? "block" : "hidden"} 
            ${
              mobile
                ? "pl-4 mt-2 mb-4 border-l-2 border-white/20 space-y-2"
                : // Escritorio: Caja elegante, borde superior naranja (brand) para identidad, sombra suave
                  "absolute top-full left-0 w-64 bg-white rounded-b-xl shadow-lg shadow-navy/10 border-t-4 border-brand py-3 z-50 animate-in fade-in slide-in-from-top-2"
            }
          `}
        >
          {link.subItems.map((sub) => (
            <NavLink
              key={sub.id}
              to={sub.href}
              onClick={closeMenu}
              className={({ isActive }) => `
                block transition-all duration-300 font-body
                ${
                  mobile
                    ? `text-lg py-2 ${isActive ? "text-primary font-bold" : "text-white/80 hover:text-white"}`
                    : // Escritorio: Interacción en Azul Eléctrico (Primary)
                      `px-6 py-2.5 text-[14px] font-medium border-l-[3px] ${
                        isActive
                          ? "text-primary bg-slate-50 border-primary pl-5"
                          : "text-slate-600 border-transparent hover:bg-slate-50 hover:text-primary hover:border-primary/30 hover:pl-8"
                      }`
                }
              `}
            >
              {sub.name}
            </NavLink>
          ))}
        </div>
      </div>
    );
  }

  // RENDERIZADO DEL ENLACE NORMAL (Sin submenú)
  return (
    <NavLink
      to={link.href}
      onClick={closeMenu}
      className={({ isActive }) => `
        ${baseClass}
        ${isActive && !mobile ? "text-primary" : ""}
        ${
          !mobile
            ? // Línea inferior azul (primary) que crece en hover o activo
              "after:content-[''] after:absolute after:bottom-5 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[3px] after:rounded-t-md after:bg-primary after:transition-all after:duration-300 hover:after:w-[80%]"
            : ""
        }
        ${isActive && !mobile ? "after:w-[80%]" : ""}
      `}
    >
      {link.name}
    </NavLink>
  );
};

// CONTENEDOR PRINCIPAL DE LA NAVEGACIÓN
const Navigation = ({ closeMenu, mobile = false }) => {
  const containerClass = mobile
    ? "flex flex-col w-full text-white"
    : "hidden lg:flex items-center gap-10"; // Gap amplio para respirar

  return (
    <nav className={containerClass}>
      {navLinks.map((link) => (
        <NavItem
          key={link.id}
          link={link}
          closeMenu={closeMenu}
          mobile={mobile}
        />
      ))}
    </nav>
  );
};

export default Navigation;
