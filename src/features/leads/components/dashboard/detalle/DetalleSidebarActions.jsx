// src/components/dashboard/detalle/DetalleSidebarActions.jsx
import React from "react";

export const DetalleSidebarActions = ({ estado, setEstado, onUpdate, isLocked }) => (
  <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl shadow-slate-900/40 sticky top-10 border border-white/5">
    <h3 className="text-xl font-black mb-2 tracking-tight text-center">
      Gestión de Lead
    </h3>
    
    {/* Mensaje visual si está bloqueado por regla de negocio */}
    {isLocked && (
      <div className="mb-6 mt-4 px-4 py-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-center animate-in zoom-in duration-500">
        <span className="material-symbols-rounded text-emerald-400 text-3xl mb-1">workspace_premium</span>
        <p className="text-xs font-black text-emerald-400 uppercase tracking-widest">Matriculado</p>
        <p className="text-[10px] font-medium text-emerald-100/60 mt-1">Este expediente ha sido cerrado y no admite más cambios.</p>
      </div>
    )}

    <div className={`space-y-8 ${isLocked ? "mt-4" : "mt-8"}`}>
      <div className="space-y-3">
        <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-500 ml-1 text-left block">
          Estado Actual
        </label>
        <div className="grid grid-cols-1 gap-2">
          {["Pendiente", "Contactado", "Matriculado", "No interesado"].map((e) => (
            <button
              key={e}
              onClick={() => !isLocked && setEstado(e)}
              disabled={isLocked}
              className={`w-full py-4 px-6 rounded-2xl text-xs font-bold transition-all border text-left flex items-center justify-between
              ${estado === e ? "bg-brand border-brand text-white shadow-lg shadow-brand/30" : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10"}
              ${isLocked ? "opacity-50 cursor-not-allowed hover:bg-white/5" : ""}
              `}
            >
              {e}
              {estado === e && (
                <span className="material-symbols-rounded text-sm">check_circle</span>
              )}
            </button>
          ))}
        </div>
      </div>
      
      <div className="pt-6 border-t border-white/10 text-left">
        <button
          onClick={onUpdate}
          disabled={isLocked}
          className={`w-full py-5 rounded-3xl font-black text-xs uppercase tracking-[3px] transition-all flex items-center justify-center gap-2
          ${isLocked 
            ? "bg-slate-800/50 text-slate-600 cursor-not-allowed border border-white/5" 
            : "bg-white text-slate-900 hover:bg-brand hover:text-white active:scale-95 shadow-xl"}`}
        >
          {isLocked ? "Expediente Cerrado" : "Actualizar Lead"}
          {isLocked && <span className="material-symbols-rounded text-sm">lock</span>}
        </button>
      </div>
    </div>
  </div>
);