import React from "react";
import PageHeader from "@/components/ui/Layout/PageHeader";
import EnDesarrollo from "@/components/ui/Layout/EnDesarrollo";

const Contacto = () => (
  <div className="min-h-screen bg-slate-50 flex flex-col">
    <PageHeader
      category="Información"
      title="Contáctanos"
      description="Estamos aquí para escucharte. Comunícate con nosotros a través de nuestros canales oficiales de atención."
    />
    <EnDesarrollo mensaje="Pronto encontrarás aquí nuestro formulario de contacto directo, directorio telefónico y mapa de ubicación." />
  </div>
);

export default Contacto;
