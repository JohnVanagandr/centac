import React, { useContext } from "react";
import { useNavbar } from "@/hooks/useNavbar";
import { AuthContext } from "@/context/AuthContext";
import Logo from "./Logo";
import Navigation from "./Navigation";
import NavActions from "./NavActions";
import MobileMenu from "./MobileMenu";
const Header = () => {
  const { isMenuOpen, isScrolled, isHome, toggleMenu, closeMenu } = useNavbar();
  // Consumimos el estado global en lugar del estado local
  const { isLoggedIn, logout, user } = useContext(AuthContext);

return (
  <>
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-white/95 h-16 shadow-md backdrop-blur-sm"
          : "bg-white h-20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <Logo isScrolled={isScrolled} />
        <Navigation isHome={isHome} closeMenu={closeMenu} />

        {/* 4. Pasamos los datos reales a los botones */}
        <NavActions
          isHome={isHome}
          isScrolled={isScrolled}
          toggleMenu={toggleMenu}
          isLoggedIn={isLoggedIn}
          onLogout={logout}
          user={user} // Pasamos el usuario para mostrar su nombre
        />
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
