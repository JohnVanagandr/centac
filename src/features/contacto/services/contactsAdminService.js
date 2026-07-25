import api from '@/services/api';
const ENDPOINT = '/admin/contactos';

export const contactsAdminService = {
    getAll: async ({ page = 1, search = "", status = "" }) => {
        try {
            const params = new URLSearchParams({ page });
            if (search) params.append('search', search);
            if (status) params.append('status_id', status);

            const response = await api.get(`${ENDPOINT}?${params.toString()}`);
            return response.data;
        } catch (error) {
            console.error("Error al listar los contactos:", error);
            throw error;
        }
    },

    getById: async (id) => {
        try {
            const response = await api.get(`${ENDPOINT}/${id}`);
            return response.data.data || response.data;
        } catch (error) {
            console.error(`Error al obtener el contacto ${id}:`, error);
            throw error;
        }
    },

    updateStatus: async (id, status) => {
        try {
            const response = await api.patch(`${ENDPOINT}/${id}/status`, { status });
            return response.data.data || response.data;
        } catch (error) {
            console.error(`Error al actualizar estado del contacto ${id}:`, error);
            throw error;
        }
    }
};