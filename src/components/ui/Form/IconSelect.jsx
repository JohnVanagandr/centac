import React, { useState, useRef, useEffect } from "react";
import { IconMapper } from "@/components/ui/Icons";
import { ICON_LIBRARY } from "@/components/ui/Icons/IconLibrary";

export const IconSelect = ({ value, onChange, label = "Seleccionar Ícono" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  const availableIcons = Object.keys(ICON_LIBRARY);

  // Filtrado de íconos por nombre
  const filteredIcons = availableIcons.filter((icon) =>
    icon.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Cerrar al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1 mb-1.5 block">
        {label}
      </label>
      
      {/* Botón activador (lo que se ve seleccionado) */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl outline-none text-sm focus:border-brand/30 transition-all text-slate-600 hover:bg-white"
      >
        <div className="flex items-center gap-2">
          {value ? (
            <>
              <IconMapper iconName={value} className="w-5 h-5 text-brand" />
              <span className="font-bold text-slate-700">{value}</span>
            </>
          ) : (
            <span className="text-slate-400 italic">Seleccionar ícono...</span>
          )}
        </div>
        <span className="material-symbols-rounded text-sm text-slate-400">unfold_more</span>
      </button>

      {/* Dropdown / Menú */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-slate-100 rounded-2xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2">
          <div className="p-2 border-b border-slate-50">
            <input
              type="text"
              placeholder="Buscar ícono..."
              className="w-full px-3 py-2 bg-slate-50 rounded-lg text-sm outline-none focus:bg-white border border-slate-100"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
          </div>
          <div className="max-h-[200px] overflow-y-auto p-2 grid grid-cols-5 gap-1">
            {filteredIcons.map((icon) => (
              <button
                key={icon}
                type="button"
                onClick={() => {
                  onChange(icon);
                  setIsOpen(false);
                  setSearchTerm("");
                }}
                className={`p-2 rounded-lg flex items-center justify-center transition-all ${
                  value === icon 
                    ? "bg-brand text-white" 
                    : "hover:bg-slate-100 text-slate-500"
                }`}
                title={icon}
              >
                <IconMapper iconName={icon} className="w-6 h-6" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};