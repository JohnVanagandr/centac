import api from '@/services/api'; // O la instancia de axios que uses

export const leadService = {
  /**
   * Registra un nuevo lead (interesado) en la base de datos.
   * @param {Object} data - Datos del formulario (nombre, email, programa_id, etc.)
   */
  registrarLead: async (data) => {
    try {
      const response = await api.post('/front/prospects', data);
      return response.data;
    } catch (error) {
      console.error("Error al registrar el lead:", error);
      throw error;
    }
  }
};