import { z } from "zod";

export const leadSchema = z.object({
  full_name: z
    .string()
    .min(3, "El nombre debe tener al menos 3 caracteres."),
  email: z
    .string()
    .min(1, "El correo electrónico es obligatorio.")
    .email("Formato de correo inválido."),
  phone: z
    .string()
    .min(10, "El teléfono debe tener 10 dígitos.")
    .regex(/^[0-9]+$/, "Solo se permiten números."),
  program_id: z
    .string()
    .min(1, "Por favor, selecciona un área de interés."),
  message: z
    .string()
    .max(500, "El mensaje no puede exceder los 500 caracteres.")
    .optional(),
});