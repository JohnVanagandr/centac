import React from "react";

const InputField = ({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  ...props
}) => {
  const hasError = Boolean(error);

  return (
    <div className="w-full">
      {/* NAVY: Usado para la lectura y estructura del formulario */}
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-bold text-navy mb-1.5"
        >
          {label}
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        // Agregamos text-navy para lo que el usuario escribe y placeholder:text-slate-400
        className={`w-full px-4 py-3 rounded-xl border bg-slate-50 font-body text-navy placeholder:text-slate-400 focus:bg-white focus:ring-4 outline-none transition-all duration-300 ${
          hasError
            ? "border-red-500 focus:ring-red-500/20 focus:border-red-500 text-red-600"
            : "border-slate-200 hover:border-slate-300 focus:ring-primary/20 focus:border-primary"
          /* PRIMARY: El azul eléctrico brilla cuando el input está activo (focus) */
        }`}
        {...props}
      />

      {/* Mensaje de error (Se mantiene en rojo semántico universal) */}
      {hasError && (
        <p className="text-red-500 text-xs font-bold mt-1.5 animate-in fade-in slide-in-from-top-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;
