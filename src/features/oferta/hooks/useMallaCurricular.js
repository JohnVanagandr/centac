import { useCallback } from "react";

export const useMallaCurricular = (formData, setFormData) => {
  const modules = formData?.modules || [];

  const handleAddModule = useCallback(() => {
    const newModule = { number: modules.length + 1, title: "", items: [{ description: "" }] };
    setFormData((prev) => ({ ...prev, modules: [...(prev.modules || []), newModule] }));
  }, [modules.length, setFormData]);

  const handleRemoveModule = useCallback((modIndex) => {
    setFormData((prev) => ({
      ...prev,
      modules: (prev.modules || []).filter((_, index) => index !== modIndex).map((mod, index) => ({ ...mod, number: index + 1 }))
    }));
  }, [setFormData]);

  const handleUpdateModuleTitle = useCallback((modIndex, newTitle) => {
    setFormData((prev) => ({ ...prev, modules: (prev.modules || []).map((mod, index) => index === modIndex ? { ...mod, title: newTitle } : mod) }));
  }, [setFormData]);

  const handleAddItem = useCallback((modIndex) => {
    setFormData((prev) => ({ ...prev, modules: (prev.modules || []).map((mod, index) => index === modIndex ? { ...mod, items: [...(mod.items || []), { description: "" }] } : mod) }));
  }, [setFormData]);

  const handleRemoveItem = useCallback((modIndex, itemIndex) => {
    setFormData((prev) => ({ ...prev, modules: (prev.modules || []).map((mod, index) => index === modIndex ? { ...mod, items: (mod.items || []).filter((_, i) => i !== itemIndex) } : mod) }));
  }, [setFormData]);

  const handleUpdateItem = useCallback((modIndex, itemIndex, newValue) => {
    setFormData((prev) => ({ ...prev, modules: (prev.modules || []).map((mod, mIndex) => {
        if (mIndex === modIndex) return { ...mod, items: (mod.items || []).map((item, iIndex) => iIndex === itemIndex ? { ...item, description: newValue } : item) };
        return mod;
      })
    }));
  }, [setFormData]);

  return { modules, handleAddModule, handleRemoveModule, handleUpdateModuleTitle, handleAddItem, handleRemoveItem, handleUpdateItem };
};

// ==========================================
// VALIDACIÓN PURA
// ==========================================
export const validateMalla = (formData) => {
  const currentModules = formData.modules || [];
  
  for (let i = 0; i < currentModules.length; i++) {
    const mod = currentModules[i];
    if (!mod.title || mod.title.trim() === "") throw new Error(`El módulo ${mod.number || i + 1} no tiene título.`);
    if (!mod.items || mod.items.length === 0) throw new Error(`El módulo "${mod.title}" debe tener al menos un tema.`);
    
    for (let j = 0; j < mod.items.length; j++) {
      const item = mod.items[j];
      if (!item.description || item.description.trim() === "") throw new Error(`El tema ${j + 1} del módulo "${mod.title}" está vacío.`);
    }
  }

  return { 
    modules: currentModules.map((mod, index) => ({
      title: mod.title,
      number: mod.number || (index + 1),
      items: (mod.items || []).map(item => item.description)
    }))
  };
};