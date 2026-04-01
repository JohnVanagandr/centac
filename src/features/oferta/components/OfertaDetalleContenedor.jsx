import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useOferta } from "../hooks/useOferta";
import OfertaDetalleView from "./OfertaDetalleView";

const OfertaDetalleContenedor = () => {
  const { programa, isValid, slug } = useOferta();

  // Gestión del scroll (Efecto colateral de la navegación)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Lógica de control de flujo
  if (!isValid) {
    return <Navigate to="/ofertas" replace />;
  }

  return <OfertaDetalleView data={programa} />;
};

export default OfertaDetalleContenedor;