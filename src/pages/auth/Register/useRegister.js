import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, useFeedback } from "@/hooks"; 
import { authService } from "@/services/authService";

export const useRegister = () => {
  const navigate = useNavigate();
  const { showFeedback } = useFeedback();
  
  // Estados puramente visuales (UI)
  const [serverError, setServerError] = useState("");
  // 🌟 NUEVO: Estado para mapear los errores específicos del servidor a cada input
  const [backendErrors, setBackendErrors] = useState({}); 
  const [showPassword, setShowPassword] = useState(false);

  // 1. DATA BINDING: Usamos los nombres exactos del backend
  const initialState = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  // El Inspector (Validación rápida del Frontend)
  const validateRegister = (values) => {
    let errs = {};
    if (!values.name.trim()) errs.name = "Obligatorio";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email.trim()) errs.email = "Obligatorio";
    else if (!emailRegex.test(values.email)) errs.email = "Correo inválido";

    if (!values.password) errs.password = "Obligatorio";
    else if (values.password.length < 6) errs.password = "Mínimo 6 caracteres";

    if (values.password !== values.password_confirmation) {
      errs.password_confirmation = "Las contraseñas no coinciden";
    }

    return errs;
  };

  const { values, errors, handleChange, handleSubmit, isSubmitting, resetForm } = useForm(
    initialState,
    validateRegister,
  );

  // Lógica de bloqueo visual para deshabilitar el botón
  const isFormValid =
    values.name.trim() !== "" &&
    values.email.trim() !== "" &&
    values.password.trim() !== "" &&
    values.password === values.password_confirmation &&
    Object.keys(errors).length === 0;

  // 2. LA ACCIÓN ATÓMICA REFACTORIZADA
  const submitAction = async (formValues) => {
    if (!isFormValid) return;
    
    // Limpiamos la mesa antes de enviar
    setServerError(""); 
    setBackendErrors({}); 

    try {
      // DELEGACIÓN: Le pasamos los datos al Servicio
      const resultado = await authService.registrar(formValues);

      resetForm();

      showFeedback({
        type: 'success',
        title: '¡Registro Exitoso!',
        message: `${resultado.mensajeBackend || ''}`
      });
      
      navigate("/auth/login");

    } catch (err) {
      if (err.type === "VALIDATION") {
      const formattedErrors = {};
      for (const field in err.validationErrors) {
        formattedErrors[field] = err.validationErrors[field][0]; 
      }
      setBackendErrors(formattedErrors);
      setServerError("Datos duplicados o inválidos detectados.");
    } else {
        // Errores generales (Servidor caído, 500, etc.)
        setServerError(err.message || "Hubo un problema al registrar tu cuenta.");
      }
    }
  };

  // 3. EMPAQUETADO FINAL
  const onSubmitForm = handleSubmit(submitAction);

  return {
    values,
    errors,
    backendErrors, // 🌟 Exportamos los errores del backend para usarlos en el HTML
    handleChange,
    onSubmitForm, 
    isSubmitting,
    serverError,
    isFormValid,
    showPassword,
    setShowPassword,
  };
};