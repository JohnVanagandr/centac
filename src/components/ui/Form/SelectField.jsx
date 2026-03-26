import React from "react";

const SelectField = ({
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
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-bold text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-xl border bg-gray-50 cursor-pointer focus:bg-white focus:ring-2 outline-none transition-all ${
          isInvalid
            ? "border-red-500 focus:ring-red-200 focus:border-red-500"
            : "border-gray-200 focus:ring-brand/20 focus:border-brand"
        }`}
        {...props}
      >
        <option value="" disabled>
          {props.placeholder || "Selecciona una opción..."}
        </option>
        {options.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.title || opt.name || opt.label}
          </option>
        ))}
      </select>
      {isInvalid && (
        <p className="text-red-500 text-xs font-bold mt-1">{error}</p>
      )}
    </div>
  );
};

export default SelectField;
