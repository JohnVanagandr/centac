export const STATUS_STYLES = {
  Pendiente: "bg-amber-50 text-amber-600 border-amber-100",
  Contactado: "bg-blue-50 text-blue-600 border-blue-100",
  Matriculado: "bg-emerald-50 text-emerald-600 border-emerald-100",
  "No Interesado": "bg-slate-50 text-slate-400 border-slate-200",
};

export const STATUS_OPTIONS = [
  { value: "", label: "Todos los estados" },
  { value: "Pendiente", label: "Pendiente" },
  { value: "Contactado", label: "Contactado" },
  { value: "Matriculado", label: "Matriculado" },
  { value: "No interesado", label: "No interesado" },
];

export const canChangeLeadStatus = (currentStatus) => {
  return currentStatus !== "Matriculado";
};