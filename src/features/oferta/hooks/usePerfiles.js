import { useCallback } from "react";

export const usePerfiles = (formData, setFormData) => {

  const handleEgresadoChange = (value) => {
    setFormData(prev => ({
      ...prev,
      profiles: {
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
        ...(prev.profiles || {}),
        profesional: (prev.profiles?.profesional || []).filter((_, i) => i !== indexToRemove)
      }
    }));
  }, [setFormData]);

  const handleUpdateRole = useCallback((indexToUpdate, value) => {
    setFormData(prev => ({
      ...prev,
      profiles: {
        ...(prev.profiles || {}),
        profesional: (prev.profiles?.profesional || []).map((role, i) => i === indexToUpdate ? value : role)
      }
    }));
  }, [setFormData]);

  return { handleEgresadoChange, handleAddRole, handleRemoveRole, handleUpdateRole };
};

// ==========================================
// VALIDACIÓN PURA
// ==========================================
export const validatePerfiles = (formData) => {
  const { egresado, profesional } = formData.profiles || {};
  const { instructor_name, instructor_role } = formData || {}; 

  if (!egresado || egresado.trim() === "") throw new Error("El perfil de egreso es obligatorio.");
  if (!instructor_name || instructor_name.trim() === "") throw new Error("El nombre del instructor es obligatorio.");
  if (!instructor_role || instructor_role.trim() === "") throw new Error("El cargo del instructor es obligatorio.");

  return {
    profiles: {
      egresado: egresado.trim(),
      profesional: profesional ? profesional.filter(r => r.trim() !== "").map(r => r.trim()) : []
    },
    instructor_name: instructor_name.trim(),
    instructor_role: instructor_role.trim()
  };
};