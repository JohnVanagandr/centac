import React from "react";
import { useNavbar } from "../../../hooks/useNavbar";
import Logo from "./Logo";
import Navigation from "./Navigation";
import NavActions from "./NavActions";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const { isMenuOpen, isScrolled, isHome, toggleMenu, closeMenu } = useNavbar();

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

          <NavActions
            isHome={isHome}
            isScrolled={isScrolled}
            toggleMenu={toggleMenu}
          />
        </div>
      </header>

      <MobileMenu
        isMenuOpen={isMenuOpen}
        closeMenu={closeMenu}
        isHome={isHome}
      />
    </>
  );
};

export default Navbar;
