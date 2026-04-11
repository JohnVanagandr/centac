import { apiClient } from '../api/apiClient';

export const getAll = async (endpoint) => {
  try {
    return await apiClient.get(endpoint);
  } catch (error) {
    console.error(`Error obteniendo registros de ${endpoint}:`, error.message);
    throw error;
  }
};