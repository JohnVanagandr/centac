import React from "react";
import { BrowserRouter } from 'react-router-dom';

// Componentes orquestadores
import { SplashScreen } from "@/components/ui/Feedback"; 
import { useSplashScreen } from "./hooks/useSplashScreen";
import { AppRouter } from "@/router";

// Arquitectura modular
import { AppProviders } from "@/providers/AppProviders";
import { AppGlobalElements } from "@/layouts/AppGlobalElements";

const App = () => {
  const isAppLoading = useSplashScreen(1000);

  if (isAppLoading) return <SplashScreen />;

  return (
    <AppProviders>
      <BrowserRouter>
        <AppGlobalElements>
          <AppRouter />
        </AppGlobalElements>
      </BrowserRouter>
    </AppProviders>
  );
};

export default App;