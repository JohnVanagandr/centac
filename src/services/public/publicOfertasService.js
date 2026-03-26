
import api from "../api"; // Tu instancia de Axios configurada

export const publicOfertasService = {
  // 1. Obtener todas las ofertas con datos básicos para las Cards
  getCards: async () => {
    // Solo pedimos lo necesario para no saturar la red del cliente
    const params = new URLSearchParams();
    params.append('_embed', 'aprendizajes'); 
    
    const response = await api.get(`/ofertas?${params.toString()}`);
    return response.data;
  },

  // 2. Obtener detalle profundo de una oferta por SLUG
  // Nota: json-server permite filtrar por cualquier campo usando /ofertas?slug=valor
  getBySlug: async (slug) => {
    const params = new URLSearchParams();
    const relaciones = ['modulos', 'testimonios', 'highlights', 'aprendizajes', 'perfiles_ocupacionales'];
    relaciones.forEach(rel => params.append('_embed', rel));

    const response = await api.get(`/ofertas?slug=${slug}&${params.toString()}`);
    
    // json-server devuelve un array al filtrar, retornamos el primer elemento
    return response.data[0] || null;
  }
};