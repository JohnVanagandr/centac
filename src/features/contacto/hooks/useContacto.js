import { useForm } from "@/hooks/useForm"; // Tu hook global maestro

// 🛡️ Reglas de Validación Aisladas
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

// 🚀 El Hook Específico del Feature
export const useContacto = () => {
  // 1. Instanciamos tu hook global
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
      console.log("Datos listos para enviar a Laravel (Contacto):", formValues);
      // Simulación de API...
      await new Promise((resolve) => setTimeout(resolve, 2000));
      resetForm();
    } catch (error) {
      console.error("Error al enviar", error);
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