import React from "react";
import { IconSelect } from "@/components/ui/Form";

const TabInfoBasica = ({ formData, handleChange, handleTitleChange }) => {
  // Sincronización a prueba de fallos para el ícono (soporta la carga del backend y la edición en vivo)
  const selectedIcon = formData.iconName || formData.icon_name || "";

  return (
    <div className="space-y-10 animate-in fade-in duration-300 max-w-4xl mx-auto">
      
      {/* SECCIÓN 1: Identificación Principal */}
      <div className="space-y-6">
        <h3 className="text-sm font-black text-slate-800 border-b border-slate-100 pb-2">
          1. Identificación del Programa
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-black uppercase tracking-wider text-slate-500">
              Título del Programa <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title || ""}
              onChange={handleTitleChange} 
              placeholder="Ej: Análisis y Desarrollo de Software"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none text-sm font-medium focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all text-slate-700"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-black uppercase tracking-wider text-slate-400">
              Enlace Amigable (Slug URL) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="slug"
              value={formData.slug || ""}
              readOnly
              placeholder="analisis-y-desarrollo-de-software"
              className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl outline-none text-sm font-medium text-slate-400 cursor-not-allowed"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-xs font-black uppercase tracking-wider text-slate-500">
              Subtítulo
            </label>
            <input
              type="text"
              name="subtitle"
              value={formData.subtitle || ""}
              onChange={handleChange} 
              placeholder="Ej: Formación integral en TI"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none text-sm font-medium focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all text-slate-700"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-black uppercase tracking-wider text-slate-500">
              Título Obtenido
            </label>
            <input
              type="text"
              name="title_obtained"
              value={formData.title_obtained || ""}
              onChange={handleChange} 
              placeholder="Ej: Tecnólogo en ADSO"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none text-sm font-medium focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all text-slate-700"
            />
          </div>
        </div>
      </div>

      {/* SECCIÓN 2: Detalles Técnicos */}
      <div className="space-y-6">
        <h3 className="text-sm font-black text-slate-800 border-b border-slate-100 pb-2">
          2. Detalles Técnicos
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-black uppercase tracking-wider text-slate-500">
              Resolución
            </label>
            <input
              type="text"
              name="resolution"
              value={formData.resolution || ""}
              onChange={handleChange} 
              placeholder="Ej: Res. 1234 de 2023"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none text-sm font-medium focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all text-slate-700"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-black uppercase tracking-wider text-slate-500">
              Duración
            </label>
            <input
              type="text"
              name="duration"
              value={formData.duration || ""}
              onChange={handleChange} 
              placeholder="Ej: 24 meses"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none text-sm font-medium focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all text-slate-700"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-black uppercase tracking-wider text-slate-500">
              Modalidad
            </label>
            <select
              name="modality"
              value={formData.modality || ""}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none text-sm font-medium focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all text-slate-700"
            >
              <option value="">Seleccione...</option>
              <option value="Presencial">Presencial</option>
              <option value="Virtual">Virtual</option>
              <option value="Híbrida">Híbrida</option>
            </select>
          </div>
        </div>
      </div>

      {/* SECCIÓN 3: Configuración Visual y Destacado */}
      <div className="space-y-6">
        <h3 className="text-sm font-black text-slate-800 border-b border-slate-100 pb-2">
          3. Visualización
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50/50 p-6 rounded-3xl border border-slate-100">
          
          {/* Toggle: Programa Destacado */}
          <div className="flex flex-col justify-center gap-2 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <label className="text-xs font-black uppercase tracking-wider text-slate-500">
              Programa Destacado
            </label>
            <p className="text-[10px] text-slate-400 mb-2 leading-relaxed">
              Activa esta opción para destacar el programa en la página principal y banners promocionales.
            </p>
            <label className="relative inline-flex items-center cursor-pointer select-none">
              <input
                type="checkbox"
                name="isTop"
                checked={Boolean(formData.isTop)}
                onChange={handleChange}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-brand/20 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand"></div>
            </label>
          </div>

          {/* Selector de Ícono */}
          <div className="flex flex-col gap-2 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <IconSelect 
              label="Ícono Representativo *"
              value={selectedIcon}
              // Enviamos un evento sintético para que handleChange lo procese correctamente
              onChange={(val) => handleChange({ target: { name: "iconName", value: val } })}
            />
            <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">
              Este ícono se mostrará en las tarjetas de catálogo y en el menú de navegación.
            </p>
          </div>
          
        </div>
      </div>

      {/* SECCIÓN 4: Descripción Extendida */}
      <div className="space-y-6">
        <h3 className="text-sm font-black text-slate-800 border-b border-slate-100 pb-2">
          4. Descripción General
        </h3>
        <div className="flex flex-col gap-2">
          <textarea
            name="description"
            value={formData.description || ""}
            onChange={handleChange}
            rows="6"
            placeholder="Escriba aquí el perfil del programa, la justificación o los requisitos principales..."
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none text-sm font-medium focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all resize-y text-slate-700 leading-relaxed"
          ></textarea>
        </div>
      </div>

    </div>
  );
};

export default TabInfoBasica;