import { useForm, useFeedback } from "@/hooks";
import { contactoService } from "@/services/contactoService";

// Las validaciones se quedan en el Hook porque son exclusivas de la Vista (Feature)
const validateContacto = (values) => {
  let errors = {};
  if (!values.full_name.trim()) errors.full_name = "El nombre es obligatorio.";
  if (!values.email) {
    errors.email = "El correo electrónico es obligatorio.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Ingresa un correo válido.";
  }
  if (!values.message.trim()) errors.message = "Por favor, escribe un mensaje.";
  if (values.phone && !/^[0-9+\s]+$/.test(values.phone)) {
    errors.phone = "El teléfono solo debe contener números.";
  }
  return errors;
};

export const useContacto = () => {
  const { showFeedback } = useFeedback();

  const { values, errors, handleChange, handleSubmit, isSubmitting, isSubmitted, resetForm } = useForm(
    { full_name: "", email: "", phone: "", message: "" }, 
    validateContacto
  );

  // El Hook controla el UI, el Servicio controla el Backend
  const submitContacto = async (formValues) => {
    try {
      // 1. Mandamos al obrero a hacer el trabajo sucio
      const resultado = await contactoService.enviarFormulario(formValues);
      
      // 2. Si no explotó, es porque fue un éxito. Vaciamos el formulario.
      resetForm();
      
      // 3. Nosotros decidimos el mensaje y el diseño
      showFeedback({
        type: 'success',
        title: '¡Mensaje Enviado!',
        message: resultado.mensajeBackend || 'Nuestro equipo revisará tu consulta y te contactaremos a la brevedad.'
      });

    } catch (error) {
      // Si el servicio arrojó un throw, caemos aquí
      showFeedback({
        type: 'error',
        title: 'No pudimos enviar el mensaje',
        // Podemos usar el mensaje del backend o poner uno genérico si se cayó el internet
        message: error.message || 'Parece que hay un problema de conexión. Intenta de nuevo más tarde.'
      });
    }
  };

  const onSubmitForm = handleSubmit(submitContacto);

  return { values, errors, handleChange, onSubmitForm, isSubmitting, isSubmitted };
};