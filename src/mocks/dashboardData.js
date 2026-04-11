/**
 * Data simulada para el Dashboard de CENTAC
 * Organizada por categorías para facilitar el mapeo en la vista.
 */

export const requestStats = [
  {
    id: 1,
    label: "Total Solicitudes",
    value: "45",
    icon: "forum",
    color: "text-slate-600",
    bg: "bg-slate-50",
  },
  {
    id: 2,
    label: "Pendientes",
    value: "12",
    icon: "pending_actions",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    id: 3,
    label: "En Proceso",
    value: "08",
    icon: "sync",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    id: 4,
    label: "Atendidas",
    value: "25",
    icon: "check_circle",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
];

export const recentRequests = [
  {
    id: "SOL-001",
    user: "Carlos Pérez",
    date: "24 Mar, 2026",
    type: "Certificado",
    status: "Pendiente",
  },
  {
    id: "SOL-002",
    user: "Ana María Silva",
    date: "23 Mar, 2026",
    type: "Aplazamiento",
    status: "En Proceso",
  },
  {
    id: "SOL-003",
    user: "Juan Delgado",
    date: "22 Mar, 2026",
    type: "Reingreso",
    status: "Atendida",
  },
  {
    id: "SOL-004",
    user: "Marta Rincón",
    date: "21 Mar, 2026",
    type: "Certificado",
    status: "Pendiente",
  },
  {
    id: "SOL-005",
    user: "Luis Alberto Roa",
    date: "20 Mar, 2026",
    type: "Baja Voluntaria",
    status: "Atendida",
  },
];
