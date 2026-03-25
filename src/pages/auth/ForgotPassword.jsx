import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validación básica
    if (!email.trim()) {
      setError("Por favor, ingresa tu correo electrónico.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Ingresa un formato de correo válido.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulamos la petición al backend de Laravel
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Solicitud de recuperación enviada a:", email);
      setIsSubmitted(true); // Cambiamos el estado a "Enviado"
    } catch (err) {
      setError("Ocurrió un error. Inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // VISTA 2: Estado de Éxito (Correo Enviado)
  if (isSubmitted) {
    return (
      <div className="w-full text-center animate-in zoom-in-95 duration-500">
        <div className="w-24 h-24 bg-emerald-50 rounded-[2rem] flex items-center justify-center mx-auto mb-8 border border-emerald-100 shadow-lg shadow-emerald-500/10">
          <span className="material-symbols-rounded text-5xl text-emerald-500">
            mark_email_read
          </span>
        </div>
        <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-4">
          ¡Revisa tu bandeja!
        </h2>
        <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8 px-4">
          Hemos enviado un enlace mágico de recuperación a <br />
          <span className="font-bold text-slate-800">{email}</span>
        </p>
        <div className="space-y-4">
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-[10px] font-bold uppercase tracking-[2px] text-brand hover:underline"
          >
            ¿No recibiste el correo? Intentar de nuevo
          </button>
          <div className="pt-4">
            <Link
              to="/auth/login"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[3px] shadow-xl shadow-slate-900/20 hover:bg-brand hover:-translate-y-1 transition-all active:scale-95"
            >
              Volver al Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // VISTA 1: Formulario de Solicitud
  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-left mb-8">
        <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 border border-slate-200">
          <span className="material-symbols-rounded text-slate-500 text-2xl">
            lock_reset
          </span>
        </div>
        <h2 className="text-4xl font-black text-slate-800 tracking-tight mb-2">
          Recuperar <span className="text-brand">Acceso</span>
        </h2>
        <p className="text-sm text-slate-400 font-medium leading-relaxed">
          Ingresa el correo asociado a tu cuenta de staff. Te enviaremos las
          instrucciones para crear una nueva contraseña.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Campo Correo */}
        <div className="space-y-1.5">
          <div className="flex justify-between">
            <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1">
              Correo Electrónico
            </label>
            {error && (
              <span className="text-[9px] text-red-500 font-bold">{error}</span>
            )}
          </div>
          <div className="relative group">
            <span className="material-symbols-rounded absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-brand transition-colors">
              mail
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError(""); // Limpiamos error al escribir
              }}
              placeholder="tu@correo.com"
              className={`w-full pl-12 pr-4 py-4 bg-slate-50 border rounded-2xl outline-none transition-all text-sm
                ${error ? "border-red-300 focus:bg-red-50" : "border-slate-100 focus:bg-white focus:border-brand/30 focus:ring-4 focus:ring-brand/5"}`}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !email.trim()}
          className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[3px] shadow-xl shadow-slate-900/20 hover:bg-brand hover:-translate-y-1 active:scale-95 transition-all mt-4 disabled:opacity-40 disabled:pointer-events-none disabled:shadow-none flex items-center justify-center gap-3"
        >
          {isSubmitting ? "Enviando enlace..." : "Enviar Instrucciones"}
        </button>
      </form>

      <div className="mt-8 text-center border-t border-slate-50 pt-6">
        <Link
          to="/auth/login"
          className="text-sm text-slate-400 font-medium flex items-center justify-center gap-2 hover:text-slate-700 transition-colors"
        >
          <span className="material-symbols-rounded text-lg">arrow_back</span>
          Volver a Iniciar Sesión
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
