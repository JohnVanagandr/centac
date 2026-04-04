import React from "react";
import { Link } from "react-router-dom";
import { useRegister } from "./useRegister";
import {InputField} from "@/components/ui/Form";
import { Button } from "@/components/ui/Navigation";

const RegisterView = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    submitAction,
    serverError,
    isFormValid,
    showPassword,
    setShowPassword,
  } = useRegister();

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* 1. Cabecera */}
      <div className="text-left mb-8">
        <h2 className="font-display text-4xl font-black text-navy tracking-tight mb-2">
          Únete al <span className="text-brand">Equipo</span>
        </h2>
        <p className="font-body text-sm text-slate-500 font-medium leading-relaxed">
          Crea tu perfil. Tu cuenta será activada por un administrador tras
          validar tus datos.
        </p>
      </div>

      {/* 2. Formulario */}
      <form onSubmit={handleSubmit(submitAction)} className="space-y-4">
        {/* Error del Servidor */}
        {serverError && (
          <div className="bg-red-50 p-4 rounded-2xl border border-red-100 animate-shake flex items-start gap-3">
            <span className="material-symbols-rounded text-red-600 text-lg shrink-0">
              warning
            </span>
            <span className="text-red-600 text-[11px] font-bold mt-0.5 leading-snug">
              {serverError}
            </span>
          </div>
        )}

        {/* 👤 Campo Nombre */}
        <InputField
          label={
            <span className="font-display text-[10px] font-black uppercase tracking-[2px] text-slate-400">
              Nombre Completo
            </span>
          }
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="Ej: Juan Pérez"
        />

        {/* 📧 Campo Correo (Ahora ocupa el 100% del ancho) */}
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
        <div className="relative group pt-1">
          <InputField
            label={
              <span className="font-display text-[10px] font-black uppercase tracking-[2px] text-slate-400">
                Contraseña
              </span>
            }
            name="password"
            type={showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange}
            error={errors.password}
            placeholder="Mínimo 6 caracteres"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="cursor-pointer absolute right-4 top-[40px] text-slate-300 hover:text-primary transition-colors duration-300"
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
            value={values.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            placeholder="Repite tu contraseña"
          />
        </div>

        {/* 🟠 Botón Submit */}
        <div className="pt-4">
          <Button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="w-full py-5 text-xs cursor-pointer disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-3">
                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                Procesando...
              </span>
            ) : (
              "Solicitar Acceso"
            )}
          </Button>
        </div>
      </form>

      {/* 3. Footer */}
      <div className="mt-8 text-center border-t border-slate-50 pt-6">
        <p className="font-body text-sm text-slate-500 font-medium">
          ¿Ya tienes tu cuenta activada?{" "}
          <Link
            to="/auth/login"
            className="cursor-pointer text-primary font-bold hover:underline transition-colors"
          >
            Inicia Sesión
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterView;
