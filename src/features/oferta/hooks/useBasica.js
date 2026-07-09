export const validateBasica = (formData) => {
  // Validaciones de integridad estructural
  if (!formData.title || formData.title.trim() === "") {
    throw new Error("El título del programa es obligatorio.");
  }
  if (!formData.title_obtained || formData.title_obtained.trim() === "") {
    throw new Error("El título otorgado al egresar es obligatorio.");
  }
  if (!formData.resolution || formData.resolution.trim() === "") {
    throw new Error("La resolución legal o de registro es obligatoria.");
  }
  if (!formData.duration || formData.duration.trim() === "") {
    throw new Error("La duración del programa es obligatoria.");
  }
  if (!formData.modality || formData.modality.trim() === "") {
    throw new Error("La modalidad de estudio es obligatoria.");
  }
  if (!formData.description || formData.description.trim() === "") {
    throw new Error("La descripción general del programa es obligatoria.");
  }
  if (!formData.iconName || formData.iconName.trim() === "") {
    throw new Error("Debe seleccionar un ícono representativo.");
  }

  // Sanitización y construcción del payload
  return {
    title: formData.title.trim(),
    slug: formData.slug || formData.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, ""),
    subtitle: formData.subtitle?.trim() || null,
    resolution: formData.resolution.trim(),
    duration: formData.duration.trim(),
    modality: formData.modality.trim(),
    title_obtained: formData.title_obtained.trim(),
    is_top: Boolean(formData.isTop),
    desc: formData.description.trim(),
    icon_name: formData.iconName.trim(), 
  };
};