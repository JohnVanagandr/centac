import { z } from "zod";

export const sliderSchema = z.object({
  image: z
    .string()
    .min(1, "La URL de la imagen es obligatoria.")
    .url("Debe ser un enlace válido (ej: https://...)."),
  
  badge: z
    .string()
    .min(1, "La etiqueta es obligatoria.")
    .max(50, "La etiqueta no debe superar los 50 caracteres."),
  
  title: z
    .string()
    .min(1, "El título es obligatorio."),
  
  title_highlight: z
    .string()
    .min(1, "El título resaltado es obligatorio."),
  
  description: z
    .string()
    .min(10, "La descripción debe tener al menos 10 caracteres."),
  
  button_text: z
    .string()
    .min(1, "El texto del botón es obligatorio."),
  
  button_link: z
    .string()
    .min(1, "El enlace del botón es obligatorio."),
});