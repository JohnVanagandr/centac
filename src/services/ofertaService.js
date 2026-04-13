import { ofertaRepository } from '@/data/repositories';

export const ofertaService = {
  
  async listarOfertas() {
    try {
      const respuesta = await ofertaRepository.getAll();
      
      if (respuesta && respuesta.status === 'success') {
        return respuesta.data; 
      } else {
        throw new Error(respuesta.message || "Error al listar ofertas");
      }
    } catch (error) {
      console.error("Error en ofertaService (Listar):", error.message);
      // 🌟 Lanzamos el error para que useQuery lo capture
      throw error; 
    }
  },

  async obtenerPorSlug(slug) {
    try {
      const respuesta = await ofertaRepository.getBySlug(slug);
      
      if (respuesta && respuesta.status === 'success') {
        return respuesta.data;
      } else {
        throw new Error(respuesta.message || "Oferta no encontrada");
      }
    } catch (error) {
      console.error(`Error en ofertaService (Slug: ${slug}):`, error.message);
      throw error;
    }
  }
};