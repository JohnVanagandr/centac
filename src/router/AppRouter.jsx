import React from "react";
import { Routes, Route } from "react-router-dom";

// 1. Guardián de Seguridad
import RequireAuth from "./RequireAuth";

// 2. Sub-Ruteadores
import { AuthRoutes } from "./AuthRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      {/* 🔓 RUTAS DE AUTENTICACIÓN */}
      <Route path="/auth/*" element={<AuthRoutes />} />

      {/* 🛡️ RUTAS PRIVADAS (Protegidas por el Guardián) */}
      <Route element={<RequireAuth />}>
        <Route path="/dashboard/*" element={<PrivateRoutes />} />
      </Route>

      {/* 🌍 RUTAS PÚBLICAS (El comodín '/*' atrapa todo lo demás) */}
      <Route path="/*" element={<PublicRoutes />} />
    </Routes>
  );
};