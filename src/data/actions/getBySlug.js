import { apiClient } from '../api/apiClient';

/**
 * Acción atómica para buscar un registro usando su slug.
 */
export const getBySlug = async (endpoint, slug) => {
  try {
    return await apiClient.get(`${endpoint}/${slug}`);
  } catch (error) {
    console.error(`Error en acción getBySlug (${slug}):`, error.message);
    throw error;
  }
};