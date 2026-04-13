import api from '@/services/api';

/**
 * Acción para realizar peticiones GET a rutas compuestas o personalizadas
 * @param {string} dynamicEndpoint - La ruta completa ya construida
 */
export const getDynamic = async (dynamicEndpoint) => {
  try {
    return await api.get(dynamicEndpoint);
  } catch (error) {
    // Aquí mantiene el mismo manejo de errores global que tengan sus otras acciones
    console.error(`Error en getDynamic [${dynamicEndpoint}]:`, error);
    throw error;
  }
};