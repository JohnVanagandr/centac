import { useForm } from "@/hooks/useForm";

// 🛡️ Reglas de Validación Estrictas para PQRS
const validatePqrs = (values) => {
  let errors = {};

  if (!values.tipoSolicitud) errors.tipoSolicitud = "Seleccione el tipo de solicitud.";
  if (!values.tipoDocumento) errors.tipoDocumento = "Seleccione un tipo de documento.";
  
  if (!values.numeroDocumento.trim()) {
    errors.numeroDocumento = "El número de documento es obligatorio.";
  } else if (!/^[0-9A-Za-z]+$/.test(values.numeroDocumento)) {
    errors.numeroDocumento = "Documento inválido (solo letras y números).";
  }

  if (!values.nombreCompleto.trim()) errors.nombreCompleto = "Escriba sus nombres y apellidos.";
  
  if (!values.email) {
    errors.email = "El correo es obligatorio para notificarle.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Ingrese un correo válido.";
  }

  // Teléfono opcional, pero si lo pone, que sea válido
  if (values.telefono && !/^[0-9+\s]+$/.test(values.telefono)) {
    errors.telefono = "El teléfono solo debe contener números.";
  }

  if (!values.asunto.trim()) errors.asunto = "El asunto es obligatorio.";
  if (!values.descripcion.trim()) errors.descripcion = "Por favor, describa su solicitud.";

  return errors;
};

// 🚀 El Hook del Feature
export const usePqrs = () => {
  const initialState = {
    tipoSolicitud: "",
    tipoDocumento: "",
    numeroDocumento: "",
    nombreCompleto: "",
    telefono: "",
    email: "",
    asunto: "",
    descripcion: ""
  };

  const { values, errors, handleChange, handleSubmit, isSubmitting, isSubmitted, resetForm } = useForm(initialState, validatePqrs);

  // Acción de envío a Laravel
  const submitPqrs = async (formValues) => {
    try {
      // Simulación de red
      await new Promise((resolve) => setTimeout(resolve, 2000));
      resetForm();
    } catch (error) {
      console.error("Error al radicar PQRS", error);
    }
  };

  const onSubmitForm = handleSubmit(submitPqrs);

  return { values, errors, handleChange, onSubmitForm, isSubmitting, isSubmitted };
};