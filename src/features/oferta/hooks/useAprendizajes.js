import { useCallback } from "react";

export const useAprendizajes = (formData, setFormData) => {
  // Inicializamos el arreglo leyendo de la propiedad learnings (o como decidas llamarla)
  const learnings = formData?.learnings || [];

  const handleAddLearning = useCallback(() => {
    setFormData((prev) => ({
      ...prev,
      learnings: [
        ...(prev.learnings || []),
        { title: "", text: "", icon: "" } // Estructura exacta de tu migración
      ],
    }));
  }, [setFormData]);

  const handleRemoveLearning = useCallback((indexToRemove) => {
    setFormData((prev) => ({
      ...prev,
      learnings: (prev.learnings || []).filter((_, index) => index !== indexToRemove),
    }));
  }, [setFormData]);

  const handleChangeLearning = useCallback((index, field, value) => {
    setFormData((prev) => ({
      ...prev,
      learnings: (prev.learnings || []).map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }));
  }, [setFormData]);

  return {
    learnings,
    handleAddLearning,
    handleRemoveLearning,
    handleChangeLearning,
  };
};