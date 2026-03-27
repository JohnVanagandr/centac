import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavbar } from "@/hooks/useNavbar";
import { AuthContext } from "@/context/AuthContext";
import TopBar from "../TopBar"; 
import Navigation from "./Navigation";
import NavActions from "./NavActions";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const { isMenuOpen, isScrolled, isHome, toggleMenu, closeMenu } = useNavbar();
  const { isLoggedIn, logout, user } = useContext(AuthContext);

  return (
    <>
      {/* El contenedor general del Header ahora envuelve ambas barras */}
      <header className="fixed top-0 w-full z-50 flex flex-col transition-all duration-500 ease-in-out">
        {/* BRAND: Línea corporativa superior intocable */}
        <div className="h-1 w-full bg-brand shrink-0 z-50"></div>

        {/* TopBar: Se oculta suavemente al hacer scroll (h-0 y opacity-0) */}
        <div
          className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
            isScrolled ? "h-0 opacity-0" : "h-[33px] opacity-100"
            // Nota: h-[33px] asume la altura de tu TopBar. Ajusta si es necesario.
          }`}
        >
          <TopBar />
        </div>

        {/* Navegación Principal */}
        <div
          className={`w-full transition-all duration-500 ease-in-out ${
            isScrolled
              ? "bg-white/90 h-16 shadow-md shadow-navy/5 border-b border-primary/10 backdrop-blur-md"
              : "bg-white h-20 border-b border-slate-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
            {/* LOGO OFICIAL CENTAC */}
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-lg shrink-0"
              aria-label="Ir al inicio"
            >
              <img
                src="/logo.png"
                alt="Logotipo CENTAC"
                className={`transition-all duration-500 ease-in-out ${
                  isScrolled
                    ? "h-10 drop-shadow-sm"
                    : "h-14 drop-shadow-md group-hover:scale-105"
                }`}
              />
            </Link>

            <Navigation isHome={isHome} closeMenu={closeMenu} />

            <NavActions
              isHome={isHome}
              isScrolled={isScrolled}
              toggleMenu={toggleMenu}
              isLoggedIn={isLoggedIn}
              onLogout={logout}
              user={user}
            />
          </div>
        </div>
      </header>

      <MobileMenu
        isMenuOpen={isMenuOpen}
        closeMenu={closeMenu}
        isHome={isHome}
        isLoggedIn={isLoggedIn}
        onLogout={logout}
        user={user}
      />
    </>
  );
};

export default Header;
