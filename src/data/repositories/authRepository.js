import { create as enviarDatos, getDynamic } from '../actions';

// Ajuste la ruta según el endpoint de su backend (Laravel/Node)
const ENDPOINTS = {
  REGISTER: '/auth/register',
  VERIFY_EMAIL: '/auth/verify-email',
  FORGOT_PASSWORD: '/auth/forgot-password',
  RESET_PASSWORD: '/auth/reset-password',

};

export const authRepository = {
  /**
   * Envía el payload con los datos del nuevo usuario al servidor
   */
  registrarUsuario: (payload) => enviarDatos(ENDPOINTS.REGISTER, payload),
  /**
   * Envía el payload con los datos de verificación de correo al servidor
   */
  verificarCorreo: (verifyUrl) => getDynamic(verifyUrl),
  /**
   * Envía el payload con los datos para recuperar contraseña al servidor
   */
  recuperarContrasena: (payload) => enviarDatos(ENDPOINTS.FORGOT_PASSWORD, payload),
  /**
   * Envía el payload con los datos para restablecer contraseña al servidor
   */
  resetearContrasena: (payload) => enviarDatos(ENDPOINTS.RESET_PASSWORD, payload),
};