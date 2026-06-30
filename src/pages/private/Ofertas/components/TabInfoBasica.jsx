import React from "react";

const TabInfoBasica = ({ formData, handleChange, handleTitleChange }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Sección: Identificación del Programa */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Input: Título */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-black uppercase tracking-wider text-slate-500">
            Título del Programa <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="title"
            value={formData.title || ""}
            onChange={handleTitleChange} // Usa el manejador especial para generar el slug
            placeholder="Ej: Análisis y Desarrollo de Software"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none text-sm font-medium focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all"
            required
          />
        </div>

        {/* Input: Slug (Autogenerado / Solo Lectura o Informativo) */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-black uppercase tracking-wider text-slate-400">
            Enlace Amigable (Slug URL)
          </label>
          <div className="relative flex items-center">
            <span className="absolute left-4 text-xs font-bold text-slate-400 select-none">
              /programa/
            </span>
            <input
              type="text"
              name="slug"
              value={formData.slug || ""}
              readOnly // Se mantiene de solo lectura porque se genera desde el título
              placeholder="analisis-y-desarrollo-de-software"
              className="w-full pl-24 pr-4 py-3 bg-slate-100 border border-slate-200 text-slate-500 rounded-xl outline-none text-sm font-mono cursor-not-allowed"
            />
          </div>
        </div>

      </div>

      {/* Input: Subtítulo o Descripción Corta */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-black uppercase tracking-wider text-slate-500">
          Subtítulo / Línea de presentación
        </label>
        <input
          type="text"
          name="subtitle"
          value={formData.subtitle || ""}
          onChange={handleChange}
          placeholder="Ej: Domina las tecnologías web y metodologías ágiles de desarrollo"
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none text-sm font-medium focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all"
        />
      </div>

      {/* Sección: Parámetros Técnicos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Select: Modalidad */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-black uppercase tracking-wider text-slate-500">
            Modalidad <span className="text-red-500">*</span>
          </label>
          <select
            name="modality"
            value={formData.modality || ""}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none text-sm font-medium focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all appearance-none cursor-pointer"
            required
          >
            <option value="" disabled>Seleccione una opción</option>
            <option value="Presencial">Presencial</option>
            <option value="Virtual">Virtual</option>
            <option value="A Distancia">A Distancia</option>
          </select>
        </div>

        {/* Input: Duración */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-black uppercase tracking-wider text-slate-500">
            Duración Estimada
          </label>
          <input
            type="text"
            name="duration"
            value={formData.duration || ""}
            onChange={handleChange}
            placeholder="Ej: 24 Meses, 6 Meses, 80 Horas"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none text-sm font-medium focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all"
          />
        </div>

        {/* Select: Icono Representativo */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-black uppercase tracking-wider text-slate-500">
            Icono del Catálogo
          </label>
          <select
            name="iconName"
            value={formData.iconName || "school"}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none text-sm font-medium focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all appearance-none cursor-pointer"
          >
            <option value="school">Educación (Gorro)</option>
            <option value="lightning">Tecnología (Rayo)</option>
            <option value="piston">Procesos (Engranaje)</option>
            <option value="fire">Innovación (Fuego)</option>
          </select>
        </div>

      </div>

      {/* Sección: Estado y Destacado */}
      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center">
            <span className="material-symbols-rounded">star</span>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-800">Programa Destacado (Top)</p>
            <p className="text-[11px] text-slate-400 font-medium">Aparecerá en las primeras secciones del sitio público.</p>
          </div>
        </div>
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

      {/* Input: Descripción Extendida */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-black uppercase tracking-wider text-slate-500">
          Descripción General del Programa
        </label>
        <textarea
          name="description"
          value={formData.description || ""}
          onChange={handleChange}
          rows="5"
          placeholder="Escriba aquí el perfil del egresado, la justificación del programa o los requisitos mínimos de ingreso..."
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none text-sm font-medium focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all resize-none"
        ></textarea>
      </div>

    </div>
  );
};

export default TabInfoBasica;