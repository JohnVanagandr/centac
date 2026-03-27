// src/components/sections/Private/Shared/Header/Breadcrumbs.jsx
import React from "react";
import { useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const { pathname } = useLocation();

  // Diccionario de traducciones para las rutas

  const routeMap = {
    "/dashboard": { 
      current: "Inicio", 
      title: "Vista General" 
    },
    "/dashboard/solicitudes": { 
      current: "Solicitudes", 
      title: "Gestión de Leads" 
    },
    "/dashboard/ofertas": { 
      current: "Ofertas", 
      title: "Ofertas Académicas" 
    },
    "/dashboard/pqr": { // <- Nueva ruta
      current: "PQR", 
      title: "Atención al Ciudadano" 
    },
    "/dashboard/perfil": { 
      current: "Mi Perfil", 
      title: "Configuración de Cuenta" 
    },
  };

  // Buscamos la info de la ruta actual, si no existe (ej. un ID), ponemos un fallback
  const currentRoute = routeMap[pathname] || { 
    current: "Detalle", 
    title: "Información" 
  };

  return (
    <div className="hidden sm:block">
      <nav className="flex items-center gap-2 text-[11px] font-medium text-slate-400 uppercase tracking-widest mb-0.5">
        <span>Panel</span>
        <span className="text-[10px]">/</span>
        <span className="text-slate-800 transition-all duration-300">
          {currentRoute.current}
        </span>
      </nav>
      <h2 className="text-sm font-bold text-slate-800 transition-all duration-300">
        {currentRoute.title}
      </h2>
    </div>
  );
};

export default Breadcrumbs;