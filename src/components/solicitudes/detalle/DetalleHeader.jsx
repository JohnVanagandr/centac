// src/components/solicitudes/detalle/DetalleHeader.jsx
import React from "react";

const DetalleHeader = ({ id, estado, onBack }) => (
  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
    <div className="flex items-center gap-4">
      <button
        onClick={onBack}
        className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 hover:text-brand hover:border-brand/30 transition-all shadow-sm group"
      >
        <span className="material-symbols-rounded group-hover:-translate-x-1 transition-transform">
          arrow_back
        </span>
      </button>
      <div>
        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <span>Gestión de Leads</span>
          <span className="text-slate-300">/</span>
          <span className="text-brand">{id}</span>
        </div>
        <h1 className="text-3xl font-black text-slate-800 tracking-tight">
          Expediente del Postulante
        </h1>
      </div>
    </div>

    <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl border border-slate-200/60 shadow-sm">
      <div className="text-right mr-3 border-r border-slate-100 pr-3">
        <p className="text-[9px] font-bold text-slate-400 uppercase">
          Estado Actual
        </p>
        <p className="text-xs font-black text-slate-700">{estado}</p>
      </div>
      <div
        className={`w-3 h-3 rounded-full animate-pulse
        ${estado === "Pendiente" ? "bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" : ""}
        ${estado === "Contactado" ? "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" : ""}
        ${estado === "Matriculado" ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" : ""}
        ${estado === "No Interesado" ? "bg-slate-300" : ""}
      `}
      ></div>
    </div>
  </div>
);

export default DetalleHeader;
