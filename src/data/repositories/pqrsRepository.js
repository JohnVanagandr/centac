import { 
  getAll as fetchAllData, 
  create as sendData 
} from '../actions';

// Ajuste estas rutas según lo que exponga su API real
const ENDPOINTS = {
  PQRS: '/front/pqrs/solicitudes',
  TIPOS_PQRS: '/front/pqrs/tipos'
};

export const pqrsRepository = {
  getTiposPqrs: () => fetchAllData(ENDPOINTS.TIPOS_PQRS),
  enviarPqrs: (payload) => sendData(ENDPOINTS.PQRS, payload)
};