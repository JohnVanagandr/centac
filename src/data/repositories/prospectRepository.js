import { 
    getAll as fetchAllData,
 } from '../actions';

const ENDPOINTS = {
  INDEX: '/admin/prospects',
  // Dejamos preparadas las demás rutas para el futuro
  SHOW: (id) => `/admin/prospects/${id}`,
  UPDATE: (id) => `/admin/prospects/${id}`,
  COMMENT: (id) => `/admin/prospects/${id}/comments`,
};

export const prospectRepository = {
  getProspects: () => get(ENDPOINTS.INDEX),
};