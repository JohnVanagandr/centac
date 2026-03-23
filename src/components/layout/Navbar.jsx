import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Arreglo centralizado de enlaces (Dry: Don't Repeat Yourself)
  const navLinks = [
    { id: 1, name: "Inicio", href: "#inicio" },
    { id: 2, name: "Nosotros", href: "#nosotros" },
    { id: 3, name: "Oferta Académica", href: "#oferta" },
    { id: 4, name: "Contáctanos", href: "#contacto" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    // Usamos un Fragmento (<> ... </>) porque estamos retornando el Header y el Menú Móvil como hermanos
    <>
      <header className="sticky top-0 z-40 bg-white shadow-sm transition-shadow duration-300">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          {/* 1. Logotipo CENTAC */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center text-white font-display font-black text-2xl shadow-brand">
              C
            </div>
            <div>
              <h1 className="font-display font-black text-navy text-2xl leading-none">
                CENTAC
              </h1>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                Técnico-Práctica
              </p>
            </div>
          </a>

          {/* 2. Navegación de Escritorio */}
          <nav className="hidden md:flex gap-8 font-semibold text-navy">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="hover:text-brand transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* 3. Botones y Menú Hamburguesa */}
          <div className="flex items-center gap-4">
            <a
              href="#contacto"
              className="hidden md:block bg-brand hover:bg-brand-dark text-white px-6 py-2.5 rounded-full font-bold shadow-brand transition-all transform hover:-translate-y-1"
            >
              Inscríbete Hoy
            </a>

            <button
              onClick={toggleMenu}
              className="md:hidden text-navy text-2xl focus:outline-none cursor-pointer"
              aria-label="Abrir menú"
            >
              {/* Ícono de barras (Reemplazando FontAwesome por SVG nativo) */}
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
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* 4. MENÚ MÓVIL (Tu diseño de Overlay Full Screen) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-navy z-50 flex flex-col px-6 py-8 md:hidden"
          aria-hidden="false"
        >
          {/* Cabecera del menú móvil */}
          <div className="flex justify-between items-center mb-12">
            <span className="font-display font-black text-white text-2xl">
              Menú
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-3xl focus:outline-none cursor-pointer"
              aria-label="Cerrar menú"
            >
              {/* Ícono de la X (Reemplazando fa-xmark por SVG nativo) */}
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
                ></path>
              </svg>
            </button>
          </div>

          {/* Enlaces del menú móvil */}
          <nav className="flex flex-col gap-6 font-display text-3xl text-white">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsMenuOpen(false)} // Fundamental: Cierra el menú al hacer clic en un enlace
                className="hover:text-brand transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Botón de inscripción adicional para la versión móvil */}
            <a
              href="#contacto"
              onClick={() => setIsMenuOpen(false)}
              className="bg-brand hover:bg-brand-light text-white text-center px-6 py-4 mt-8 rounded-full font-bold text-xl shadow-brand transition-colors"
            >
              Inscríbete Hoy
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
