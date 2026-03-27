import React from "react";
import PageHeader from "@/components/ui/Layout/PageHeader";
import EnDesarrollo from "@/components/ui/Layout/EnDesarrollo";

const Historia = () => (
  <div className="min-h-screen bg-slate-50 flex flex-col">
    <PageHeader
      category="Nosotros"
      title="Nuestra Historia"
      description="Un recorrido por los hitos y la evolución de CENTAC formando a los líderes del mañana."
    />
    <EnDesarrollo />
  </div>
);
export default Historia;
