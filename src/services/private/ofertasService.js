import api from '../api';

const ENDPOINT = '/ofertas';

export const ofertasService = {
  // Obtener todos los programas
  getAll: async () => {
    const params = new URLSearchParams();
    const relaciones = ['modulos', 'testimonios', 'highlights', 'aprendizajes', 'perfiles_ocupacionales'];
    
    relaciones.forEach(rel => params.append('_embed', rel));

    const response = await api.get(`${ENDPOINT}/?${params.toString()}`);
    return response.data;
  },

  // Obtener un programa específico por ID
  getById: async (id) => {
    try {
      const params = new URLSearchParams();
      // Lista de todas las relaciones que queremos "incrustar"
      const relaciones = [
        'modulos', 
        'testimonios', 
        'highlights', 
        'aprendizajes', 
        'perfiles_ocupacionales'
      ];
      // Agregamos cada relación repitiendo la llave _embed
      relaciones.forEach(rel => params.append('_embed', rel));
      const response = await api.get(`${ENDPOINT}/${id}?${params.toString()}`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener la oferta con ID ${id}:`, error);
      throw error; // Re-lanzamos para que el Hook o Componente lo maneje
    }
  },

  // Crear un nuevo programa
  create: async (data) => {
    const response = await api.post(ENDPOINT, data);
    return response.data;
  },

  // Actualizar un programa existente
  update: async (id, data) => {
    const response = await api.put(`${ENDPOINT}/${id}`, data);
    return response.data;
  },

  // Eliminar un programa
  delete: async (id) => {
    const response = await api.delete(`${ENDPOINT}/${id}`);
    return response.data;
  }
};