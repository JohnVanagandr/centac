import { createRepository } from '../actions'; // <-- Importación correcta

// Creamos mini-fábricas según su patrón
const publicLeadRepo = createRepository('/front/prospects');
const adminLeadRepo = createRepository('/admin/prospects');

export const leadRepository = {
  // 1. Preservamos lo que ya funcionaba para su servicio público
  registrarLead: (payload) => publicLeadRepo.create(payload),
  create: (payload) => publicLeadRepo.create(payload),
  
  // 2. Agregamos las funciones del Dashboard administrativo
  getById: (id) => adminLeadRepo.getById(id),
  update: (id, data) => adminLeadRepo.update(id, data),
  addComment: (id, data) => adminLeadRepo.addComment(id, data)
};