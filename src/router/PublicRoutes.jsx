import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  Home,
  Nosotros,
  CatalogoOfertas,
  OfertaDetalle,
  Atencion,
  Pqr,
  Faq,
  Contacto,
} from "@/pages/public";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="nosotros" element={<Nosotros />} />
      <Route path="servicios/atencion" element={<Atencion />} />
      <Route path="ofertas" element={<CatalogoOfertas />} />
      <Route path="oferta/:slug" element={<OfertaDetalle />} />
      <Route path="servicios/pqr" element={<Pqr />} />
      <Route path="servicios/faq" element={<Faq />} />
      <Route path="contacto" element={<Contacto />} />
    </Routes>
  );
};