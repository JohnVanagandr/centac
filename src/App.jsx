import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importamos el Layout
import PublicLayout from "./layouts/PublicLayout";
import ScrollToHash from "./components/common/ScrollToHash";

// Importamos las Páginas
import Home from "./pages/public/Home";
import CatalogoOfertas from "./pages/public/CatalogoOfertas";
import OfertaDetalle from "./pages/public/OfertaDetalle";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        {/* ==========================================
            ZONA PÚBLICA (Lo que ven los aspirantes)
            ========================================== */}
        <Route path="/" element={<PublicLayout />}>
          {/* El 'index' le dice a React Router que esta es la vista por defecto en la raíz "/" */}
          <Route index element={<Home />} />

          {/* 2. AGREGAMOS LA RUTA DEL CATÁLOGO */}
          <Route path="ofertas" element={<CatalogoOfertas />} />
          <Route path="oferta/:slug" element={<OfertaDetalle />} />
        </Route>

        {/* ==========================================
            ZONA PRIVADA (El futuro Dashboard Administrativo)
            ========================================== */}
        {/* <Route path="/admin" element={<PrivateLayout />}>
          <Route index element={<DashboardHome />} />
        </Route> 
        */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
