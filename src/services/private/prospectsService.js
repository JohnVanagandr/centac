import api from '../api';

const ENDPOINT = '/admin/prospects';

export const prospectsService = {
  /**
   * Obtener la lista paginada de prospectos con filtro opcional por status.
   * @param {number} page - Página actual (default: 1)
   * @param {string} status - Filtro de estado (default: '' = todos)
   * @returns {{ data: Array, pagination: Object, summary: Object }}
   */
  getAll: async (page = 1, status = '') => {
    try {
      const params = new URLSearchParams({ page });
      if (status) params.append('status', status);

      const response = await api.get(`${ENDPOINT}?${params.toString()}`);
      // Retornar la respuesta completa que contiene data, pagination y summary
      return response.data || { data: [], pagination: {}, summary: {} };
    } catch (error) {
      console.error("Error al obtener los prospectos:", error);
      throw error;
    }
  },

  getSummary: async () => {
    try {
      const response = await api.get(`${ENDPOINT}/summary`);      
      return response.data.data || response.data;
    } catch (error) {
      console.error("Error al obtener el resumen de prospectos:", error);
      throw error;
    }
  },  

  // Obtener un prospecto por su ID
  getById: async (id) => {
    try {
      const response = await api.get(`${ENDPOINT}/${id}`);
      return response.data.data || response.data;
    } catch (error) {
      console.error(`Error al obtener el prospecto con ID ${id}:`, error);
      throw error;
    }
  }
};
