import React from "react";
import { Link } from "react-router-dom";
import { useLogin } from "./useLogin";
import { Button } from "../../../components/ui/Navigation"; // Ajusta tus rutas
import {InputField} from "@/components/ui/Form";

const LoginView = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    submitAction,
    serverError,
    showPassword,
    setShowPassword,
    // Variables clave para el reenvío de correo
    unverifiedEmail,
    handleResendVerification,
    resendStatus,
  } = useLogin();

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 w-full">
      {/* 1. Cabecera del Formulario */}
      <div className="text-left mb-10">
        <div className="w-12 h-12 bg-brand rounded-2xl flex items-center justify-center text-white font-display font-black text-2xl mb-6 shadow-lg shadow-brand/20">
          C
        </div>
        <h2 className="font-display text-3xl font-black text-navy tracking-tight mb-2">
          ¡Bienvenido de nuevo!
        </h2>
        <p className="font-body text-sm text-slate-500 font-medium leading-relaxed">
          Ingresa tus credenciales para acceder al panel de gestión CENTAC.
        </p>
      </div>

      {/* 2. Formulario */}
      <form onSubmit={handleSubmit(submitAction)} className="space-y-5">
        {/* 🚨 ZONA DE ERROR Y RECUPERACIÓN (Solo se muestra si hay error) */}
        {serverError && (
          <div className="bg-red-50 p-4 rounded-2xl border border-red-100 animate-shake flex flex-col gap-3">
            {/* Mensaje de error principal */}
            <div className="flex items-start gap-3 text-red-600 text-xs font-bold">
              <span className="material-symbols-rounded text-lg shrink-0">
                error
              </span>
              <span className="mt-0.5 leading-snug">{serverError}</span>
            </div>

            {/* 🎯 BOTÓN DE REENVÍO (Solo se muestra si capturamos un correo no verificado) */}
            {unverifiedEmail && (
              <div className="ml-8 border-t border-red-100/50 pt-2">
                {!resendStatus.success ? (
                  <button
                    type="button"
                    onClick={handleResendVerification}
                    disabled={resendStatus.loading}
                    // 🖱️ CURSORES APLICADOS AQUÍ
                    className="cursor-pointer disabled:cursor-not-allowed font-display text-[11px] font-black uppercase tracking-wider text-brand hover:text-brand/80 transition-colors disabled:opacity-50 flex items-center gap-1"
                  >
                    {resendStatus.loading ? (
                      <>
                        <div className="w-3 h-3 border-2 border-brand/20 border-t-brand rounded-full animate-spin"></div>
                        Enviando...
                      </>
                    ) : (
                      "Reenviar correo de verificación →"
                    )}
                  </button>
                ) : (
                  // Mensaje de éxito al reenviar
                  <span className="font-body text-xs font-bold text-green-600 flex items-center gap-1">
                    <span className="material-symbols-rounded text-sm">
                      check_circle
                    </span>
                    ¡Enlace enviado a tu bandeja!
                  </span>
                )}

                {/* Mensaje de error si falla el reenvío */}
                {resendStatus.error && (
                  <p className="text-[10px] text-red-500 font-bold mt-1">
                    {resendStatus.error}
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        {/* 📧 Campo Correo */}
        <InputField
          label={
            <span className="font-display text-[10px] font-black uppercase tracking-[2px] text-slate-400">
              Correo Institucional
            </span>
          }
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="usuario@sena.edu.co"
        />

        {/* 🔒 Campo Contraseña */}
        <div className="relative group">
          <InputField
            label={
              <div className="flex justify-between items-center w-full">
                <span className="font-display text-[10px] font-black uppercase tracking-[2px] text-slate-400">
                  Contraseña
                </span>
                <Link
                  to="/auth/forgot-password"
                  className="cursor-pointer font-display text-[10px] font-black text-primary hover:underline uppercase tracking-wider transition-colors"
                >
                  ¿Olvidaste tu clave?
                </Link>
              </div>
            }
            name="password"
            type={showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange}
            error={errors.password}
            placeholder="••••••••"
          />
          {/* 🖱️ Ojito de la contraseña con cursor pointer */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="cursor-pointer absolute right-4 top-[36px] text-slate-300 hover:text-primary transition-colors duration-300"
          >
            <span className="material-symbols-rounded text-xl">
              {showPassword ? "visibility_off" : "visibility"}
            </span>
          </button>
        </div>

        {/* 🟠 Botón Submit */}
        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="cursor-pointer disabled:cursor-not-allowed w-full py-4 text-sm"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-3">
                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                Verificando...
              </span>
            ) : (
              "Iniciar Sesión"
            )}
          </Button>
        </div>
      </form>

      {/* 3. Footer del Login */}
      <div className="mt-10 text-center border-t border-slate-100 pt-8">
        <p className="font-body text-sm text-slate-500 font-medium">
          ¿No tienes acceso?{" "}
          <Link
            to="/auth/register"
            className="cursor-pointer text-primary font-bold hover:underline transition-colors"
          >
            Crea tu cuenta
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginView;
