import React from "react";
import { Link } from "react-router-dom";
import { useResetPassword } from "./useResetPassword";
import {InputField} from "@/components/ui/Form";
import { Button } from "@/components/ui/Navigation";

const ResetPasswordView = () => {
  const {
    password,
    confirmPassword,
    showPassword,
    setShowPassword,
    error,
    isSubmitting,
    isSuccess,
    isFormValid,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleSubmit,
  } = useResetPassword();

  // ==========================================
  // VISTA 2: Estado de Éxito (Contraseña Actualizada)
  // ==========================================
  if (isSuccess) {
    return (
      <div className="w-full text-center animate-in zoom-in-95 duration-500">
        <div className="w-24 h-24 bg-emerald-50 rounded-[2rem] flex items-center justify-center mx-auto mb-8 border border-emerald-100 shadow-lg shadow-emerald-500/10">
          <span className="material-symbols-rounded text-5xl text-emerald-500">
            check_circle
          </span>
        </div>
        <h2 className="font-display text-3xl font-black text-navy tracking-tight mb-4">
          ¡Clave Actualizada!
        </h2>
        <p className="font-body text-sm text-slate-500 font-medium leading-relaxed mb-8 px-4">
          Tu nueva contraseña ha sido guardada de forma segura. Ya puedes
          acceder al panel de gestión.
        </p>
        <Link to="/auth/login" className="inline-block w-full">
          <Button className="w-full py-5 text-xs shadow-xl shadow-navy/20 cursor-pointer">
            Iniciar Sesión Ahora
          </Button>
        </Link>
      </div>
    );
  }

  // ==========================================
  // VISTA 1: Formulario de Nueva Clave
  // ==========================================
  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* 1. Cabecera */}
      <div className="text-left mb-8">
        <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 border border-slate-200">
          <span className="material-symbols-rounded text-slate-500 text-2xl">
            password
          </span>
        </div>
        <h2 className="font-display text-4xl font-black text-navy tracking-tight mb-2">
          Nueva <span className="text-brand">Clave</span>
        </h2>
        <p className="font-body text-sm text-slate-500 font-medium leading-relaxed">
          Crea una contraseña segura para tu cuenta. Asegúrate de no compartirla
          con nadie.
        </p>
      </div>

      {/* 2. Formulario */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* 🚨 Mensaje de error general (Token inválido, expirado, etc.) */}
        {error && (
          <div className="bg-red-50 p-4 rounded-2xl border border-red-100 animate-shake flex items-start gap-3">
            <span className="material-symbols-rounded text-red-600 text-lg shrink-0">
              warning
            </span>
            <span className="text-red-600 text-[11px] font-bold mt-0.5 leading-snug">
              {error}
            </span>
          </div>
        )}

        {/* 🔒 Nueva Contraseña */}
        <div className="relative group">
          <InputField
            label={
              <span className="font-display text-[10px] font-black uppercase tracking-[2px] text-slate-400">
                Nueva Contraseña
              </span>
            }
            name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            error={error && password.length < 6 ? "Mínimo 6 caracteres" : ""}
            placeholder="Mínimo 6 caracteres"
          />
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

        {/* 🔒 Confirmar Contraseña */}
        <div className="relative group">
          <InputField
            label={
              <span className="font-display text-[10px] font-black uppercase tracking-[2px] text-slate-400">
                Confirmar Contraseña
              </span>
            }
            name="confirmPassword"
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            error={
              confirmPassword && password !== confirmPassword
                ? "Las contraseñas no coinciden"
                : ""
            }
            placeholder="Repite la nueva contraseña"
          />
        </div>

        {/* 🟠 Botón Submit */}
        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting || !isFormValid}
            className="w-full py-5 text-xs cursor-pointer disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-3">
                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                Actualizando...
              </span>
            ) : (
              "Guardar Contraseña"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordView;
