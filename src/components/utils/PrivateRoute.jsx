import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

/**
 * Componente Guardián para proteger rutas privadas.
 * @param {Array} allowedRoles - (Opcional) Arreglo con los roles permitidos ej: ['admin', 'instructor']
 */
const PrivateRoute = ({ allowedRoles }) => {
  // 1. Extraemos los datos de nuestra "nube" global
  const { isLoggedIn, isLoading, user } = useContext(AuthContext);

  // 2. Mientras verificamos el localStorage, mostramos una pantalla de carga
  // Esto evita que el sistema expulse al usuario por error si su internet es lento
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <svg className="animate-spin w-10 h-10 text-brand" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-navy font-semibold">Verificando sesión...</p>
        </div>
      </div>
    );
  }

  // 3. Si no ha iniciado sesión, lo redirigimos al Login
  // El atributo 'replace' borra el historial para que el usuario no pueda usar el botón "Atrás" del navegador para volver a la ruta protegida
  if (!isLoggedIn) {
    return <Navigate to="/auth/login" replace />;
  }

  // 4. (Opcional pero muy útil) Validamos si el usuario tiene el rol necesario
  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    // Si es un estudiante intentando entrar a zona de admin, lo mandamos al home
    return <Navigate to="/" replace />; 
  }

  // 5. Si pasó todos los filtros, renderizamos la ruta hija que estaba intentando ver
  return <Outlet />;
};

export default PrivateRoute;