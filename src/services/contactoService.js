import { contactoRepository } from '@/data/repositories';

export const contactoService = {
  
  // 🌟 Mágicamente desapareció 'showFeedback' de los parámetros
  async enviarFormulario(datosContacto) { 
    try {
      const respuesta = await contactoRepository.enviarMensaje(datosContacto);
      
      if (respuesta && respuesta.status === 'success') {
        // Retornamos el mensaje original del backend por si la vista quiere usarlo
        return { exito: true, mensajeBackend: respuesta.message }; 
      } else {
        // Si el backend mandó status de error, forzamos la caída al catch
        throw new Error(respuesta.message || "Error desconocido del servidor");
      }

    } catch (error) {
      console.error("Error técnico en contactoService:", error.message);
      // Lanzamos el error hacia arriba para que el Hook se encargue
      throw error; 
    }
  }
};