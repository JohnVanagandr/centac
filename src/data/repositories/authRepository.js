import { create as enviarDatos } from '../actions';

// Ajuste la ruta según el endpoint de su backend (Laravel/Node)
const ENDPOINTS = {
  REGISTER: '/auth/register',
};

export const authRepository = {
  /**
   * Envía el payload con los datos del nuevo usuario al servidor
   */
  registrarUsuario: (payload) => enviarDatos(ENDPOINTS.REGISTER, payload)
};