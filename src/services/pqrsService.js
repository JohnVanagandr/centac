import { pqrsRepository } from '@/data/repositories/pqrsRepository';

export const pqrsService = {
  
  /**
   * Obtiene todas las listas necesarias para pintar el formulario
   */
  async obtenerListasFormulario() {
    try {
      // CONCURRENCIA: Pedimos ambas listas al mismo tiempo usando Promise.all
      const [resDocs, resTipos] = await Promise.all([
        pqrsRepository.getTiposDocumento(),
        pqrsRepository.getTiposPqrs()
      ]);

      // Evaluamos los envoltorios
      const tiposDocumento = resDocs?.status === 'success' ? resDocs.data : [];
      const tiposPqrs = resTipos?.status === 'success' ? resTipos.data : [];

      return { tiposDocumento, tiposPqrs };

    } catch (error) {
      console.error("Error cargando listas PQRS:", error.message);
      // Lanzamos el error para que el Hook decida si muestra un modal o deshabilita el form
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