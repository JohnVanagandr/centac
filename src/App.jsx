// Importamos los hooks de React y tu SplashScreen
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SplashScreen } from "@/components/ui/Feedback"; 
import { useSplashScreen } from "./hooks/useSplashScreen";

// 1. Contexto y Guardián
import { AuthProvider } from "@/context/AuthContext";
import { PrivateRoute } from "@/components/utils";

// 2. Layouts y Componentes Comunes
import PublicLayout from "@/layouts/PublicLayout";
import PrivateLayout from "@/layouts/PrivateLayout";
import AuthLayout from "@/layouts/AuthLayout";
import ScrollToHash from "@/components/utils/ScrollToHash";

// 3. Páginas Públicas y Auth
import {
  Home,
  Estrategia,
  CatalogoOfertas,
  OfertaDetalle,
  Historia,
  Tramites,
  PqrPublico,
  Faq,
  Contacto,
} from "@/pages/public";
import { Login, Register, ForgotPassword, ResetPassword } from "@/pages/auth";

// 4. Páginas Privadas
import DashboardHome from "@/pages/private/DashboardHome";
import Solicitudes from "@/pages/private/Solicitudes";
import SolicitudDetalle from "@/pages/private/SolicitudDetalle";
import OfertasList from "@/pages/private/Ofertas/OfertasList";
import OfertaEditor from "@/pages/private/Ofertas/OfertaEditor";
import PqrPage from "./pages/private/Pqr/PqrPage";
import ProfilePage from "./pages/private/Profile/ProfilePage";


const App = () => {
  // ==========================================
  // Lógica del Splash Screen
  // ==========================================
  const isAppLoading = useSplashScreen(1000);

  if (isAppLoading) {
    return <SplashScreen />;
  }

  // Si ya cargó, ejecuta tu enrutador 
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          {/* ==========================================
              GRUPO 1: ZONA PÚBLICA (Con Navbar y Footer)
              ========================================== */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="nosotros/estrategia" element={<Estrategia />} />
            <Route path="nosotros/estrategia" element={<Estrategia />} />
            <Route path="nosotros/historia" element={<Historia />} />
            <Route path="servicios/tramites" element={<Tramites />} />
            <Route path="ofertas" element={<CatalogoOfertas />} />
            <Route path="oferta/:slug" element={<OfertaDetalle />} />
            <Route path="servicios/tramites" element={<Tramites />} />
            <Route path="servicios/pqr" element={<PqrPublico />} />
            <Route path="servicios/faq" element={<Faq />} />
            <Route path="contacto" element={<Contacto />} />
          </Route>

          {/* =========================================
              GRUPO 2: RUTAS LIBRES (Sin Navbar)
              ========================================= */}
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password/:token" element={<ResetPassword />} />
          </Route>

          {/* ==========================================
              GRUPO 3: ZONA PRIVADA (Protegida por el Guardián)
              ========================================== */}
          <Route element={<PrivateRoute />}>
            <Route element={<PrivateLayout />}>
              <Route path="/dashboard" element={<DashboardHome />} />
              <Route path="/dashboard/solicitudes" element={<Solicitudes />} />
              <Route
                path="/dashboard/solicitudes/:id"
                element={<SolicitudDetalle />}
              />
              <Route path="/dashboard/ofertas" element={<OfertasList />} />
              <Route
                path="/dashboard/ofertas/nueva"
                element={<OfertaEditor />}
              />
              <Route
                path="/dashboard/ofertas/editar/:id"
                element={<OfertaEditor />}
              />
              <Route path="/dashboard/pqr" element={<PqrPage />} />
              <Route path="/dashboard/perfil" element={<ProfilePage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;