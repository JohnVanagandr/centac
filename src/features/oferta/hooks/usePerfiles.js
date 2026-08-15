import { useCallback } from "react";

export const usePerfiles = (formData, setFormData) => {

  // 1. NUEVO: Manejador para el perfil del estudiante
  const handleEstudianteChange = (value) => {
    setFormData(prev => ({
      ...prev,
      profiles: {
        egresado: "", // Salvavidas
        profesional: [], // Salvavidas
        ...(prev.profiles || {}),
        estudiante: value
      }
    }));
  };

  const handleEgresadoChange = (value) => {
    setFormData(prev => ({
      ...prev,
      profiles: {
        estudiante: "", // Salvavidas: Garantiza que no se pierda al editar egresado
        profesional: [], // Salvavidas: Garantiza que map() no explote
        ...(prev.profiles || {}),
        egresado: value
      }
    }));
  };

  const handleAddRole = useCallback(() => {
    setFormData(prev => ({
      ...prev,
      profiles: {
        estudiante: "", // Salvavidas
        egresado: "", // Salvavidas
        ...(prev.profiles || {}),
        profesional: [...(prev.profiles?.profesional || []), ""]
      }
    }));
  }, [setFormData]);

  const handleRemoveRole = useCallback((indexToRemove) => {
    setFormData(prev => ({
      ...prev,
      profiles: {
        estudiante: "", // Salvavidas
        ...(prev.profiles || {}),
        profesional: (prev.profiles?.profesional || []).filter((_, i) => i !== indexToRemove)
      }
    }));
  }, [setFormData]);

  const handleUpdateRole = useCallback((indexToUpdate, value) => {
    setFormData(prev => ({
      ...prev,
      profiles: {
        estudiante: "", // Salvavidas
        ...(prev.profiles || {}),
        profesional: (prev.profiles?.profesional || []).map((role, i) => i === indexToUpdate ? value : role)
      }
    }));
  }, [setFormData]);

  // Exportamos el nuevo manejador
  return { 
    handleEstudianteChange, 
    handleEgresadoChange, 
    handleAddRole, 
    handleRemoveRole, 
    handleUpdateRole 
  };
};

// ==========================================
// VALIDACIÓN PURA
// ==========================================
export const validatePerfiles = (formData) => {
  // 2. Extraemos el estudiante del objeto profiles
  const { estudiante, egresado, profesional } = formData.profiles || {};
  const { instructor_name, instructor_role } = formData || {};

  // 3. NUEVO: Agregamos la regla de validación para estudiante
  if (!estudiante || estudiante.trim() === "") throw new Error("El perfil del estudiante es obligatorio.");
  if (!egresado || egresado.trim() === "") throw new Error("El perfil de egreso es obligatorio.");
  if (!instructor_name || instructor_name.trim() === "") throw new Error("El nombre del instructor es obligatorio.");
  if (!instructor_role || instructor_role.trim() === "") throw new Error("El cargo del instructor es obligatorio.");

  return {
    profiles: {
      estudiante: estudiante.trim(), // Limpiamos los espacios en blanco del nuevo campo
      egresado: egresado.trim(),
      profesional: profesional ? profesional.filter(r => r.trim() !== "").map(r => r.trim()) : []
    },
    instructor_name: instructor_name.trim(),
    instructor_role: instructor_role.trim()
  };
};