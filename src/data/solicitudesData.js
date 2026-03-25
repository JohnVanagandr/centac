/**
 * Data para el CRM de Registro de CENTAC
 * Refleja el embudo de conversión: Lead -> Contacto -> Matrícula
 */

const nombres = [
  "Carlos",
  "Ana",
  "Juan",
  "Maria",
  "Luis",
  "Marta",
  "Diego",
  "Paula",
  "Andrés",
  "Elena",
  "Jorge",
  "Lucía",
  "Ricardo",
  "Sofía",
  "Fernando",
  "Gabriela",
  "Valentina",
  "Mateo",
  "Camila",
  "Javier",
];
const apellidos = [
  "Pérez",
  "Silva",
  "Delgado",
  "Rincón",
  "Roa",
  "Gómez",
  "Torres",
  "Morales",
  "Castillo",
  "Vargas",
  "Rojas",
  "Peña",
  "Cárdenas",
  "Suárez",
  "Martínez",
  "López",
  "Hernández",
];

const programas = [
  "ADSO (Análisis y Desarrollo de Software)",
  "Programación de Apps Móviles",
  "Diseño e Integración de Multimedia",
  "Gestión de Redes de Datos",
  "Ciberseguridad",
  "Marketing Digital",
];

const fuentes = [
  "Facebook Ads",
  "Instagram",
  "Google Search",
  "Referido",
  "Sitio Web Oficial",
  "Feria Educativa",
];
const estados = ["Pendiente", "Contactado", "Matriculado", "No Interesado"];
const prioridades = ["Alta", "Media", "Baja"];

// Generador de datos aleatorios
export const solicitudesData = Array.from({ length: 100 }, (_, index) => {
  const nombre = nombres[Math.floor(Math.random() * nombres.length)];
  const apellido = apellidos[Math.floor(Math.random() * apellidos.length)];
  const dia = Math.floor(Math.random() * 25) + 1; // Marzo 2026

  return {
    id: `SOL-${(index + 1).toString().padStart(3, "0")}`,
    aprendiz: `${nombre} ${apellido}`,
    telefono: `3${Math.floor(Math.random() * 900000000 + 100000000)}`, // Simula un móvil colombiano
    email: `${nombre.toLowerCase()}.${apellido.toLowerCase()}@ejemplo.com`,
    programa: programas[Math.floor(Math.random() * programas.length)],
    fuente: fuentes[Math.floor(Math.random() * fuentes.length)],
    fecha: `2026-03-${dia.toString().padStart(2, "0")}`,
    estado: estados[Math.floor(Math.random() * estados.length)],
    prioridad: prioridades[Math.floor(Math.random() * prioridades.length)],
    mensaje:
      "Estoy interesado en conocer los requisitos de ingreso y las facilidades de horario para el próximo trimestre.",
  };
});

// Ordenamos: Los más recientes y los "Pendientes" arriba (Lógica de negocio)
solicitudesData.sort((a, b) => {
  if (a.estado === "Pendiente" && b.estado !== "Pendiente") return -1;
  if (a.estado !== "Pendiente" && b.estado === "Pendiente") return 1;
  return new Date(b.fecha) - new Date(a.fecha);
});
