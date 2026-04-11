import { 
  getAll as fetchAllData, 
  create as sendData 
} from '../actions';

// Ajuste estas rutas según lo que exponga su API real
const ENDPOINTS = {
  TIPOS_DOC: '/front/tipos-documentos',
  TIPOS_PQRS: '/front/pqrs/tipos',
  PQRS: '/front/pqrs/solicitudes'
};

export const pqrsRepository = {
  // 1. Lectura de listas desplegables
  getTiposDocumento: () => fetchAllData(ENDPOINTS.TIPOS_DOC),
  getTiposPqrs: () => fetchAllData(ENDPOINTS.TIPOS_PQRS),
  
  // 2. Escritura (Radicar la solicitud)
  enviarPqrs: (payload) => sendData(ENDPOINTS.PQRS, payload)
};