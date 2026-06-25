import { leadRepository } from '@/data/repositories/leadRepository';

export const leadService = {
  getAllProspectos: (page, status) => {
    return leadRepository.getAllProspectos(page, status);
  },

  obtenerLeadPorId: async (id) => {
    try {
      const respuesta = await leadRepository.getById(id);
      // Extraemos los datos dependiendo de la estructura de su API
      return respuesta?.data?.data || respuesta?.data;
    } catch (error) {
      throw error;
    }
  },

  actualizarLead: async (id, status) => {
    try {
      return await leadRepository.update(id, { status });
    } catch (error) {
      throw error;
    }
  },

  agregarComentario: async (id, comment) => {
    try {
      return await leadRepository.addComment(id, { comment });
    } catch (error) {
      throw error;
    }
  }
};