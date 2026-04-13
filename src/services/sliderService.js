import { sliderRepository } from '@/data/repositories';

export const sliderService = {
  
  async obtenerSliders() {    
    try {
      const respuesta = await sliderRepository.getAll();
      
      // 🔍 LUPA 1: Veamos qué entregó Axios
      console.log("📦 Caja recibida del Backend:", respuesta);

      // Verificamos el estándar de su API
      if (respuesta && respuesta.status === 'success') {
        return respuesta.data; 
      } else {
        // Si no es success, devolvemos la respuesta completa o un arreglo
        return Array.isArray(respuesta) ? respuesta : (respuesta?.data || []);
      }

    } catch (error) {
      console.error("Error en sliderService:", error.message);
      // 🌟 CAMBIO CLAVE: Lanzamos el error para que TanStack Query sepa que falló
      throw error; 
    }
  }
};