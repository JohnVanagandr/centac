// src/features/ofertas/components/admin/tabs/TabAprendizajes.jsx
import React from "react";
import { useAprendizajes } from "../../../hooks/useAprendizajes";
import { IconSelect } from "@/components/ui/Form"; // Ajusta la ruta si tu IconSelect no está indexado en Form

const TabAprendizajes = ({ formData, setFormData }) => {
  const { learnings, handleAddLearning, handleRemoveLearning, handleChangeLearning } = useAprendizajes(formData, setFormData);

  return (
    <div className="animate-in fade-in space-y-8">
      {/* Cabecera */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <h2 className="text-lg font-black text-slate-800">Características y Aprendizajes</h2>
          <p className="text-xs text-slate-500 mt-1">
            Define las competencias, características o resultados de aprendizaje del programa.
          </p>
        </div>
        <button
          type="button"
          onClick={handleAddLearning}
          className="bg-brand/10 text-brand px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-brand hover:text-white transition-all flex items-center justify-center gap-2 shrink-0"
        >
          <span className="material-symbols-rounded text-sm">add</span>
          Añadir Nuevo
        </button>
      </div>

      {/* Lista de Aprendizajes */}
      <div className="space-y-6">
        {learnings.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
            <span className="material-symbols-rounded text-4xl text-slate-300 mb-3 block">lightbulb</span>
            <p className="text-sm font-bold text-slate-500">No hay características definidas</p>
            <button
              onClick={handleAddLearning}
              type="button"
              className="text-brand text-xs font-bold hover:underline mt-2"
            >
              + Crear la primera característica
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {learnings.map((learning, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-3xl p-6 relative shadow-sm group hover:border-brand/30 transition-colors">
                
                {/* Botón Eliminar */}
                <button
                  type="button"
                  onClick={() => handleRemoveLearning(index)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-red-50 text-red-400 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all opacity-0 group-hover:opacity-100 z-10"
                  title="Eliminar característica"
                >
                  <span className="material-symbols-rounded text-[18px]">delete</span>
                </button>

                <div className="space-y-5">
                  {/* Selector de Ícono con el nuevo componente */}
                  <div className="w-full sm:w-2/3 pr-8">
                    <IconSelect 
                      label={`Ícono #${index + 1}`}
                      value={learning.icon || ""}
                      onChange={(val) => handleChangeLearning(index, "icon", val)}
                    />
                  </div>

                  {/* Título */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1">
                      Título
                    </label>
                    <input
                      type="text"
                      value={learning.title || ""}
                      onChange={(e) => handleChangeLearning(index, "title", e.target.value)}
                      placeholder="Ej: Metodologías Ágiles..."
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl outline-none text-sm focus:bg-white focus:border-brand/30 transition-all font-bold text-slate-800"
                    />
                  </div>

                  {/* Descripción (Texto) */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1">
                      Descripción
                    </label>
                    <textarea
                      value={learning.text || ""}
                      onChange={(e) => handleChangeLearning(index, "text", e.target.value)}
                      placeholder="Describe esta característica en detalle..."
                      className="w-full min-h-[100px] px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-sm focus:bg-white focus:border-brand/30 transition-all text-slate-600 resize-none leading-relaxed"
                    ></textarea>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TabAprendizajes;