// src/components/solicitudes/detalle/DetalleInfoCard.jsx
import React from "react";

const DetalleInfoCard = ({ solicitud }) => (
  <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm overflow-hidden">
    <div className="p-8 border-b border-slate-100 flex flex-col xl:flex-row xl:items-center justify-between gap-6 bg-slate-50/30">
      <div className="flex items-center gap-6">
        <div className="w-20 h-20 bg-white border-2 border-slate-100 rounded-3xl flex items-center justify-center text-3xl font-black text-brand shadow-md ring-4 ring-slate-50">
          {solicitud.aprendiz.charAt(0)}
        </div>
        <div>
          <h2 className="text-2xl font-black text-slate-800 leading-tight">
            {solicitud.aprendiz}
          </h2>
          <div className="flex items-center gap-2 mt-1">
            <span className="px-2 py-0.5 bg-brand/10 text-[9px] font-bold text-brand rounded-md uppercase tracking-wider">
              {solicitud.fuente}
            </span>
            <span className="text-slate-300">•</span>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">
              Registrado el {solicitud.fecha}
            </p>
          </div>
        </div>
      </div>

      {/* Botones de Contacto Explícitos */}
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={`tel:${solicitud.telefono}`}
          className="flex items-center gap-3 px-6 py-3 bg-slate-100 text-slate-700 rounded-2xl border border-slate-200 hover:bg-slate-900 hover:text-white transition-all shadow-sm group"
        >
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:bg-slate-800">
            <span className="material-symbols-rounded text-lg text-slate-500 group-hover:text-slate-300">
              call
            </span>
          </div>
          <div className="text-left">
            <p className="text-[9px] font-bold uppercase opacity-60">Llamar</p>
            <p className="text-sm font-black">{solicitud.telefono}</p>
          </div>
        </a>

        <a
          href={`https://wa.me/${solicitud.telefono}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 px-6 py-3 bg-emerald-50 text-emerald-700 rounded-2xl border border-emerald-100 hover:bg-emerald-500 hover:text-white transition-all shadow-sm group"
        >
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:bg-emerald-400">
            <span className="material-symbols-rounded text-lg text-emerald-500 group-hover:text-white">
              chat
            </span>
          </div>
          <div className="text-left">
            <p className="text-[9px] font-bold uppercase opacity-60">
              WhatsApp
            </p>
            <p className="text-sm font-black">{solicitud.telefono}</p>
          </div>
        </a>
      </div>
    </div>

    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 text-left">
      <div className="space-y-1">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          Email
        </p>
        <p className="text-sm font-bold text-slate-700">{solicitud.email}</p>
      </div>
      <div className="space-y-1">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          Interés
        </p>
        <p className="text-sm font-bold text-brand">{solicitud.programa}</p>
      </div>
      <div className="md:col-span-2 p-6 bg-slate-50/50 rounded-2xl border border-slate-100 italic text-sm text-slate-600 leading-relaxed">
        "{solicitud.mensaje}"
      </div>
    </div>
  </div>
);

export default DetalleInfoCard;
