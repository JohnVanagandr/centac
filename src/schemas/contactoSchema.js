import { z } from "zod";

export const contactoSchema = z.object({
  full_name: z
    .string()
    .min(1, "El nombre completo es obligatorio.")
    .min(3, "El nombre debe tener al menos 3 caracteres."),
  
  email: z
    .string()
    .min(1, "El correo electrónico es obligatorio.")
    .email("Ingresa un formato de correo válido (ejemplo@correo.com)."),
  
   phone: z
    .string()
    .min(1, "El número de teléfono es obligatorio.") 
    .min(10, "El teléfono debe tener al menos 10 dígitos.")
    .regex(/^[0-9]+$/, "El teléfono solo debe contener números."),
  
  message: z
    .string()
    .min(1, "El mensaje no puede estar vacío.")
    .min(10, "Por favor, escribe un mensaje más detallado (mínimo 10 caracteres)."),
});