export const navLinks = [
  {
    id: "nav-inicio",
    name: "Inicio",
    href: "/",
    type: "route",
  },
  {
    id: "nav-nosotros",
    name: "Nosotros",
    type: "dropdown",
    // Al detectar 'subItems', el componente renderizará un menú desplegable
    subItems: [
      {
        id: "sub-estrategia",
        name: "Estrategia Institucional",
        href: "/nosotros/estrategia",
      },
      {
        id: "sub-historia",
        name: "Nuestra Historia",
        href: "/nosotros/historia",
      },
      {
        id: "sub-directorio",
        name: "Directorio de Instructores",
        href: "/nosotros/directorio",
      },
    ],
  },
  {
    id: "nav-ofertas",
    name: "Oferta Académica",
    href: "/ofertas",
    type: "route",
  },
  {
    id: "nav-servicios",
    name: "Atención y Servicios",
    type: "dropdown",
    subItems: [
      {
        id: "sub-tramites",
        name: "Trámites en Línea",
        href: "/servicios/tramites",
      },
      { id: "sub-pqr", name: "Radicar PQR", href: "/servicios/pqr" },
      { id: "sub-faq", name: "Preguntas Frecuentes", href: "/servicios/faq" },
      { id: "sub-contacto", name: "Contáctanos", href: "/contacto" }, // Moví contacto aquí como es estándar en portales
    ],
  },
];
