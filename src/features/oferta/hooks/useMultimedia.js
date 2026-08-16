export const validateMultimedia = (formData) => {
  const img = formData.img?.trim();
  const video_url = formData.video_url?.trim(); // Extraemos y limpiamos el campo del video

  if (!img || img === "") {
    throw new Error("La URL de la imagen de portada es obligatoria.");
  }
  if (!img.startsWith("http://") && !img.startsWith("https://")) {
    throw new Error("La URL de la imagen debe ser válida (http:// o https://).");
  }

  // NUEVO: Validación opcional para el video de YouTube
  if (video_url && video_url !== "") {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = video_url.match(regExp);
    const videoId = (match && match[2].length === 11) ? match[2] : null;

    if (!videoId) {
      throw new Error("El enlace del video promocional no tiene un formato válido de YouTube.");
    }
  }

  // Agregamos el video_url al objeto final (enviamos null si lo dejaron en blanco para limpiar la BD)
  return { 
    img,
    video_url: video_url || null 
  };
};