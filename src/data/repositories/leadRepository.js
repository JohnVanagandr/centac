import { create as sendData } from '../actions';

const ENDPOINTS = {
  REGISTRAR: '/front/prospects' 
};

export const leadRepository = {
  /**
   * Envía los datos del nuevo prospecto (Lead) al servidor
   */
  registrarLead: (payload) => sendData(ENDPOINTS.REGISTRAR, payload)
};