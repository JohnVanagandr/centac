import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../data/navigationData";
import { useNavbar } from "../../hooks/useNavbar";

const Navbar = () => {
  const { isMenuOpen, isScrolled, isHome, toggleMenu, closeMenu } = useNavbar();

  // Helper para generar el link correcto
  const renderLink = (link) => {
    if (link.type === "route") {
      return (
        <Link
          key={link.id}
          to={`/${link.href}`}
          onClick={closeMenu}
          className="nav-link-style"
        >
          {link.name}
        </Link>
      );
    }

    // Si es anchor, decide si es "#id" o "/#id"
    const target = isHome ? `#${link.href}` : `/#${link.href}`;
    return (
      <a
        key={link.id}
        href={target}
        onClick={closeMenu}
        className="nav-link-style"
      >
        {link.name}
      </a>
    );
  };

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
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div
              className={`bg-brand rounded-xl flex items-center justify-center text-white font-display font-black transition-all duration-500 ${
                isScrolled ? "w-10 h-10 text-xl" : "w-12 h-12 text-2xl"
              }`}
            >
              {" "}
              C{" "}
            </div>
            <div>
              <h1
                className={`font-display font-black text-navy leading-none transition-all duration-500 ${
                  isScrolled ? "text-xl" : "text-2xl"
                }`}
              >
                CENTAC
              </h1>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                Técnico-Práctica
              </p>
            </div>
          </Link>

          {/* Nav Escritorio */}
          <nav className="hidden md:flex gap-8 font-semibold text-navy">
            {navLinks.map((link) => renderLink(link))}
          </nav>

          {/* Botones */}
          <div className="flex items-center gap-4">
            <a
              href={isHome ? "#contacto" : "/#contacto"}
              className={`hidden md:block bg-brand hover:bg-navy text-white rounded-full font-bold transition-all transform hover:-translate-y-1 ${
                isScrolled ? "px-5 py-2 text-sm" : "px-6 py-2.5"
              }`}
            >
              {" "}
              Inscríbete Hoy{" "}
            </a>

            <button
              onClick={toggleMenu}
              className="md:hidden text-navy p-2 outline-none"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Menú Móvil */}
      <div
        className={`fixed inset-0 bg-navy z-[60] flex flex-col px-6 py-8 md:hidden transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-12">
          <span className="font-display font-black text-white text-2xl uppercase">
            Menú<span className="text-brand">.</span>
          </span>
          <button onClick={closeMenu} className="text-white">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-6 font-display text-4xl text-white">
          {navLinks.map((link) => renderLink(link))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
