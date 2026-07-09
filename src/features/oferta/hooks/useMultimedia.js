export const validateMultimedia = (formData) => {
  const img = formData.img?.trim();

  if (!img || img === "") {
    throw new Error("La URL de la imagen de portada es obligatoria.");
  }
  if (!img.startsWith("http://") && !img.startsWith("https://")) {
    throw new Error("La URL de la imagen debe ser válida (http:// o https://).");
  }

  return { img };
};