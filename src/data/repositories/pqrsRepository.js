import { createRepository } from '../actions';

// Instanciamos la fábrica para cada endpoint específico
const solicitudRepo = createRepository('/front/pqrs/solicitudes');
const tiposRepo = createRepository('/front/pqrs/tipos');

export const pqrsRepository = {
  // Ahora usamos los métodos estándar de la fábrica mapeados a sus nombres de negocio
  getAllTipos: () => tiposRepo.getAll(),
  create: (payload) => solicitudRepo.create(payload)
};