// src/components/ui/Feedback/SplashScreen.jsx
import React from "react";

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy text-white transition-opacity duration-500">
      
      {/* Contenedor del Logo con animación de latido */}
      <div className="animate-pulse flex flex-col items-center">
        {/* Aquí irá tu Logo Real. Por ahora usamos un texto estilizado */}
        <div className="w-24 h-24 mb-6 bg-brand rounded-2xl flex items-center justify-center transform rotate-12 shadow-lg shadow-brand/20">
          <span className="font-display font-black text-4xl -rotate-12">C</span>
        </div>
        
        <h1 className="font-display font-black text-3xl tracking-widest">
          CENTAC
        </h1>
        <p className="text-brand font-body text-sm tracking-widest mt-2 uppercase">
          Plataforma Educativa
        </p>
      </div>

      {/* Spinner de carga sutil en la parte inferior */}
      <div className="absolute bottom-12 flex flex-col items-center gap-3">
        <div className="w-6 h-6 border-2 border-brand/30 border-t-brand rounded-full animate-spin"></div>
        <span className="text-xs text-gray-400 font-body uppercase tracking-wider">
          Preparando entorno...
        </span>
      </div>

    </div>
  );
};

export default SplashScreen;