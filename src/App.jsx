import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importamos nuestro Contexto de Autenticación
import { AuthProvider } from "./context/AuthContext";

// Importamos el Layout
import PublicLayout from "./layouts/PublicLayout";
import ScrollToHash from "./components/common/ScrollToHash";

// Importamos las Páginas
import Home from "./pages/public/Home";
import CatalogoOfertas from "./pages/public/CatalogoOfertas";
import OfertaDetalle from "./pages/public/OfertaDetalle";
import Login from "./pages/auth/Login";

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
            {/* El 'index' le dice a React Router que esta es la vista por defecto en la raíz "/" */}
            <Route index element={<Home />} />

            {/* Catálogo y detalles */}
            <Route path="ofertas" element={<CatalogoOfertas />} />
            <Route path="oferta/:slug" element={<OfertaDetalle />} />
          </Route>

          {/* =========================================
            GRUPO 2: Rutas Auth / Independientes (Sin Navbar)
            ¡Importante! Esta ruta va por FUERA del PublicLayout
            ========================================= */}
          <Route path="/login" element={<Login />} />

          {/* ==========================================
            GRUPO 3: ZONA PRIVADA (El futuro Dashboard Administrativo)
            ========================================== */}
          {/* <Route path="/admin" element={<PrivateLayout />}>
          <Route index element={<DashboardHome />} />
        </Route> 
        */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
