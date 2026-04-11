import { apiClient } from '../api/apiClient';

export const getById = async (endpoint, id) => {
  try {
    return await apiClient.get(`${endpoint}/${id}`);
  } catch (error) {
    console.error(`Error obteniendo el ID ${id} de ${endpoint}:`, error.message);
    throw error;
  }
};