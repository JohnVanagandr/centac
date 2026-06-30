import api from '@/services/api'; 

export const ofertasAdminRepository = {
  // Obtenemos todas las ofertas (con opción a paginación y filtros en el futuro)
  getAll: (params = {}) => {
    return api.get('/admin/ofertas', { params });
  },
  
  // Preparando el terreno para el CRUD
  create: (data) => api.post('/admin/ofertas', data),
  update: (id, data) => api.put(`/admin/ofertas/${id}`, data),
  delete: (id) => api.delete(`/admin/ofertas/${id}`),
};