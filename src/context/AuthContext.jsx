import React, { createContext, useState, useEffect } from "react";

// 1. Creamos el contexto (la "nube" de datos)
export const AuthContext = createContext();

// 2. Creamos el Provider (el componente que envolverá a nuestra app)
export const AuthProvider = ({ children }) => {
  // Estado global para saber si el usuario está logueado y sus datos
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Para evitar parpadeos al recargar la página

  // Al cargar la aplicación, verificamos si ya hay una sesión guardada en LocalStorage
  useEffect(() => {
    const checkSession = () => {
      const storedSession = localStorage.getItem("centac_session");
      if (storedSession) {
        setUser(JSON.parse(storedSession));
        setIsLoggedIn(true);
      }
      setIsLoading(false);
    };
    checkSession();
  }, []);

  // Función global para iniciar sesión
  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    localStorage.setItem("centac_session", JSON.stringify(userData));
  };

  // Función global para cerrar sesión
  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("centac_session");
  };

  // 3. Empaquetamos todo lo que queremos compartir con el resto de la app
  const value = {
    user,
    isLoggedIn,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
