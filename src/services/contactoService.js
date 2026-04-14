import { contactoRepository } from '@/data/repositories';

export const contactoService = {
  async procesarContacto(datos) {
    try {
      const respuesta = await contactoRepository.enviarMensaje(datos);
      
      // Verificamos el estándar de su API
      if (respuesta && respuesta.status === 'success') {
        return respuesta.data; 
      } else {
        throw new Error(respuesta.message || "No se pudo procesar su solicitud");
      }
    } catch (error) {
      console.error("Error en contactoService:", error.message);
      // Lanzamos el error para que la Mutación se entere
      throw error; 
    }
  }
};