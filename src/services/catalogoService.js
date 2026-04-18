import { catalogoRepository } from '@/data/repositories';

export const catalogoService = {
  async obtenerTiposDocumento() {
    try {
      const respuesta = await catalogoRepository.getTiposDocumento();
      return respuesta?.data || []; 
    } catch (error) {
      console.error("Error cargando catálogos (Documentos):", error);
      throw error;
    }
  }
};