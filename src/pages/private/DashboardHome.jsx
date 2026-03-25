import React from "react";
import { requestStats, recentRequests } from "../../data/dashboardData";

const DashboardHome = () => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* 1. SECCIÓN DE MÉTRICAS (Resumen por estados) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {requestStats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-5 transition-transform hover:scale-[1.02] cursor-default"
          >
            <div
              className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center`}
            >
              <span className="material-symbols-rounded text-[26px]">
                {stat.icon}
              </span>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                {stat.label}
              </p>
              <p className="text-2xl font-black text-slate-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 2. SECCIÓN DE TABLA (Detalle de solicitudes) */}
      <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden">
        {/* Cabecera de la Tabla */}
        <div className="p-8 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-800 tracking-tight">
              Solicitudes Recientes
            </h3>
            <p className="text-xs text-slate-400 font-medium">
              Historial actualizado de trámites y procesos
            </p>
          </div>
          <button className="px-5 py-2.5 text-[11px] font-bold text-slate-600 hover:text-brand hover:bg-slate-50 rounded-xl transition-all border border-slate-200 uppercase tracking-wider">
            Ver Todo
          </button>
        </div>

        {/* Tabla */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/30">
                <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-[2px]">
                  Folio
                </th>
                <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-[2px]">
                  Aprendiz
                </th>
                <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-[2px]">
                  Trámite
                </th>
                <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-[2px]">
                  Fecha
                </th>
                <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-[2px]">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {recentRequests.map((req) => (
                <tr
                  key={req.id}
                  className="hover:bg-slate-50/50 transition-colors group"
                >
                  <td className="px-8 py-5 text-[11px] font-bold text-slate-800">
                    {req.id}
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center text-[10px] font-bold text-brand shadow-inner">
                        {req.user.charAt(0)}
                      </div>
                      <span className="text-xs font-semibold text-slate-700">
                        {req.user}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-xs text-slate-500 font-medium">
                    {req.type}
                  </td>
                  <td className="px-8 py-5 text-xs text-slate-400 font-medium">
                    {req.date}
                  </td>
                  <td className="px-8 py-5">
                    <span
                      className={`px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider border
                      ${req.status === "Pendiente" ? "bg-amber-50/50 text-amber-600 border-amber-100" : ""}
                      ${req.status === "En Proceso" ? "bg-blue-50/50 text-blue-600 border-blue-100" : ""}
                      ${req.status === "Atendida" ? "bg-emerald-50/50 text-emerald-600 border-emerald-100" : ""}
                    `}
                    >
                      {req.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
