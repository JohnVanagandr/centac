import { useCallback } from "react";

export const useMallaCurricular = (formData, setFormData) => {
  const modules = formData?.modules || [];

  // ==========================================
  // LÓGICA DE MÓDULOS (Nivel 1)
  // ==========================================
  const handleAddModule = useCallback(() => {
    const newModule = {
      number: modules.length + 1,
      title: "",
      items: [{ description: "" }],
    };
    setFormData((prev) => ({
      ...prev,
      modules: [...(prev.modules || []), newModule],
    }));
  }, [modules.length, setFormData]);

  const handleRemoveModule = useCallback((modIndex) => {
    setFormData((prev) => {
      const newModules = (prev.modules || [])
        .filter((_, index) => index !== modIndex)
        .map((mod, index) => ({ ...mod, number: index + 1 }));
      return { ...prev, modules: newModules };
    });
  }, [setFormData]);

  const handleUpdateModuleTitle = useCallback((modIndex, newTitle) => {
    setFormData((prev) => ({
      ...prev,
      modules: (prev.modules || []).map((mod, index) => 
        index === modIndex ? { ...mod, title: newTitle } : mod
      )
    }));
  }, [setFormData]);

  // ==========================================
  // LÓGICA DE ÍTEMS (Nivel 2) - Inmutabilidad estricta
  // ==========================================
  const handleAddItem = useCallback((modIndex) => {
    setFormData((prev) => ({
      ...prev,
      modules: (prev.modules || []).map((mod, index) => {
        if (index === modIndex) {
          // Retornamos un NUEVO objeto de módulo con un NUEVO arreglo de items
          return {
            ...mod,
            items: [...(mod.items || []), { description: "" }]
          };
        }
        return mod;
      })
    }));
  }, [setFormData]);

  const handleRemoveItem = useCallback((modIndex, itemIndex) => {
    setFormData((prev) => ({
      ...prev,
      modules: (prev.modules || []).map((mod, index) => {
        if (index === modIndex) {
          // Filtramos devolviendo un arreglo nuevo
          return {
            ...mod,
            items: (mod.items || []).filter((_, i) => i !== itemIndex)
          };
        }
        return mod;
      })
    }));
  }, [setFormData]);

  const handleUpdateItem = useCallback((modIndex, itemIndex, newValue) => {
    setFormData((prev) => ({
      ...prev,
      modules: (prev.modules || []).map((mod, mIndex) => {
        if (mIndex === modIndex) {
          return {
            ...mod,
            // Mapeamos los items para actualizar solo el que cambió
            items: (mod.items || []).map((item, iIndex) => 
              iIndex === itemIndex ? { ...item, description: newValue } : item
            )
          };
        }
        return mod;
      })
    }));
  }, [setFormData]);

  return {
    modules,
    handleAddModule,
    handleRemoveModule,
    handleUpdateModuleTitle,
    handleAddItem,
    handleRemoveItem,
    handleUpdateItem,
  };
};