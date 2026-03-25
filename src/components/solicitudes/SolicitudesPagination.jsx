import React from "react";

const SolicitudesPagination = ({
  paginaActual,
  totalPaginas,
  setPaginaActual,
  totalRegistros,
}) => {
  // Lógica para decidir qué números de página mostrar
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPaginas; i++) {
      if (
        i === 1 || // Siempre mostrar la primera
        i === totalPaginas || // Siempre mostrar la última
        (i >= paginaActual - 1 && i <= paginaActual + 1) // Mostrar la actual y sus vecinas
      ) {
        pages.push(
          <button
            key={i}
            onClick={() => setPaginaActual(i)}
            className={`w-10 h-10 rounded-xl text-xs font-bold transition-all border
              ${
                paginaActual === i
                  ? "bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/20"
                  : "bg-white text-slate-500 border-slate-200 hover:border-brand/30 hover:text-brand"
              }`}
          >
            {i}
          </button>,
        );
      } else if (i === paginaActual - 2 || i === paginaActual + 2) {
        // Agregar puntos suspensivos si hay saltos
        pages.push(
          <span key={i} className="px-2 text-slate-300">
            ...
          </span>,
        );
      }
    }
    return pages;
  };

  return (
    <div className="px-2 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Información de estado */}
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        Página <span className="text-slate-800">{paginaActual}</span> de{" "}
        {totalPaginas}
        <span className="mx-2 opacity-30">|</span>
        Total: {totalRegistros} registros
      </p>

      {/* Controles de navegación */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setPaginaActual((prev) => Math.max(prev - 1, 1))}
          disabled={paginaActual === 1}
          className="p-2.5 border border-slate-200 rounded-xl bg-white text-slate-500 hover:text-brand hover:border-brand/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
        >
          <span className="material-symbols-rounded text-xl">chevron_left</span>
        </button>

        <div className="flex items-center gap-1">{renderPageNumbers()}</div>

        <button
          onClick={() =>
            setPaginaActual((prev) => Math.min(prev + 1, totalPaginas))
          }
          disabled={paginaActual === totalPaginas}
          className="p-2.5 border border-slate-200 rounded-xl bg-white text-slate-500 hover:text-brand hover:border-brand/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
        >
          <span className="material-symbols-rounded text-xl">
            chevron_right
          </span>
        </button>
      </div>
    </div>
  );
};

export default SolicitudesPagination;
