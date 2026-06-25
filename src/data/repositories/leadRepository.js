import { createRepository } from '../actions';

// Fábricas
const publicLeadRepo = createRepository('/front/prospects');
const adminLeadRepo = createRepository('/admin/prospects');

export const leadRepository = {
  // Públicos
  registrarLead: (payload) => publicLeadRepo.create(payload),
  create: (payload) => publicLeadRepo.create(payload),
  
  // Administrativos
  getById: (id) => adminLeadRepo.getById(id),
  update: (id, data) => adminLeadRepo.update(id, data),
  addComment: (id, data) => adminLeadRepo.addComment(id, data),

  // Dentro de leadRepository...
  getAllProspectos: (page = 1, status = "") => {
    // 1. Construimos la ruta completa aquí
    const baseUrl = '/admin/prospects';
    const query = `?page=${page}${status ? `&status=${status}` : ''}`;
    
    // 2. Enviamos la ruta completa a getDynamic
    return adminLeadRepo.getDynamic(`${baseUrl}${query}`);
  }
};