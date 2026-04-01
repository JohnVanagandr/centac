import React from "react";
import PublicLayout from "@/layouts/PublicLayout";
import { ContactoContainer } from "@/features/contacto";

const Contacto = () => {
  return (
    <PublicLayout 
      title="Contacto" 
      subtitle="Escríbenos, llámanos o visítanos. Las puertas de nuestra institución siempre están abiertas para ti."
    >
      <ContactoContainer />
    </PublicLayout>
  );
};

export default Contacto;