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

  async iniciarSesion(credenciales) {
    try {      
      const respuesta = await authRepository.login(credenciales);
      console.log(respuesta);
      
      // Si 'create' devuelve response.data, aquí sería: respuesta.data
      const { token, user } = respuesta.data || respuesta; 
      
      return { user, token };
    } catch (error) {
      const status = error.response?.status;
      const data = error.response?.data;

      // 🌟 REGLA DE NEGOCIO: Cuenta sin verificar
      if (status === 403 || data?.errors?.requires_verification) {
        // Creamos un error personalizado al que le podemos agregar propiedades
        const errorPersonalizado = new Error(data?.message || "Tu cuenta no ha sido verificada.");
        errorPersonalizado.tipo = "NO_VERIFICADO";
        errorPersonalizado.email = data?.errors?.email || credenciales.email;
        throw errorPersonalizado;
      }
      
      // 🌟 REGLA DE NEGOCIO: Credenciales inválidas
      if (status === 401) {
        throw new Error("Credenciales incorrectas. Verifica tu correo y contraseña.");
      }

      // Cualquier otro error
      throw new Error(data?.message || "Error del servidor. Inténtalo más tarde.");
    }
  }

};