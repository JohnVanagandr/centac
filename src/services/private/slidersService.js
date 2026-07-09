import api from '@/services/api';
const ENDPOINT = '/admin/sliders';

export const slidersService = {

  create: async (payload) => {
    try {
      const response = await api.post('/admin/sliders', payload);
      return response.data?.data || response.data || [];
    } catch (error) {
      console.error("Error al crear el slider:", error);
      throw error;   
    }
  },
    
  getAll: async () => {
    try {
        const response = await api.get(`${ENDPOINT}`);
        return response.data?.data || response.data || [];
    } catch (error) {
        console.error("Error al obtener las sliders:", error);
        throw error;   
    }
  },

  getById: async (id) => {
    try {
        const response = await api.get(`${ENDPOINT}/${id}`);
        console.log(response.data);
        return response.data?.data || response.data || [];
    } catch (error) {
        console.error("Error al obtener el slider:", error);
        throw error;
    }
  },

  update: async (id, payload) => {
    try {
        const response = await api.put(`${ENDPOINT}/${id}`, payload);
        console.log(response.data);
        return response.data?.data || response.data || [];
    } catch (error) {
        console.error("Error al obtener el slider:", error);
        throw error;
    }
  },

  delete: async (id) => {
    try {
      const response = await api.delete(`${ENDPOINT}/${id}`);
      return response.data?.data || response.data || [];
    } catch (error) {
      console.error("Error al eliminar el slider:", error);
      throw error;
    }
  },

};