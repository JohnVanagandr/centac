// src/data/actions/index.js

// 1. Exportamos las acciones atómicas para quien las necesite
export * from './getAll';
export * from './getById';
export * from './getBySlug';
export * from './create';
export * from './getDynamic';
export * from './put'; 

// 2. Importamos internamente para armar la fábrica aquí mismo
import { getAll } from './getAll';
import { getById } from './getById';
import { getBySlug } from './getBySlug';
import { create } from './create';
import { getDynamic } from './getDynamic';
import { put } from './put';

// 3. Definimos y exportamos la fábrica directamente desde el índice
export const createRepository = (baseEndpoint) => {
  return {
    getAll: () => getAll(baseEndpoint),
    getById: (id) => getById(baseEndpoint, id),
    getBySlug: (slug) => getBySlug(baseEndpoint, slug),
    create: (data) => create(baseEndpoint, data),
    getDynamic: (fullRoute) => getDynamic(fullRoute),
    
    // Métodos añadidos para la funcionalidad del dashboard
    update: (id, data) => put(`${baseEndpoint}/${id}`, data),
    
    // Reutilizamos 'create' (POST) para los comentarios, así no dependemos de un post.js
    addComment: (id, data) => create(`${baseEndpoint}/${id}/comments`, data)
  };
};