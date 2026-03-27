import React from "react";

const TextAreaField = ({
  label,
  name,
  value,
  onChange,
  error,
  rows = 3,
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
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand/20 focus:border-brand outline-none transition-all resize-none"
        {...props}
      ></textarea>
      {isInvalid && (
        <p className="text-red-500 text-xs font-bold mt-1">{error}</p>
      )}
    </div>
  );
};

export default TextAreaField;
