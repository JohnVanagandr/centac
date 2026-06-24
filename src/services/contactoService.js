import { contactoRepository } from '@/data/repositories';

export const contactoService = {
  /**
   * Mapeamos el nombre de negocio 'procesarContacto' al método estándar 'create'
   */
  procesarContacto: async (payload) => {
    try {
      // Delegamos al método estandarizado del repositorio
      const respuesta = await contactoRepository.create(payload);
      return respuesta;
    } catch (error) {
      console.error("Error en contactoService (procesarContacto):", error);
      throw error;
    }
  },

  // Si aún tiene componentes llamando a 'enviarMensaje', manténgalo como alias:
  enviarMensaje: async (payload) => {
    return await contactoRepository.create(payload);
  }
};