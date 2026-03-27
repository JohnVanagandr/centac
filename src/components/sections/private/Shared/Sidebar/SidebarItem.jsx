import React from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarItem = ({ item }) => {
  const { pathname } = useLocation();
  
  // Verificamos si la ruta actual coincide con el path del item
  const isActive = pathname === item.path;

  return (
    <Link
      to={item.path}
      className={`
        group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
        ${isActive 
          ? "bg-brand text-white shadow-lg shadow-brand/20 scale-[1.02]" 
          : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
        }
      `}
    >
      <span className={`
        material-symbols-rounded text-[22px] transition-colors
        ${isActive ? "text-white" : "text-slate-400 group-hover:text-brand"}
      `}>
        {item.icon}
      </span>
      
      <span className="text-sm font-bold tracking-wide">
        {item.name}
      </span>

      {/* Indicador visual minimalista para el estado activo */}
      {isActive && (
        <div className="ml-auto w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
      )}
    </Link>
  );
};

export default SidebarItem;