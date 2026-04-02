import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "@/layouts/AuthLayout";

import {
  Login,
  Register,
  ForgotPassword,
  ResetPassword,
  VerifyEmail,
} from "@/pages/auth";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        {/* Nota: Aquí ya no ponemos "/auth/login", solo "login" */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="verify-email" element={<VerifyEmail />} />
      </Route>
    </Routes>
  );
};