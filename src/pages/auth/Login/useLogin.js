import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "@/hooks/useForm";
import { AuthContext } from "@/context/AuthContext";
import { authService } from "@/services/authService"; 
import { ReceiptEuro } from "lucide-react";

export const useLogin = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");
  const [unverifiedEmail, setUnverifiedEmail] = useState(null);
  const [resendStatus, setResendStatus] = useState({ loading: false, success: false, error: "" });

  const initialState = { email: "", password: "" };

  const validateLogin = (values) => {
    let errs = {};
    if (!values.email) errs.email = "El correo es requerido";
    if (!values.password) errs.password = "La contraseña es requerida";
    return errs;
  };

  const { values, errors, handleChange, handleSubmit, isSubmitting } = useForm(
    initialState,
    validateLogin
  );

  const submitAction = async (formValues) => {
    setServerError("");
    setUnverifiedEmail(null);
    setResendStatus({ loading: false, success: false, error: "" });

    try {
      // 🌟 1. Delegamos al Servicio
      const { user, token } = await authService.iniciarSesion(formValues);
      
      
      // 🌟 2. Actualizamos el Estado Global
      login(user, token); 

      // 🌟 3. Redirigimos
      navigate("/dashboard"); 

    } catch (err) {
      // 🌟 4. Manejo de Errores Limpio
      setServerError(err.message || "Error de red. Verifica tu conexión.");
      
      // Si el servicio etiquetó el error como cuenta sin verificar, activamos el estado
      if (err.tipo === "NO_VERIFICADO") {
        setUnverifiedEmail(err.email);
      }
    }
  };

  const handleResendVerification = async () => {
    if (!unverifiedEmail) return;

    setResendStatus({ loading: true, success: false, error: "" });

    try {
      // 🌟 Delegamos al Servicio
      await authService.solicitarReenvioVerificacion(unverifiedEmail);
      setResendStatus({ loading: false, success: true, error: "" });
    } catch (error) {
      setResendStatus({
        loading: false,
        success: false,
        error: error.message
      });
    }
  };

  return {
    values, errors, handleChange, handleSubmit, isSubmitting,
    submitAction, serverError, showPassword, setShowPassword,
    unverifiedEmail, handleResendVerification, resendStatus,
  };
};