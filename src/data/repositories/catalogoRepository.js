import { createRepository } from '../actions';

const baseRepo = createRepository('/front/tipos-documentos');

export const catalogoRepository = {
  getAllTiposDocumento: () => baseRepo.getAll()
};