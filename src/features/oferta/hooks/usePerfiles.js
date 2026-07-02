import { useCallback } from "react";

export const usePerfiles = (formData, setFormData) => {
  const profiles = formData?.profiles || { egresado: "", profesional: [] };
  const instructor = formData?.instructor || { name: "", role: "" };

  // Lógica Instructor
  const handleInstructorChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      instructor: {
        ...prev.instructor,
        [name]: value,
      },
    }));
  }, [setFormData]);

  // Lógica Perfil de Egreso
  const handleEgresadoChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      profiles: { ...prev.profiles, egresado: value },
    }));
  };

  // Lógica Roles Profesionales
  const handleAddRole = useCallback(() => {
    setFormData((prev) => ({
      ...prev,
      profiles: {
        ...prev.profiles,
        profesional: [...(prev.profiles.profesional || []), ""],
      },
    }));
  }, [setFormData]);

  const handleRemoveRole = useCallback((indexToRemove) => {
    setFormData((prev) => ({
      ...prev,
      profiles: {
        ...prev.profiles,
        profesional: prev.profiles.profesional.filter((_, i) => i !== indexToRemove),
      },
    }));
  }, [setFormData]);

  const handleUpdateRole = useCallback((indexToUpdate, value) => {
    setFormData((prev) => ({
      ...prev,
      profiles: {
        ...prev.profiles,
        profesional: prev.profiles.profesional.map((item, i) =>
          i === indexToUpdate ? value : item
        ),
      },
    }));
  }, [setFormData]);

  return {
    instructor,
    profiles,
    handleInstructorChange,
    handleEgresadoChange,
    handleAddRole,
    handleRemoveRole,
    handleUpdateRole,
  };
};