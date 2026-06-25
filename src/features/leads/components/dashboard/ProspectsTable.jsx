import React from "react";
import { Link } from "react-router-dom";
import { STATUS_STYLES } from "../../constants/leadConstants";

export const ProspectsTable = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="py-24 text-center bg-white rounded-2xl border border-slate-200/60">
        <p className="text-slate-400 font-medium text-sm">
          Sin resultados para esta consulta
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50/30 border-b border-slate-100">
              <th className="px-6 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">ID</th>
              <th className="px-6 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Aprendiz</th>
              <th className="px-6 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Programa</th>
              <th className="px-6 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Asesor</th>
              <th className="px-6 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Estado</th>
              <th className="px-6 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Acción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((prospect) => {
              const estado = prospect.status || "Pendiente";
              return (
                <tr key={prospect.id} className="hover:bg-slate-50/50 transition-colors group cursor-pointer">
                  <td className="px-6 py-5 text-[11px] font-bold text-slate-800">{prospect.id}</td>
                  <td className="px-6 py-5">
                    <div className="leading-tight">
                      <p className="text-xs font-semibold text-slate-700">{prospect.full_name}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{prospect.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-xs text-slate-500 font-medium">{prospect.program?.title || "No especificado"}</td>
                  <td className="px-6 py-5 text-xs text-slate-500 font-medium">{prospect.advisor?.name || "Sin asignar"}</td>
                  <td className="px-6 py-5 text-center">
                    <span className={`px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider border transition-colors ${STATUS_STYLES[estado] || "bg-slate-50 text-slate-400 border-slate-200"}`}>
                      {estado}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <Link to={`/dashboard/solicitudes/${prospect.id}`} className="text-slate-300 hover:text-brand transition-colors p-2 rounded-lg hover:bg-brand/5 inline-block">
                      <span className="material-symbols-rounded text-xl">arrow_forward_ios</span>
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