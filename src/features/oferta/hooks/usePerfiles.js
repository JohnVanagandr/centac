import { useCallback } from "react";

export const usePerfiles = (formData, setFormData) => {

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
        estudiante: "", 
        profesional: [], 
        ...(prev.profiles || {}),
        egresado: value
      }
    }));
  };

  const handleAddRole = useCallback(() => {
    setFormData(prev => ({
      ...prev,
      profiles: {
        estudiante: "", 
        egresado: "", 
        ...(prev.profiles || {}),
        profesional: [...(prev.profiles?.profesional || []), ""]
      }
    }));
  }, [setFormData]);

  const handleRemoveRole = useCallback((indexToRemove) => {
    setFormData(prev => ({
      ...prev,
      profiles: {
        estudiante: "", 
        ...(prev.profiles || {}),
        profesional: (prev.profiles?.profesional || []).filter((_, i) => i !== indexToRemove)
      }
    }));
  }, [setFormData]);

  const handleUpdateRole = useCallback((indexToUpdate, value) => {
    setFormData(prev => ({
      ...prev,
      profiles: {
        estudiante: "", 
        ...(prev.profiles || {}),
        profesional: (prev.profiles?.profesional || []).map((role, i) => i === indexToUpdate ? value : role)
      }
    }));
  }, [setFormData]);

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
  const { estudiante, egresado, profesional } = formData.profiles || {};
  // Extraemos la imagen del estado global
  const { instructor_name, instructor_role, instructor_image } = formData || {};

  if (!estudiante || estudiante.trim() === "") throw new Error("El perfil del estudiante es obligatorio.");
  if (!egresado || egresado.trim() === "") throw new Error("El perfil de egreso es obligatorio.");
  if (!instructor_name || instructor_name.trim() === "") throw new Error("El nombre del instructor es obligatorio.");
  if (!instructor_role || instructor_role.trim() === "") throw new Error("El cargo del instructor es obligatorio.");

  // 🔥 NUEVO: Validación de seguridad para la imagen del instructor
  if (instructor_image) {
    if (typeof instructor_image === 'string') {
      if (!instructor_image.startsWith("http://") && !instructor_image.startsWith("https://")) {
        throw new Error("La URL de la imagen del instructor no es válida.");
      }
    } else if (instructor_image instanceof File) {
      if (instructor_image.size > 2 * 1024 * 1024) {
        throw new Error("La imagen del instructor es demasiado pesada. El tamaño máximo permitido es 2MB.");
      }
    } else {
      throw new Error("El archivo de la imagen del instructor no es válido.");
    }
  }

  return {
    profiles: {
      estudiante: estudiante.trim(), 
      egresado: egresado.trim(),
      profesional: profesional ? profesional.filter(r => r.trim() !== "").map(r => r.trim()) : []
    },
    instructor_name: instructor_name.trim(),
    instructor_role: instructor_role.trim(),
    instructor_image: instructor_image || null // Retornamos la imagen purificada
  };
};