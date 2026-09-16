import React, { useMemo } from "react";

// 1. Recibimos handleImageChange por props (asegúrate de pasarlo desde tu componente padre)
const TabMultimedia = ({ formData, handleChange, handleImageChange }) => {
  // Función auxiliar para extraer el ID del video
  const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(formData.video_url);

  // Lógica inteligente para la vista previa
  const imagePreviewUrl = useMemo(() => {
    if (!formData.img) return null;
    // Si es un objeto File (recién subido), creamos una URL temporal en memoria
    if (formData.img instanceof File) {
      return URL.createObjectURL(formData.img);
    }
    // Si es un string, significa que es la URL que vino desde el backend (modo edición)
    return formData.img;
  }, [formData.img]);

  return (
    <div className="animate-in fade-in space-y-8 max-w-3xl mx-auto">
      {/* Cabecera */}
      <div className="border-b border-slate-100 pb-4 text-center sm:text-left">
        <h2 className="text-lg font-black text-slate-800">Multimedia</h2>
        <p className="text-xs text-slate-500 mt-1">
          Configura la imagen de portada y el video promocional del programa.
        </p>
      </div>

      <div className="space-y-10">
        
        {/* SECCIÓN 1: Imagen Principal (Hero) */}
        <div className="space-y-4">
          <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1">
            Imagen de Portada (Archivo físico)
          </label>
          
          <input
            type="file"
            name="img"
            accept="image/jpeg, image/png, image/webp"
            // 2. Conectamos directamente el manejador blindado de nuestro hook
            onChange={handleImageChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-sm focus:bg-white focus:border-brand/30 transition-all text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-brand/10 file:text-brand hover:file:bg-brand/20 cursor-pointer"
          />
          
          {/* Vista Previa Inteligente */}
          <div className="w-full aspect-video bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 relative flex items-center justify-center shadow-sm">
            {imagePreviewUrl ? (
              <img 
                src={imagePreviewUrl} 
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
               <span className="text-xs font-bold">Enlace/Archivo no disponible</span>
            </div>
          </div>
        </div>

        {/* SECCIÓN 2: Video de YouTube (Se mantiene intacta) */}
        <div className="space-y-4 pt-6 border-t border-slate-100">
          <div className="flex items-center justify-between">
             <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1">
               Video Promocional (YouTube)
             </label>
             <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-md">Opcional</span>
          </div>
          <input
            type="text"
            name="video_url"
            value={formData.video_url || ""}
            onChange={handleChange}
            placeholder="Ej: https://www.youtube.com/watch?v=..."
            className={`w-full px-4 py-3 bg-slate-50 border rounded-xl outline-none text-sm focus:bg-white transition-all text-slate-600 ${
              formData.video_url && !videoId ? 'border-red-300 focus:border-red-400' : 'border-slate-100 focus:border-brand/30'
            }`}
          />
          
          {formData.video_url && !videoId && (
            <p className="text-xs text-red-500 font-medium ml-1">
              El formato del enlace no parece ser válido. Asegúrate de copiar la URL correcta de YouTube.
            </p>
          )}

          <div className="w-full aspect-video bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 relative flex items-center justify-center shadow-sm">
            {videoId ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                title="Vista previa del video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="flex flex-col items-center justify-center text-slate-400">
                <span className="material-symbols-rounded text-4xl mb-2">play_circle</span>
                <span className="text-xs font-bold">Sin video asignado</span>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TabMultimedia;