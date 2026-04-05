import { useEffect } from "react";
import { useForm, useFeedback } from "@/hooks";

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
  const { showFeedback } = useFeedback();

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
      showFeedback({
        type: 'success',
        title: '¡Solicitud Recibida!',
        message: 'Tu interés en este programa ha sido registrado. Un orientador técnico de nuestro centro de formación revisará tu perfil y te contactará vía WhatsApp o correo para explicarte los pasos de la matrícula.'
      });
    } catch (error) {
      showFeedback({
        type: 'error',
        title: 'Registro no procesado',
        message: 'Tuvimos un problema técnico al guardar tu información. Por favor, no pierdas esta oportunidad; verifica tu conexión a internet e intenta enviarlo una vez más.'
      });
    }
  };

  const onSubmitForm = handleSubmit(submitLead);

  return { values, errors, handleChange, onSubmitForm, isSubmitting, isSubmitted };
};