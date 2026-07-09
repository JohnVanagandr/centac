import { useCallback } from "react";

export const useAprendizajes = (formData, setFormData) => {
  const learnings = formData?.learnings || [];

  const handleAddLearning = useCallback(() => {
    setFormData((prev) => ({
      ...prev,
      learnings: [...(prev.learnings || []), { title: "", text: "", icon: "" }],
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

  return { learnings, handleAddLearning, handleRemoveLearning, handleChangeLearning };
};

// ==========================================
// VALIDACIÓN PURA
// ==========================================
export const validateAprendizajes = (formData) => {
  const currentLearnings = formData.learnings || [];
  
  for (let i = 0; i < currentLearnings.length; i++) {
    const item = currentLearnings[i];
    if (!item.title || item.title.trim() === "") {
      throw new Error(`La característica #${i + 1} debe tener un título.`);
    }
    if (!item.text || item.text.trim() === "") {
      throw new Error(`La característica "${item.title || i + 1}" no tiene descripción.`);
    }
  }
  
  return {
    learnings: currentLearnings.map(l => ({
      title: l.title.trim(),
      text: l.text.trim(),
      icon: l.icon || null
    }))
  };
};