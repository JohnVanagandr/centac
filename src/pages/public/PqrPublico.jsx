import React from "react";
import PageHeader from "@/components/ui/Layout/PageHeader";
import EnDesarrollo from "@/components/ui/Layout/EnDesarrollo";

const PqrPublico = () => (
  <div className="min-h-screen bg-slate-50 flex flex-col">
    <PageHeader
      category="Atención y Servicios"
      title="Radicar PQR"
      description="Presenta tus peticiones, quejas, reclamos o sugerencias. Tu opinión es fundamental para nuestra mejora continua."
    />
    <EnDesarrollo mensaje="Estamos integrando el sistema de radicación de PQR para garantizar una respuesta oportuna a tus solicitudes." />
  </div>
);

export default PqrPublico;
