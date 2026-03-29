import React from "react";

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy text-white transition-opacity duration-500">
      {/* 🌌 FONDO NAVY: El lienzo perfecto para el contraste */}

      {/* Contenedor del Logo con animación de latido suave */}
      <div className="flex flex-col items-center animate-pulse-soft">
        {/* LOGO REAL: Usamos la imagen oficial de CENTAC. 
            Asegúrate de tener el archivo en tu carpeta /public */}
        <img
          src="/logo-centac.png"
          alt="CENTAC Logo"
          className="w-48 md:w-56 mb-4 drop-shadow-[0_0_15px_rgba(0,117,255,0.2)]"
        />

        {/* 🟠 BRAND: Un subtítulo sutil en tu naranja para dar energía */}
        <p className="text-brand font-body text-[11px] md:text-xs tracking-[0.3em] uppercase font-bold mt-2">
          Plataforma Educativa
        </p>
      </div>

      {/* 🔵 PRIMARY: El azul eléctrico brilla en el indicador de progreso */}
      <div className="absolute bottom-12 flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin shadow-[0_0_10px_rgba(0,117,255,0.4)]"></div>
        <span className="text-xs text-slate-400 font-body uppercase tracking-wider font-bold">
          Preparando entorno...
        </span>
      </div>
    </div>
  );
};

export default SplashScreen;
