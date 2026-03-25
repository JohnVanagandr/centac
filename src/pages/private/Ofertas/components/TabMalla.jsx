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
      items: [""], // Inicia con un ítem vacío por defecto
    };
    setFormData((prev) => ({
      ...prev,
      modules: [...prev.modules, newModule],
    }));
  };

  const handleRemoveModule = (modIndex) => {
    // Eliminamos el módulo y renumeramos los restantes automáticamente
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
    // Clonamos el array de items para no mutar el original directamente
    newModules[modIndex].items = [...newModules[modIndex].items, ""];
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
    newModules[modIndex].items[itemIndex] = newValue;
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
              className="bg-slate-50 border border-slate-100 rounded-2xl p-5 md:p-6 transition-all relative group"
            >
              {/* Botón para eliminar el módulo entero (esquina superior derecha) */}
              <button
                type="button"
                onClick={() => handleRemoveModule(modIndex)}
                className="absolute top-4 right-4 w-8 h-8 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-200 transition-colors opacity-0 group-hover:opacity-100"
                title="Eliminar Módulo Completo"
              >
                <span className="material-symbols-rounded text-[18px]">delete</span>
              </button>

              {/* Título del Módulo */}
              <div className="flex items-start gap-4 mb-6 pr-10">
                <div className="w-10 h-10 bg-slate-200 text-slate-600 font-black rounded-xl flex items-center justify-center shrink-0">
                  {module.number}
                </div>
                <div className="flex-1 space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1">
                    Título del Módulo
                  </label>
                  <input
                    type="text"
                    value={module.title}
                    onChange={(e) => handleUpdateModuleTitle(modIndex, e.target.value)}
                    placeholder="Ej: Fundamentos básicos de soldadura"
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl outline-none text-sm focus:border-brand/50 transition-all font-bold text-slate-800"
                  />
                </div>
              </div>

              {/* Lista de Ítems (Temas dentro del módulo) */}
              <div className="pl-14 space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1 block mb-2">
                  Temas del módulo ({module.items.length})
                </label>
                
                {module.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-2 group/item">
                    {/* Viñeta visual */}
                    <div className="w-1.5 h-1.5 rounded-full bg-brand/50 shrink-0"></div>
                    
                    {/* Input del Tema */}
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => handleUpdateItem(modIndex, itemIndex, e.target.value)}
                      placeholder="Ej: Conceptos básicos y terminología..."
                      className="flex-1 bg-transparent border-b border-transparent hover:border-slate-200 focus:border-brand/30 focus:bg-white outline-none text-sm text-slate-600 py-1.5 px-2 transition-all"
                    />
                    
                    {/* Botón para eliminar el tema específico */}
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(modIndex, itemIndex)}
                      className="text-slate-300 hover:text-red-500 opacity-0 group-hover/item:opacity-100 transition-opacity p-1"
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
                  className="mt-2 text-[11px] font-bold text-brand hover:text-navy flex items-center gap-1 transition-colors px-2 py-1"
                >
                  <span className="material-symbols-rounded text-[14px]">add</span>
                  Añadir tema
                </button>
              </div>

            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TabMalla;