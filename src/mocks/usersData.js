// src/data/usersData.js

export const usersData = [
  {
    id: "USR-001",
    name: "Carlos Aprendiz",
    email: "estudiante@centac.com",
    password: "password123", // Solo para simulación
    role: "student",
    avatar: "C",
    enrolledCourses: ["reparacion-celulares", "sistemas-de-refrigeracion"],
  },
  {
    id: "USR-002",
    name: "María Instructora",
    email: "admin@centac.com",
    password: "admin123",
    role: "admin",
    avatar: "M",
    enrolledCourses: [], // El admin tiene acceso a todo
  },
  {
    id: "USR-003",
    name: "Juan Pérez",
    email: "juan@correo.com",
    password: "juan123",
    role: "student",
    avatar: "J",
    enrolledCourses: ["mecanica-de-motos"],
  },
];
