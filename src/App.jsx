import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 1. Contexto y Guardián
import { AuthProvider } from "@/context/AuthContext";
import PrivateRoute from "@/components/auth/PrivateRoute";

// 2. Layouts y Componentes Comunes
import PublicLayout from "@/layouts/PublicLayout";
import PrivateLayout from "@/layouts/PrivateLayout";
import AuthLayout from "@/layouts/AuthLayout";
import ScrollToHash from "@/components/utils/ScrollToHash";

// 3. Páginas Públicas y Auth
import {
  Home,
  CatalogoOfertas,
  OfertaDetalle
} from "@/pages/public";

import {
  Login,
  Register,
  ForgotPassword,
  ResetPassword
} from "@/pages/auth";

// 4. Páaginas Privadas
import DashboardHome from "@/pages/private/DashboardHome";
import Solicitudes from "@/pages/private/Solicitudes";
import SolicitudDetalle from "@/pages/private/SolicitudDetalle";
import OfertasList from "@/pages/private/Ofertas/OfertasList";
import OfertaEditor from "@/pages/private/Ofertas/OfertaEditor";

const App = () => {
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
            <Route path="ofertas" element={<CatalogoOfertas />} />
            <Route path="oferta/:slug" element={<OfertaDetalle />} />
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
          {/* Al usar <PrivateRoute /> como elemento padre, protege TODO lo que esté adentro */}
          <Route element={<PrivateRoute />}>
            {/* El Layout Privado envuelve todas las vistas internas */}
            <Route element={<PrivateLayout />}>
              <Route path="/dashboard" element={<DashboardHome />} />
              <Route path="/dashboard/solicitudes" element={<Solicitudes />} />
              <Route
                path="/dashboard/solicitudes/:id"
                element={<SolicitudDetalle />}
              />
              <Route path="/dashboard/ofertas" element={<OfertasList />} />
              <Route path="/dashboard/ofertas/nueva" element={<OfertaEditor />} />
              <Route path="/dashboard/ofertas/editar/:id" element={<OfertaEditor />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;