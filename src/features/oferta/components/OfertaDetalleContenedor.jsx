import React from "react";
import { Navigate } from "react-router-dom";
import { useOfertas } from "../hooks/useOfertas";
import OfertaDetalleView from "./OfertaDetalleView";

const OfertaDetalleContenedor = () => {
  const { programa, isValid, slug } = useOfertas();

  // Lógica de control de flujo
  if (!isValid) {
    return <Navigate to="/ofertas" replace />;
  }

  return <OfertaDetalleView data={programa} />;
};

export default OfertaDetalleContenedor;