import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavbar } from "@/components/layout/Header/hooks/useNavbar";
import { AuthContext } from "@/context/AuthContext";
import {TopBar, NavActions, MobileMenu, Navigation} from "./";

export const Header = () => {
  const { isMenuOpen, isScrolled, isHome, toggleMenu, closeMenu } = useNavbar();
  const { isLoggedIn, logout, user } = useContext(AuthContext);

  return (
    <>
      <header className="fixed top-0 w-full z-50 flex flex-col transition-all duration-500 ease-in-out">
        <div className="h-1 w-full bg-brand shrink-0 z-50"></div>

        <div
          className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
            isScrolled ? "h-0 opacity-0" : "h-[33px] opacity-100"
          }`}
        >
          <TopBar />
        </div>

        <div
          className={`w-full transition-all duration-500 ease-in-out ${
            isScrolled
              ? "bg-white/90 h-16 shadow-md shadow-navy/5 border-b border-primary/10 backdrop-blur-md"
              : "bg-white h-20 border-b border-slate-100"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-lg shrink-0"
              aria-label="Ir al inicio"
            >
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
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