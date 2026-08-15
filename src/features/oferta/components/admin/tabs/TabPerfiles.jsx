import React from "react";

const TabPerfiles = ({ formData, setFormData }) => {
  
  // 1. Definimos una estructura base segura para evitar "undefined"
  const defaultProfiles = { estudiante: "", egresado: "", profesional: [] };
  
  // 2. Lectura directa fusionando lo que viene de formData con nuestra estructura base
  const profiles = { ...defaultProfiles, ...(formData.profiles || {}) };

  // 3. Manejadores Directos corregidos
  const handleInstructorChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEstudianteChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      profiles: {
        ...defaultProfiles,
        ...prev.profiles,
        estudiante: value // Ahora sí actualiza correctamente 'estudiante'
      }
    }));
  };

  const handleEgresadoChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      profiles: {
        ...defaultProfiles,
        ...prev.profiles,
        egresado: value // Actualiza solo 'egresado', conservando lo demás
      }
    }));
  };

  const handleAddRole = () => {
    setFormData(prev => ({
      ...prev,
      profiles: {
        ...defaultProfiles,
        ...prev.profiles,
        profesional: [...(prev.profiles?.profesional || []), ""]
      }
    }));
  };

  const handleUpdateRole = (index, value) => {
    setFormData(prev => ({
      ...prev,
      profiles: {
        ...defaultProfiles,
        ...prev.profiles,
        profesional: (prev.profiles?.profesional || []).map((r, i) => i === index ? value : r)
      }
    }));
  };

  const handleRemoveRole = (index) => {
    setFormData(prev => ({
      ...prev,
      profiles: {
        ...defaultProfiles,
        ...prev.profiles,
        profesional: (prev.profiles?.profesional || []).filter((_, i) => i !== index)
      }
    }));
  };

  return (
    <div className="animate-in fade-in space-y-10 max-w-4xl mx-auto">
      <div className="border-b border-slate-100 pb-4">
        <h2 className="text-lg font-black text-slate-800">Perfiles e Instructor</h2>
        <p className="text-xs text-slate-500 mt-1">Configura el responsable del programa y las competencias de los aprendices.</p>
      </div>

      {/* Sección Instructor */}
      <div className="space-y-4">
        <label className="text-xs font-black uppercase tracking-[2px] text-brand ml-1">Información del Instructor</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
                type="text"
                name="instructor_name" 
                value={formData.instructor_name || ""} 
                onChange={handleInstructorChange} 
                placeholder="Nombre del instructor"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:border-brand"
            />
            <input
                type="text"
                name="instructor_role" 
                value={formData.instructor_role || ""} 
                onChange={handleInstructorChange} 
                placeholder="Cargo / Especialidad"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none focus:border-brand"
            />
        </div>
      </div>

      {/* Perfil de Estudiante */}
      <div className="space-y-3">
        <label className="text-xs font-black uppercase tracking-[2px] text-slate-400 ml-1">Perfil de Estudiante</label>
        <textarea
          value={profiles.estudiante}
          onChange={handleEstudianteChange}
          rows="4"
          placeholder="Describe el perfil del estudiante o aspirante ideal..."
          className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-sm focus:bg-white focus:border-brand/30 text-slate-700"
        />
      </div>

      {/* Perfil de Egreso */}
      <div className="space-y-3">
        <label className="text-xs font-black uppercase tracking-[2px] text-slate-400 ml-1">Perfil de Egreso</label>
        <textarea
          value={profiles.egresado}
          onChange={handleEgresadoChange}
          rows="4"
          placeholder="Describe las capacidades del egresado..."
          className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-sm focus:bg-white focus:border-brand/30 text-slate-700"
        />
      </div>

      {/* Perfil Profesional (Roles) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-xs font-black uppercase tracking-[2px] text-slate-400 ml-1">Roles Profesionales</label>
          <button 
            type="button" 
            onClick={handleAddRole}
            className="text-xs font-bold text-brand hover:underline"
          >+ Añadir Rol</button>
        </div>

        <div className="space-y-2">
          {profiles.profesional.map((role, index) => (
            <div key={index} className="flex gap-2 group">
              <input
                type="text"
                value={role}
                onChange={(e) => handleUpdateRole(index, e.target.value)}
                placeholder="Ej: Desarrollador Backend..."
                className="flex-1 px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:border-brand outline-none"
              />
              <button
                type="button"
                onClick={() => handleRemoveRole(index)}
                className="w-10 h-10 flex items-center justify-center text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
              >
                <span className="material-symbols-rounded">delete</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabPerfiles;