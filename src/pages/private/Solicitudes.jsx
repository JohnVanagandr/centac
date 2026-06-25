import React from 'react';
// Importamos el contenedor estructurado desde nuestra feature
import { SolicitudesContenedor } from '@/features/leads';

const Solicitudes = () => {
  return (
    // Renderizamos el cerebro del dashboard que construimos
    <SolicitudesContenedor />
  );
};

// Exportación por defecto para que el React Router lo lea sin problemas
export default Solicitudes;