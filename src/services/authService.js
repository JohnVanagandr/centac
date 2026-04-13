import { authRepository } from '@/data/repositories/authRepository';

export const authService = {
  
  async registrar(datosUsuario) {
    try {
      const respuesta = await authRepository.registrarUsuario(datosUsuario);
      
      // Evaluamos el envoltorio (Ajuste según lo que devuelva su backend)
      if (respuesta && respuesta.status === 'success') {
        return { 
          exito: true, 
          mensajeBackend: respuesta.message,
          data: respuesta.data 
        };
      } else {
        // Forzamos el error si el backend manda un status fallido (ej: email duplicado)
        throw new Error(respuesta.message || "Error al registrar el usuario.");
      }

    } catch (error) {
      console.error("Error en authService (Registro):", error.message);
      // Lanzamos el error hacia arriba para que el Hook pinte la alerta
      throw error; 
    }
  },

  async verificarCuenta(verifyUrl) {
    try {
      const response = await authRepository.verificarCorreo(verifyUrl);
      return response;
    } catch (error) {
      const backendMessage = error.response?.data?.message || "Error de validación.";
      throw new Error(backendMessage);
    }
  },

  async recuperarContrasena(datosRecuperacion) {
    try {
      const response = await authRepository.recuperarContrasena(datosRecuperacion);
      return response;
    } catch (error) {
      const backendMessage = error.response?.data?.message || "Error al recuperar contraseña.";
      throw new Error(backendMessage);
    }
  },
  
  async resetearContrasena(datosReset) {
    try {
      const response = await authRepository.resetearContrasena(datosReset);
      return response;
    } catch (error) {
      const backendMessage = error.response?.data?.message || "Error al restablecer contraseña.";
      throw new Error(backendMessage);
    }
  },

};