// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { id: 1, name: "Inicio", href: "#estrategia" },
    { id: 2, name: "Nosotros", href: "#nosotros" },
    { id: 3, name: "Oferta Académica", href: "#oferta" },
    { id: 4, name: "Contáctanos", href: "#contacto" },
  ];

  // 1. Lógica para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Bloqueo de scroll del cuerpo cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* 3. Header Fijo con Clases Dinámicas */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-white h-16 shadow-md"
            : "bg-white backdrop-blur-md h-20 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          {/* Logotipo: Se encoge sutilmente al hacer scroll */}
          <a href="#" className="flex items-center gap-3 group">
            <div
              className={`bg-brand rounded-xl flex items-center justify-center text-white font-display font-black shadow-brand transition-all duration-500 ${
                isScrolled ? "w-10 h-10 text-xl" : "w-12 h-12 text-2xl"
              }`}
            >
              C
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
          </a>

          {/* Navegación de Escritorio */}
          <nav className="hidden md:flex gap-8 font-semibold text-navy">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="hover:text-brand transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Botones */}
          <div className="flex items-center gap-4">
            <a
              href="#contacto"
              className={`hidden md:block bg-brand hover:bg-brand-dark text-white rounded-full font-bold shadow-brand transition-all transform hover:-translate-y-1 ${
                isScrolled ? "px-5 py-2 text-sm" : "px-6 py-2.5"
              }`}
            >
              Inscríbete Hoy
            </a>

            <button
              onClick={toggleMenu}
              className="md:hidden text-navy text-2xl focus:outline-none cursor-pointer p-2"
              aria-label="Abrir menú"
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

      {/* 4. MENÚ MÓVIL (Con animación de entrada suave) */}
      <div
        className={`fixed inset-0 bg-navy z-[60] flex flex-col px-6 py-8 md:hidden transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-12">
          <span className="font-display font-black text-white text-2xl uppercase tracking-tighter">
            Menú <span className="text-brand">.</span>
          </span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-3xl focus:outline-none cursor-pointer"
            aria-label="Cerrar menú"
          >
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
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-brand transition-colors border-b border-white/5 pb-2"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contacto"
            onClick={() => setIsMenuOpen(false)}
            className="bg-brand hover:bg-brand-light text-white text-center px-6 py-4 mt-8 rounded-full font-bold text-xl shadow-brand transition-all active:scale-95"
          >
            Inscríbete Hoy
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
