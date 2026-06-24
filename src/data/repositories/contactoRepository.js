import { createRepository } from '../actions';

const baseRepo = createRepository('/front/contactos');

export const contactoRepository = {
  create: (payload) => baseRepo.create(payload)
};