import React from "react";
import { Link, useLocation } from "react-router-dom";
import { sidebarData } from "@/data/sidebarData";

const Sidebar = ({ isOpen, closeMenu }) => {
  const location = useLocation();

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 my-5 ml-5 w-72 bg-white 
        rounded-2xl shadow-sm border border-slate-200/60
        transform transition-transform duration-300 ease-in-out lg:translate-x-0 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="flex flex-col h-full">
        {/* Cabecera: Logo */}
        <div className="py-12 px-9 text-left">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center shadow-sm shadow-brand/30">
              <span className="text-white font-black text-xs">C</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-800">
              CENTAC <span className="text-slate-400 font-light">Pro</span>
            </span>
          </Link>
        </div>

        {/* 2. Mapeo dinámico de la data */}
        <nav className="flex-1 px-5 space-y-1.5">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4 mb-5 opacity-70">
            Navegación
          </p>

          {sidebarData.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={closeMenu}
                className={`flex items-center gap-4 px-5 py-3 rounded-xl transition-all duration-300 group
                  ${
                    isActive
                      ? "bg-slate-900 text-white shadow-md shadow-slate-900/20"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  }`}
              >
                <span
                  className={`material-symbols-rounded text-[22px] transition-colors
                  ${isActive ? "text-white" : "text-slate-400 group-hover:text-slate-600"}`}
                >
                  {item.icon}
                </span>
                <span className="font-medium text-[14px]">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer del Sidebar */}
        <div className="p-6 mt-auto">
          <button className="flex items-center gap-3 w-full px-5 py-3 text-slate-500 hover:text-red-500 hover:bg-red-50/50 rounded-xl transition-all text-sm font-medium">
            <span className="material-symbols-rounded text-[20px]">logout</span>
            Cerrar Sesión
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
