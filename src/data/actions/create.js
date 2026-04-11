import { apiClient } from '../api/apiClient';

/**
 * Acción atómica para enviar (crear) un nuevo registro.
 */
export const create = async (endpoint, data) => {
  try {
    return await apiClient.post(endpoint, data);
  } catch (error) {
    console.error(`Error enviando datos a ${endpoint}:`, error.message);
    throw error; // Lanzamos el error para que el Servicio lo atrape
  }
};