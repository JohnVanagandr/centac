import { pqrsRepository } from '@/data/repositories/pqrsRepository';

export const pqrsService = {
  
  /**
   * Obtiene exclusivamente los tipos de solicitud para el dominio PQRS
   */
  async obtenerTiposPqrs() {
    try {
      // Ajuste: Cambiamos getTiposPqrs() por getAllTipos() según el repositorio
      const respuesta = await pqrsRepository.getAllTipos();

      // Evaluamos el envoltorio de su API
      if (respuesta && respuesta.status === 'success') {
        return respuesta.data;
      } else {
        throw new Error(respuesta.message || "Error al cargar los tipos de solicitud.");
      }
      
    } catch (error) {
      console.error("Error en obtenerTiposPqrs:", error.message);
      throw new Error("No pudimos cargar las opciones del formulario.");
    }
  },

  /**
   * Envía la solicitud y devuelve el número de radicado
   */
  async radicarPqrs(datosPqrs) {
    try {
      // Ajuste: Cambiamos enviarPqrs() por create() según el estándar de la fábrica
      const respuesta = await pqrsRepository.create(datosPqrs);
      
      if (respuesta && respuesta.status === 'success') {
        return { 
          radicado: respuesta.data?.tracking_code || 'Pendiente',
          exito: true, 
          mensajeBackend: respuesta.message 
        };
      } else {
        throw new Error(respuesta.message || "Fallo en el servidor al radicar.");
      }

    } catch (error) {
      console.error("Error al enviar PQRS:", error.message);
      throw error; 
    }
  }
};