import api from '@/services/api'; // Ajuste la ruta según la ubicación de su instancia axios

const ENDPOINT = '/admin/oferta-academica';

export const ofertasAdminService = {
  /**
   * Obtener la lista paginada de programas/ofertas con filtro opcional.
   * @param {number} page - Página actual (default: 1)
   * @param {string} search - Filtro de búsqueda opcional (default: '')
   * @returns {Promise<any>}
   */
  getAll: async (page = 1, search = '') => {
    try {
      const params = new URLSearchParams({ page });
      if (search) params.append('search', search);

      const response = await api.get(`${ENDPOINT}?${params.toString()}`);
      // Retornamos la data limpia. Ajuste el fallback según la estructura exacta de su backend
      return response.data?.data || response.data || [];
    } catch (error) {
      console.error("Error al obtener las ofertas:", error);
      throw error;
    }
  },

  /**
   * Obtener un programa específico por su ID.
   * @param {number|string} id - ID de la oferta
   * @returns {Promise<Object>}
   */
  getById: async (id) => {
    try {
      const response = await api.get(`${ENDPOINT}/${id}`);
      return response.data?.data || response.data;
    } catch (error) {
      console.error(`Error al obtener la oferta con ID ${id}:`, error);
      throw error;
    }
  },

  /**
   * Crear una nueva oferta/programa.
   * @param {Object} data - Datos del formulario
   * @returns {Promise<Object>}
   */
  create: async (data) => {
    try {
      const response = await api.post(ENDPOINT, data);
      return response.data;
    } catch (error) {
      console.error("Error al crear la oferta:", error);
      throw error;
    }
  },

  /**
   * Actualizar una oferta existente.
   * @param {number|string} id - ID de la oferta a actualizar
   * @param {Object} data - Datos a actualizar
   * @returns {Promise<Object>}
   */
  update: async (id, data) => {
    try {
      const response = await api.put(`${ENDPOINT}/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(`Error al actualizar la oferta con ID ${id}:`, error);
      throw error;
    }
  },

  updateModules: async (programId, payload) => {
    // Asegúrate de que la URL coincida con tu Route::prefix
    const response = await api.put(`/admin/oferta-academica/${programId}/modules`, payload);
    return response.data;
  },

  updateLearnings: async (programId, payload) => {
    const response = await api.put(`/admin/oferta-academica/${programId}/learnings`, payload);
    return response.data;
  },  

  updateMultimedia: async (programId, payload) => {
    // Asegúrate de mantener el prefijo /admin/ si lo usaste en el tab anterior
    const response = await api.put(`/admin/oferta-academica/${programId}/multimedia`, payload);
    return response.data;
  },

  /**
   * Actualizar perfiles e información del instructor.
   */
  updateProfiles: async (programId, payload) => {
    try {
      const response = await api.put(`/admin/oferta-academica/${programId}/profiles`, payload);
      return response.data;
    } catch (error) {
      console.error(`Error al actualizar los perfiles para la oferta ${programId}:`, error);
      throw error;
    }
  },
  
  /**
   * Eliminar una oferta (o cambiar estado a inactivo, según su backend).
   * @param {number|string} id - ID de la oferta
   * @returns {Promise<Object>}
   */
  delete: async (id) => {
    try {
      const response = await api.delete(`${ENDPOINT}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error al eliminar la oferta con ID ${id}:`, error);
      throw error;
    }
  }
};