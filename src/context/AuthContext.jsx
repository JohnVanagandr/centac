import React, { createContext, useState, useEffect } from "react";

// 1. Creamos el contexto (la "nube" de datos)
export const AuthContext = createContext();

// 2. Creamos el Provider (el componente que envolverá a nuestra app)
export const AuthProvider = ({ children }) => {
  // Estado global
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Al cargar la aplicación, verificamos si hay sesión activa
  useEffect(() => {
    const checkSession = () => {
      // Buscamos el token (para el backend) y el usuario (para la UI)
      const token = localStorage.getItem("token");
      const storedUser = localStorage.getItem("centac_user");

      // Solo si tenemos ambos, consideramos que la sesión es válida
      if (token && storedUser) {
        setUser(JSON.parse(storedUser));
        setIsLoggedIn(true);
      }
      setIsLoading(false);
    };
    checkSession();
  }, []);

  // Función global para iniciar sesión (ahora recibe token y userData)
  const login = (userData, token) => {
    setUser(userData);
    setIsLoggedIn(true);

    // Guardamos por separado para eficiencia
    localStorage.setItem("token", token); // El interceptor tomará esto
    localStorage.setItem("centac_user", JSON.stringify(userData)); // La UI tomará esto
  };

  // Función global para cerrar sesión
  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);

    // Limpiamos toda la casa
    localStorage.removeItem("token");
    localStorage.removeItem("centac_user");

    // Redirigimos al login para evitar que el usuario se quede viendo vistas "rotas"
    window.location.href = "/auth/login";
  };

  // 3. Empaquetamos todo
  const value = {
    user,
    isLoggedIn,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
