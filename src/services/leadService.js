import { leadRepository } from '@/data/repositories';

export const leadService = {
  async registrarLead(datosLead) {    
    try {
      const respuesta = await leadRepository.registrarLead(datosLead);
      
      // Evaluamos el envoltorio de éxito estándar de su API
      if (respuesta && respuesta.status === 'success') {
        return { 
          exito: true, 
          mensajeBackend: respuesta.message,
          data: respuesta.data 
        };
      } else {
        // Forzamos el error si el backend manda un status falso positivo
        throw { status: 400, backendData: respuesta, message: respuesta.message };
      }

    } catch (error) {
      // Abrimos la mochila (Compatible con Axios y Fetch)
      const status = error.status || error.response?.status;
      const backendData = error.backendData || error.response?.data;

      // REGLA DE NEGOCIO: Intercepción de validaciones 422 de Laravel
      if (status === 422 && backendData?.errors) {
        const err = new Error("Errores de validación en el servidor.");
        err.type = "VALIDATION";
        err.validationErrors = backendData.errors; // Objeto con los errores por input
        throw err;
      }

      // Errores fatales (500, sin red, etc.)
      throw new Error(error.message || "Ocurrió un error al registrar su solicitud de información.");
    }
  }
};