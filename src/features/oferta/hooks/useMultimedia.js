export const validateMultimedia = (formData) => {
  const img = formData.img;
  // Extraemos y limpiamos el campo del video
  const video_url = typeof formData.video_url === 'string' ? formData.video_url.trim() : null; 

  if (!img) {
    throw new Error("La imagen de portada es obligatoria.");
  }

  // 1. Validamos si es un string (solo sucede cuando carga la info del backend y no han cambiado la foto)
  if (typeof img === 'string') {
    if (!img.startsWith("http://") && !img.startsWith("https://")) {
      throw new Error("La URL de la imagen existente no es válida.");
    }
  } 
  // 2. Validamos si es un archivo físico nuevo y aplicamos el parche de peso
  else if (img instanceof File) {
    if (img.size > 2 * 1024 * 1024) { // Límite estricto de 2MB
      throw new Error("La imagen es demasiado pesada. El tamaño máximo permitido es 2MB.");
    }
  } 
  // 3. Si no es un string ni un objeto File, hay un estado corrupto
  else {
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
    img, 
    video_url: video_url || null 
  };
};