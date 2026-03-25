// src/layouts/PrivateLayout.jsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Dashboard/Sidebar";
import PrivateHeader from "../components/layout/Dashboard/PrivateHeader";

const PrivateLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    // 1. h-screen y overflow-hidden evita que toda la página haga scroll
    <div className="h-screen bg-[#F8FAFC] flex overflow-hidden font-sans">
      {/* Sidebar Fijo */}
      <Sidebar
        isOpen={isSidebarOpen}
        closeMenu={() => setIsSidebarOpen(false)}
      />

      {/* Overlay móvil */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-[2px] z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* 2. Contenedor Derecho: También h-screen y flex-col */}
      <div className="flex-1 flex flex-col min-w-0 h-screen lg:ml-80 transition-all duration-300">
        {/* 3. El Header ahora se queda arriba porque no está dentro del área con scroll */}
        <div className="flex-none">
          <PrivateHeader onMenuOpen={() => setIsSidebarOpen(true)} />
        </div>

        {/* 4. ÁREA DE SCROLL: Solo el contenido se mueve */}
        <main className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
          <div className="max-w-[1500px] mx-auto pb-20">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default PrivateLayout;
