import { getAll as fetchAllData } from '../actions';

const ENDPOINTS = {
    TIPOS_DOC: '/front/tipos-documentos',
};

export const catalogoRepository = {
  getTiposDocumento: () => fetchAllData(ENDPOINTS.TIPOS_DOC),
};