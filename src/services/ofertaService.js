import { ofertaRepository } from '@/data/repositories';

export const ofertaService = {
  
  async listarOfertas() {
    try {
      // Pedimos a la API Real
      const respuesta = await ofertaRepository.getAll();
      
      // Abrimos el envoltorio
      if (respuesta && respuesta.status === 'success') {
        return respuesta.data; 
      } else {
        throw new Error(respuesta.message || "Error al listar ofertas");
      }
    } catch (error) {
      console.error("Error en ofertaService:", error.message);
      return []; 
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
      console.error(`Error al buscar slug ${slug}:`, error.message);
      return null;
    }
  }
};