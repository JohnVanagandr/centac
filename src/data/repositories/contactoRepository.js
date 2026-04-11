import { create as enviarDatos } from '../actions';

const ENDPOINT = '/front/contactos';

export const contactoRepository = {
  
  // Recibimos el payload (formulario) y lo enviamos al endpoint
  enviarMensaje: (formulario) => enviarDatos(ENDPOINT, formulario)
  
};