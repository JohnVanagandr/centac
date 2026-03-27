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
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-bold text-gray-700 mb-1"
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
        className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white focus:ring-2 outline-none transition-all ${
          hasError
            ? "border-red-500 focus:ring-red-200 focus:border-red-500"
            : "border-gray-200 focus:ring-brand/20 focus:border-brand"
        }`}
        {...props} // Esto permite pasar cualquier atributo extra (autocomplete, disabled, etc.)
      />
      {hasError && (
        <p className="text-red-500 text-xs font-bold mt-1 animate-in fade-in slide-in-from-top-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;
