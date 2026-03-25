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
    name: "Cursos",
    path: "/dashboard/cursos",
    icon: "book",
    category: "Principal",
  },
  {
    id: 3,
    name: "Certificados",
    path: "/dashboard/certificados",
    icon: "school",
    category: "Académico",
  },
  {
    id: 4,
    name: "Mi Perfil",
    path: "/dashboard/perfil",
    icon: "person",
    category: "Usuario",
  },
  {
    id: 5,
    name: "Solicitudes",
    path: "/dashboard/solicitudes",
    icon: "forum",
    category: "Gestión",
  },
];
