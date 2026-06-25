import React from "react";

export const Pagination = ({ pagination, setPage }) => {
  const { current_page = 1, last_page = 1, total = 0, has_more = false } = pagination;

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= last_page; i++) {
      if (
        i === 1 ||
        i === last_page ||
        (i >= current_page - 1 && i <= current_page + 1)
      ) {
        pages.push(
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`w-10 h-10 rounded-xl text-xs font-bold transition-all border
              ${
                current_page === i
                  ? "bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/20"
                  : "bg-white text-slate-500 border-slate-200 hover:border-brand/30 hover:text-brand"
              }`}
          >
            {i}
          </button>
        );
      } else if (i === current_page - 2 || i === current_page + 2) {
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
        Página <span className="text-slate-800">{current_page}</span> de {last_page}
        <span className="mx-2 opacity-30">|</span>
        Total: {total} registros
      </p>

      <div className="flex items-center gap-2">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={current_page === 1}
          className="p-2.5 border border-slate-200 rounded-xl bg-white text-slate-500 hover:text-brand hover:border-brand/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
        >
          <span className="material-symbols-rounded text-xl">chevron_left</span>
        </button>

        <div className="flex items-center gap-1">{renderPageNumbers()}</div>

        <button
          onClick={() => setPage((p) => Math.min(p + 1, last_page))}
          disabled={!has_more || current_page === last_page}
          className="p-2.5 border border-slate-200 rounded-xl bg-white text-slate-500 hover:text-brand hover:border-brand/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
        >
          <span className="material-symbols-rounded text-xl">chevron_right</span>
        </button>
      </div>
    </div>
  );
};