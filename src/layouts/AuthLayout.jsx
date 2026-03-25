// src/layouts/AuthLayout.jsx
import React from "react";
import { Outlet, Link } from "react-router-dom";

const AuthLayout = () => {
  return (
    // 1. Ocultamos el scroll general de la pantalla con overflow-hidden
    <div className="min-h-screen bg-white flex flex-col lg:flex-row font-sans overflow-hidden">
      {/* Lado Izquierdo: Branding CENTAC & Soporte Directo */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-900 relative overflow-hidden items-center justify-center p-12">
        {/* Efectos de fondo */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-md text-center">
          {/* Logo de CENTAC */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-[2.5rem] mb-8 shadow-2xl transition-all duration-500 hover:scale-105">
            <span className="text-slate-900 font-black text-5xl">C</span>
          </div>

          <h2 className="text-5xl font-black text-white tracking-tighter mb-4 leading-tight">
            Gestión <br /> <span className="text-brand">CENTAC</span>
          </h2>
          <p className="text-slate-400 font-medium leading-relaxed mb-12">
            Plataforma independiente diseñada para la administración eficiente
            de prospectos y servicios tecnológicos.
          </p>

          {/* BOTÓN DE WHATSAPP: Soporte / Desarrollado por */}
          <div className="pt-10 border-t border-white/5 flex flex-col items-center">
            <a
              href="https://wa.me/573152533960"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-white/5 px-6 py-4 rounded-2xl border border-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-brand/20 transition-all group"
            >
              <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                <span className="material-symbols-rounded text-emerald-500 text-2xl group-hover:text-white transition-colors">
                  chat
                </span>
              </div>
              <div className="text-left">
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-[2px]">
                  Soporte y Desarrollo
                </p>
                <p className="text-white font-bold text-sm flex items-center gap-2">
                  Contactar al Desarrollador
                  <span className="material-symbols-rounded text-xs text-brand animate-pulse">
                    open_in_new
                  </span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Lado Derecho: Formularios con Scroll Independiente */}
      {/* 2. Le damos h-screen y overflow-y-auto SOLO al lado derecho */}
      <div className="flex-1 flex flex-col h-screen overflow-y-auto bg-white">
        {/* 3. Botón de Salida: Ahora vive dentro del flujo normal, en la parte superior derecha */}
        <div className="w-full p-6 md:p-8 flex justify-start lg:justify-end shrink-0">
          <Link
            to="/"
            className="flex items-center gap-2 px-5 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-brand hover:border-brand/20 transition-all shadow-sm group"
          >
            <span className="material-symbols-rounded text-lg group-hover:-translate-x-1 transition-transform">
              arrow_back
            </span>
            Volver al Sitio
          </Link>
        </div>

        {/* Contenedor central (Login, Register, etc.) */}
        <div className="flex-1 flex flex-col justify-center items-center px-8 md:px-16 pb-12">
          <div className="w-full max-w-[420px] animate-in fade-in zoom-in-95 duration-500">
            <Outlet />
          </div>

          {/* Footer Minimalista de Autor */}
          <div className="mt-12 pt-8 flex flex-col items-center gap-2 shrink-0">
            <div className="w-8 h-[2px] bg-slate-100"></div>
            <p className="text-[9px] font-black text-slate-300 uppercase tracking-[4px]">
              CENTAC • 2026 • Versión 1.0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
