import React from "react";
import PageHeader from "@/components/ui/Layout/PageHeader";
import EnDesarrollo from "@/components/ui/Layout/EnDesarrollo";

const Tramites = () => (
  <div className="min-h-screen bg-slate-50 flex flex-col">
    <PageHeader
      category="Atención y Servicios"
      title="Trámites en Línea"
      description="Gestiona tus certificados, constancias y procesos administrativos de forma rápida y segura."
    />
    <EnDesarrollo />
  </div>
);
export default Tramites;
