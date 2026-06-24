import { leadRepository } from '@/data/repositories/leadRepository';

export const leadService = {
  /**
   * Mapeamos el nombre de negocio 'registrarLead' 
   * al método estándar 'create' del repositorio
   */
  registrarLead: async (payload) => {
    try {
      // Ajuste: Ahora llamamos a .create()
      const respuesta = await leadRepository.create(payload);
      return respuesta;
    } catch (error) {
      console.error("Error en leadService:", error);
      throw error;
    }
  }
};