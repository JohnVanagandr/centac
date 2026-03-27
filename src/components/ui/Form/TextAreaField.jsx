import React from "react";

const TextAreaField = ({
  label,
  name,
  value,
  onChange,
  error,
  rows = 4, // Aumenté ligeramente a 4 para que sea más cómodo escribir mensajes largos
  placeholder,
  ...props
}) => {
  const isInvalid = Boolean(error);

  return (
    <div className="w-full">
      {/* 🌌 NAVY: Etiqueta estructurada y legible */}
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-bold text-navy mb-1.5"
        >
          {label}
        </label>
      )}

      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        // Aplicamos la misma familia de clases que InputField y SelectField
        className={`w-full px-4 py-3 rounded-xl border bg-slate-50 font-body text-navy placeholder:text-slate-400 focus:bg-white focus:ring-4 outline-none transition-all duration-300 resize-none ${
          isInvalid
            ? "border-red-500 focus:ring-red-500/20 focus:border-red-500 text-red-600"
            : "border-slate-200 hover:border-slate-300 focus:ring-primary/20 focus:border-primary"
          /* 🔵 PRIMARY: Foco azul para indicar que el área está activa */
        }`}
        {...props}
      ></textarea>

      {/* Mensaje de error (Consistente con todo el sistema) */}
      {isInvalid && (
        <p className="text-red-500 text-xs font-bold mt-1.5 animate-in fade-in slide-in-from-top-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextAreaField;
