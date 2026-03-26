import React from "react";
// IMPORTANTE: Asegúrate de que esta ruta apunte correctamente a tu IconMapper
import IconMapper from "../../../../components/ui/Icons/IconMapper";
import { ICON_LIBRARY } from "../../../../components/ui/Icons/IconLibrary"; 

const TabMultimedia = ({ formData, handleChange }) => {
  const availableIconNames = Object.keys(ICON_LIBRARY);
  const highlights = formData.aboutHighlights || [];

  // ==========================================
  // FUNCIÓN MÁGICA: Textarea Auto-ajustable
  // ==========================================
  const handleAutoResize = (e) => {
    e.target.style.height = "auto"; // Resetea la altura
    e.target.style.height = `${e.target.scrollHeight}px`; // Ajusta al contenido real
  };

  const handleAddHighlight = () => {
    handleChange({
      target: { name: "aboutHighlights", value: [...highlights, ""] },
    });
  };

  const handleRemoveHighlight = (indexToRemove) => {
    const newHighlights = highlights.filter((_, index) => index !== indexToRemove);
    handleChange({
      target: { name: "aboutHighlights", value: newHighlights },
    });
  };

  const handleUpdateHighlight = (indexToUpdate, newValue) => {
    const newHighlights = [...highlights];
    newHighlights[indexToUpdate] = newValue;
    handleChange({
      target: { name: "aboutHighlights", value: newHighlights },
    });
  };

  return (
    <div className="animate-in fade-in space-y-8">
      {/* Cabecera */}
      <div className="border-b border-slate-100 pb-4">
        <h2 className="text-lg font-black text-slate-800">Multimedia y Presentación</h2>
        <p className="text-xs text-slate-500 mt-1">
          Configura la imagen principal, el ícono representativo y los textos descriptivos.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* COLUMNA IZQUIERDA: Imagen e Ícono */}
        <div className="space-y-8">
          
          {/* Imagen Principal (Hero) */}
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1">
              Imagen de Portada (URL)
            </label>
            <input
              type="text"
              name="img"
              value={formData.img || ""}
              onChange={handleChange}
              placeholder="https://images.unsplash.com/photo-..."
              className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-sm focus:bg-white focus:border-brand/30 transition-all text-slate-600"
            />
            
            {/* Vista Previa de la Imagen */}
            <div className="w-full aspect-video bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 relative group flex items-center justify-center mt-2 shadow-sm">
              {formData.img ? (
                <>
                  <img 
                    src={formData.img} 
                    alt="Vista previa" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 hidden flex-col items-center justify-center text-slate-400 bg-slate-100">
                    <span className="material-symbols-rounded text-4xl mb-2">broken_image</span>
                    <span className="text-xs font-bold">Enlace roto o imagen no disponible</span>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center text-slate-400">
                  <span className="material-symbols-rounded text-4xl mb-2">image</span>
                  <span className="text-xs font-bold">Sin imagen asignada</span>
                </div>
              )}
            </div>
          </div>

          {/* Selector de Ícono usando IconMapper */}
          <div className="space-y-3">
            <div className="flex justify-between items-end">
                <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1">
                Ícono del Programa
                </label>
                <span className="text-[10px] font-bold text-brand bg-brand/10 px-2 py-1 rounded-md">
                    Seleccionado: {formData.iconName}
                </span>
            </div>
            
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
              {availableIconNames.map((iconName) => (
                <button
                  key={iconName}
                  type="button"
                  onClick={() => handleChange({ target: { name: "iconName", value: iconName } })}
                  className={`flex items-center justify-center aspect-square rounded-xl border transition-all ${
                    formData.iconName === iconName
                      ? "bg-brand border-brand text-white shadow-md shadow-brand/20 scale-105"
                      : "bg-white border-slate-200 text-slate-400 hover:border-brand/30 hover:text-brand"
                  }`}
                  title={iconName}
                >
                  <IconMapper iconName={iconName} className="w-6 h-6" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: Textos y SEO */}
        <div className="space-y-8">
          
          {/* Descripción General (AUTO-AJUSTABLE) */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-end">
                <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1">
                  Descripción General
                </label>
                <span className={`text-[9px] font-bold ${formData.desc?.length > 300 ? 'text-amber-500' : 'text-slate-300'}`}>
                    {formData.desc?.length || 0} / 300 recom.
                </span>
            </div>
            <textarea
              name="desc"
              value={formData.desc || ""}
              onChange={handleChange}
              onInput={handleAutoResize} // <-- Disparador de tamaño
              placeholder="Describe el programa de forma atractiva..."
              className="w-full min-h-[200px] px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none text-sm focus:bg-white focus:border-brand/30 transition-all text-slate-600 resize-none overflow-hidden leading-relaxed shadow-inner shadow-slate-100/50"
            ></textarea>
          </div>

          {/* Puntos Clave (Highlights) - DISEÑO MEJORADO Y AUTO-AJUSTABLE */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1">
                Puntos Clave (Highlights)
              </label>
              <button
                type="button"
                onClick={handleAddHighlight}
                className="text-[10px] font-bold text-brand hover:text-navy transition-colors flex items-center gap-1 bg-brand/5 px-2 py-1 rounded-md"
              >
                <span className="material-symbols-rounded text-[14px]">add</span>
                Añadir Punto
              </button>
            </div>

            <div className="space-y-4">
              {highlights.length === 0 ? (
                 <div className="text-center py-8 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                    <span className="material-symbols-rounded text-3xl text-slate-300 mb-1">format_list_bulleted</span>
                    <p className="text-xs font-bold text-slate-500">Sin puntos clave</p>
                    <p className="text-[10px] text-slate-400 mt-1">Agrega beneficios o características principales.</p>
                 </div>
              ) : (
                highlights.map((highlight, index) => (
                  <div key={index} className="relative group flex bg-white border border-slate-100 rounded-2xl p-1 pr-12 shadow-sm hover:border-brand/20 hover:shadow-md transition-all">
                    
                    {/* Número/Indicador visual */}
                    <div className="w-10 flex flex-col items-center pt-3 shrink-0">
                      <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center text-[10px] font-black text-slate-400 border border-slate-100">
                          {index + 1}
                      </div>
                    </div>
                    
                    {/* Textarea Auto-ajustable */}
                    <textarea
                      value={highlight}
                      onChange={(e) => handleUpdateHighlight(index, e.target.value)}
                      onInput={handleAutoResize} // <-- Disparador de tamaño
                      placeholder="Ej: La formación permite desarrollar habilidades para..."
                      className="w-full min-h-[140px] py-3 bg-transparent border-none outline-none text-sm text-slate-600 resize-none overflow-hidden leading-relaxed"
                    ></textarea>
                    
                    {/* Botón Eliminar Flotante */}
                    <button
                      type="button"
                      onClick={() => handleRemoveHighlight(index)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-red-50 text-red-400 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all opacity-0 group-hover:opacity-100"
                      title="Eliminar punto clave"
                    >
                      <span className="material-symbols-rounded text-[18px]">delete</span>
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TabMultimedia;