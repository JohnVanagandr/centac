import React from "react";
import { Navigate } from "react-router-dom";
import { useOferta } from "../hooks/useOferta";
import OfertaDetalleView from "./OfertaDetalleView";

const OfertaDetalleContenedor = () => {
  const { programa, isValid, slug } = useOferta();

  // Lógica de control de flujo
  if (!isValid) {
    return <Navigate to="/ofertas" replace />;
  }

  return <OfertaDetalleView data={programa} />;
};

export default OfertaDetalleContenedor;