import React from "react";

const Alert = ({ type = "success", title, children }) => {
  // Aplicando el Sistema de Diseño CENTAC
  const styles = {
    // Éxito y Error se mantienen en colores semánticos universales
    success: "bg-green-50 border-green-200 text-green-700",
    error: "bg-red-50 border-red-200 text-red-700",

    // INFO: Usamos nuestro Azul Eléctrico (--color-primary)
    info: "bg-primary/10 border-primary/30 text-primary-dark",

    // WARNING: Usamos nuestro color Oro corporativo (--color-gold)
    warning: "bg-gold/10 border-gold/40 text-yellow-800",
  };

  return (
    /* Cambiamos 'animate-bounce' por clases de entrada elegante.
      'animate-in fade-in slide-in-from-top-2' hace que la alerta 
      aparezca suavemente desde arriba sin quedarse saltando.
    */
    <div
      className={`p-4 rounded-xl border flex flex-col gap-1.5 shadow-sm animate-in fade-in slide-in-from-top-2 duration-300 ${styles[type]}`}
      role="alert" // Atributo vital para la accesibilidad (lectores de pantalla)
    >
      {title && (
        <p className="text-[11px] font-display font-black uppercase tracking-[0.15em] opacity-80">
          {title}
        </p>
      )}
      <div className="text-sm font-body font-bold leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default Alert;
