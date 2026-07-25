// 1. Solo importas la fábrica
import { createRepository } from '../actions';

// 2. Instancias el repositorio con su endpoint
const repo = createRepository('/front/contactos'); 

// 3. Exportas directamente lo que la fábrica te devuelve
export const contactoRepository = {
  ...repo // Esto ya trae getAll, getById, create, update, etc.
};