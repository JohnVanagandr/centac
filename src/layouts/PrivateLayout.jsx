import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/sections/Private/Shared/Sidebar/Sidebar";
import Header from "@/components/sections/Private/Shared/Header/Header";

const PrivateLayout = () => {
  // Estado para controlar el Sidebar en móviles
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* 1. NAVEGACIÓN LATERAL */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* 2. ÁREA DE CONTENIDO PRINCIPAL */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-72 transition-all duration-300">
        
        {/* HEADER: Recibe la función para abrir el menú en móviles */}
        <Header onMenuOpen={toggleSidebar} />

        {/* CONTENIDO DINÁMICO (Vistas del Dashboard) */}
        <main className="p-4 lg:p-6 flex-1">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>

        {/* FOOTER INTERNO (Opcional - Toque de Instructor) */}
        <footer className="px-10 py-6 text-center lg:text-left">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            © 2026 CENTAC - Gestión Académica Integral
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PrivateLayout;