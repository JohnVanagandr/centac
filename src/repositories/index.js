import { createRepository } from './baseRepository';

// Importamos la data estática actual
import { sliderData } from '@/data';
import { ofertaData } from '@/data';

// Fabricamos los repositorios
export const sliderRepository = createRepository('/sliders', sliderData);
export const ofertaRepository = createRepository('/ofertas', ofertaData);