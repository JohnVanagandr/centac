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

  // 2. Modificamos la acción de envío
  const submitAction = async (formValues) => {
    setServerError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const foundUser = usersData.find(
        (user) =>
          user.email === formValues.email &&
          user.password === formValues.password,
      );

      if (foundUser) {
        // Preparamos los datos limpios que queremos compartir globalmente
        const sessionData = {
          id: foundUser.id,
          name: foundUser.name,
          email: foundUser.email,
          role: foundUser.role,
          avatar: foundUser.avatar,
        };

        // ¡AQUÍ ESTÁ LA MAGIA!
        // Llamamos al contexto. Él se encargará de guardar en LocalStorage,
        // actualizar el estado global y avisarle al resto de la app.
        login(sessionData);

        // Redirigimos al Home
        navigate("/");
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
    <div className="min-h-screen flex bg-gray-50">
      {/* Lado Izquierdo: Formulario */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 md:px-24 xl:px-32 relative">
        {/* Botón Volver */}
        <Link
          to="/"
          className="absolute top-8 left-8 text-gray-400 hover:text-navy transition-colors flex items-center gap-2 text-sm font-semibold"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Volver
        </Link>

        <div className="max-w-md w-full mx-auto">
          {/* Cabecera */}
          <div className="mb-10">
            <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center text-white font-display font-black text-2xl mb-6">
              C
            </div>
            <h2 className="text-3xl font-display font-black text-navy uppercase mb-2">
              Bienvenido de nuevo
            </h2>
            <p className="text-gray-500">
              Ingresa tus credenciales para acceder a tu plataforma.
            </p>
          </div>

          {/* Formulario conectado al Hook (Nota la sintaxis de handleSubmit) */}
          <form onSubmit={handleSubmit(submitAction)} className="space-y-6">
            {/* Error General (Servidor) */}
            {serverError && (
              <div className="bg-red-50 text-red-500 p-4 rounded-lg text-sm border border-red-100 flex items-start gap-3">
                <svg
                  className="w-5 h-5 shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {serverError}
              </div>
            )}

            {/* Campo Correo */}
            <div>
              <label className="block text-sm font-bold text-navy mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                name="email"
                value={values.email} // Viene del hook
                onChange={handleChange} // Viene del hook
                className={`w-full px-5 py-3 rounded-xl border outline-none transition-all ${
                  errors.email
                    ? "border-red-400 focus:ring-red-400/20"
                    : "border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20"
                }`}
                placeholder="estudiante@correo.com"
              />
              {/* Error de Validación Local */}
              {errors.email && (
                <p className="text-red-500 text-xs mt-2 ml-1 font-semibold">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Campo Contraseña */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-bold text-navy">
                  Contraseña
                </label>
                <a
                  href="#"
                  className="text-sm text-brand font-semibold hover:text-navy transition-colors"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={values.password} // Viene del hook
                  onChange={handleChange} // Viene del hook
                  className={`w-full px-5 py-3 rounded-xl border outline-none transition-all pr-12 ${
                    errors.password
                      ? "border-red-400 focus:ring-red-400/20"
                      : "border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20"
                  }`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand transition-colors"
                >
                  {showPassword ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {/* Error de Validación Local */}
              {errors.password && (
                <p className="text-red-500 text-xs mt-2 ml-1 font-semibold">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Botón Enviar */}
            <button
              type="submit"
              disabled={isSubmitting} // Viene del hook
              className="w-full bg-brand text-white font-bold py-4 rounded-xl hover:bg-navy transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Verificando...
                </>
              ) : (
                "Iniciar Sesión"
              )}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500 font-semibold">
            ¿Aún no tienes acceso?{" "}
            <Link
              to="/#contacto"
              className="text-brand hover:text-navy transition-colors"
            >
              Solicita tu inscripción
            </Link>
          </p>
        </div>
      </div>

      {/* Lado Derecho: Imagen (Solo visible en pantallas grandes) */}
      <div className="hidden lg:block lg:w-1/2 relative bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-navy/80 mix-blend-multiply z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2000&auto=format&fit=crop"
          alt="Estudiante en taller práctico"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-16 left-16 right-16 z-20 text-white">
          <div className="w-16 h-1 bg-brand mb-6"></div>
          <h3 className="text-4xl font-display font-black uppercase mb-4 leading-tight">
            Formación orientada
            <br />
            al mundo real
          </h3>
          <p className="text-lg text-gray-300">
            Desarrolla habilidades técnicas demandadas por la industria en
            nuestros talleres especializados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
