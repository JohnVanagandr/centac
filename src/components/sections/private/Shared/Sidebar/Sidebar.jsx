import React from "react";
import SidebarItem from "./SidebarItem";
import { sidebarData } from "@/mocks";

const Sidebar = ({ isOpen, onClose }) => {
  const menuGroups = sidebarData.reduce((groups, item) => {
    const category = item.category || "General";
    if (!groups[category]) groups[category] = [];
    groups[category].push(item);
    return groups;
  }, {});

return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-navy/40 backdrop-blur-sm z-40 lg:hidden" onClick={onClose} />
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-100
        grid grid-rows-[auto_1fr_auto] h-[100dvh] /* LA SOLUCIÓN MAESTRA */
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        
        {/* FILA 1: LOGO (Toma su espacio natural) */}
        <div className="px-6 pt-8 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand rounded-xl flex items-center justify-center shadow-lg shadow-brand/20">
              <span className="text-white font-black text-xl">C</span>
            </div>
            <div>
              <h1 className="text-navy font-display font-black text-xl tracking-tight leading-none">CENTAC</h1>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[2px]">Dashboard</p>
            </div>
          </div>
        </div>

        {/* FILA 2: NAVEGACIÓN (Toma todo el espacio libre y hace scroll) */}
        <div className="overflow-y-auto px-2 custom-scrollbar">
          <nav className="space-y-8 pb-6">
            {Object.entries(menuGroups).map(([category, items]) => (
              <div key={category}>
                <p className="px-4 text-[10px] font-black text-slate-400 uppercase tracking-[2px] mb-4 mt-4">
                  {category}
                </p>
                <div className="space-y-1">
                  {items.map((item) => (
                    <SidebarItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>

        {/* FILA 3: PIE (Fijo abajo por estructura, no por posición absoluta) */}
        <div className="p-6 bg-white border-t border-slate-100">
          <button className="flex items-center gap-3 w-full px-4 py-3 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all group">
            <span className="material-symbols-rounded text-[22px]">logout</span>
            <span className="text-sm font-bold">Cerrar Sesión</span>
          </button>
        </div>

      </aside>
    </>
  );
};

export default Sidebar;