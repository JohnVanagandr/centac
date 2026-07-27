// src/components/dashboard/ProspectsTable.jsx
import React from "react";
import { Link } from "react-router-dom";
import { STATUS_STYLES } from "../../constants/leadConstants";

export const ProspectsTable = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="py-24 flex flex-col items-center justify-center text-center bg-white rounded-[2rem] border border-slate-200/60 shadow-sm">
        <span className="material-symbols-rounded text-5xl text-slate-200 mb-4">search_off</span>
        <h3 className="text-lg font-black text-slate-800">No se encontraron solicitudes</h3>
        <p className="text-slate-400 font-medium text-sm mt-1 max-w-sm">
          Intenta ajustar los filtros de búsqueda o el estado para encontrar lo que buscas.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-100">
              <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[2px]">ID</th>
              <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[2px]">Aprendiz</th>
              <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[2px]">Programa / Interés</th>
              <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[2px] text-center">Estado</th>
              <th className="px-6 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[2px] text-right">Acción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((prospect) => {
              const estado = prospect.status || "Pendiente";
              // Determinar si está matriculado para estilos visuales
              const isEnrolled = estado === "Matriculado";
              
              return (
                <tr key={prospect.id} className={`hover:bg-slate-50/50 transition-colors group cursor-pointer ${isEnrolled ? "opacity-70 bg-slate-50/30" : ""}`}>
                  <td className="px-6 py-5 text-[11px] font-black text-slate-400">#{prospect.id}</td>
                  
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-black text-brand uppercase">
                        {prospect.full_name?.charAt(0) || "U"}
                      </div>
                      <div className="leading-tight">
                        <p className={`text-sm font-black ${isEnrolled ? "text-slate-600" : "text-slate-800"}`}>{prospect.full_name}</p>
                        <p className="text-[11px] font-medium text-slate-400 mt-0.5">{prospect.email}</p>
                      </div>
                    </div>
                  </td>
                  
                  <td className="px-6 py-5">
                    <p className="text-xs font-bold text-slate-600 truncate max-w-[200px]" title={prospect.program?.title}>
                      {prospect.program?.title || "No especificado"}
                    </p>
                    <p className="text-[10px] font-medium text-slate-400 mt-0.5">Asesor: {prospect.advisor?.name || "Sin asignar"}</p>
                  </td>
                  
                  <td className="px-6 py-5 text-center">
                    <span className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider border transition-colors inline-flex items-center justify-center gap-1.5 ${STATUS_STYLES[estado] || "bg-slate-50 text-slate-400 border-slate-200"}`}>
                      {isEnrolled && <span className="material-symbols-rounded text-[12px]">lock</span>}
                      {estado}
                    </span>
                  </td>
                  
                  <td className="px-6 py-5 text-right">
                    <Link 
                      to={`/dashboard/solicitudes/${prospect.id}`} 
                      className="w-8 h-8 inline-flex items-center justify-center rounded-xl text-slate-400 hover:text-brand hover:bg-brand/10 transition-all"
                    >
                      <span className="material-symbols-rounded text-[18px]">arrow_forward_ios</span>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};