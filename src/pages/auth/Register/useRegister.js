import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "@/hooks/useForm"; // Ajusta la ruta a tu hook
import api from "@/services/api"; // Ajusta la ruta a tu API real

export const useRegister = () => {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validateRegister = (values) => {
    let errs = {};
    if (!values.name.trim()) errs.name = "Obligatorio";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email.trim()) errs.email = "Obligatorio";
    else if (!emailRegex.test(values.email)) errs.email = "Correo inválido";

    if (!values.password) errs.password = "Obligatorio";
    else if (values.password.length < 6) errs.password = "Mínimo 6 caracteres";

    if (values.password !== values.confirmPassword) {
      errs.confirmPassword = "Las contraseñas no coinciden";
    }

    return errs;
  };

  const { values, errors, handleChange, handleSubmit, isSubmitting } = useForm(
    initialState,
    validateRegister,
  );

  // Lógica de bloqueo estricto (Sin el campo phone)
  const isFormValid =
    values.name.trim() !== "" &&
    values.email.trim() !== "" &&
    values.password.trim() !== "" &&
    values.password === values.confirmPassword &&
    Object.keys(errors).length === 0;

  const submitAction = async (formValues) => {
    if (!isFormValid) return;

    setServerError("");

    try {
      // 🔌 CONEXIÓN REAL AL BACKEND:
      // Adaptamos los nombres de las variables a lo que Laravel suele esperar
      await api.post("/auth/register", {
        name: formValues.name,
        email: formValues.email,
        password: formValues.password,
        password_confirmation: formValues.confirmPassword,
      });

      alert(
        "Solicitud enviada correctamente. Espera la aprobación del administrador.",
      );
      navigate("/auth/login");
    } catch (err) {
      if (err.response) {
        setServerError(
          err.response.data?.message ||
            "Hubo un problema al registrar tu cuenta.",
        );
      } else {
        setServerError(
          "Error de conexión. Verifica tu internet e inténtalo de nuevo.",
        );
      }
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    submitAction,
    serverError,
    isFormValid,
    showPassword,
    setShowPassword,
  };
};
