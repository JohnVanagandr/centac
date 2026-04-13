import { authRepository } from '@/data/repositories/authRepository';

export const authService = {
  
  async registrar(datosUsuario) {
    try {
      const respuesta = await authRepository.registrarUsuario(datosUsuario);
      
      if (respuesta && respuesta.status === 'success') {
        return { 
          exito: true, 
          mensajeBackend: respuesta.message,
          data: respuesta.data 
        };
      } else {
        // Forzamos el error si el backend manda un status falso positivo
        throw { status: 400, backendData: respuesta, message: respuesta.message };
      }

    } catch (error) {
      // 🌟 Abrimos la mochila que mandó el Interceptor
      const status = error.status || error.response?.status;
      const backendData = error.backendData || error.response?.data;

      // 🌟 REGLA DE NEGOCIO: Errores de validación múltiples (HTTP 422)
      if (status === 422 && backendData?.errors) {
        const err = new Error("Errores de validación en el servidor.");
        err.type = "VALIDATION";
        err.validationErrors = backendData.errors; // Pasamos el objeto completo { email: [...], password: [...] }
        throw err;
      }

      // Si es otro error (ej. 500), usamos el mensaje que ya viene limpio
      throw new Error(error.message || "Error al registrar el usuario.");
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

  async iniciarSesion(credenciales) {
    try {
      // Como el interceptor ya hace "response.data", aquí recibimos la data limpia
      const respuesta = await authRepository.login(credenciales);

      // 🌟 TRAMPA EVITADA: Si el backend respondió 200 pero el JSON dice "error"
      // o si la acción atómica se tragó el error HTTP y lo devolvió como éxito:
      if (respuesta && respuesta.status === "error") {
        // Forzamos el error simulando la estructura para que el catch lo procese
        throw { 
          status: 401, 
          backendData: respuesta, 
          message: respuesta.message 
        };
      }
      
      // 🌟 Aseguramos que data exista para evitar extraer 'undefined'
      const { token, user } = respuesta.data || {};
      
      // Segundo escudo: Si no hay token, no hay paraíso
      if (!token) {
        throw new Error("No se recibió el token de autenticación del servidor.");
      }
      
      return { user, token };
    } catch (error) {
      // 🌟 Extraemos la mochila de datos que preparó el interceptor
      // O los datos que nosotros mismos lanzamos desde arriba
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
        // Mensaje limpio para credenciales incorrectas
        throw new Error(message || "Credenciales incorrectas. Verifica tu correo y contraseña.");
      }

      throw new Error(message || "Error del servidor. Inténtalo más tarde.");
    }
  }

};