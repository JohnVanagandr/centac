import { 
  getAll as fetchAllData, 
  getById as fetchDataById 
} from '../actions';

const ENDPOINT = '/front/sliders';

// Exportamos un objeto simple con las acciones configuradas para "sliders"
export const sliderRepository = {
  
  // 1. Usamos la acción genérica pre-cargando el endpoint
  getAll: () => fetchAllData(ENDPOINT),
  
  // 2. Usamos otra acción genérica
  getById: (id) => fetchDataById(ENDPOINT, id),

};