import { createRepository } from '../actions'; // <-- Importación correcta

// Creamos mini-fábricas para cada endpoint específico
const registerRepo = createRepository('/auth/register');
const forgotPasswordRepo = createRepository('/auth/forgot-password');
const resetPasswordRepo = createRepository('/auth/reset-password');
const loginRepo = createRepository('/auth/login');
const verifyRepo = createRepository('');
const logoutRepo = createRepository('/auth/logout');

export const authRepository = {
  createRegister: (payload) => registerRepo.create(payload),
  getVerifyEmail: (verifyUrl) => verifyRepo.getDynamic(verifyUrl),
  createPasswordRecovery: (payload) => forgotPasswordRepo.create(payload),
  createPasswordReset: (payload) => resetPasswordRepo.create(payload),
  createLogin: (credenciales) => loginRepo.create(credenciales),
  logout: () => logoutRepo.create(),
};