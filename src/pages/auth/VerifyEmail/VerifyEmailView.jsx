import React from "react";
import { Link } from "react-router-dom";
import { useVerifyEmail } from "./useVerifyEmail";
import { Button } from "@/components/ui/Navigation";

const VerifyEmailView = () => {
  const { status, errorMessage } = useVerifyEmail();

  return (
    <div className="w-full text-center animate-in zoom-in-95 duration-700">
      {/* ⏳ ESTADO 1: Cargando (Verificando URL) */}
      {status === "loading" && (
        <div className="flex flex-col items-center justify-center py-10">
          <div className="w-16 h-16 border-4 border-slate-100 border-t-brand rounded-full animate-spin mb-6"></div>
          <h2 className="font-display text-2xl font-black text-navy tracking-tight mb-2">
            Verificando tu cuenta...
          </h2>
          <p className="font-body text-sm text-slate-500 font-medium">
            Por favor espera, estamos validando tus credenciales.
          </p>
        </div>
      )}

      {/* ✅ ESTADO 2: Éxito (Cuenta Verificada) */}
      {status === "success" && (
        <div>
          <div className="w-24 h-24 bg-emerald-50 rounded-[2rem] flex items-center justify-center mx-auto mb-8 border border-emerald-100 shadow-lg shadow-emerald-500/10">
            <span className="material-symbols-rounded text-5xl text-emerald-500">
              verified
            </span>
          </div>
          <h2 className="font-display text-3xl font-black text-navy tracking-tight mb-4">
            ¡Cuenta Verificada!
          </h2>
          <p className="font-body text-sm text-slate-500 font-medium leading-relaxed mb-8 px-4">
            Tu correo institucional ha sido validado correctamente. Ya tienes
            acceso completo al sistema CENTAC.
          </p>
          <Link to="/auth/login" className="inline-block w-full">
            <Button className="w-full py-5 text-xs shadow-xl shadow-navy/20 cursor-pointer">
              Ir al Panel de Acceso
            </Button>
          </Link>
        </div>
      )}

      {/* 🚨 ESTADO 3: Error (Enlace expirado o inválido) */}
      {status === "error" && (
        <div>
          <div className="w-24 h-24 bg-red-50 rounded-[2rem] flex items-center justify-center mx-auto mb-8 border border-red-100 shadow-lg shadow-red-500/10">
            <span className="material-symbols-rounded text-5xl text-red-500">
              gpp_bad
            </span>
          </div>
          <h2 className="font-display text-3xl font-black text-navy tracking-tight mb-4">
            Verificación Fallida
          </h2>
          <p className="font-body text-sm text-red-600 font-bold leading-relaxed mb-2 px-4">
            {errorMessage}
          </p>
          <p className="font-body text-sm text-slate-500 font-medium leading-relaxed mb-8 px-4">
            Vuelve a la pantalla de inicio de sesión para solicitar un nuevo
            enlace de verificación.
          </p>
          <Link to="/auth/login" className="inline-block w-full">
            <Button className="w-full py-5 text-xs shadow-xl shadow-navy/20 cursor-pointer">
              Volver al Login
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default VerifyEmailView;
