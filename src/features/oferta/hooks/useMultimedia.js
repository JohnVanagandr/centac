export const validateMultimedia = (formData) => {
  const img = formData.img;
  // Extraemos y limpiamos el campo del video
  const video_url = typeof formData.video_url === 'string' ? formData.video_url.trim() : null; 

  if (!img) {
    throw new Error("La imagen de portada es obligatoria.");
  }

  // Validamos si es un string (solo sucede cuando carga la info del backend y el usuario NO ha seleccionado archivo nuevo)
  if (typeof img === 'string') {
    if (!img.startsWith("http://") && !img.startsWith("https://")) {
      throw new Error("La URL de la imagen existente no es válida.");
    }
  } else if (!(img instanceof File)) {
    // Si no es un string ni un objeto File, hay un estado corrupto
    throw new Error("El archivo de imagen no es válido.");
  }

  // Validación opcional para el video de YouTube
  if (video_url && video_url !== "") {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = video_url.match(regExp);
    const videoId = (match && match[2].length === 11) ? match[2] : null;

    if (!videoId) {
      throw new Error("El enlace del video promocional no tiene un formato válido de YouTube.");
    }
  }

  // Retornamos los datos purificados listos para empaquetarse
  return { 
    img, // Puede ser un File (nueva imagen) o un String (imagen existente)
    video_url: video_url || null 
  };
};