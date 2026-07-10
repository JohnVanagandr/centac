import api from '@/services/api';
const ENDPOINT = '/admin/pqrs/estados';

export const adminStatusRepository = {
  getAll: async () => {
    try {
        const response = await api.get(`${ENDPOINT}`);
        return response.data.data || response.data;
    } catch (error) {
        console.error("Error al listar los estados:", error);
        throw error;
    }
  }
};