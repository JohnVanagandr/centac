import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateLayout from "@/layouts/PrivateLayout";

import DashboardHome from "@/pages/private/DashboardHome";
import Solicitudes from "@/pages/private/Solicitudes";
import SolicitudDetalle from "@/pages/private/SolicitudDetalle";
import OfertasList from "@/pages/private/Ofertas/OfertasList";
import OfertaEditor from "@/pages/private/Ofertas/OfertaEditor";
import PqrPage from "@/pages/private/Pqr/PqrPage";
import ProfilePage from "@/pages/private/Profile/ProfilePage";

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateLayout />}>
        {/* El 'index' significa que cargará en la raíz de este sub-router (ej: /dashboard) */}
        <Route index element={<DashboardHome />} />
        <Route path="solicitudes" element={<Solicitudes />} />
        <Route path="solicitudes/:id" element={<SolicitudDetalle />} />
        <Route path="ofertas" element={<OfertasList />} />
        <Route path="ofertas/nueva" element={<OfertaEditor />} />
        <Route path="ofertas/editar/:id" element={<OfertaEditor />} />
        <Route path="pqr" element={<PqrPage />} />
        <Route path="perfil" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};