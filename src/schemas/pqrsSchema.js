import { z } from "zod";

export const pqrsSchema = z.object({
  document_type_id: z
    .string()
    .min(1, "Debes seleccionar un tipo de documento."),
  
  document_number: z
    .string()
    .min(5, "El número de documento es muy corto.")
    .regex(/^[a-zA-Z0-9]+$/, "El documento no debe contener caracteres especiales."),
  
  full_name: z
    .string()
    .min(3, "El nombre debe tener al menos 3 caracteres."),
  
  phone: z
    .string()
    .min(10, "El teléfono debe tener al menos 10 dígitos.")
    .regex(/^[0-9]+$/, "El teléfono solo debe contener números."),
  
  email: z
    .string()
    .min(1, "El correo electrónico es obligatorio.")
    .email("Ingresa un formato de correo válido."),
  
  pqrs_type_id: z
    .string()
    .min(1, "Debes clasificar tu solicitud (Petición, Queja, etc.)."),
  
  subject: z
    .string()
    .min(5, "El asunto debe ser claro y conciso (mínimo 5 caracteres)."),
  
  description: z
    .string()
    .min(15, "Por favor, detalla tu solicitud para poder ayudarte mejor (mínimo 15 caracteres)."),
});