import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 1. Contexto y Guardián
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/auth/PrivateRoute"; // <-- NUESTRO NUEVO GUARDIÁN

// 2. Layouts y Componentes Comunes
import PublicLayout from "./layouts/PublicLayout";
import ScrollToHash from "./components/common/ScrollToHash";

// 3. Páginas Públicas y Auth
import Home from "./pages/public/Home";
import CatalogoOfertas from "./pages/public/CatalogoOfertas";
import OfertaDetalle from "./pages/public/OfertaDetalle";
import Login from "./pages/auth/Login";

// --- Componente Temporal para Pruebas ---
const DashboardTemporal = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-lg">
      <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-4">🔒</div>
      <h1 className="text-3xl font-display font-black text-navy mb-2">Zona Privada</h1>
      <p className="text-gray-600">¡Felicidades! Si ves esto, es porque el PrivateRoute validó tu sesión correctamente.</p>
    </div>
  </div>
);
// ----------------------------------------

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
            
            {/* Si el usuario pasa el filtro, React Router inyecta esta ruta en el <Outlet /> del PrivateRoute */}
            <Route path="/dashboard" element={<DashboardTemporal />} />
            
            {/* Aquí a futuro pondremos algo como:
            <Route path="/admin" element={<PrivateLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="estudiantes" element={<ListaEstudiantes />} />
            </Route> 
            */}
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;