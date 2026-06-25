import { getAll, getById, getBySlug, create, getDynamic, put } from './index';

/**
 * Fábrica generadora de contratos de infraestructura basada en REST.
 */
export const createRepository = (baseEndpoint) => {
  return {
    getAll: () => getAll(baseEndpoint),
    getById: (id) => getById(baseEndpoint, id),
    getBySlug: (slug) => getBySlug(baseEndpoint, slug),
    create: (data) => create(baseEndpoint, data),
    update: (id, data) => put(`${baseEndpoint}/${id}`, data),
    getDynamic: (fullRoute) => getDynamic(fullRoute)
  };
};