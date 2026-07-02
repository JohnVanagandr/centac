import React from "react";

const TabMultimedia = ({ formData, handleChange }) => {
  return (
    <div className="animate-in fade-in space-y-8 max-w-3xl mx-auto">
      {/* Cabecera */}
      <div className="border-b border-slate-100 pb-4 text-center sm:text-left">
        <h2 className="text-lg font-black text-slate-800">Multimedia</h2>
        <p className="text-xs text-slate-500 mt-1">
          Configura la imagen de portada del programa.
        </p>
      </div>

      <div className="space-y-10">
        
        {/* ÚNICA SECCIÓN: Imagen Principal (Hero) */}
        <div className="space-y-4">
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
          
          {/* Vista Previa */}
          <div className="w-full aspect-video bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 relative flex items-center justify-center shadow-sm">
            {formData.img ? (
              <img 
                src={formData.img} 
                alt="Vista previa" 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-slate-400">
                <span className="material-symbols-rounded text-4xl mb-2">image</span>
                <span className="text-xs font-bold">Sin imagen asignada</span>
              </div>
            )}
            <div className="absolute inset-0 hidden flex-col items-center justify-center text-slate-400 bg-slate-100">
               <span className="material-symbols-rounded text-4xl mb-2">broken_image</span>
               <span className="text-xs font-bold">Enlace no disponible</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TabMultimedia;