/**
 * Configuración de navegación para el Dashboard de CENTAC
 * Centralizamos aquí para facilitar el mantenimiento y la escalabilidad.
 */
export const sidebarData = [
  {
    id: 1,
    name: "Inicio",
    path: "/dashboard",
    icon: "dashboard",
    category: "Principal",
  },
  {
    id: 2,
    name: "Ofertas",
    path: "/dashboard/ofertas",
    icon: "book",
    category: "Principal",
  },
  {
    id: 3,
    name: "Sliders",
    path: "/dashboard/sliders",
    icon: "list",
    category: "Principal",
  },
  {
    id: 4,
    name: "PQR",
    path: "/dashboard/pqr",
    icon: "chat_bubble",
    category: "Gestión"
  },
  {
    id: 5,
    name: "Mi Perfil",
    path: "/dashboard/perfil",
    icon: "person",
    category: "Usuario",
  },
  {
    id: 6,
    name: "Solicitudes",
    path: "/dashboard/solicitudes",
    icon: "forum",
    category: "Gestión",
  },
  {
    id: 7,
    name: "Contactos",
    path: "/dashboard/contactos",
    icon: "forum",
    category: "Gestión",
  },
];
