import { useState, useEffect } from "react";
import { useForm } from "@/hooks/useForm";
import { registrarNuevoLead } from "./leadService";
import { publicOfertasService } from "@/services/public/ofertasService";

const validarLead = (valores) => {
  let errores = {};
  if (!valores.nombre.trim()) errores.nombre = "Ingresa tu nombre completo.";
  if (!valores.email) errores.email = "El correo es obligatorio.";
  else if (!/\S+@\S+\.\S+/.test(valores.email)) errores.email = "Correo inválido.";
  if (!valores.telefono.trim()) errores.telefono = "El teléfono es obligatorio.";
  if (!valores.programa) errores.programa = "Selecciona un programa.";
  return errores;
};

export const useLeadRegistration = () => {
  const [programas, setProgramas] = useState([]);

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    isSubmitted,
  } = useForm(
    { nombre: "", email: "", telefono: "", programa: "", mensaje: "" },
    validarLead,
  );

  useEffect(() => {
    publicOfertasService.getCards().then(setProgramas).catch(console.error);
  }, []);

  const onSubmit = handleSubmit(async (datos) => {
    try {
      await registrarNuevoLead(datos);
    } catch (error) {
      alert("Error al enviar. Intenta de nuevo.");
      throw error;
    }
  });

  return {
    values,
    errors,
    handleChange,
    onSubmit,
    isSubmitting,
    isSubmitted,
    programas,
  };
};