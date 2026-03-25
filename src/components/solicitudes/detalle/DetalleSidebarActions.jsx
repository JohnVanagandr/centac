// src/components/solicitudes/detalle/DetalleSidebarActions.jsx
import React from "react";

const DetalleSidebarActions = ({
  estado,
  setEstado,
  prioridad,
  setPrioridad,
  onUpdate,
}) => (
  <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl shadow-slate-900/40 sticky top-10 border border-white/5">
    <h3 className="text-xl font-black mb-8 tracking-tight text-center">
      Convertir Lead
    </h3>

    <div className="space-y-8">
      <div className="space-y-3">
        <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-500 ml-1 text-left block">
          Estado
        </label>
        <div className="grid grid-cols-1 gap-2">
          {["Pendiente", "Contactado", "Matriculado", "No Interesado"].map(
            (e) => (
              <button
                key={e}
                onClick={() => setEstado(e)}
                className={`w-full py-4 px-6 rounded-2xl text-xs font-bold transition-all border text-left flex items-center justify-between
                ${estado === e ? "bg-brand border-brand text-white shadow-lg shadow-brand/30" : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10"}`}
              >
                {e}
                {estado === e && (
                  <span className="material-symbols-rounded text-sm">
                    check_circle
                  </span>
                )}
              </button>
            ),
          )}
        </div>
      </div>

      <div className="pt-6 border-t border-white/10 text-left">
        <button
          onClick={onUpdate}
          className="w-full bg-white text-slate-900 py-5 rounded-3xl font-black text-xs uppercase tracking-[3px] hover:bg-brand hover:text-white transition-all active:scale-95 shadow-xl"
        >
          Actualizar Lead
        </button>
      </div>
    </div>
  </div>
);

export default DetalleSidebarActions;
