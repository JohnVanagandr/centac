import api from '../api';

const ENDPOINT = '/oferta-academica';

export const ofertasService = {
  // Obtener todos los programas
  getAll: async () => {

    const response = await api.get(`${ENDPOINT}`);
    console.log(response);
    
    return response.data.data;
  },

  // Obtener un programa específico por ID
  getById: async (id) => {
    try {
      const response = await api.get(`${ENDPOINT}/${id}`);
      return response.data.data || response.data;
    } catch (error) {
      console.error(`Error al obtener el prospecto con ID ${id}:`, error);
      throw error;
    }
  },

  // Crear un nuevo programa
  create: async (data) => {
    const response = await api.post(ENDPOINT, data);
    return response.data;
  },

  // Actualizar un programa existente
  update: async (id, data) => {
    const response = await api.put(`${ENDPOINT}/${id}`, data);
    return response.data;
  },

  // Eliminar un programa
  delete: async (id) => {
    const response = await api.delete(`${ENDPOINT}/${id}`);
    return response.data;
  }
};