// Importamos los hooks de React y tu SplashScreen
import React from "react";
import { HashRouter } from 'react-router-dom';
import { SplashScreen } from "@/components/ui/Feedback"; 
import { useSplashScreen } from "./hooks/useSplashScreen";

// 1. Contexto Global
import { AuthProvider } from "@/context/AuthContext";

// 2. Utilidades Globales de Navegación
import ScrollToHash from "@/components/utils/ScrollToHash";

// 3. Nuestro nuevo Router modular
import { AppRouter } from "@/router";

const App = () => {
  // ==========================================
  // Lógica del Splash Screen
  // ==========================================
  const isAppLoading = useSplashScreen(1000);

  if (isAppLoading) {
    return <SplashScreen />;
  }

  // ==========================================
  // Renderizado Principal de la App
  // ==========================================
  return (
    <AuthProvider>
      <HashRouter>
        <ScrollToHash />
        {/* Toda la magia y complejidad de las URLs vive aquí adentro */}
        <AppRouter />
      </HashRouter>
    </AuthProvider>
  );
};

export default App;