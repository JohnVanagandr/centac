import React from "react";
import PublicLayout from "@/layouts/PublicLayout";
import { PqrsContainer } from "@/features/pqrs";

const Pqrs = () => {
  return (
    <PublicLayout 
      category="Atención y Servicios" 
      title="PQRS" 
      subtitle="Centro de radicación de Peticiones, Quejas, Reclamos, Sugerencias y Felicitaciones."
    >
      <PqrsContainer />
    </PublicLayout>
  );
};

export default Pqrs;