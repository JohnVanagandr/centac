import React from "react";

const Spinner = ({ size = "sm", color = "white" }) => {
  const sizes = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-2",
    lg: "h-10 w-10 border-4",
  };

  return (
    <div
      className={`${sizes[size]} animate-spin rounded-full border-t-transparent border-${color}`}
      style={{
        borderColor: color === "white" ? "rgba(255,255,255,0.3)" : undefined,
        borderTopColor: color,
      }}
    ></div>
  );
};

export default Spinner;
