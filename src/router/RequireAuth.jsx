import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "@/context/AuthContext";
import { LoadingScreen }  from "@/components/ui/Feedback";

/**
 * Componente Guardián para proteger rutas privadas.
 * @param {Array} allowedRoles - (Opcional) Arreglo con los roles permitidos ej: ['admin', 'instructor']
 */
const RequireAuth = ({ allowedRoles }) => {
  const { isLoggedIn, isLoading, user } = useContext(AuthContext);

  // 1. Si está cargando, mostramos la UI delegada
  if (isLoading) {
    return <LoadingScreen message="Verificando sesión..." />;
  }

  // 2. Si no ha iniciado sesión, lo mandamos a Login
  if (!isLoggedIn) {
    return <Navigate to="/auth/login" replace />;
  }

  // 3. Validamos si el usuario tiene el rol necesario
  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/" replace />; 
  }

  // 4. Todo bien, renderizamos la ruta protegida
  return <Outlet />;
};

export default RequireAuth;