import React from "react";
import PublicLayout from "@/layouts/PublicLayout";
import { BibliotecaContenedor } from "@/features/biblioteca/components/BibliotecaContainer";


const Biblioteca = () => {
  return (
    <PublicLayout
        category="Biblioteca"
        title="Biblioteca Virtual"
        description="Accede a nuestra colección digital de recursos educativos."
>
       <BibliotecaContenedor /> 
    </PublicLayout>
  );
};

export default Biblioteca;