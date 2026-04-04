import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "@/data/navigationData";

// 1. EL HIJO: Componente Auxiliar (Helper Component)
// Nota: Se llama NavItem y NO tiene la palabra "export"
const NavItem = ({ link, closeMenu, mobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const baseClass = mobile
    ? "block w-full text-left font-display font-bold text-3xl hover:text-primary transition-colors py-2"
    : "text-[15px] font-semibold text-navy hover:text-primary transition-all duration-300 py-7 relative group flex items-center gap-1.5 cursor-pointer";

  if (link?.subItems) {
    return (
      <div
        className="relative h-full"
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div
          className={`
            ${isOpen ? "block" : "hidden"} 
            ${
              mobile
                ? "pl-4 mt-2 mb-4 border-l-2 border-white/20 space-y-2"
                : "absolute top-full left-0 w-64 bg-white rounded-b-xl shadow-lg shadow-navy/10 border-t-4 border-brand py-3 z-50 animate-in fade-in slide-in-from-top-2"
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
                    : `px-6 py-2.5 text-[14px] font-medium border-l-[3px] ${
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

  return (
    <NavLink
      to={link.href}
      onClick={closeMenu}
      className={({ isActive }) => `
        ${baseClass}
        ${isActive && !mobile ? "text-primary" : ""}
        ${
          !mobile
            ? "after:content-[''] after:absolute after:bottom-5 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[3px] after:rounded-t-md after:bg-primary after:transition-all after:duration-300 hover:after:w-[80%]"
            : ""
        }
        ${isActive && !mobile ? "after:w-[80%]" : ""}
      `}
    >
      {link.name}
    </NavLink>
  );
};

// 2. EL PADRE: Contenedor Principal
// Nota: Se llama Navigation y SÍ lo exportamos para que el Header lo use
export const Navigation = ({ closeMenu, mobile = false }) => {
  const containerClass = mobile
    ? "flex flex-col w-full text-white"
    : "hidden lg:flex items-center gap-10";

  return (
    <nav className={containerClass}>
      {navLinks.map((link) => (
        <NavItem // Aquí usamos el componente "hijo" privado
          key={link.id}
          link={link}
          closeMenu={closeMenu}
          mobile={mobile}
        />
      ))}
    </nav>
  );
};