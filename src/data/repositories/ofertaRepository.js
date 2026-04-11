import { 
  getAll as fetchAllData, 
  getBySlug as fetchBySlug 
} from '../actions';

const ENDPOINT = '/front/oferta-academica';

export const ofertaRepository = {
  
  // 1. Método para listar todas las ofertas
  getAll: () => fetchAllData(ENDPOINT),
  
  // 2. Método para buscar la oferta exacta para la Landing Page
  getBySlug: (slug) => fetchBySlug(ENDPOINT, slug)
  
};