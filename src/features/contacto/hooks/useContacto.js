import { useForm, useFeedback } from "@/hooks";

const validateContacto = (values) => {
  let errors = {};
  if (!values.nombre.trim()) errors.nombre = "El nombre es obligatorio.";
  if (!values.email) {
    errors.email = "El correo electrónico es obligatorio.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Ingresa un correo válido.";
  }
  if (!values.mensaje.trim()) errors.mensaje = "Por favor, escribe un mensaje.";
  if (values.telefono && !/^[0-9+\s]+$/.test(values.telefono)) {
    errors.telefono = "El teléfono solo debe contener números.";
  }
  return errors;
};

export const useContacto = () => {
  
  const { showFeedback } = useFeedback();

  const { 
    values, 
    errors, 
    handleChange, 
    handleSubmit, 
    isSubmitting, 
    isSubmitted, 
    resetForm 
  } = useForm(
    { nombre: "", email: "", telefono: "", mensaje: "" }, 
    validateContacto
  );

  // 2. Definimos la acción específica para ESTE formulario
  const submitContacto = async (formValues) => {
    try {
      // Simulación de API...
      await new Promise((resolve) => setTimeout(resolve, 2000));
      resetForm();
      showFeedback({
        type: 'success',
        title: '¡Mensaje Enviado!',
        message: 'Gracias por escribirnos. Nuestro equipo revisará tu consulta y te contactaremos a la brevedad.'
      });
    } catch (error) {
      showFeedback({
        type: 'error',
        title: 'No pudimos enviar el mensaje',
        message: 'Parece que hay un problema de conexión. Por favor, revisa tu internet o intenta de nuevo más tarde.'
      });
    }
  };

  // 3. Preparamos el evento final para la vista
  const onSubmitForm = handleSubmit(submitContacto);

  // 4. Exportamos SOLO lo que la vista necesita saber
  return { 
    values, 
    errors, 
    handleChange, 
    onSubmitForm, 
    isSubmitting, 
    isSubmitted 
  };
};