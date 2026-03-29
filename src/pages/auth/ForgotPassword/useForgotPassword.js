import { useState } from "react";
import api from "@/services/api";

export const useForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validación en tiempo real (limpia el error mientras escribe)
  const handleChange = (e) => {
    setEmail(e.target.value);
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // 1. Validaciones
    if (!email.trim()) {
      setError("Por favor, ingresa tu correo electrónico.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Ingresa un formato de correo válido.");
      return;
    }

    // 2. Ejecución
    setIsSubmitting(true);

    try {
      // CONEXIÓN REAL AL BACKEND: Cambia la ruta según tu API
      await api.post("/auth/forgot-password", { email });

      setIsSubmitted(true);
    } catch (err) {
      if (err.response) {
        // Mostramos el mensaje exacto que manda el servidor (ej: "No encontramos ese correo")
        setError(
          err.response.data?.message ||
            "Ocurrió un error al procesar tu solicitud.",
        );
      } else {
        setError("Error de red. Verifica tu conexión e inténtalo de nuevo.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Función para permitirle al usuario volver a intentar si se equivocó de correo
  const handleRetry = () => {
    setIsSubmitted(false);
    setError("");
  };

  return {
    email,
    error,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleSubmit,
    handleRetry,
  };
};
