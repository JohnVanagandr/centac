// Importamos los hooks de React y tu SplashScreen
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { SplashScreen } from "@/components/ui/Feedback"; 
import { useSplashScreen } from "./hooks/useSplashScreen";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Contexto Global
import { AuthProvider, FeedbackProvider } from "@/context";

// Utilidades Globales de Navegación
import { ScrollToHash}  from "@/components/utils";

// Nuestro nuevo Router modular
import { AppRouter } from "@/router";

// 1. Configuración del motor de Caché (QueryClient)
// Lo definimos fuera del componente para que no se re-cree en cada render
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // Solo reintenta 1 vez si la petición falla
      refetchOnWindowFocus: false, // Evita que se dispare la petición al cambiar de pestaña
      staleTime: 1000 * 60 * 5, // Los datos se consideran "frescos" por 5 minutos
    },
  },
});

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
    // 🌟 2. Envolvemos TODO con el QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <FeedbackProvider>
        <AuthProvider>
          <BrowserRouter>
            <ScrollToHash />
            {/* Toda la magia y complejidad de las URLs vive aquí adentro */}
            <AppRouter />
          </BrowserRouter>
        </AuthProvider>
      </FeedbackProvider>
    </QueryClientProvider>
  );
};

export default App;