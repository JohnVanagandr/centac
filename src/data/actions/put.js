import { apiClient } from '../api/apiClient';

/**
 * Acción atómica para actualizar un registro existente mediante PUT.
 */
export const put = async (endpoint, data) => {
  try {
    return await apiClient.put(endpoint, data);
  } catch (error) {
    console.error(`Error actualizando datos en ${endpoint}:`, error.message);
    throw error;
  }
};