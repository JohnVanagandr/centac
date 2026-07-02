import React, { useState } from "react";
import { useMallaCurricular } from "../../../hooks/useMallaCurricular";

const TabMalla = ({ formData, setFormData }) => {
  const {
    modules,
    handleAddModule,
    handleRemoveModule,
    handleUpdateModuleTitle,
    handleAddItem,
    handleRemoveItem,
    handleUpdateItem,
  } = useMallaCurricular(formData, setFormData);

  // ==========================================
  // ESTADO VISUAL (Acordeón)
  // ==========================================
  // Guarda los índices de los módulos que están cerrados
  const [collapsedModules, setCollapsedModules] = useState([]);

  const toggleModule = (index) => {
    setCollapsedModules((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const isAllCollapsed = modules.length > 0 && collapsedModules.length === modules.length;

  const toggleAll = () => {
    if (isAllCollapsed) {
      setCollapsedModules([]); // Expandir todos
    } else {
      setCollapsedModules(modules.map((_, i) => i)); // Colapsar todos
    }
  };

  // Envolvemos la función de agregar para asegurar que el nuevo módulo nazca expandido
  const onAddModuleClick = () => {
    handleAddModule();
    // Si todos estaban colapsados, el nuevo (al final) nacerá expandido 
    // porque su índice no estará en el array de colapsados.
  };

  // ==========================================
  // RENDERIZADO
  // ==========================================
  return (
    <div className="animate-in fade-in space-y-8 w-full max-w-full overflow-hidden">
      
      {/* Cabecera de la sección */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <h2 className="text-lg font-black text-slate-800">Malla Curricular</h2>
          <p className="text-xs text-slate-500 mt-1">
            Construye el temario del programa módulo por módulo.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          {modules.length > 1 && (
            <button
              onClick={toggleAll}
              type="button"
              className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-rounded text-[18px]">
                {isAllCollapsed ? "unfold_more" : "unfold_less"}
              </span>
              {isAllCollapsed ? "Expandir todos" : "Colapsar todos"}
            </button>
          )}

          <button
            onClick={onAddModuleClick}
            type="button"
            className="bg-brand/10 text-brand px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-brand hover:text-white transition-all flex items-center gap-2 whitespace-nowrap"
          >
            <span className="material-symbols-rounded text-sm">add</span>
            Nuevo Módulo
          </button>
        </div>
      </div>

      {/* Lista de Módulos */}
      <div className="space-y-4">
        {modules.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <span className="material-symbols-rounded text-4xl text-slate-300 mb-2">account_tree</span>
            <p className="text-sm font-bold text-slate-500">No hay módulos configurados</p>
            <button
              onClick={onAddModuleClick}
              type="button"
              className="text-brand text-xs font-bold hover:underline mt-4"
            >
              + Crear primer módulo
            </button>
          </div>
        ) : (
          modules.map((module, modIndex) => {
            const isCollapsed = collapsedModules.includes(modIndex);

            return (
              <div 
                key={modIndex} 
                className="bg-white border border-slate-200 rounded-2xl shadow-sm transition-all relative group overflow-hidden"
              >
                {/* Barra lateral de color */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-slate-200 group-hover:bg-brand transition-colors z-10"></div>

                {/* HEADER DEL MÓDULO (Siempre visible, click para colapsar) */}
                <div 
                  onClick={() => toggleModule(modIndex)}
                  className={`flex items-center justify-between p-4 pl-6 cursor-pointer hover:bg-slate-50 transition-colors ${!isCollapsed ? 'border-b border-slate-100' : ''}`}
                >
                  <div className="flex items-center gap-4 min-w-0 flex-1">
                    <div className="w-8 h-8 bg-slate-100 text-slate-500 font-black rounded-lg flex items-center justify-center shrink-0 text-sm">
                      {module.number}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-bold text-slate-800 truncate pr-4">
                        {module.title || <span className="text-slate-400 italic">Módulo sin título</span>}
                      </h3>
                      <p className="text-[11px] text-slate-400 font-semibold mt-0.5">
                        {module.items?.length || 0} temas registrados
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation(); // Evita que se colapse al hacer clic en eliminar
                        handleRemoveModule(modIndex);
                      }}
                      className="w-8 h-8 flex items-center justify-center text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      title="Eliminar Módulo"
                    >
                      <span className="material-symbols-rounded text-[18px]">delete</span>
                    </button>
                    
                    <span className={`material-symbols-rounded text-slate-400 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}>
                      expand_less
                    </span>
                  </div>
                </div>

                {/* CONTENIDO DEL MÓDULO (Colapsable) */}
                {!isCollapsed && (
                  <div className="p-5 md:p-6 pl-6 md:pl-12 animate-in slide-in-from-top-2 fade-in duration-200">
                    
                    {/* Título del Módulo (Input real) */}
                    <div className="mb-6">
                      <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 block mb-2">
                        Título del Módulo
                      </label>
                      <input
                        type="text"
                        value={module.title || ""}
                        onChange={(e) => handleUpdateModuleTitle(modIndex, e.target.value)}
                        placeholder="Ej: Fundamentos básicos de programación..."
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none text-sm focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all font-bold text-slate-800"
                      />
                    </div>

                    {/* Lista de Ítems */}
                    <div className="space-y-3 p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                      <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 block mb-3">
                        Temas del módulo
                      </label>
                      
                      {module.items && module.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start sm:items-center gap-2 sm:gap-3 group/item">
                          <span className="material-symbols-rounded text-[16px] text-slate-300 mt-2 sm:mt-0 shrink-0">
                            subdirectory_arrow_right
                          </span>
                          
                          <input
                            type="text"
                            value={item.description || ""} 
                            onChange={(e) => handleUpdateItem(modIndex, itemIndex, e.target.value)}
                            placeholder="Descripción del tema..."
                            className="min-w-0 flex-1 bg-white border border-slate-200 rounded-lg hover:border-slate-300 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none text-sm text-slate-600 py-2 px-3 transition-all shadow-sm"
                          />
                          
                          <button
                            type="button"
                            onClick={() => handleRemoveItem(modIndex, itemIndex)}
                            className="w-8 h-8 shrink-0 rounded-md flex items-center justify-center text-slate-300 hover:text-red-500 hover:bg-red-50 opacity-100 sm:opacity-0 group-hover/item:opacity-100 transition-all"
                            title="Quitar tema"
                          >
                            <span className="material-symbols-rounded text-[18px]">close</span>
                          </button>
                        </div>
                      ))}

                      <button
                        type="button"
                        onClick={() => handleAddItem(modIndex)}
                        className="mt-4 text-[11px] font-bold text-slate-500 hover:text-brand bg-white border border-slate-200 hover:border-brand/30 px-3 py-2 rounded-lg flex items-center gap-1.5 transition-all shadow-sm"
                      >
                        <span className="material-symbols-rounded text-[14px]">add</span>
                        Añadir nuevo tema
                      </button>
                    </div>

                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TabMalla;