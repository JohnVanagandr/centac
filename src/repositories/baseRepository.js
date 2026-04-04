import { apiClient } from '@/config/apiClient';

const USE_API = import.meta.env.VITE_USE_API === 'true';

/**
 * Fábrica genérica de repositorios para cualquier entidad del proyecto.
 * @param {string} endpoint - La ruta de la API (ej: '/courses').
 * @param {Array|Object} localData - La data de respaldo de src/data.
 */
export const createRepository = (endpoint, localData) => {
  return {
    // Obtener todos los registros
    getAll: async () => {
      if (USE_API) {
        try {
          const response = await apiClient.get(endpoint);
          return response.data;
        } catch (error) {
          console.error(`Error consumiendo API ${endpoint}, usando local.`, error);
          return localData; // Fallback de seguridad
        }
      }
      // Simulamos el retraso de una API real para que los Spinners funcionen
      return new Promise((resolve) => setTimeout(() => resolve(localData), 500));
    },

    // Obtener un registro por ID
    getById: async (id) => {
      if (USE_API) {
        try {
          const response = await apiClient.get(`${endpoint}/${id}`);
          return response.data;
        } catch (error) {
          console.error(`Error API ${endpoint}/${id}`, error);
          return localData.find((item) => item.id === id || item.id === parseInt(id));
        }
      }
      const item = localData.find((item) => item.id === id || item.id === parseInt(id));
      return new Promise((resolve) => setTimeout(() => resolve(item), 500));
    },

    // Aquí puedes agregar más métodos en el futuro: create, update, delete...
  };
};