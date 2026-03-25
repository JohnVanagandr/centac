// src/layouts/PrivateLayout.jsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Dashboard/Sidebar";
import PrivateHeader from "../components/layout/Dashboard/PrivateHeader";

const PrivateLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans">
      {/* Sidebar Fijo/Flotante */}
      <Sidebar isOpen={isSidebarOpen} closeMenu={() => setIsSidebarOpen(false)} />

      {/* Overlay para móviles */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-[2px] z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Contenedor de Contenido */}
      <div className="flex-1 flex flex-col lg:ml-80 transition-all duration-300">
        {/* Header Flotante */}
        <PrivateHeader onMenuOpen={() => setIsSidebarOpen(true)} />

        {/* Main: Aquí es donde el contenido respira */}
        <main className="p-6 md:p-10">
          <div className="max-w-[1500px] mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default PrivateLayout;
