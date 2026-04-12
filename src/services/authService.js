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
  }
};