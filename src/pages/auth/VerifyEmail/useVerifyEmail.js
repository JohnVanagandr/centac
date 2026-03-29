import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import api from "@/services/api";

export const useVerifyEmail = () => {
  const [searchParams] = useSearchParams();
  // Extraemos la URL firmada que Laravel puso en la barra de direcciones
  const verifyUrl = searchParams.get("verify_url");

  // Estados: "loading" (cargando), "success" (éxito), "error" (falló)
  const [status, setStatus] = useState("loading");
  const [errorMessage, setErrorMessage] = useState("");

  // Ref para evitar que el useEffect se dispare dos veces en modo desarrollo (React Strict Mode)
  const hasFetched = useRef(false);

  useEffect(() => {
    // Si no hay URL en los parámetros, marcamos error de inmediato
    if (!verifyUrl) {
      setStatus("error");
      setErrorMessage("Enlace de verificación ausente o inválido.");
      return;
    }

    if (hasFetched.current) return;
    hasFetched.current = true;

    const verifyAccount = async () => {
      try {
        // Hacemos un GET directamente a la URL firmada que mandó Laravel
        await api.get(verifyUrl);
        setStatus("success");
      } catch (error) {
        setStatus("error");
        setErrorMessage(
          error.response?.data?.message ||
            "El enlace ha expirado o ya fue utilizado.",
        );
      }
    };

    verifyAccount();
  }, [verifyUrl]);

  return { status, errorMessage };
};
