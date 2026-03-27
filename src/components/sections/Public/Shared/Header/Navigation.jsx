import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "@/data/navigationData";

const NavItem = ({ link, closeMenu, mobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  // CLASES BASE: Aumentamos a 15px y cambiamos a semibold para más elegancia.
  const baseClass = mobile
    ? "block w-full text-left hover:text-brand transition-colors py-2"
    : "text-[15px] font-semibold text-navy hover:text-brand transition-all duration-300 py-7 relative group/link flex items-center gap-1.5";

  if (link.subItems) {
    return (
      <div
        className="relative group h-full"
        onMouseEnter={() => !mobile && setIsOpen(true)}
        onMouseLeave={() => !mobile && setIsOpen(false)}
      >
        <button
          onClick={() => mobile && setIsOpen(!isOpen)}
          className={baseClass}
        >
          {link.name}
          <svg
            // Flecha ligeramente más pequeña y sutil
            className={`w-3.5 h-3.5 text-slate-400 group-hover/link:text-brand transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
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
                ? "pl-4 mt-2 mb-4 border-l-2 border-white/20 space-y-3"
                : // Escritorio: Caja más ancha (w-64), borde superior de marca, sombra suave
                  "absolute top-[90%] left-0 w-64 bg-white rounded-b-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border-t-2 border-brand py-3 z-50 animate-fade-in-up"
            }
          `}
        >
          {link.subItems.map((sub) => (
            <NavLink
              key={sub.id}
              to={sub.href}
              onClick={closeMenu}
              className={({ isActive }) => `
                block px-6 py-2.5 transition-all duration-300
                ${
                  mobile
                    ? "text-[18px] text-white/80 hover:text-white"
                    : // Escritorio: padding izquierdo (pl-8) en hover para dar sensación de avance
                      `text-[14px] font-medium ${isActive ? "text-brand bg-slate-50 border-l-[3px] border-brand pl-5" : "text-slate-600 hover:bg-slate-50 hover:text-brand hover:pl-8 border-l-[3px] border-transparent"}`
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

  // ENLACE NORMAL (Con animación de línea inferior)
  return (
    <NavLink
      to={link.href}
      onClick={closeMenu}
      className={({ isActive }) => `
        ${baseClass}
        ${isActive && !mobile ? "text-brand" : ""}
        ${!mobile ? "after:content-[''] after:absolute after:bottom-5 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-brand after:transition-all after:duration-300 hover:after:w-[80%]" : ""}
        ${isActive && !mobile ? "after:w-[80%]" : ""}
      `}
    >
      {link.name}
    </NavLink>
  );
};

const Navigation = ({ closeMenu, mobile = false }) => {
  const containerClass = mobile
    ? "flex flex-col font-display text-3xl text-white w-full"
    : // Escritorio: Ampliamos el gap a 10 para que las opciones "respiren" mejor
      "hidden lg:flex items-center gap-10";

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
