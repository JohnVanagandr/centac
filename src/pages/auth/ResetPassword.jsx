import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  // Obtenemos el token de la URL (si configuraste la ruta como reset-password/:token)
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const isFormValid = password.length >= 6 && password === confirmPassword;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Aquí enviarías el "token" y la "password" a tu API de Laravel
      console.log("Restableciendo clave con token:", token);
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSuccess(true);

      // Opcional: Redirigir automáticamente después de 3 segundos
      // setTimeout(() => navigate("/auth/login"), 3000);
    } catch (err) {
      setError("El enlace ha expirado o es inválido. Solicita uno nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // VISTA 2: Éxito
  if (isSuccess) {
    return (
      <div className="w-full text-center animate-in zoom-in-95 duration-500">
        <div className="w-24 h-24 bg-emerald-50 rounded-[2rem] flex items-center justify-center mx-auto mb-8 border border-emerald-100 shadow-lg shadow-emerald-500/10">
          <span className="material-symbols-rounded text-5xl text-emerald-500">
            check_circle
          </span>
        </div>
        <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-4">
          ¡Clave Actualizada!
        </h2>
        <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8 px-4">
          Tu nueva contraseña ha sido guardada de forma segura. Ya puedes
          acceder al panel de gestión.
        </p>
        <Link
          to="/auth/login"
          className="inline-flex items-center justify-center w-full bg-slate-900 text-white px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-[3px] shadow-xl shadow-slate-900/20 hover:bg-brand hover:-translate-y-1 transition-all active:scale-95"
        >
          Iniciar Sesión Ahora
        </Link>
      </div>
    );
  }

  // VISTA 1: Formulario de Nueva Clave
  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-left mb-8">
        <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 border border-slate-200">
          <span className="material-symbols-rounded text-slate-500 text-2xl">
            password
          </span>
        </div>
        <h2 className="text-4xl font-black text-slate-800 tracking-tight mb-2">
          Nueva <span className="text-brand">Clave</span>
        </h2>
        <p className="text-sm text-slate-400 font-medium leading-relaxed">
          Crea una contraseña segura para tu cuenta. Asegúrate de no compartirla
          con nadie.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Error de validación o del servidor */}
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-[11px] font-bold border border-red-100 flex items-center gap-3">
            <span className="material-symbols-rounded text-lg">warning</span>
            {error}
          </div>
        )}

        {/* Nueva Contraseña */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1">
            Nueva Contraseña
          </label>
          <div className="relative group">
            <span className="material-symbols-rounded absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-brand transition-colors">
              key
            </span>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError("");
              }}
              placeholder="Mínimo 6 caracteres"
              className={`w-full pl-12 pr-12 py-4 bg-slate-50 border rounded-2xl outline-none transition-all text-sm
                ${error && password.length < 6 ? "border-red-300 focus:bg-red-50" : "border-slate-100 focus:bg-white focus:border-brand/30 focus:ring-4 focus:ring-brand/5"}`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500 transition-colors"
            >
              <span className="material-symbols-rounded text-xl">
                {showPassword ? "visibility_off" : "visibility"}
              </span>
            </button>
          </div>
        </div>

        {/* Confirmar Contraseña */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1">
            Confirmar Contraseña
          </label>
          <div className="relative group">
            <span className="material-symbols-rounded absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-brand transition-colors">
              lock_check
            </span>
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (error) setError("");
              }}
              placeholder="Repite la nueva contraseña"
              className={`w-full pl-12 pr-4 py-4 bg-slate-50 border rounded-2xl outline-none transition-all text-sm
                ${error || (confirmPassword && password !== confirmPassword) ? "border-red-300 bg-red-50/50" : "border-slate-100 focus:bg-white focus:border-brand/30 focus:ring-4 focus:ring-brand/5"}`}
            />
          </div>
          {confirmPassword && password !== confirmPassword && (
            <p className="text-[10px] text-red-500 font-bold ml-1 mt-1">
              Las contraseñas no coinciden
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !isFormValid}
          className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[3px] shadow-xl shadow-slate-900/20 hover:bg-brand hover:-translate-y-1 active:scale-95 transition-all mt-6 disabled:opacity-40 disabled:pointer-events-none disabled:shadow-none flex items-center justify-center gap-3"
        >
          {isSubmitting ? "Actualizando..." : "Guardar Contraseña"}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
