import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { ofertasService } from "../../../services/private/ofertasService"; 

const OfertasList = () => {
  // 1. Nuevos Estados para manejar la Asincronía
  const [programas, setProgramas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [searchTerm, setSearchTerm] = useState("");

  // 2. Función para obtener los datos de la API
  const fetchProgramas = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await ofertasService.getAll();
      setProgramas(data);
    } catch (err) {
      console.error("Error cargando programas:", err);
      setError("No pudimos conectar con el servidor. Verifica que tu API local esté encendida.");
    } finally {
      setIsLoading(false);
    }
  };

  // 3. Efecto que se ejecuta al montar el componente
  useEffect(() => {
    fetchProgramas();
  }, []);

  // 4. Filtrado sobre los datos que llegaron de la API
  const filteredProgramas = programas.filter(prog => 
    prog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prog.modality.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          className="bg-slate-900 text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-brand transition-all shadow-lg hover:-translate-y-1 flex items-center gap-2 w-fit"
        >
          <span className="material-symbols-rounded text-lg">add_circle</span>
          Nuevo Programa
        </Link>
      </div>

      {/* Manejo de Estados: ERROR */}
      {error && (
        <div className="mb-8 p-6 bg-red-50 border border-red-100 rounded-2xl flex flex-col items-center justify-center text-center animate-in zoom-in-95">
          <span className="material-symbols-rounded text-4xl text-red-400 mb-2">cloud_off</span>
          <h3 className="text-sm font-black text-red-800 uppercase tracking-widest mb-1">Error de Conexión</h3>
          <p className="text-xs text-red-600 mb-4">{error}</p>
          <button 
            onClick={fetchProgramas}
            className="px-4 py-2 bg-red-100 text-red-700 rounded-lg text-xs font-bold hover:bg-red-200 transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-rounded text-sm">refresh</span>
            Reintentar Conexión
          </button>
        </div>
      )}

      {/* Barra de Búsqueda y Filtros */}
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
            disabled={isLoading || error}
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border-none rounded-xl outline-none text-sm focus:ring-2 focus:ring-brand/20 transition-all disabled:opacity-50"
          />
        </div>
        <div className="hidden md:flex gap-2">
            <span className="bg-slate-100 text-slate-600 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                Total: {programas.length}
            </span>
            <span className="bg-amber-50 text-amber-600 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                Top: {programas.filter(p => p.isTop).length}
            </span>
        </div>
      </div>

      {/* Tabla de Programas */}
      <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm relative min-h-[300px]">
        
        {/* Manejo de Estados: LOADING */}
        {isLoading && (
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center">
            <div className="w-10 h-10 border-4 border-slate-200 border-t-brand rounded-full animate-spin mb-3"></div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest animate-pulse">Cargando datos...</p>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[2px] text-slate-400">Programa</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[2px] text-slate-400">Modalidad / Duración</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[2px] text-slate-400 text-center">Destacado</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[2px] text-slate-400 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              
              {!isLoading && !error && filteredProgramas.length === 0 ? (
                // Estado de Búsqueda Vacía
                <tr>
                  <td colSpan="4" className="p-12 text-center">
                      <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <span className="material-symbols-rounded text-3xl text-slate-300">search_off</span>
                      </div>
                      <p className="text-sm font-bold text-slate-500">No se encontraron programas</p>
                      <p className="text-xs text-slate-400 mt-1">La búsqueda no arrojó resultados.</p>
                  </td>
                </tr>
              ) : (
                filteredProgramas.map((programa) => (
                  <tr key={programa.id} className="hover:bg-slate-50/80 transition-colors group">
                    
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 text-slate-500 group-hover:bg-brand group-hover:text-white transition-colors">
                          {/* Mapeo simple de iconos para la lista */}
                          <span className="material-symbols-rounded text-xl">
                            {programa.iconName === 'lightning' ? 'bolt' : 
                             programa.iconName === 'piston' ? 'settings' : 
                             programa.iconName === 'fire' ? 'local_fire_department' : 'school'}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-800">{programa.title}</p>
                          <p className="text-xs text-slate-500 max-w-xs truncate">{programa.subtitle}</p>
                        </div>
                      </div>
                    </td>

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

                    <td className="px-6 py-5 text-center">
                      {programa.isTop ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-50 text-amber-500 ring-4 ring-amber-50/50">
                          <span className="material-symbols-rounded text-sm">star</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 text-slate-300">
                          <span className="material-symbols-rounded text-sm">star</span>
                        </span>
                      )}
                    </td>

                    <td className="px-6 py-5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {/* Ahora pasamos el ID real de la base de datos */}
                        <Link 
                          to={`/dashboard/ofertas/editar/${programa.id}`}
                          className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand hover:border-brand/30 hover:bg-brand/5 transition-all"
                          title="Editar Programa"
                        >
                          <span className="material-symbols-rounded text-[18px]">edit</span>
                        </Link>
                        
                        <a 
                          href={`/programa/${programa.slug}`}
                          target="_blank"
                          rel="noreferrer"
                          className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-800 hover:bg-slate-50 transition-all"
                          title="Ver en el sitio web"
                        >
                          <span className="material-symbols-rounded text-[18px]">visibility</span>
                        </a>
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