import api from '../api';
const ENDPOINT = '/admin/pqrs';

export const pqrsAdminService = {

    getAll: async ({ page = 1, search = "", type = "", status = "" }) => {
        try {
            const params = new URLSearchParams({ page });

            if (search) params.append('search', search);
            if (type) params.append('type_id', type);
            if (status) params.append('status_id', status);

            const response = await api.get(`${ENDPOINT}/solicitudes?${params.toString()}`);
            return response.data;
        } catch (error) {
            console.error("Error al listar los pqrs:", error);
            throw error;
        }
    },

    getById: async (id) => {
        try {
            const response = await api.get(`${ENDPOINT}/solicitudes/${id}`);
            return response.data.data || response.data;
        } catch (error) {
            console.error(`Error al obtener la PQRS ${id}:`, error);
        throw error;
        }
    },

    updateStatus: async (id, pqrs_status_id) => {
    try {
        const response = await api.patch(`${ENDPOINT}/solicitudes/${id}`, {pqrs_status_id});
        return response.data.data || response.data;
    } catch (error) {
        console.error(`Error al actualizar estado de la PQRS ${id}:`, error);
        throw error;
    }
  }
  
};  