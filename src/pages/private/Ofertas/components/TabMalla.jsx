import React from "react";

const TabMalla = ({ formData, setFormData }) => {
  const modules = formData.modules || [];

  // ==========================================
  // LÓGICA DE MÓDULOS (Nivel 1)
  // ==========================================

  const handleAddModule = () => {
    const newModule = {
      number: modules.length + 1,
      title: "",
      // Ahora iniciamos con un objeto, coincidiendo con el backend
      items: [{ description: "" }], 
    };
    setFormData((prev) => ({
      ...prev,
      modules: [...prev.modules, newModule],
    }));
  };

  const handleRemoveModule = (modIndex) => {
    const newModules = modules
      .filter((_, index) => index !== modIndex)
      .map((mod, index) => ({ ...mod, number: index + 1 }));

    setFormData((prev) => ({ ...prev, modules: newModules }));
  };

  const handleUpdateModuleTitle = (modIndex, newTitle) => {
    const newModules = [...modules];
    newModules[modIndex] = { ...newModules[modIndex], title: newTitle };
    setFormData((prev) => ({ ...prev, modules: newModules }));
  };

  // ==========================================
  // LÓGICA DE ÍTEMS (Nivel 2)
  // ==========================================

  const handleAddItem = (modIndex) => {
    const newModules = [...modules];
    // Agregamos un objeto vacío
    newModules[modIndex].items = [...newModules[modIndex].items, { description: "" }];
    setFormData((prev) => ({ ...prev, modules: newModules }));
  };

  const handleRemoveItem = (modIndex, itemIndex) => {
    const newModules = [...modules];
    newModules[modIndex].items = newModules[modIndex].items.filter(
      (_, index) => index !== itemIndex
    );
    setFormData((prev) => ({ ...prev, modules: newModules }));
  };

  const handleUpdateItem = (modIndex, itemIndex, newValue) => {
    const newModules = [...modules];
    const currentItem = newModules[modIndex].items[itemIndex];
    
    // Actualizamos la propiedad 'description' del objeto
    newModules[modIndex].items[itemIndex] = {
      ...currentItem,
      description: newValue
    };
    
    setFormData((prev) => ({ ...prev, modules: newModules }));
  };

  // ==========================================
  // RENDERIZADO
  // ==========================================

  return (
    <div className="animate-in fade-in space-y-8">
      
      {/* Cabecera de la sección */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <h2 className="text-lg font-black text-slate-800">Malla Curricular</h2>
          <p className="text-xs text-slate-500 mt-1">
            Construye el temario del programa módulo por módulo.
          </p>
        </div>
        <button
          onClick={handleAddModule}
          type="button"
          className="bg-brand/10 text-brand px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-brand hover:text-white transition-all flex items-center gap-2 w-fit"
        >
          <span className="material-symbols-rounded text-sm">add</span>
          Agregar Módulo
        </button>
      </div>

      {/* Lista de Módulos */}
      <div className="space-y-6">
        {modules.length === 0 ? (
          // Estado Vacío
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <span className="material-symbols-rounded text-4xl text-slate-300 mb-2">account_tree</span>
            <p className="text-sm font-bold text-slate-500">No hay módulos configurados</p>
            <p className="text-xs text-slate-400 mt-1 mb-4">Empieza agregando el primer módulo de estudio.</p>
            <button
              onClick={handleAddModule}
              type="button"
              className="text-brand text-xs font-bold hover:underline"
            >
              + Crear primer módulo
            </button>
          </div>
        ) : (
          // Tarjetas de Módulos
          modules.map((module, modIndex) => (
            <div 
              key={modIndex} 
              className="bg-white border border-slate-200 rounded-2xl shadow-sm transition-all relative overflow-hidden group"
            >
              {/* Barra lateral de color (indicador visual de módulo) */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-slate-200 group-hover:bg-brand transition-colors"></div>

              <div className="p-5 md:p-6 pl-6 md:pl-8">
                {/* Botón para eliminar el módulo entero */}
                <button
                  type="button"
                  onClick={() => handleRemoveModule(modIndex)}
                  className="absolute top-4 right-4 w-8 h-8 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-200 transition-colors opacity-0 group-hover:opacity-100 shadow-sm z-10"
                  title="Eliminar Módulo Completo"
                >
                  <span className="material-symbols-rounded text-[18px]">delete</span>
                </button>

                {/* Título del Módulo */}
                <div className="flex items-start gap-4 mb-6 pr-10">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 text-slate-400 font-black rounded-xl flex items-center justify-center shrink-0 shadow-inner text-lg">
                    {module.number}
                  </div>
                  <div className="flex-1 space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1">
                      Título del Módulo
                    </label>
                    <input
                      type="text"
                      value={module.title || ""}
                      onChange={(e) => handleUpdateModuleTitle(modIndex, e.target.value)}
                      placeholder="Ej: Fundamentos básicos..."
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none text-sm focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all font-bold text-slate-800"
                    />
                  </div>
                </div>

                {/* Lista de Ítems (Temas dentro del módulo) */}
                <div className="ml-4 md:ml-16 space-y-3 p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                  <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 block mb-3">
                    Temas del módulo ({module.items?.length || 0})
                  </label>
                  
                  {module.items && module.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3 group/item">
                      {/* Icono decorativo de lista */}
                      <span className="material-symbols-rounded text-[16px] text-slate-300">subdirectory_arrow_right</span>
                      
                      {/* Input del Tema (Apunta a item.description) */}
                      <input
                        type="text"
                        value={item.description || ""} // Extraemos correctamente el string del objeto
                        onChange={(e) => handleUpdateItem(modIndex, itemIndex, e.target.value)}
                        placeholder="Descripción del tema..."
                        className="flex-1 bg-white border border-slate-200 rounded-lg hover:border-slate-300 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none text-sm text-slate-600 py-2 px-3 transition-all shadow-sm"
                      />
                      
                      {/* Botón para eliminar el tema específico */}
                      <button
                        type="button"
                        onClick={() => handleRemoveItem(modIndex, itemIndex)}
                        className="w-8 h-8 rounded-md flex items-center justify-center text-slate-300 hover:text-red-500 hover:bg-red-50 opacity-0 group-hover/item:opacity-100 transition-all border border-transparent hover:border-red-100"
                        title="Quitar tema"
                      >
                        <span className="material-symbols-rounded text-[18px]">close</span>
                      </button>
                    </div>
                  ))}

                  {/* Botón para agregar un nuevo tema al módulo */}
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
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TabMalla;