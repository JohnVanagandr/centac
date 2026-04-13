import { forceRedirect } from '@/utils/navigation';
/**
 * Despachador global de errores por código de estado HTTP
 * @param {number} status - El código HTTP (401, 403, 422, etc.)
 * @param {object} data - La respuesta JSON del backend
 * @param {object} config - La configuración original de Axios (para saber la URL)
 */
export const handleStatusError = (status, data, config) => {
  
  // Diccionario de estrategias (Reglas de negocio por cada error)
  const handlers = {
    401: () => {
      const isLoginRequest = config?.url?.includes('/login');
      // Solo expulsamos si NO venía de intentar loguearse
      if (!isLoginRequest) {
        console.warn("Sesión expirada o no autorizada. Redirigiendo al login...");
        localStorage.removeItem("token");
        localStorage.removeItem("centac_user"); 
        // 🌟 USAMOS LA REDIRECCIÓN INTELIGENTE
        forceRedirect("/auth/login");
      }
      return data?.message || "Credenciales incorrectas o sesión expirada.";
    },

    403: () => {
      console.warn("Acceso denegado por el servidor.");
      return data?.message || "No tienes permisos para realizar esta acción.";
    },

    404: () => {
      return data?.message || "El recurso solicitado no existe.";
    },

    422: () => {
      // Extraemos el primer mensaje de validación del arreglo de Laravel
      const firstError = data?.errors ? Object.values(data.errors).flat()[0] : null;
      return firstError || data?.message || "Error de validación en los datos ingresados.";
    },

    500: () => {
      return "Error interno del servidor. Por favor, inténtalo más tarde.";
    }
  };

  // Buscamos si existe la estrategia, si no, devolvemos un mensaje genérico
  const executeStrategy = handlers[status];
  
  return executeStrategy ? executeStrategy() : (data?.message || "Ocurrió un error inesperado.");
};