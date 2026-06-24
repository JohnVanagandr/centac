import { createRepository } from '../actions';

// La fábrica genera automáticamente getAll() y getById() 
// cumpliendo con el estándar de nombres.
export const sliderRepository = createRepository('/front/sliders');