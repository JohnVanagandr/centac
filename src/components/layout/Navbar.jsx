import React, { useState } from "react";

const Navbar = () => {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Arreglo de datos para los enlaces (facilita agregar más en el futuro)
  const navLinks = [
    { id: 1, name: "Inicio", href: "#inicio" },
    { id: 2, name: "Nosotros", href: "#nosotros" },
    { id: 3, name: "Oferta Académica", href: "#oferta" },
    { id: 4, name: "Contáctanos", href: "#contacto" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    // Conservamos tus clases originales, cambiando 'class' por 'className'
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
          {/* Usamos .map() para generar los enlaces dinámicamente */}
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

        {/* 3. Botones (Inscríbete y Hamburguesa) */}
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
            {/* Renderizado condicional del ícono: Muestra "X" si está abierto, "Hamburguesa" si está cerrado */}
            {isMenuOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
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
            )}
          </button>
        </div>
      </div>

      {/* 4. Menú Desplegable Móvil (El bloque que faltaba) */}
      {/* Solo existe en el DOM si isMenuOpen es true */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0 top-20 z-50">
          <div className="flex flex-col px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsMenuOpen(false)} // Cierra el menú al hacer clic
                className="text-navy font-semibold text-lg hover:text-brand transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsMenuOpen(false)}
              className="bg-brand text-white text-center px-6 py-3 mt-4 rounded-full font-bold shadow-brand"
            >
              Inscríbete Hoy
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
