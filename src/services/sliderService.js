import { sliderRepository } from '@/data/repositories';

export const sliderService = {
  
  async obtenerSliders() {    
    try {
      const respuesta = await sliderRepository.getAll();
      
      // 🔍 LUPA 1: Veamos qué entregó Axios exactamente
      console.log("📦 Caja recibida del Backend:", respuesta);

      // Si su backend tiene el formato { status: "success", data: [...] }
      if (respuesta && respuesta.status === 'success') {
        
        // 🔍 LUPA 2: Veamos qué le vamos a mandar a React
        console.log("✅ Datos extraídos de la caja:", respuesta.data);
        return respuesta.data; 
        
      } else {
        // Si no tiene "status: success", puede que Axios ya lo haya limpiado
        // y la "respuesta" sea directamente el arreglo.
        console.warn("⚠️ La respuesta no tiene 'status: success'. Devolviendo la caja entera.");
        return respuesta;
      }

    } catch (error) {
      console.error("Error en sliderService:", error.message);
      return []; 
    }
  }
};