import React from "react";
import { motion } from "framer-motion";

const SolicitudesControls = ({ filtro, setFiltro, busqueda, setBusqueda }) => {
  const estados = [
    "Todas",
    "Pendiente",
    "Contactado",
    "Matriculado",
    "No Interesado",
  ];

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-2 rounded-2xl border border-slate-200/60 shadow-sm">
      <div className="relative flex-1 max-w-md group">
        <span className="material-symbols-rounded absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand transition-colors">
          search
        </span>
        <input
          type="text"
          placeholder="Buscar por aprendiz o folio..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-slate-50 border-transparent focus:bg-white focus:border-brand/30 focus:ring-4 focus:ring-brand/5 rounded-xl text-sm outline-none transition-all"
        />
      </div>
      <div className="flex items-center gap-1 bg-slate-100/50 p-1 rounded-xl relative">
        {estados.map((estado) => (
          <button
            key={estado}
            onClick={() => setFiltro(estado)}
            className={`relative px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider transition-colors z-10
              ${filtro === estado ? "text-slate-900" : "text-slate-400 hover:text-slate-600"}`}
          >
            {filtro === estado && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-white rounded-lg shadow-sm border border-slate-200/50"
                transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
              />
            )}
            <span className="relative z-20">{estado}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SolicitudesControls;
