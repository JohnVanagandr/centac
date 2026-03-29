import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "@/hooks/useForm";
import { AuthContext } from "@/context/AuthContext";
import api from "@/services/api"; 

export const useLogin = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  // Estados visuales generales
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");

  // Estados específicos para la recuperación de cuenta (Error 403)
  const [unverifiedEmail, setUnverifiedEmail] = useState(null);
  const [resendStatus, setResendStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const initialState = { email: "", password: "" };

  const validateLogin = (values) => {
    let errs = {};
    if (!values.email) errs.email = "El correo es requerido";
    if (!values.password) errs.password = "La contraseña es requerida";
    return errs;
  };

  const { values, errors, handleChange, handleSubmit, isSubmitting } = useForm(
    initialState,
    validateLogin,
  );

  const submitAction = async (formValues) => {
    // 1. Limpiamos estados de errores previos antes de cada intento
    setServerError("");
    setUnverifiedEmail(null);
    setResendStatus({ loading: false, success: false, error: "" });

    try {
      const response = await api.post("/auth/login", formValues);
      const { token, user } = response.data.data;

      login(user, token);
      navigate("/dashboard");
    } catch (err) {
      if (err.response) {
        const { status, data } = err.response;

        // CAPTURA DEL ERROR 403 (Cuenta sin verificar)
        if (status === 403 || data?.errors?.requires_verification) {
          setServerError(
            data?.message || "Tu cuenta de correo no ha sido verificada.",
          );

          // Extraemos el correo que viene del backend o el que el usuario digitó
          const emailToVerify = data?.errors?.email || formValues.email;
          setUnverifiedEmail(emailToVerify);
        } else if (status === 401) {
          setServerError(
            "Credenciales incorrectas. Verifica tu correo y contraseña.",
          );
        } else {
          setServerError(
            data?.message || "Error del servidor. Inténtalo más tarde.",
          );
        }
      } else {
        setServerError("Error de red. Verifica tu conexión a internet.");
      }
    }
  };

  // FUNCIÓN DE REENVÍO DE CORREO
  const handleResendVerification = async () => {
    if (!unverifiedEmail) return;

    setResendStatus({ loading: true, success: false, error: "" });

    try {
      // Endpoint para reenviar el correo (Asegúrate de que esta sea tu ruta real en el backend)
      await api.post("/auth/resend-verification", { email: unverifiedEmail });

      setResendStatus({ loading: false, success: true, error: "" });
    } catch (error) {
      setResendStatus({
        loading: false,
        success: false,
        error:
          error.response?.data?.message ||
          "Hubo un problema al reenviar el correo.",
      });
    }
  };

  // Exportamos TODO lo que la vista necesita
  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    submitAction,
    serverError,
    showPassword,
    setShowPassword,
    unverifiedEmail,
    handleResendVerification,
    resendStatus,
  };
};
