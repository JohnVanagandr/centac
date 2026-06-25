import React from "react";

export const Pagination = ({ pagination, setPage }) => {
  // 1. Forzamos a que todo sea un número estricto para evitar concatenaciones raras (ej: "1" + 1 = "11")
  const current = Number(pagination?.current_page) || 1;
  const last = Number(pagination?.last_page) || 1;
  const total = Number(pagination?.total) || 0;
  const hasMore = Boolean(pagination?.has_more);

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= last; i++) {
      if (
        i === 1 ||
        i === last ||
        (i >= current - 1 && i <= current + 1)
      ) {
        pages.push(
          <button
            key={i}
            onClick={() => {
              console.log(`📡 Clic detectado: Solicitando página ${i}`);
              setPage(i);
            }}
            className={`w-10 h-10 rounded-xl text-xs font-bold transition-all border relative z-10
              ${
                current === i
                  ? "bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/20"
                  : "bg-white text-slate-500 border-slate-200 hover:border-brand/30 hover:text-brand cursor-pointer"
              }`}
          >
            {i}
          </button>
        );
      } else if (i === current - 2 || i === current + 2) {
        pages.push(
          <span key={i} className="px-2 text-slate-300">
            ...
          </span>
        );
      }
    }
    return pages;
  };

  return (
    <div className="px-2 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        Página <span className="text-slate-800">{current}</span> de {last}
        <span className="mx-2 opacity-30">|</span>
        Total: {total} registros
      </p>

      <div className="flex items-center gap-2">
        <button
          onClick={() => {
            const prev = Math.max(current - 1, 1);
            console.log(`📡 Clic detectado: Retrocediendo a ${prev}`);
            setPage(prev);
          }}
          disabled={current === 1}
          className="p-2.5 border border-slate-200 rounded-xl bg-white text-slate-500 hover:text-brand hover:border-brand/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm relative z-10"
        >
          <span className="material-symbols-rounded text-xl">chevron_left</span>
        </button>

        <div className="flex items-center gap-1">{renderPageNumbers()}</div>

        <button
          onClick={() => {
            const next = Math.min(current + 1, last);
            console.log(`📡 Clic detectado: Avanzando a ${next}`);
            setPage(next);
          }}
          disabled={!hasMore && current === last}
          className="p-2.5 border border-slate-200 rounded-xl bg-white text-slate-500 hover:text-brand hover:border-brand/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm relative z-10"
        >
          <span className="material-symbols-rounded text-xl">chevron_right</span>
        </button>
      </div>
    </div>
  );
};