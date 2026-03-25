import React, { useState } from "react";
import { Link } from "react-router-dom";
import { programasData } from "../../../data/ofertaData";
// Asume que tu data está exportada correctamente o viene de un Context/API

const OfertasList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtramos la data real que me pasaste
  const filteredProgramas = programasData.filter(
    (prog) =>
      prog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prog.modality.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto animate-in fade-in duration-500">
      {/* 1. Header del Gestor */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">
            Gestor de <span className="text-brand">Programas</span>
          </h1>
          <p className="text-sm text-slate-500 mt-1 font-medium">
            Administra el catálogo de cursos, técnicos y especializaciones.
          </p>
        </div>

        <Link
          to="/dashboard/ofertas/nueva"
          className="bg-slate-900 text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-brand transition-all shadow-lg hover:-translate-y-1 flex items-center gap-2 w-fit"
        >
          <span className="material-symbols-rounded text-lg">add_circle</span>
          Nuevo Programa
        </Link>
      </div>

      {/* 2. Barra de Búsqueda y Filtros */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm mb-6 flex items-center gap-4">
        <div className="flex-1 relative">
          <span className="material-symbols-rounded absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            search
          </span>
          <input
            type="text"
            placeholder="Buscar por nombre o modalidad..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-xl outline-none text-sm focus:ring-2 focus:ring-brand/20 transition-all"
          />
        </div>
        <div className="hidden md:flex gap-2">
          {/* Etiquetas de conteo rápido */}
          <span className="bg-slate-100 text-slate-600 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider">
            Total: {programasData.length}
          </span>
          <span className="bg-amber-50 text-amber-600 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider">
            Destacados (Top): {programasData.filter((p) => p.isTop).length}
          </span>
        </div>
      </div>

      {/* 3. Tabla de Programas */}
      <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[2px] text-slate-400">
                  Programa
                </th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[2px] text-slate-400">
                  Modalidad / Duración
                </th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[2px] text-slate-400 text-center">
                  Destacado
                </th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[2px] text-slate-400 text-right">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredProgramas.map((programa) => (
                <tr
                  key={programa.id}
                  className="hover:bg-slate-50/80 transition-colors group"
                >
                  {/* Columna: Info Principal */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 text-slate-500 group-hover:bg-brand group-hover:text-white transition-colors">
                        {/* Asumiendo que usas material symbols y los nombres coinciden o hay un mapeo */}
                        <span className="material-symbols-rounded text-xl">
                          {programa.iconName === "lightning"
                            ? "bolt"
                            : programa.iconName === "piston"
                              ? "settings"
                              : programa.iconName === "fire"
                                ? "local_fire_department"
                                : "school"}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">
                          {programa.title}
                        </p>
                        <p className="text-xs text-slate-500 max-w-xs truncate">
                          {programa.subtitle}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Columna: Detalles Técnicos */}
                  <td className="px-6 py-5">
                    <div className="flex flex-col gap-1">
                      <span className="inline-flex items-center w-fit px-2 py-1 rounded-md bg-slate-100 text-[10px] font-bold text-slate-600">
                        {programa.modality}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        ⏱ {programa.duration}
                      </span>
                    </div>
                  </td>

                  {/* Columna: Estado Destacado (Top) */}
                  <td className="px-6 py-5 text-center">
                    {programa.isTop ? (
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-50 text-amber-500 ring-4 ring-amber-50/50">
                        <span className="material-symbols-rounded text-sm">
                          star
                        </span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 text-slate-300">
                        <span className="material-symbols-rounded text-sm">
                          star
                        </span>
                      </span>
                    )}
                  </td>

                  {/* Columna: Acciones */}
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {/* Botón Editar */}
                      <Link
                        to={`/dashboard/ofertas/editar/${programa.slug}`}
                        className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand hover:border-brand/30 hover:bg-brand/5 transition-all"
                        title="Editar Programa"
                      >
                        <span className="material-symbols-rounded text-[18px]">
                          edit
                        </span>
                      </Link>

                      {/* Botón Ver (Ojo) - Podría llevar a la vista pública del curso */}
                      <a
                        href={`/oferta/${programa.slug}`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-800 hover:bg-slate-50 transition-all"
                        title="Ver en el sitio web"
                      >
                        <span className="material-symbols-rounded text-[18px]">
                          visibility
                        </span>
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Estado de Búsqueda Vacía */}
          {filteredProgramas.length === 0 && (
            <div className="p-12 text-center">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-rounded text-3xl text-slate-300">
                  search_off
                </span>
              </div>
              <p className="text-sm font-bold text-slate-500">
                No se encontraron programas
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Intenta con otro término de búsqueda.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OfertasList;
