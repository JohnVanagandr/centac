import React from 'react';
import { 
  AtencionHero, 
  ServiciosAcademicos, 
  ProcesoAdmision, 
  CanalesContacto 
} from './';

export const AtencionContenedor = () => {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Introducción y Soporte */}
      <div className="bg-white">
        <AtencionHero />
      </div>

      {/* Servicios Académicos y Bienestar */}
      <div className="bg-slate-50 border-y border-slate-100">
        <ServiciosAcademicos />
      </div>

      {/* Guía de Ingreso */}
      <div className="bg-white">
        <ProcesoAdmision />
      </div>

      {/* Directorio de Contacto */}
      <div className="bg-slate-50 border-t border-slate-100">
        <CanalesContacto />
      </div>
    </main>
  );
};