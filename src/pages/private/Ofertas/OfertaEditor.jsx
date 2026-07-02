import React from "react";
// Importamos el formulario real desde la carpeta de features
import OfertaEditorFeature from "@/features/oferta/components/admin/OfertaEditor";

/**
 * PAGE COMPONENT: OfertaEditor
 * Al igual que el listado, este es un cascarón vacío.
 * React Router apuntará a este archivo, y este archivo delega el trabajo pesado a la feature.
 */
const OfertaEditor = () => {
  return (
    <div className="w-full">
      <OfertaEditorFeature />
    </div>
  );
};

export default OfertaEditor;