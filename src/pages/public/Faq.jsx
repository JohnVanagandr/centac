import React from "react";
import PageHeader from "@/components/ui/Layout/PageHeader";
import EnDesarrollo from "@/components/ui/Layout/EnDesarrollo";

const Faq = () => (
  <div className="min-h-screen bg-slate-50 flex flex-col">
    <PageHeader
      category="Atención y Servicios"
      title="Preguntas Frecuentes"
      description="Encuentra respuestas rápidas a las dudas más comunes sobre admisiones, plataformas y procesos académicos."
    />
    <EnDesarrollo mensaje="Estamos recopilando las consultas más frecuentes para crear una base de conocimiento completa y útil." />
  </div>
);

export default Faq;
