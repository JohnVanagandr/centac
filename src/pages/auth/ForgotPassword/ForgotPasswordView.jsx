import React from "react";
import { Link } from "react-router-dom";
import { useForgotPassword } from "./useForgotPassword";
import {InputField} from "@/components/ui/Form";
import { Button } from "@/components/ui/Navigation";

const ForgotPasswordView = () => {
  const {
    email,
    error,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleSubmit,
    handleRetry,
  } = useForgotPassword();

  // ==========================================
  // VISTA 2: Estado de Éxito (Correo Enviado)
  // ==========================================
  if (isSubmitted) {
    return (
      <div className="w-full text-center animate-in zoom-in-95 duration-500">
        <div className="w-24 h-24 bg-emerald-50 rounded-[2rem] flex items-center justify-center mx-auto mb-8 border border-emerald-100 shadow-lg shadow-emerald-500/10">
          <span className="material-symbols-rounded text-5xl text-emerald-500">
            mark_email_read
          </span>
        </div>
        <h2 className="font-display text-3xl font-black text-navy tracking-tight mb-4">
          ¡Revisa tu bandeja!
        </h2>
        <p className="font-body text-sm text-slate-500 font-medium leading-relaxed mb-8 px-4">
          Hemos enviado un enlace mágico de recuperación a <br />
          <span className="font-bold text-navy">{email}</span>
        </p>
        <div className="space-y-4">
          <button
            onClick={handleRetry}
            className="cursor-pointer font-display text-[10px] font-black uppercase tracking-[2px] text-brand hover:underline transition-all"
          >
            ¿No recibiste el correo? Intentar de nuevo
          </button>
          <div className="pt-4">
            <Link to="/auth/login" className="inline-block">
              <Button className="px-8 py-4 text-xs shadow-xl shadow-navy/20 cursor-pointer">
                Volver al Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // VISTA 1: Formulario de Solicitud
  // ==========================================
  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* 1. Cabecera */}
      <div className="text-left mb-8">
        <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 border border-slate-200">
          <span className="material-symbols-rounded text-slate-500 text-2xl">
            lock_reset
          </span>
        </div>
        <h2 className="font-display text-4xl font-black text-navy tracking-tight mb-2">
          Recuperar <span className="text-brand">Acceso</span>
        </h2>
        <p className="font-body text-sm text-slate-500 font-medium leading-relaxed">
          Ingresa el correo asociado a tu cuenta de staff. Te enviaremos las
          instrucciones para crear una nueva contraseña.
        </p>
      </div>

      {/* 2. Formulario */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Error General del Servidor (Si el correo no existe, etc) */}
        {error && !email && (
          <div className="bg-red-50 p-4 rounded-2xl border border-red-100 animate-shake flex items-start gap-3">
            <span className="material-symbols-rounded text-red-600 text-lg shrink-0">
              error
            </span>
            <span className="text-red-600 text-xs font-bold mt-0.5 leading-snug">
              {error}
            </span>
          </div>
        )}

        {/* 📧 Campo Correo con tu InputField */}
        <div className="relative group">
          <InputField
            label={
              <span className="font-display text-[10px] font-black uppercase tracking-[2px] text-slate-400">
                Correo Electrónico
              </span>
            }
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            error={email ? error : ""} // Mostramos error bajo el input si hay email escrito
            placeholder="usuario@sena.edu.co"
          />
        </div>

        {/* 🟠 Botón Submit usando tu Button */}
        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting || !email.trim()}
            className="w-full py-5 text-xs cursor-pointer disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-3">
                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                Enviando enlace...
              </span>
            ) : (
              "Enviar Instrucciones"
            )}
          </Button>
        </div>
      </form>

      {/* 3. Footer */}
      <div className="mt-8 text-center border-t border-slate-50 pt-6">
        <Link
          to="/auth/login"
          className="font-body text-sm text-slate-500 font-medium flex items-center justify-center gap-2 hover:text-navy transition-colors cursor-pointer"
        >
          <span className="material-symbols-rounded text-lg">arrow_back</span>
          Volver a Iniciar Sesión
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordView;
