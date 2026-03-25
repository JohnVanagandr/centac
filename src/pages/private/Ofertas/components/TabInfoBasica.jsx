import React from "react";

const TabInfoBasica = ({ formData, handleChange, handleTitleChange }) => {
  return (
    <div className="animate-in fade-in space-y-6">
      <h2 className="text-lg font-black text-slate-800 mb-6 border-b border-slate-100 pb-4">
        Información General del Programa
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Título Principal */}
        <div className="space-y-1.5 md:col-span-2">
          <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1">
            Nombre del Programa
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleTitleChange}
            placeholder="Ej: TÉCNICO EN ELECTRICIDAD INDUSTRIAL"
            className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none text-sm focus:bg-white focus:border-brand/30 transition-all font-bold text-slate-800"
          />
        </div>

        {/* Subtítulo */}
        <div className="space-y-1.5 md:col-span-2">
          <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1">
            Subtítulo / Enfoque
          </label>
          <input
            type="text"
            name="subtitle"
            value={formData.subtitle}
            onChange={handleChange}
            placeholder="Ej: Instalaciones y sistemas eléctricos industriales"
            className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-2xl outline-none text-sm focus:bg-white focus:border-brand/30 transition-all text-slate-600"
          />
        </div>

        {/* URL (Slug) */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1">
            Enlace URL (Slug)
          </label>
          <div className="flex items-center">
            <span className="px-4 py-3 bg-slate-100 border border-r-0 border-slate-200 rounded-l-2xl text-xs text-slate-400 font-medium">
              /programa/
            </span>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              placeholder="electricidad-industrial"
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-r-2xl outline-none text-sm focus:border-brand/30 transition-all text-brand font-medium"
            />
          </div>
        </div>

        {/* Resolución Legal */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1">
            Resolución Legal
          </label>
          <input
            type="text"
            name="resolution"
            value={formData.resolution}
            onChange={handleChange}
            placeholder="Ej: Resolución 3241 del 27 de sept. 2022"
            className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-2xl outline-none text-sm focus:bg-white focus:border-brand/30 transition-all text-slate-600"
          />
        </div>

        {/* Duración */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1">
            Duración
          </label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="Ej: 2 semestres, 40 horas..."
            className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-2xl outline-none text-sm focus:bg-white focus:border-brand/30 transition-all text-slate-600"
          />
        </div>

        {/* Modalidad */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1">
            Modalidad
          </label>
          <select
            name="modality"
            value={formData.modality}
            onChange={handleChange}
            className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-2xl outline-none text-sm focus:bg-white focus:border-brand/30 transition-all text-slate-600 appearance-none"
          >
            <option value="Presencial">Presencial</option>
            <option value="Virtual">Virtual</option>
            <option value="Híbrido">Híbrido</option>
          </select>
        </div>

        {/* Título Obtenido */}
        <div className="space-y-1.5 md:col-span-2">
          <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1">
            Título que se Otorga al Finalizar
          </label>
          <input
            type="text"
            name="titleObtained"
            value={formData.titleObtained}
            onChange={handleChange}
            placeholder="Ej: Técnico Laboral en Instalaciones Eléctricas..."
            className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-2xl outline-none text-sm focus:bg-white focus:border-brand/30 transition-all text-slate-600"
          />
        </div>

        {/* Toggle de Destacado (Top) */}
        <div className="md:col-span-2 mt-4 flex items-center justify-between p-5 bg-amber-50/50 border border-amber-100 rounded-2xl">
          <div>
            <h4 className="text-sm font-bold text-slate-800">Destacar en la página principal</h4>
            <p className="text-xs text-slate-500 mt-1">Activa esta opción para que el programa aparezca marcado con una estrella.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="isTop"
              checked={formData.isTop}
              onChange={handleChange}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
          </label>
        </div>

      </div>
    </div>
  );
};

export default TabInfoBasica;