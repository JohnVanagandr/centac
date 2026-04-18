import { pqrsRepository } from '@/data/repositories/pqrsRepository';

export const pqrsService = {
  
/**
   * Obtiene exclusivamente los tipos de solicitud para el dominio PQRS
   */
  async obtenerTiposPqrs() {
    try {
      const respuesta = await pqrsRepository.getTiposPqrs();

      // Evaluamos el envoltorio de su API
      if (respuesta && respuesta.status === 'success') {
        return respuesta.data;
      } else {
        throw new Error(respuesta.message || "Error al cargar los tipos de solicitud.");
      }
      
    } catch (error) {
      console.error("Error en obtenerTiposPqrs:", error.message);
      // Lanzamos el error limpio para que el Hook (isError) se entere
      throw new Error("No pudimos cargar las opciones del formulario.");
    }
  },

  /**
   * Envía la solicitud y devuelve el número de radicado
   */
  async radicarPqrs(datosPqrs) {
    try {
      const respuesta = await pqrsRepository.enviarPqrs(datosPqrs);

      console.log(respuesta);
      
      
      if (respuesta && respuesta.status === 'success') {
        // Asumiendo que el backend nos devuelve un número de seguimiento/radicado en la data
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
      throw error; // Dejamos que el Hook lo atrape y pinte el error
    }
  }
};