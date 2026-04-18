import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRegister } from "./useRegister";
import { InputField } from "@/components/ui/Form";
import { Button } from "@/components/ui/Navigation";

export const RegisterView = () => {
  // 1. Extraemos el motor del Hook refactorizado
  const {
    register,
    errors,
    onSubmitForm,
    isSubmitting,
    isSuccess
  } = useRegister();

  // 2. Estado puramente visual (Separación de responsabilidades)
  const [showPassword, setShowPassword] = useState(false);

  // 3. ESTADO DE ÉXITO: El flujo "Double Opt-in"
  if (isSuccess) {
    return (
      <div className="w-full animate-in fade-in zoom-in-95 duration-700 text-center py-8">
        <span className="material-symbols-rounded text-7xl text-brand mb-4">mark_email_unread</span>
        <h2 className="font-display text-3xl font-black text-navy tracking-tight mb-4">
          ¡Revisa tu <span className="text-brand">Correo</span>!
        </h2>
        <p className="font-body text-sm text-slate-500 font-medium leading-relaxed mb-8">
          Hemos creado tu perfil base. Para asignarte el rol de <strong>Aspirante</strong> y finalizar el registro, haz clic en el enlace que enviamos a tu correo institucional.
        </p>
        <Link
          to="/auth/login"
          className="bg-slate-100 text-navy px-6 py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors"
        >
          Volver al Inicio de Sesión
        </Link>
      </div>
    );
  }

  // 🌟 4. ESTADO INICIAL: Formulario
  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-left mb-8">
        <h2 className="font-display text-4xl font-black text-navy tracking-tight mb-2">
          Únete al <span className="text-brand">Equipo</span>
        </h2>
        <p className="font-body text-sm text-slate-500 font-medium leading-relaxed">
          Crea tu perfil. Recuerda usar tu correo institucional para recibir el enlace de activación.
        </p>
      </div>

      <form onSubmit={onSubmitForm} className="space-y-4">
        
        {/* 👤 Campo Nombre */}
        <InputField
          label={<span className="font-display text-[10px] font-black uppercase tracking-[2px] text-slate-400">Nombre Completo</span>}
          type="text"
          placeholder="Ej: Juan Pérez"
          {...register("name")} // 🌟 Conexión a RHF
          error={errors.name?.message}
        />

        {/* 📧 Campo Correo */}
        <InputField
          label={<span className="font-display text-[10px] font-black uppercase tracking-[2px] text-slate-400">Correo Institucional</span>}
          type="email"
          placeholder="usuario@sena.edu.co"
          {...register("email")}
          error={errors.email?.message}
        />

        {/* 🔒 Campo Contraseña */}
        <div className="relative group pt-1">
          <InputField
            label={<span className="font-display text-[10px] font-black uppercase tracking-[2px] text-slate-400">Contraseña</span>}
            type={showPassword ? "text" : "password"}
            placeholder="Mínimo 8 caracteres"
            {...register("password")}
            error={errors.password?.message}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="cursor-pointer absolute right-4 top-[40px] text-slate-300 hover:text-brand transition-colors duration-300"
          >
            <span className="material-symbols-rounded text-xl">
              {showPassword ? "visibility_off" : "visibility"}
            </span>
          </button>
        </div>

        {/* Confirmar Contraseña */}
        <div className="relative group">
          <InputField
            label={<span className="font-display text-[10px] font-black uppercase tracking-[2px] text-slate-400">Confirmar Contraseña</span>}
            type={showPassword ? "text" : "password"}
            placeholder="Repite tu contraseña"
            {...register("password_confirmation")}
            error={errors.password_confirmation?.message}
          />
        </div>

        {/* 🟠 Botón Submit */}
        <div className="pt-4">
          <Button
            type="submit"
            disabled={isSubmitting} // 🌟 Deshabilitado automáticamente por TanStack Query
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

      {/* Footer */}
      <div className="mt-8 text-center border-t border-slate-50 pt-6">
        <p className="font-body text-sm text-slate-500 font-medium">
          ¿Ya tienes tu cuenta activada?{" "}
          <Link
            to="/auth/login"
            className="cursor-pointer text-brand font-bold hover:underline transition-colors"
          >
            Inicia Sesión
          </Link>
        </p>
      </div>
    </div>
  );
};