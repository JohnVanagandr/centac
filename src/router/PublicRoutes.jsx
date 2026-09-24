import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  Home,
  Nosotros,
  CatalogoOfertas,
  OfertaDetalle,
  Atencion,
  Pqr,
  Contacto,
  AvisoLegalPage,
  PoliticaPrivacidadPage,
  Biblioteca
} from "@/pages/public";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="nosotros" element={<Nosotros />} />
      <Route path="ofertas" element={<CatalogoOfertas />} />
      <Route path="oferta/:slug" element={<OfertaDetalle />} />
      <Route path="servicios/atencion" element={<Atencion />} />
      <Route path="servicios/pqr" element={<Pqr />} />
      <Route path="servicios/biblioteca" element={<Biblioteca />} />
      <Route path="contacto" element={<Contacto />} />
      <Route path="aviso-legal" element={< AvisoLegalPage />} />
      <Route path="politica-privacidad" element={< PoliticaPrivacidadPage />} />
    </Routes>
  );
};