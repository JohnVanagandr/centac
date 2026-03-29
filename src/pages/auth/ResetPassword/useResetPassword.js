import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import api from "@/services/api";

export const useResetPassword = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Derivamos la validez del formulario
  const isFormValid = password.length >= 6 && password === confirmPassword;

  // Manejadores para limpiar errores al escribir
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (error) setError("");
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // 1. Validaciones de seguridad
    if (!token || !email) {
      setError(
        "El enlace es inválido o está incompleto. Faltan credenciales de seguridad.",
      );
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    // 2. Ejecución
    setIsSubmitting(true);

    try {
      // 🔌 CONEXIÓN REAL AL BACKEND:
      await api.post("/auth/reset-password", {
        token,
        email,
        password,
        password_confirmation: confirmPassword,
      });

      setIsSuccess(true);

      // Redirigimos al Login automáticamente después de 4 segundos
      setTimeout(() => navigate("/auth/login"), 4000);
    } catch (err) {
      if (err.response) {
        setError(
          err.response.data?.message ||
            "Ocurrió un error al restablecer la contraseña. Es posible que el enlace haya expirado.",
        );
      } else {
        setError(
          "Error de conexión. Verifica tu internet e inténtalo de nuevo.",
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    password,
    confirmPassword,
    showPassword,
    setShowPassword,
    error,
    isSubmitting,
    isSuccess,
    isFormValid,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleSubmit,
  };
};
