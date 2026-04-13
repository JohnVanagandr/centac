import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { authService } from "@/services/authService";

// 🌟 LA LLAVE MAESTRA: Fuera del hook para que no se reinicie con el render
let globalRequestTracker = new Set();

export const useVerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const verifyUrl = searchParams.get("verify_url");

  const [status, setStatus] = useState("loading");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // 1. Validación de entrada
    if (!verifyUrl) {
      setStatus("error");
      setErrorMessage("Enlace de verificación ausente.");
      return;
    }

    // 2. EL BLOQUEO NUCLEAR: 
    // Si esta URL específica ya está siendo procesada, abortamos.
    if (globalRequestTracker.has(verifyUrl)) return;
    
    // Registramos la URL para bloquear futuras peticiones
    globalRequestTracker.add(verifyUrl);

    const verifyAccount = async () => {
      try {
        await authService.verificarCuenta(verifyUrl);
        setStatus("success");
      } catch (error) {
        setStatus("error");
        setErrorMessage(error.message);
        // Si falla, permitimos que el usuario reintente limpiando la marca
        globalRequestTracker.delete(verifyUrl);
      }
    };

    verifyAccount();
  }, [verifyUrl]);

  return { status, errorMessage };
};