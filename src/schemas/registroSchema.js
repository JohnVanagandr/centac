import { z } from "zod";

export const registroSchema = z.object({
  name: z
    .string()
    .min(3, "El nombre debe tener al menos 3 caracteres."),
  
  email: z
    .string()
    .min(1, "El correo electrónico es obligatorio.")
    .email("Ingresa un formato de correo válido."),
  
  password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres.")
    .regex(/[A-Z]/, "Debe contener al menos una letra mayúscula.")
    .regex(/[0-9]/, "Debe contener al menos un número."),
  
  password_confirmation: z
    .string()
    .min(1, "Debes confirmar tu contraseña.")
}).refine((data) => data.password === data.password_confirmation, {
  message: "Las contraseñas no coinciden. Por favor, verifica.",
  path: ["password_confirmation"],
});