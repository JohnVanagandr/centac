import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 1. Contexto y Guardián
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/auth/PrivateRoute";

// 2. Layouts y Componentes Comunes
import PublicLayout from "./layouts/PublicLayout";
import PrivateLayout from "./layouts/PrivateLayout";
import ScrollToHash from "./components/common/ScrollToHash";

// 3. Páginas Públicas y Auth
import Home from "./pages/public/Home";
import CatalogoOfertas from "./pages/public/CatalogoOfertas";
import OfertaDetalle from "./pages/public/OfertaDetalle";
import Login from "./pages/auth/Login";
// 4. Páaginas Privadas
import DashboardHome from "./pages/private/DashboardHome";

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
          <Route path="/login" element={<Login />} />

          {/* ==========================================
              GRUPO 3: ZONA PRIVADA (Protegida por el Guardián)
              ========================================== */}
          {/* Al usar <PrivateRoute /> como elemento padre, protege TODO lo que esté adentro */}
          <Route element={<PrivateRoute />}>
            {/* El Layout Privado envuelve todas las vistas internas */}
            <Route element={<PrivateLayout />}>
              <Route path="/dashboard" element={<DashboardHome />} />
              {/* <Route path="/dashboard/cursos" element={<MisCursos />} /> */}
              {/* ... más rutas privadas aquí ... */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;