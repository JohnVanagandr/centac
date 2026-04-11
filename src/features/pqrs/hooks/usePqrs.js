import { useState, useEffect } from 'react';
import { useForm, useFeedback } from "@/hooks";
import { pqrsService } from "@/services/pqrsService";

// Adapte las validaciones según los campos exactos de su formulario PQRS
const validatePqrs = (values) => {
  let errors = {};

  // Listas desplegables
  if (!values.document_type_id) {
    errors.document_type_id = "Seleccione un tipo de documento.";
  }
  if (!values.pqrs_type_id) {
    errors.pqrs_type_id = "Seleccione el tipo de solicitud (PQRS).";
  }

  // Textos cortos
  if (!values.document_number.trim()) {
    errors.document_number = "El número de documento es obligatorio.";
  }
  
  if (!values.full_name.trim()) {
    errors.full_name = "El nombre completo es obligatorio.";
  }

  if (!values.subject.trim()) {
    errors.subject = "El asunto es obligatorio.";
  }

  // Validaciones con formato específico (Regex)
  if (!values.phone.trim()) {
    errors.phone = "El teléfono es obligatorio.";
  } else if (!/^[0-9+\s]{7,15}$/.test(values.phone)) {
    errors.phone = "El teléfono solo debe contener números (mínimo 7 dígitos).";
  }

  if (!values.email.trim()) {
    errors.email = "El correo electrónico es obligatorio.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Ingrese un correo electrónico válido.";
  }

  // Textos largos
  if (!values.description.trim()) {
    errors.description = "La descripción es obligatoria para procesar su solicitud.";
  } else if (values.description.length < 10) {
    errors.description = "La descripción debe tener al menos 10 caracteres.";
  }

  return errors;
};

export const usePqrs = () => {
  const { showFeedback } = useFeedback();
  const [listas, setListas] = useState({ tiposDocumento: [], tiposPqrs: [] });
  const [loadingListas, setLoadingListas] = useState(true);

  // Inicialización del formulario
  const { values, errors, handleChange, handleSubmit, isSubmitting, resetForm } = useForm(
    { 
      document_type_id: "", 
      document_number: "", 
      full_name: "", 
      phone: "", 
      email: "", 
      pqrs_type_id: "", 
      subject: "", 
      description: "" 
    }, 
    validatePqrs
    );

  // 1. Cargar datos iniciales al montar el componente
  useEffect(() => {
    const cargarListas = async () => {
      setLoadingListas(true);
      try {
        const data = await pqrsService.obtenerListasFormulario();        
        console.log("📦 Datos que llegaron del Servicio:", data);
        setListas(data);
      } catch (error) {
        showFeedback({
          type: 'error',
          title: 'Error de conexión',
          message: error.message
        });
      } finally {
        setLoadingListas(false);
      }
    };

    cargarListas();
  }, []);

  // 2. Procesar el envío
  const submitPqrs = async (formValues) => {
    try {
      const resultado = await pqrsService.radicarPqrs(formValues);
      
      resetForm();
      
      showFeedback({
        type: 'success',
        title: '¡Radicado Exitoso!',
        message: `Su solicitud ha sido recibida. Su número de radicado es: ${resultado.radicado}. ${resultado.mensajeBackend || ''}`
      });

    } catch (error) {
      showFeedback({
        type: 'error',
        title: 'No pudimos procesar la PQRS',
        message: error.message || 'Por favor, revise sus datos e intente nuevamente.'
      });
    }
  };

  const onSubmitForm = handleSubmit(submitPqrs);  

  return { 
    values, 
    errors, 
    handleChange, 
    onSubmitForm, 
    isSubmitting, 
    listas,
    loadingListas
  };
};