import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconMapper } from "@/components/ui/Icons";
import { useAdminOfertas, useToggleOfertaStatus, useDeleteOferta } from "../../hooks/useAdminOfertas";

const OfertasList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Consumo de hooks estándar y de mutación
  const { data: programas = [], isLoading, error, refetch } = useAdminOfertas();
  const { mutate: toggleStatus, isPending: isToggling } = useToggleOfertaStatus();
  const { mutate: deleteOferta, isPending: isDeleting } = useDeleteOferta();

  // Filtrado local
  const filteredProgramas = programas.filter(prog => 
    prog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prog.modality?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Controladores de acción
  const handleDelete = (id, title) => {
    if (window.confirm(`¿Está seguro de eliminar permanentemente el programa "${title}"?`)) {
      deleteOferta(id);
    }
  };

  const handleToggleStatus = (id, currentStatus) => {
    console.log(currentStatus);
    
    toggleStatus({ id, is_active: !currentStatus });
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Header del Gestor */}
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
          className="bg-brand text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-navy transition-all shadow-lg shadow-brand/20 flex items-center gap-2 shrink-0"
        >
          <span className="material-symbols-rounded text-sm">add</span>
          Crear Programa
        </Link>
      </div>

      {/* Buscador */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-3">
        <span className="material-symbols-rounded text-slate-400 ml-2">search</span>
        <input 
          type="text"
          placeholder="Buscar por nombre o modalidad..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-transparent outline-none text-sm font-medium text-slate-700 placeholder:text-slate-400"
        />
      </div>

      {/* Tabla de Datos */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-[10px] uppercase tracking-widest text-slate-500">
                <th className="px-6 py-4 font-black">Programa Académico</th>
                <th className="px-6 py-4 font-black">Modalidad</th>
                <th className="px-6 py-4 font-black text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {isLoading ? (
                <tr>
                  <td colSpan="3" className="px-6 py-10 text-center text-slate-400 font-bold uppercase tracking-widest text-xs">
                    Cargando catálogo...
                  </td>
                </tr>
              ) : filteredProgramas.length === 0 ? (
                <tr>
                  <td colSpan="3" className="px-6 py-10 text-center text-slate-400 font-bold uppercase tracking-widest text-xs">
                    No se encontraron programas.
                  </td>
                </tr>
              ) : (
                filteredProgramas.map((programa) => (
                  <tr key={programa.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                    
                    {/* OfertasManager.jsx - Ajuste de columna 1 */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                          {/* Usamos tu componente original, sin fallbacks */}
                          <IconMapper iconName={programa.icon_name} />
                        </div>
                        
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <span className="font-black text-slate-800">{programa.title}</span>
                            {!programa.is_active && (
                              <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-md text-[9px] font-black uppercase tracking-widest">
                                Inactivo
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-slate-500 font-medium">{programa.duration}</span>
                        </div>
                      </div>
                    </td>

                    {/* Columna 2: Modalidad */}
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold">
                        {programa.modality}
                      </span>
                    </td>

                    {/* Columna 3: Funcionalidad expandida manteniendo UI */}
                    <td className="px-6 py-5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        
                        {/* Activar / Inactivar */}
                        <button 
                          onClick={() => handleToggleStatus(programa.id, programa.is_active)}
                          disabled={isToggling}
                          className={`w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center transition-all ${
                            programa.is_active 
                              ? 'text-green-500 hover:text-amber-500 hover:border-amber-300 hover:bg-amber-50' 
                              : 'text-slate-400 hover:text-green-500 hover:border-green-300 hover:bg-green-50'
                          } disabled:opacity-50`}
                          title={programa.is_active ? "Ocultar Programa" : "Publicar Programa"}
                        >
                          <span className="material-symbols-rounded text-[18px]">
                            {programa.is_active ? 'visibility' : 'visibility_off'}
                          </span>
                        </button>

                        {/* Editar */}
                        <Link 
                          to={`/dashboard/ofertas/editar/${programa.id}`}
                          className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand hover:border-brand/30 hover:bg-brand/5 transition-all"
                          title="Editar Programa"
                        >
                          <span className="material-symbols-rounded text-[18px]">edit</span>
                        </Link>
                        
                        <a 
                            href={`/oferta/${programa.slug || programa.id}`}
                            target="_blank"
                            rel="noreferrer"
                            className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-800 hover:bg-slate-50 transition-all"
                            title="Ver en el sitio web"
                          >
                            <span className="material-symbols-rounded text-[18px]">open_in_new</span>
                          </a>
                        

                        {/* Eliminar */}
                        <button 
                          onClick={() => handleDelete(programa.id, programa.title)}
                          disabled={isDeleting}
                          className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-300 hover:bg-red-50 transition-all disabled:opacity-50"
                          title="Eliminar Programa"
                        >
                          <span className="material-symbols-rounded text-[18px]">delete</span>
                        </button>

                      </div>
                    </td>

                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OfertasList;