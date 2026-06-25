import React from "react";

export const SummaryCards = ({ summary }) => {  
  const cards = [
    { label: "Sin Atender", value: summary.unattended ?? 0, icon: "priority_high", color: "bg-amber-50 text-amber-600" },
    { label: "En Proceso", value: summary.in_process ?? 0, icon: "sync", color: "bg-blue-50 text-blue-600" },
    { label: "Matriculados", value: summary.enrolled ?? 0, icon: "workspace_premium", color: "bg-emerald-50 text-emerald-600" },
  ];

  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-200/60 pb-10">
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-[10px] font-bold text-brand uppercase tracking-[2px] mb-1">
          <span className="w-5 h-[2px] bg-brand"></span>
          Flujo de Trabajo
        </div>
        <h1 className="text-3xl font-black text-slate-800 tracking-tighter">
          Solicitudes <span className="text-brand/60 text-lg font-medium ml-1">/ Leads</span>
        </h1>
        <p className="text-sm text-slate-400 font-medium max-w-sm">
          Gestión de oportunidades desde tu portal público.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-3 bg-white p-1.5 rounded-2xl border border-slate-200/60 shadow-sm">
          {cards.map((card) => (
            <div key={card.label} className="flex items-center gap-3 px-4 py-2 hover:bg-slate-50 rounded-xl transition-colors cursor-default">
              <div className={`w-8 h-8 ${card.color} rounded-lg flex items-center justify-center`}>
                <span className="material-symbols-rounded text-lg">{card.icon}</span>
              </div>
              <div className="leading-tight">
                <p className="text-[9px] font-bold text-slate-400 uppercase">{card.label}</p>
                <p className="text-base font-black text-slate-800">{card.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};