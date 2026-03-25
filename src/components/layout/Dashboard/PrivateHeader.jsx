// src/components/layout/Dashboard/PrivateHeader.jsx
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const PrivateHeader = ({ onMenuOpen }) => {
  const { user } = useContext(AuthContext);

  return (
    // Agregamos mx-5 mt-5 para que flote y coincida con el Sidebar
    <header className="mx-6 mt-5 h-20 bg-white rounded-2xl border border-slate-200/60 shadow-sm px-8 flex items-center justify-between transition-all duration-300">
      {/* Sección Izquierda: Navegación y Título */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuOpen}
          className="p-2 lg:hidden text-slate-500 hover:bg-slate-50 rounded-xl transition-colors"
        >
          <span className="material-symbols-rounded text-2xl">menu</span>
        </button>

        <div className="hidden sm:block">
          <nav className="flex items-center gap-2 text-[11px] font-medium text-slate-400 uppercase tracking-widest mb-0.5">
            <span>Panel</span>
            <span className="text-[10px]">/</span>
            <span className="text-slate-800">Inicio</span>
          </nav>
          <h2 className="text-sm font-bold text-slate-800">Vista General</h2>
        </div>
      </div>

      {/* Sección Derecha: Acciones y Usuario */}
      <div className="flex items-center gap-5">
        {/* Notificaciones con un toque más limpio */}
        <button className="relative p-2 text-slate-400 hover:text-brand hover:bg-slate-50 rounded-xl transition-all group">
          <span className="material-symbols-rounded text-[22px]">
            notifications
          </span>
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        {/* Perfil: Identificable y profesional */}
        <div className="flex items-center gap-3 pl-5 border-l border-slate-100">
          <div className="text-right hidden md:block">
            <p className="text-xs font-bold text-slate-800 leading-tight">
              {user?.name}
            </p>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
              {user?.role || "Estudiante"}
            </p>
          </div>

          <div className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center shadow-inner group cursor-pointer hover:border-brand/30 transition-colors">
            <span className="text-brand font-black text-sm uppercase">
              {user?.name?.charAt(0)}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PrivateHeader;
