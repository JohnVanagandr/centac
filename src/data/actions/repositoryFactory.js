import { getAll } from './getAll';
import { getById } from './getById';
import { getBySlug } from './getBySlug';
import { create } from './create';
import { getDynamic } from './getDynamic';

export const createRepository = (baseEndpoint) => {
  return {
    getAll: () => getAll(baseEndpoint),
    getById: (id) => getById(baseEndpoint, id),
    getBySlug: (slug) => getBySlug(baseEndpoint, slug),
    create: (data) => create(baseEndpoint, data),
    getDynamic: (fullRoute) => getDynamic(fullRoute) 
  };
};