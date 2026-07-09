import React from "react";
import { useSliderCreator } from "../../hooks/useSliderCreator";
import { InputField, TextAreaField } from "@/components/ui/Form";

const SliderCreator = () => {
  const {
    imageUrl,
    isCreating,
    register,
    errors,
    handleSubmit,
    handleCancel
  } = useSliderCreator();

  return (
    <div className="animate-in fade-in space-y-8 max-w-4xl mx-auto pb-10">
      
      {/* Cabecera */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <h2 className="text-2xl font-black text-navy tracking-tight">Crear Nuevo Slider</h2>
          <p className="text-sm text-slate-500 mt-1 font-medium">Configura un nuevo banner para la página principal.</p>
        </div>
        <button 
          type="button"
          onClick={handleCancel}
          className="text-xs font-bold text-slate-400 hover:text-navy transition-colors flex items-center gap-1 bg-white px-4 py-2 rounded-lg border border-slate-100 shadow-sm hover:shadow-md"
        >
          <span className="material-symbols-rounded text-[18px]">arrow_back</span>
          Volver a la lista
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* CARD 1: SECCIÓN MULTIMEDIA */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
          <div className="border-b border-slate-50 pb-3">
            <h3 className="text-sm font-black uppercase tracking-[2px] text-brand">Fondo del Banner</h3>
            <p className="text-xs text-slate-400 mt-1">Ingresa la URL de la imagen para el slider. Este campo es obligatorio.</p>
          </div>
          
          <div className="space-y-4">
            <InputField
              label="URL de la Imagen *"
              placeholder="https://images.unsplash.com/photo-..."
              {...register("image")}
              error={errors.image?.message}
            />
            
            <div className="w-full aspect-[21/9] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 relative flex items-center justify-center shadow-inner">
              {imageUrl ? (
                <img 
                  src={imageUrl} 
                  alt="Vista previa del slider" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-slate-400">
                  <span className="material-symbols-rounded text-4xl mb-2">add_photo_alternate</span>
                  <span className="text-xs font-bold mt-2">Pega una URL para ver la imagen</span>
                </div>
              )}
              
              <div className="absolute inset-0 hidden flex-col items-center justify-center text-slate-400 bg-slate-100">
                 <span className="material-symbols-rounded text-4xl mb-2">broken_image</span>
                 <span className="text-xs font-bold">Enlace roto o imagen no disponible</span>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2: TEXTOS Y LLAMADO A LA ACCIÓN */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
          <div className="border-b border-slate-50 pb-3">
            <h3 className="text-sm font-black uppercase tracking-[2px] text-navy">Contenido Textual</h3>
            <p className="text-xs text-slate-400 mt-1">Configura el mensaje principal y el botón de redirección. Todos los campos son requeridos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <InputField
                label="Etiqueta (Badge) *"
                placeholder="Ej: Tu Éxito es Nuestra Meta"
                {...register("badge")}
                error={errors.badge?.message}
              />
            </div>
            
            <div>
              <InputField
                label="Título (Texto Normal) *"
                placeholder="Ej: Asegura tu"
                {...register("title")}
                error={errors.title?.message}
              />
            </div>

            <div>
              <InputField
                label="Título (Resaltado) *"
                placeholder="Ej: Futuro Laboral"
                {...register("title_highlight")}
                error={errors.title_highlight?.message}
              />
            </div>

            <div className="md:col-span-2">
              <TextAreaField
                label="Descripción *"
                rows={3}
                placeholder="Transformamos tu potencial en oportunidades..."
                {...register("description")}
                error={errors.description?.message}
              />
            </div>

            <div>
              <InputField
                label="Texto del Botón *"
                placeholder="Ej: Ver Programas"
                {...register("button_text")}
                error={errors.button_text?.message}
              />
            </div>

            <div>
              <InputField
                label="Enlace del Botón *"
                placeholder="Ej: #ofertas o /ruta"
                {...register("button_link")}
                error={errors.button_link?.message}
              />
            </div>
          </div>
        </div>

        {/* Acción de Guardar */}
        <div className="flex justify-end pt-2">
          <button 
            type="submit" 
            disabled={isCreating}
            className="bg-brand text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-navy transition-all shadow-lg shadow-brand/20 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isCreating ? (
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            ) : (
              <span className="material-symbols-rounded text-sm">add_circle</span>
            )}
            {isCreating ? "Creando..." : "Crear Slider"}
          </button>
        </div>

      </form>
    </div>
  );
};

export default SliderCreator;