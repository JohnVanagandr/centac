import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, useFeedback } from "@/hooks"; 
import { authService } from "@/services/authService";

export const useRegister = () => {
  const navigate = useNavigate();
  const { showFeedback } = useFeedback();
  
  // Estados puramente visuales (UI)
  const [serverError, setServerError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // 1. DATA BINDING: Usamos los nombres exactos del backend
  const initialState = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  // El Inspector
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

  // 2. LA NUEVA ACCIÓN ATÓMICA
  const submitAction = async (formValues) => {
    if (!isFormValid) return;
    
    setServerError(""); // Limpiamos errores anteriores

    try {
      // DELEGACIÓN: Le pasamos los datos al Servicio y él hace el trabajo sucio
      const resultado = await authService.registrar(formValues);

      resetForm();

      // FEEDBACK CENTRALIZADO: Adiós al alert()
      showFeedback({
        type: 'success',
        title: '¡Registro Exitoso!',
        message: `${resultado.mensajeBackend || ''}`
      });
      
      navigate("/auth/login");

    } catch (err) {
      // El servicio ya se encargó de extraer el mensaje limpio de la API
      setServerError(err.message || "Hubo un problema al registrar tu cuenta.");
    }
  };

  // 3. EMPAQUETADO FINAL
  const onSubmitForm = handleSubmit(submitAction);

  return {
    values,
    errors,
    handleChange,
    onSubmitForm, // Exportamos la versión empaquetada lista para el <form>
    isSubmitting,
    serverError,
    isFormValid,
    showPassword,
    setShowPassword,
  };
};