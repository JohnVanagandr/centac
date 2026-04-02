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
    href: "/nosotros",
    type: "route",
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
        name: "Atencion",
        href: "/servicios/atencion",
      },
      { id: "sub-pqr", name: "Radicar PQR", href: "/servicios/pqr" },
      { id: "sub-faq", name: "Preguntas Frecuentes", href: "/servicios/faq" },
      { id: "sub-contacto", name: "Contáctanos", href: "/contacto" }, // Moví contacto aquí como es estándar en portales
    ],
  },
];
