import { authRepository } from '@/data/repositories/authRepository';

export const authService = {
  
  async registrar(datosUsuario) {
    try {
      // Ajuste: Ahora apunta al estándar del repositorio
      const respuesta = await authRepository.createRegister(datosUsuario);
      
      if (respuesta && respuesta.status === 'success') {
        return { 
          exito: true, 
          mensajeBackend: respuesta.message,
          data: respuesta.data 
        };
      } else {
        throw { status: 400, backendData: respuesta, message: respuesta.message };
      }
    } catch (error) {
      const status = error.status || error.response?.status;
      const backendData = error.backendData || error.response?.data;

      if (status === 422 && backendData?.errors) {
        const err = new Error("Errores de validación en el servidor.");
        err.type = "VALIDATION";
        err.validationErrors = backendData.errors;
        throw err;
      }

      throw new Error(error.message || "Error al registrar el usuario.");
    }
  },

  async verificarCuenta(verifyUrl) {
    try {
      // Ajuste: Ahora apunta al estándar del repositorio
      const response = await authRepository.getVerifyEmail(verifyUrl);
      return response;
    } catch (error) {
      const backendMessage = error.response?.data?.message || "Error de validación.";
      throw new Error(backendMessage);
    }
  },

  async recuperarContrasena(datosRecuperacion) {
    try {
      // Ajuste: Ahora apunta al estándar del repositorio
      const response = await authRepository.createPasswordRecovery(datosRecuperacion);
      return response;
    } catch (error) {
      const backendMessage = error.response?.data?.message || "Error al recuperar contraseña.";
      throw new Error(backendMessage);
    }
  },
  
  async resetearContrasena(datosReset) {
    try {
      // Ajuste: Ahora apunta al estándar del repositorio
      const response = await authRepository.createPasswordReset(datosReset);
      return response;
    } catch (error) {
      const backendMessage = error.response?.data?.message || "Error al restablecer contraseña.";
      throw new Error(backendMessage);
    }
  },

  async iniciarSesion(credenciales) {
    try {
      // Ajuste: Ahora apunta al estándar del repositorio
      const respuesta = await authRepository.createLogin(credenciales);

      if (respuesta && respuesta.status === "error") {
        throw { 
          status: 401, 
          backendData: respuesta, 
          message: respuesta.message 
        };
      }
      
      const { token, user } = respuesta.data || {};
      
      if (!token) {
        throw new Error("No se recibió el token de autenticación del servidor.");
      }
      
      return { user, token };
    } catch (error) {
      const status = error.status || error.response?.status;
      const backendData = error.backendData || error.response?.data;
      const message = error.message || backendData?.message;

      if (status === 403 || backendData?.errors?.requires_verification) {
        const err = new Error(message || "Cuenta no verificada.");
        err.type = "UNVERIFIED"; 
        err.email = backendData?.errors?.email || credenciales.email;
        throw err;
      }
      
      if (status === 401) {
        throw new Error(message || "Credenciales incorrectas. Verifica tu correo y contraseña.");
      }

      throw new Error(message || "Error del servidor. Inténtalo más tarde.");
    }
  }

};