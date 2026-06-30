import React from "react";
// Importamos el "motor" desde nuestra carpeta de features administrativos
import OfertasManager from "@/features/oferta/components/admin/OfertasList";

const OfertasList = () => {
  return (
    <div className="w-full">
      {/* Si el día de mañana necesitas agregar Breadcrumbs, 
        etiquetas SEO (Helmet) o permisos de vista (ej. RoleGuard), 
        este es el lugar perfecto para envolver el componente.
      */}
      <OfertasManager />
    </div>
  );
};

export default OfertasList;