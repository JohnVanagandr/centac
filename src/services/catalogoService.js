import { catalogoRepository } from '@/data/repositories';

export const catalogoService = {
  async obtenerTiposDocumento() {
    try {
      // Ajuste: Ahora llamamos al método estandarizado que provee la fábrica
      const respuesta = await catalogoRepository.getAllTiposDocumento();
      return respuesta?.data || []; 
    } catch (error) {
      console.error("Error cargando catálogos (Documentos):", error);
      throw error;
    }
  }
};