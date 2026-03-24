import React from "react";
import { useForm } from "../../hooks/useForm"; // Ajusta la ruta si es necesario

// --- REGLAS DE VALIDACIÓN ESPECÍFICAS ---
const validarContacto = (valores) => {
  let errores = {};

  if (!valores.nombre.trim()) {
    errores.nombre = "Por favor, ingresa tu nombre completo.";
  }

  if (!valores.email) {
    errores.email = "El correo electrónico es obligatorio.";
  } else if (!/\S+@\S+\.\S+/.test(valores.email)) {
    errores.email = "El formato del correo no es válido.";
  }

  if (!valores.telefono.trim()) {
    errores.telefono = "El número de teléfono es obligatorio.";
  } else if (!/^[0-9\s-]{7,15}$/.test(valores.telefono)) {
    errores.telefono = "Ingresa un número de teléfono válido.";
  }

  if (!valores.programa) {
    errores.programa = "Debes seleccionar un programa de interés.";
  }

  return errores;
};

const FormularioContacto = () => {
  // Inicializamos nuestro Custom Hook
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    isSubmitted,
  } = useForm(
    { nombre: "", email: "", telefono: "", programa: "", mensaje: "" }, // Estado Inicial
    validarContacto, // Función de validación
  );

  // Acción que se ejecuta SOLO si la validación es exitosa
  const simularEnvioBackend = async (datosValidados) => {
    console.log("Enviando al servidor:", datosValidados);
    // Simulamos la espera de la red (1.5 segundos)
    return new Promise((resolve) => setTimeout(resolve, 1500));
  };

  return (
    <form
      onSubmit={handleSubmit(simularEnvioBackend)}
      className="space-y-5"
      noValidate
    >
      <div>
        <label
          htmlFor="nombre"
          className="block text-sm font-bold text-gray-700 mb-1"
        >
          Nombre Completo
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={values.nombre}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white focus:ring-2 outline-none transition-all ${
            errors.nombre
              ? "border-red-500 focus:ring-red-200 focus:border-red-500"
              : "border-gray-200 focus:ring-brand/20 focus:border-brand"
          }`}
          placeholder="Ej. Juan Pérez"
        />
        {errors.nombre && (
          <p className="text-red-500 text-xs font-bold mt-1">{errors.nombre}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-bold text-gray-700 mb-1"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white focus:ring-2 outline-none transition-all ${
              errors.email
                ? "border-red-500 focus:ring-red-200 focus:border-red-500"
                : "border-gray-200 focus:ring-brand/20 focus:border-brand"
            }`}
            placeholder="ejemplo@correo.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs font-bold mt-1">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="telefono"
            className="block text-sm font-bold text-gray-700 mb-1"
          >
            Teléfono / Celular
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={values.telefono}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white focus:ring-2 outline-none transition-all ${
              errors.telefono
                ? "border-red-500 focus:ring-red-200 focus:border-red-500"
                : "border-gray-200 focus:ring-brand/20 focus:border-brand"
            }`}
            placeholder="Ej. 300 123 4567"
          />
          {errors.telefono && (
            <p className="text-red-500 text-xs font-bold mt-1">
              {errors.telefono}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="programa"
          className="block text-sm font-bold text-gray-700 mb-1"
        >
          Programa de Interés
        </label>
        <select
          id="programa"
          name="programa"
          value={values.programa}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white focus:ring-2 outline-none transition-all cursor-pointer ${
            errors.programa
              ? "border-red-500 focus:ring-red-200 focus:border-red-500"
              : "border-gray-200 focus:ring-brand/20 focus:border-brand"
          }`}
        >
          <option value="" disabled>
            Selecciona un programa...
          </option>
          <option value="electricidad">Electricidad</option>
          <option value="soldadura">Soldadura</option>
          <option value="refrigeracion">Refrigeración</option>
          <option value="mecanica_motos">Mecánica de Motos</option>
        </select>
        {errors.programa && (
          <p className="text-red-500 text-xs font-bold mt-1">
            {errors.programa}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="mensaje"
          className="block text-sm font-bold text-gray-700 mb-1"
        >
          Mensaje (Opcional)
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows="3"
          value={values.mensaje}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand/20 focus:border-brand outline-none transition-all resize-none"
          placeholder="¿Tienes alguna duda específica?"
        ></textarea>
      </div>

      {/* Botón dinámico con Spinner */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3.5 rounded-xl font-bold text-lg shadow-brand transition-all transform flex items-center justify-center gap-2 ${
          isSubmitting
            ? "bg-gray-400 text-gray-100 cursor-not-allowed"
            : "bg-brand hover:bg-brand-dark text-white hover:-translate-y-1"
        }`}
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
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
            Enviando...
          </>
        ) : (
          "Enviar Información"
        )}
      </button>

      {isSubmitted && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-3 animate-[pulse_1s_ease-in-out]">
          <p className="text-sm font-bold">
            ¡Gracias! Hemos recibido tu información.
          </p>
        </div>
      )}
    </form>
  );
};

export default FormularioContacto;
