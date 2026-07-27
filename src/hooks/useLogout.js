// src/hooks/useLogout.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { authService } from "@/services/authService";
import { toast } from "react-hot-toast"; // O la librería de notificaciones que uses

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const logoutMutation = useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      limpiarSesionLocal();
      toast.success("Sesión cerrada correctamente.");
    },
    onError: (error) => {
      console.error("Error al cerrar sesión en el servidor:", error);
      // Fallback de seguridad: Incluso si el servidor falla (ej. token expirado), 
      // forzamos la limpieza local y salida del usuario.
      limpiarSesionLocal();
    }
  });

  const limpiarSesionLocal = () => {
    // 1. Limpiar almacenamiento (Ajusta las llaves según tu implementación)
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    
    // 2. Limpiar caché global de React Query para evitar fugas de datos
    queryClient.clear();
    
    // 3. Redirigir
    navigate("/auth/login", { replace: true });
  };

  return {
    handleLogout: () => logoutMutation.mutate(),
    isLoggingOut: logoutMutation.isPending
  };
};