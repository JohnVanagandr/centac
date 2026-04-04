import React from "react";

export const SelectField = ({
  label,
  name,
  value,
  onChange,
  error,
  options = [],
  ...props
}) => {
  const isInvalid = Boolean(error);

  return (
    <div className="w-full">
      {/* NAVY: Estructura y legibilidad de la etiqueta */}
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-bold text-navy mb-1.5"
        >
          {label}
        </label>
      )}

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        // Heredamos la misma estructura de clases que el InputField
        className={`w-full px-4 py-3 rounded-xl border bg-slate-50 font-body text-navy cursor-pointer focus:bg-white focus:ring-4 outline-none transition-all duration-300 appearance-none ${
          isInvalid
            ? "border-red-500 focus:ring-red-500/20 focus:border-red-500 text-red-600"
            : "border-slate-200 hover:border-slate-300 focus:ring-primary/20 focus:border-primary"
          /* 🔵 PRIMARY: El azul de interacción brilla al hacer clic */
        }`}
        {...props}
      >
        <option value="" disabled className="text-slate-400">
          {props.placeholder || "Selecciona una opción..."}
        </option>

        {/* 🚀 Mapeo de opciones flexible (Acepta id o value) */}
        {options.map((opt, index) => {
          const optionValue = opt.id || opt.value; // Extraemos el valor correcto
          console.log(optionValue);
          
          return (
            <option 
              key={optionValue || index} // Usamos el valor o el índice como plan B
              value={optionValue} 
              className="text-navy font-medium"
            >
              {opt.title || opt.name || opt.label}
            </option>
          );
        })}
      </select>

      {/* Mensaje de error (Mismo estilo y animación que el InputField) */}
      {isInvalid && (
        <p className="text-red-500 text-xs font-bold mt-1.5 animate-in fade-in slide-in-from-top-1">
          {error}
        </p>
      )}
    </div>
  );
};