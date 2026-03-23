// src/components/Hero/Slider.jsx
import React, { useState, useEffect } from "react";

const Slider = () => {
  // 1. EL ESTADO: React vigila este número. Si cambia, redibuja el slider automáticamente.
  const [currentIndex, setCurrentIndex] = useState(0);

  // 2. LOS DATOS: Separamos la información visual del código estructural
  const slides = [
    {
      id: 1,
      badge: "Nuestra Estrategia Educativa",
      badgeStyle: "bg-white/10 border-white/20 text-brand-light",
      titlePre: "Formación ",
      titleHighlight: "Técnico-Práctica",
      titlePost: "Certificada",
      desc: "Docentes capacitados. Aprendizaje certificado. Formación con salida laboral garantizada a través del fortalecimiento de tus habilidades.",
      btnText: "Ver Programas",
      btnStyle: "bg-brand text-white shadow-brand hover:bg-brand-light",
      bgImg:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80",
    },
    {
      id: 2,
      badge: "Aprende Haciendo",
      badgeStyle: "bg-gold text-navy",
      titlePre: "Aprende en ",
      titleHighlight: "Escenarios Reales",
      titlePost: "",
      desc: "Nuestros talleres están perfectamente acondicionados y dotados con equipos, materiales y herramientas profesionales.",
      btnText: "Conectar con Asesor",
      btnStyle:
        "bg-white/10 text-white border border-white/30 hover:bg-white/20",
      bgImg:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80",
    },
    {
      id: 3,
      badge: "Tu Futuro Profesional",
      badgeStyle: "bg-brand text-white",
      titlePre: "Impulsa tu ",
      titleHighlight: "Éxito Laboral",
      titlePost: "Efectivo",
      desc: "Nuestros egresados cuentan con una alta tasa de vinculación. Te conectamos con las demandas reales de las empresas líderes.",
      btnText: "Iniciar mi Registro",
      btnStyle: "bg-brand text-white shadow-brand hover:bg-brand-light",
      bgImg:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80",
    },
  ];

  // 3. FUNCIONES DE CONTROL: Solo cambian el estado, React hace el resto
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  // 4. EL AUTOPLAY (Efecto Secundario)
  useEffect(() => {
    // Creamos el temporizador para avanzar cada 5 segundos
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    // Función de limpieza: destruye el temporizador si el usuario interactúa
    // o si el componente desaparece de la pantalla
    return () => clearInterval(timer);
  }, [currentIndex]); // Dependencia: se reinicia cada vez que currentIndex cambia

  // NOTA PARA LOS APRENDICES: En JSX usamos 'className' en lugar de 'class'
  return (
    <section className="slider-container h-[85vh] w-full relative">
      {/* El Track: Aquí usamos el currentIndex para mover el contenedor */}
      <div
        className="slider-track h-full w-full flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {/* Recorremos nuestro arreglo de datos para generar los slides */}
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="slide relative h-full flex items-center min-w-full flex-shrink-0"
          >
            {/* Fondo con imagen (Corregido: Solo controla la imagen y su opacidad base) */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: `url(${slide.bgImg})` }}
            ></div>

            {/* Capa de degradado oscuro superior para mejorar contraste */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy to-navy/80"></div>

            {/* Contenido del Slide */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
              <span
                className={`inline-block py-1 px-3 rounded-full text-xs font-bold uppercase tracking-widest mb-6 ${slide.badgeStyle}`}
              >
                {slide.badge}
              </span>
              <h2 className="font-display text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
                {slide.titlePre}{" "}
                {/* Degradado nativo de Tailwind usando las variables de tu @theme */}
                <span className="bg-gradient-to-r from-brand to-gold bg-clip-text text-transparent">
                  {slide.titleHighlight}
                </span>
                <br />
                {slide.titlePost}
              </h2>
              <p className="text-lg text-gray-300 max-w-xl mb-8">
                {slide.desc}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contacto"
                  className={`px-8 py-3 rounded-full font-bold transition-colors ${slide.btnStyle}`}
                >
                  {slide.btnText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controles del Slider */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/30 text-white rounded-full backdrop-blur-sm transition-all cursor-pointer"
        aria-label="Anterior slide"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/30 text-white rounded-full backdrop-blur-sm transition-all cursor-pointer"
        aria-label="Siguiente slide"
      >
        &#10095;
      </button>
    </section>
  );
};

export default Slider;
