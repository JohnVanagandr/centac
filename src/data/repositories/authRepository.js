import { create as enviarDatos, getDynamic } from '../actions';

// Ajuste la ruta según el endpoint de su backend (Laravel/Node)
const ENDPOINTS = {
  REGISTER: '/auth/register',
  VERIFY_EMAIL: '/auth/verify-email'
};

export const authRepository = {
  /**
   * Envía el payload con los datos del nuevo usuario al servidor
   */
  registrarUsuario: (payload) => enviarDatos(ENDPOINTS.REGISTER, payload),
  /**
   * Envía el payload con los datos de verificación de correo al servidor
   */
  verificarCorreo: (verifyUrl) => getDynamic(verifyUrl)
};