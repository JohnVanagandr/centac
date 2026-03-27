import React from "react";

const Alert = ({ type = "success", title, children }) => {
  // Definimos los estilos según el tipo de alerta
  const styles = {
    success: "bg-green-50 border-green-200 text-green-700",
    error: "bg-red-50 border-red-200 text-red-700",
    info: "bg-blue-50 border-blue-200 text-blue-700",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-700",
  };

  return (
    /* Aquí aplicamos 'animate-bounce' que es la animación 
      nativa de Tailwind para ese efecto de salto/gravedad.
    */
    <div
      className={`p-4 rounded-xl border flex flex-col gap-1 shadow-sm animate-bounce ${styles[type]}`}
    >
      {title && (
        <p className="text-xs font-black uppercase tracking-widest opacity-80">
          {title}
        </p>
      )}
      <div className="text-sm font-bold">{children}</div>
    </div>
  );
};

export default Alert;
