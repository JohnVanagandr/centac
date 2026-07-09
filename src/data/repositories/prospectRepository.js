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
  
  getSummary: async () => {
    // La instancia 'api' normalmente ya incluye el prefijo '/api', 
    // por lo que solo pasamos el resto de la ruta.
    const response = await api.get('/admin/prospects/summary');
    return response.data;
  }
};