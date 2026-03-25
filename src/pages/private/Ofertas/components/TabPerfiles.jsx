import React from "react";

const TabPerfiles = ({ formData, setFormData }) => {
  // Aseguramos que los objetos existan para evitar errores de undefined
  const instructor = formData.instructor || { name: "", role: "" };
  const profiles = formData.profiles || { egresado: "", profesional: [] };
  const profesionalRoles = profiles.profesional || [];

  // ==========================================
  // FUNCIÓN MÁGICA: Textarea Auto-ajustable
  // ==========================================
  const handleAutoResize = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  // ==========================================
  // LÓGICA DEL INSTRUCTOR
  // ==========================================
  const handleInstructorChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      instructor: {
        ...prev.instructor,
        [name]: value,
      },
    }));
  };

  // ==========================================
  // LÓGICA DEL PERFIL DE EGRESO
  // ==========================================
  const handleEgresadoChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      profiles: {
        ...prev.profiles,
        egresado: value,
      },
    }));
  };

  // ==========================================
  // LÓGICA DEL PERFIL OCUPACIONAL (Lista dinámica)
  // ==========================================
  const handleAddRole = () => {
    setFormData((prev) => ({
      ...prev,
      profiles: {
        ...prev.profiles,
        profesional: [...profesionalRoles, ""],
      },
    }));
  };

  const handleRemoveRole = (indexToRemove) => {
    const newRoles = profesionalRoles.filter((_, index) => index !== indexToRemove);
    setFormData((prev) => ({
      ...prev,
      profiles: {
        ...prev.profiles,
        profesional: newRoles,
      },
    }));
  };

  const handleUpdateRole = (indexToUpdate, newValue) => {
    const newRoles = [...profesionalRoles];
    newRoles[indexToUpdate] = newValue;
    setFormData((prev) => ({
      ...prev,
      profiles: {
        ...prev.profiles,
        profesional: newRoles,
      },
    }));
  };

  return (
    <div className="animate-in fade-in space-y-10">
      
      {/* SECCIÓN 1: INSTRUCTOR */}
      <div>
        <div className="border-b border-slate-100 pb-4 mb-6">
          <h2 className="text-lg font-black text-slate-800 flex items-center gap-2">
            <span className="material-symbols-rounded text-brand">school</span>
            Instructor del Programa
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Asigna al docente o experto a cargo de impartir la formación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50/50 p-6 rounded-3xl border border-slate-100">
          
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1">
              Nombre del Instructor
            </label>
            <div className="relative group">
              <span className="material-symbols-rounded absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-brand transition-colors">
                person
              </span>
              <input
                type="text"
                name="name"
                value={instructor.name}
                onChange={handleInstructorChange}
                placeholder="Ej: Ing. Edwin P. Russi"
                className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl outline-none text-sm focus:border-brand/30 transition-all text-slate-800 font-bold shadow-sm"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1">
              Especialidad / Rol
            </label>
            <div className="relative group">
              <span className="material-symbols-rounded absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-brand transition-colors">
                work
              </span>
              <input
                type="text"
                name="role"
                value={instructor.role}
                onChange={handleInstructorChange}
                placeholder="Ej: Especialista en Automatismo y Control"
                className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl outline-none text-sm focus:border-brand/30 transition-all text-slate-600 shadow-sm"
              />
            </div>
          </div>

        </div>
      </div>

      {/* SECCIÓN 2: PERFILES DE EGRESO Y OCUPACIONAL */}
      <div>
        <div className="border-b border-slate-100 pb-4 mb-6">
          <h2 className="text-lg font-black text-slate-800 flex items-center gap-2">
            <span className="material-symbols-rounded text-brand">psychology</span>
            Proyección del Estudiante
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Define las competencias que adquiere el alumno y en qué cargos podrá trabajar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Perfil de Egreso (Competencias) */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 mb-2 ml-1">
              <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center">
                <span className="material-symbols-rounded text-[14px]">done_all</span>
              </div>
              <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400">
                Perfil de Egreso
              </label>
            </div>
            <textarea
              value={profiles.egresado}
              onChange={handleEgresadoChange}
              onInput={handleAutoResize}
              placeholder="El egresado estará en capacidad de..."
              className="w-full min-h-[120px] px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none text-sm focus:bg-white focus:border-brand/30 transition-all text-slate-600 resize-none overflow-hidden leading-relaxed shadow-inner shadow-slate-100/50"
            ></textarea>
            <p className="text-[10px] text-slate-400 ml-1 mt-2">
              Describe resumidamente el conjunto de habilidades que dominará el estudiante al concluir el programa.
            </p>
          </div>

          {/* Perfil Ocupacional (Cargos/Roles) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2 border-b border-slate-100 pb-2">
              <div className="flex items-center gap-2 ml-1">
                <div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center">
                  <span className="material-symbols-rounded text-[14px]">work_history</span>
                </div>
                <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400">
                  Perfil Ocupacional (Cargos)
                </label>
              </div>
              <button
                type="button"
                onClick={handleAddRole}
                className="text-[10px] font-bold text-brand hover:text-navy transition-colors flex items-center gap-1 bg-brand/5 px-2 py-1 rounded-md"
              >
                <span className="material-symbols-rounded text-[14px]">add</span>
                Añadir Cargo
              </button>
            </div>

            <div className="space-y-3">
              {profesionalRoles.length === 0 ? (
                 <div className="text-center py-6 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                    <span className="material-symbols-rounded text-2xl text-slate-300 mb-1">badge</span>
                    <p className="text-xs font-bold text-slate-500">Sin cargos definidos</p>
                    <p className="text-[10px] text-slate-400 mt-1">Agrega los puestos en los que podrá laborar el egresado.</p>
                 </div>
              ) : (
                profesionalRoles.map((role, index) => (
                  <div key={index} className="flex items-center gap-3 group bg-white border border-slate-100 rounded-xl p-2 pl-4 shadow-sm hover:border-brand/20 transition-all">
                    
                    {/* Viñeta tipo Check */}
                    <div className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 shrink-0 group-hover:bg-brand/10 group-hover:text-brand transition-colors">
                      <span className="material-symbols-rounded text-[10px] font-bold">check</span>
                    </div>
                    
                    {/* Input en línea (Single line) */}
                    <input
                      type="text"
                      value={role}
                      onChange={(e) => handleUpdateRole(index, e.target.value)}
                      placeholder="Ej: Auxiliar de mantenimiento eléctrico"
                      className="flex-1 bg-transparent border-none outline-none text-sm text-slate-600 py-1"
                    />
                    
                    {/* Botón Eliminar */}
                    <button
                      type="button"
                      onClick={() => handleRemoveRole(index)}
                      className="w-8 h-8 rounded-lg text-slate-300 hover:bg-red-50 hover:text-red-500 transition-all flex items-center justify-center"
                      title="Eliminar cargo"
                    >
                      <span className="material-symbols-rounded text-[16px]">close</span>
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

export default TabPerfiles;