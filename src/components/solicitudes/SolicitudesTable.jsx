import React from "react";
import { Link } from "react-router-dom";

const SolicitudesTable = ({ data }) => {
  if (data.length === 0) {
    return (
      <div className="py-24 text-center bg-white rounded-2xl border border-slate-200/60">
        <p className="text-slate-400 font-medium text-sm">
          Sin resultados para esta búsqueda
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
              <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Folio
              </th>
              <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Aprendiz
              </th>
              <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Programa
              </th>
              <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">
                Estado
              </th>
              <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">
                Acción
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((sol) => (
              <tr
                key={sol.id}
                className="hover:bg-slate-50/50 transition-colors group cursor-pointer"
              >
                <td className="px-8 py-5 text-[11px] font-bold text-slate-800">
                  {sol.id}
                </td>
                <td className="px-8 py-5 text-xs font-semibold text-slate-700">
                  {sol.aprendiz}
                </td>
                <td className="px-8 py-5 text-xs text-slate-500 font-medium">
                  {sol.programa}
                </td>
                <td className="px-8 py-5 text-center">
                  <span
                    className={`px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider border transition-colors
    ${sol.estado === "Pendiente" ? "bg-amber-50 text-amber-600 border-amber-100" : ""}
    ${sol.estado === "Contactado" ? "bg-blue-50 text-blue-600 border-blue-100" : ""}
    ${sol.estado === "Matriculado" ? "bg-emerald-50 text-emerald-600 border-emerald-100" : ""}
    ${sol.estado === "No Interesado" ? "bg-slate-50 text-slate-400 border-slate-200" : ""}
  `}
                  >
                    {sol.estado}
                  </span>
                </td>
                <td className="px-8 py-5 text-right">
                  <Link
                    to={`/dashboard/solicitudes/${sol.id}`}
                    className="text-slate-300 hover:text-brand transition-colors p-2 rounded-lg hover:bg-brand/5 inline-block"
                  >
                    <span className="material-symbols-rounded text-xl">
                      arrow_forward_ios
                    </span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SolicitudesTable;
