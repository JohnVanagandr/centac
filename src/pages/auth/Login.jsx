import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { usersData } from "../../data/usersData";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");
  const { login } = useContext(AuthContext);

  const initialState = { email: "", password: "" };

  const validateLogin = (values) => {
    let errs = {};
    if (!values.email) errs.email = "El correo es requerido";
    if (!values.password) errs.password = "La contraseña es requerida";
    return errs;
  };

  const { values, errors, handleChange, handleSubmit, isSubmitting } = useForm(
    initialState,
    validateLogin,
  );

  const submitAction = async (formValues) => {
    setServerError("");
    try {
      // Simulamos latencia de red
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const foundUser = usersData.find(
        (user) =>
          user.email === formValues.email &&
          user.password === formValues.password,
      );

      if (foundUser) {
        const sessionData = {
          id: foundUser.id,
          name: foundUser.name,
          email: foundUser.email,
          role: foundUser.role,
          avatar: foundUser.avatar,
        };
        login(sessionData);
        navigate("/dashboard");
      } else {
        setServerError(
          "Credenciales incorrectas. Verifica tu correo y contraseña.",
        );
      }
    } catch (err) {
      setServerError("Error de conexión. Inténtalo más tarde.");
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 w-full">
      {/* 1. Cabecera del Formulario */}
      <div className="text-left mb-10">
        <div className="w-12 h-12 bg-brand rounded-2xl flex items-center justify-center text-white font-black text-2xl mb-6 shadow-lg shadow-brand/20">
          C
        </div>
        <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-2">
          ¡Bienvenido de nuevo!
        </h2>
        <p className="text-sm text-slate-400 font-medium leading-relaxed">
          Ingresa tus credenciales para acceder al panel de gestión CENTAC.
        </p>
      </div>

      {/* 2. Formulario */}
      <form onSubmit={handleSubmit(submitAction)} className="space-y-5">
        {/* Error General */}
        {serverError && (
          <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-xs font-bold border border-red-100 flex items-center gap-3 animate-shake">
            <span className="material-symbols-rounded text-lg">error</span>
            {serverError}
          </div>
        )}

        {/* Campo Correo */}
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-[2px] text-slate-400 ml-1">
            Correo Institucional
          </label>
          <div className="relative group">
            <span className="material-symbols-rounded absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-brand transition-colors">
              mail
            </span>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="usuario@sena.edu.co"
              className={`w-full pl-12 pr-4 py-4 bg-slate-50 border rounded-2xl outline-none transition-all text-sm
                ${errors.email ? "border-red-200 focus:border-red-400 focus:ring-4 focus:ring-red-50" : "border-slate-100 focus:bg-white focus:border-brand/30 focus:ring-4 focus:ring-brand/5"}`}
            />
          </div>
          {errors.email && (
            <p className="text-[10px] text-red-500 font-bold ml-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Campo Contraseña */}
        <div className="space-y-2">
          <div className="flex justify-between items-center ml-1">
            <label className="text-[10px] font-bold uppercase tracking-[2px] text-slate-400">
              Contraseña
            </label>
            <Link
              to="/auth/forgot-password"
              size="sm"
              className="text-[10px] font-bold text-brand hover:underline uppercase tracking-wider"
            >
              ¿Olvidaste tu clave?
            </Link>
          </div>
          <div className="relative group">
            <span className="material-symbols-rounded absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-brand transition-colors">
              lock
            </span>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="••••••••"
              className={`w-full pl-12 pr-12 py-4 bg-slate-50 border rounded-2xl outline-none transition-all text-sm
                ${errors.password ? "border-red-200 focus:border-red-400 focus:ring-4 focus:ring-red-50" : "border-slate-100 focus:bg-white focus:border-brand/30 focus:ring-4 focus:ring-brand/5"}`}
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
          {errors.password && (
            <p className="text-[10px] text-red-500 font-bold ml-1">
              {errors.password}
            </p>
          )}
        </div>

        {/* Botón Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[3px] shadow-xl shadow-slate-900/20 hover:bg-brand hover:-translate-y-1 active:scale-95 transition-all mt-4 disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-3"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
              Verificando...
            </>
          ) : (
            "Iniciar Sesión"
          )}
        </button>
      </form>

      {/* 3. Footer del Login */}
      <div className="mt-12 text-center border-t border-slate-100 pt-8">
        <p className="text-sm text-slate-400 font-medium">
          ¿No tienes acceso?{" "}
          <Link
            to="/auth/register"
            className="text-brand font-bold hover:underline"
          >
            Crea tu cuenta
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
