// src/pages/public/Register.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

const Register = () => {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");

  const initialState = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  // Validaciones más estrictas
  const validateRegister = (values) => {
    let errs = {};
    if (!values.name.trim()) errs.name = "Obligatorio";

    // Validación básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email.trim()) errs.email = "Obligatorio";
    else if (!emailRegex.test(values.email)) errs.email = "Correo inválido";

    // Validación de teléfono (solo números, min 7)
    if (!values.phone.trim()) errs.phone = "Obligatorio";
    else if (values.phone.length < 7) errs.phone = "Mínimo 7 dígitos";

    if (!values.password) errs.password = "Obligatorio";
    else if (values.password.length < 6) errs.password = "Mínimo 6 caracteres";

    if (values.password !== values.confirmPassword) {
      errs.confirmPassword = "No coinciden";
    }
    return errs;
  };

  const { values, errors, handleChange, handleSubmit, isSubmitting } = useForm(
    initialState,
    validateRegister,
  );

  // NUEVA LÓGICA DE BLOQUEO: Solo es válido si no hay errores y todos los campos tienen valor
  const isFormValid =
    values.name.trim() !== "" &&
    values.email.trim() !== "" &&
    values.phone.trim() !== "" &&
    values.password.trim() !== "" &&
    values.password === values.confirmPassword &&
    Object.keys(errors).length === 0;

  const submitAction = async (formValues) => {
    // Doble check de seguridad por si vulneran el HTML
    if (!isFormValid) return;

    setServerError("");
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Prospecto registrado:", formValues);
      alert(
        "Solicitud enviada correctamente. Espera la aprobación del administrador.",
      );
      navigate("/auth/login");
    } catch (err) {
      setServerError("Hubo un problema al procesar tu solicitud.");
    }
  };

  return (
    <div className="w-full">
      <div className="text-left mb-8">
        <h2 className="text-4xl font-black text-slate-800 tracking-tight mb-2">
          Unete al <span className="text-brand">Equipo</span>
        </h2>
        <p className="text-sm text-slate-400 font-medium leading-relaxed">
          Crea tu perfil. Tu cuenta será activada por un administrador tras
          validar tus datos.
        </p>
      </div>

      <form onSubmit={handleSubmit(submitAction)} className="space-y-4">
        {serverError && (
          <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-[11px] font-bold border border-red-100 flex items-center gap-3">
            <span className="material-symbols-rounded text-lg">warning</span>
            {serverError}
          </div>
        )}

        {/* Nombre Completo */}
        <div className="space-y-1.5">
          <div className="flex justify-between">
            <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1">
              Nombre Completo
            </label>
            {errors.name && (
              <span className="text-[9px] text-red-500 font-bold">
                {errors.name}
              </span>
            )}
          </div>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Ej: Juan Pérez"
            className={`w-full px-5 py-4 bg-slate-50 border rounded-2xl outline-none transition-all text-sm
              ${errors.name ? "border-red-300 focus:bg-red-50" : "border-slate-100 focus:bg-white focus:border-brand/30"}`}
          />
        </div>

        {/* Email y Teléfono */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <div className="flex justify-between">
              <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1">
                Correo
              </label>
              {errors.email && (
                <span className="text-[9px] text-red-500 font-bold">
                  {errors.email}
                </span>
              )}
            </div>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="tu@correo.com"
              className={`w-full px-5 py-4 bg-slate-50 border rounded-2xl outline-none text-sm transition-all
                        ${errors.email ? "border-red-300" : "border-slate-100 focus:border-brand/30"}`}
            />
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between">
              <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1">
                Teléfono
              </label>
              {errors.phone && (
                <span className="text-[9px] text-red-500 font-bold">
                  {errors.phone}
                </span>
              )}
            </div>
            <input
              type="tel"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder="300..."
              className={`w-full px-5 py-4 bg-slate-50 border rounded-2xl outline-none text-sm transition-all
                        ${errors.phone ? "border-red-300" : "border-slate-100 focus:border-brand/30"}`}
            />
          </div>
        </div>

        {/* Contraseñas */}
        <div className="space-y-1.5 pt-2">
          <div className="flex justify-between">
            <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1">
              Contraseña
            </label>
            {errors.password && (
              <span className="text-[9px] text-red-500 font-bold">
                {errors.password}
              </span>
            )}
          </div>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Mínimo 6 caracteres"
            className={`w-full px-5 py-4 bg-slate-50 border rounded-2xl outline-none text-sm transition-all
                ${errors.password ? "border-red-300" : "border-slate-100 focus:border-brand/30"}`}
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between">
            <label className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 ml-1">
              Confirmar Contraseña
            </label>
            {errors.confirmPassword && (
              <span className="text-[9px] text-red-500 font-bold">
                {errors.confirmPassword}
              </span>
            )}
          </div>
          <input
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            placeholder="Repite tu contraseña"
            className={`w-full px-5 py-4 bg-slate-50 border rounded-2xl outline-none text-sm transition-all
                ${errors.confirmPassword ? "border-red-300 bg-red-50/50" : "border-slate-100 focus:border-brand/30"}`}
          />
        </div>

        <button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[3px] shadow-xl shadow-slate-900/20 hover:bg-brand hover:-translate-y-1 active:scale-95 transition-all mt-6 disabled:opacity-40 disabled:pointer-events-none disabled:shadow-none flex items-center justify-center gap-3"
        >
          {isSubmitting ? "Procesando..." : "Solicitar Acceso"}
        </button>
      </form>

      <div className="mt-8 text-center border-t border-slate-50 pt-6">
        <p className="text-sm text-slate-400 font-medium">
          ¿Ya tienes tu cuenta activada?{" "}
          <Link
            to="/auth/login"
            className="text-brand font-bold hover:underline"
          >
            Inicia Sesión
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
