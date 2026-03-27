import React from "react";

const SolicitudesHeader = ({ stats }) => (
  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-200/60 pb-10">
    <div className="space-y-1">
      <div className="flex items-center gap-2 text-[10px] font-bold text-brand uppercase tracking-[2px] mb-1">
        <span className="w-5 h-[2px] bg-brand"></span>
        Flujo de Trabajo
      </div>
      <h1 className="text-3xl font-black text-slate-800 tracking-tighter">
        Solicitudes{" "}
        <span className="text-brand/60 text-lg font-medium ml-1">/ Leads</span>
      </h1>
      <p className="text-sm text-slate-400 font-medium max-w-sm">
        Gestión de oportunidades desde tu portal público.
      </p>
    </div>

    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-3 bg-white p-1.5 rounded-2xl border border-slate-200/60 shadow-sm">
        <div className="flex items-center gap-3 px-4 py-2 hover:bg-slate-50 rounded-xl transition-colors cursor-default">
          <div className="w-8 h-8 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center">
            <span className="material-symbols-rounded text-lg">
              priority_high
            </span>
          </div>
          <div className="leading-tight">
            <p className="text-[9px] font-bold text-slate-400 uppercase">
              Sin Atender
            </p>
            <p className="text-base font-black text-slate-800">
              {stats.pendientes}
            </p>
          </div>
        </div>
        <div className="w-[1px] h-8 bg-slate-100"></div>
        <div className="flex items-center gap-3 px-4 py-2 hover:bg-slate-50 rounded-xl transition-colors cursor-default">
          <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
            <span className="material-symbols-rounded text-lg">sync</span>
          </div>
          <div className="leading-tight">
            <p className="text-[9px] font-bold text-slate-400 uppercase">
              En Proceso
            </p>
            <p className="text-base font-black text-slate-800">
              {stats.enProceso}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 hover:bg-slate-50 rounded-xl transition-colors cursor-default">
          <div className="w-8 h-8 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center">
            <span className="material-symbols-rounded text-lg">
              workspace_premium
            </span>
          </div>
          <div className="leading-tight">
            <p className="text-[9px] font-bold text-slate-400 uppercase">
              Matriculados
            </p>
            <p className="text-base font-black text-slate-800">{stats.exito}</p>
          </div>
        </div>
      </div>
      <button className="h-[60px] px-6 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest flex items-center gap-3 shadow-lg shadow-slate-900/20 hover:bg-brand transition-all group">
        <span className="material-symbols-rounded text-xl group-hover:translate-y-0.5 transition-transform">
          download
        </span>
      </button>
    </div>
  </div>
);

export default SolicitudesHeader;
