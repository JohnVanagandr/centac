import { create, getDynamic } from '../actions';

// Ajuste la ruta según el endpoint de su backend (Laravel/Node)
const ENDPOINTS = {
  REGISTER: '/auth/register',
  VERIFY_EMAIL: '/auth/verify-email',
  FORGOT_PASSWORD: '/auth/forgot-password',
  RESET_PASSWORD: '/auth/reset-password',
  LOGIN: '/auth/login',

};

export const authRepository = {
  /**
   * Envía el payload con los datos del nuevo usuario al servidor
   */
  registrarUsuario: (payload) => create(ENDPOINTS.REGISTER, payload),
  /**
   * Envía el payload con los datos de verificación de correo al servidor
   */
  verificarCorreo: (verifyUrl) => getDynamic(verifyUrl),
  /**
   * Envía el payload con los datos para recuperar contraseña al servidor
   */
  recuperarContrasena: (payload) => create(ENDPOINTS.FORGOT_PASSWORD, payload),
  /**
   * Envía el payload con los datos para restablecer contraseña al servidor
   */
  resetearContrasena: (payload) => create(ENDPOINTS.RESET_PASSWORD, payload),
  /**
   * Envía el payload con los datos de inicio de sesión al servidor
   */
  login: (credenciales) => create(ENDPOINTS.LOGIN, credenciales),
};