import { createRepository } from '../actions';

const baseRepo = createRepository('/front/prospects');

export const leadRepository = {
  create: (payload) => baseRepo.create(payload)
};