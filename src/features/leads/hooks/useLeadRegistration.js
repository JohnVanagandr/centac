import { useEffect } from "react";
import { useForm } from "@/hooks/useForm";

// Reglas de Validación para Leads
const validateLead = (values) => {
  let errors = {};

  if (!values.nombre.trim()) errors.nombre = "El nombre es obligatorio.";
  
  if (!values.email) {
    errors.email = "El correo es obligatorio.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Ingresa un correo válido.";
  }

  // Para los leads, el teléfono suele ser VITAL para ventas/admisiones
  if (!values.telefono.trim()) {
    errors.telefono = "El teléfono es obligatorio.";
  } else if (!/^[0-9+\s]+$/.test(values.telefono)) {
    errors.telefono = "Solo números permitidos.";
  }

  if (!values.programaInteres) {
    errors.programaInteres = "Por favor selecciona un programa.";
  }

  return errors;
};

// 🚀 El Hook del Feature (Recibe el programa por si viene de una vista de detalle)
export const useLeadRegistration = (programaPreseleccionado = "") => {
  const initialState = {
    nombre: "",
    email: "",
    telefono: "",
    programaInteres: programaPreseleccionado,
    mensaje: ""
  };

  // Instanciamos el hook global
  const { 
    values, 
    errors, 
    handleChange, 
    handleSubmit, 
    isSubmitting, 
    isSubmitted, 
    resetForm,
    setValues
  } = useForm(initialState, validateLead);  

  useEffect(() => {
    if (programaPreseleccionado) {
      setValues(prev => ({
        ...prev,
        programaInteres: programaPreseleccionado
      }));
    }
  }, [programaPreseleccionado, setValues]);

  // Acción de envío
  const submitLead = async (formValues) => {
    try {
      
      // Aquí irá tu lógica real: await leadService.register(formValues);
      await new Promise((resolve) => setTimeout(resolve, 2000)); 
      
      resetForm();
    } catch (error) {
      console.error("Error al registrar el lead:", error);
    }
  };

  const onSubmitForm = handleSubmit(submitLead);

  return { values, errors, handleChange, onSubmitForm, isSubmitting, isSubmitted };
};