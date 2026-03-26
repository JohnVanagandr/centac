import { useState, useEffect } from "react";
import { useForm } from "../useForm"; // Tu hook genérico
import { leadService } from "../../services/public/leadService";
import { publicOfertasService } from "../../services/public/publicOfertasService";

// --- REGLAS DE VALIDACIÓN ---
const validarContacto = (valores) => {
  let errores = {};
  if (!valores.nombre.trim()) errores.nombre = "Por favor, ingresa tu nombre completo.";
  
  if (!valores.email) errores.email = "El correo electrónico es obligatorio.";
  else if (!/\S+@\S+\.\S+/.test(valores.email)) errores.email = "El formato del correo no es válido.";
  
  if (!valores.telefono.trim()) errores.telefono = "El número de teléfono es obligatorio.";
  else if (!/^[0-9\s-]{7,15}$/.test(valores.telefono)) errores.telefono = "Ingresa un número de teléfono válido.";
  
  if (!valores.programa) errores.programa = "Debes seleccionar un programa de interés.";
  
  return errores;
};

export const useForm = () => {
  // Estado para los programas del select
  const [programas, setProgramas] = useState([]);

  // Inicializamos el hook genérico
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    isSubmitted,
  } = useForm(
    { nombre: "", email: "", telefono: "", programa: "", mensaje: "" },
    validarContacto
  );

  // Efecto para cargar los programas reales al iniciar
  useEffect(() => {
    const fetchProgramas = async () => {
      try {
        const data = await publicOfertasService.getCards();
        setProgramas(data);
      } catch (error) {
        console.error("Error cargando programas:", error);
      }
    };
    fetchProgramas();
  }, []);

  // La acción real de envío
  const enviarAlBackend = async (datosValidados) => {
    try {
      await leadService.create(datosValidados);
    } catch (error) {
      alert("Hubo un error al enviar tu solicitud. Intenta de nuevo.");
      throw error;
    }
  };

  // Empaquetamos el submit para que la vista no se entere de los detalles
  const submitForm = handleSubmit(enviarAlBackend);

  return {
    values,
    errors,
    handleChange,
    submitForm,
    isSubmitting,
    isSubmitted,
    programas,
  };
};