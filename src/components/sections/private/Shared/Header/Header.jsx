import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import UserProfile from "./UserProfile";

const Header = ({ onMenuOpen }) => {
  return (
    <header className="sticky top-0 z-30 w-full h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between">
      
      {/* Sección Izquierda: Menú Móvil + Breadcrumbs Dinámicas */}
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuOpen} 
          className="p-2 lg:hidden text-slate-500 hover:bg-slate-50 rounded-xl transition-colors"
        >
          <span className="material-symbols-rounded text-2xl">menu</span>
        </button>
        
        <Breadcrumbs />
      </div>

      {/* Sección Derecha: Perfil de Usuario */}
      <div className="flex items-center gap-5">
        <UserProfile />
      </div>

    </header>
  );
};

export default Header;