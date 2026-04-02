import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  Home,
  Estrategia,
  CatalogoOfertas,
  OfertaDetalle,
  Historia,
  Tramites,
  Pqr,
  Faq,
  Contacto,
} from "@/pages/public";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="nosotros/estrategia" element={<Estrategia />} />
      <Route path="nosotros/historia" element={<Historia />} />
      <Route path="servicios/tramites" element={<Tramites />} />
      <Route path="ofertas" element={<CatalogoOfertas />} />
      <Route path="oferta/:slug" element={<OfertaDetalle />} />
      <Route path="servicios/pqr" element={<Pqr />} />
      <Route path="servicios/faq" element={<Faq />} />
      <Route path="contacto" element={<Contacto />} />
    </Routes>
  );
};