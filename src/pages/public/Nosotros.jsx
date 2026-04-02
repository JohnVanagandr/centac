import React from 'react';
import PublicLayout from '@/layouts/PublicLayout';
import { NosotrosContenedor } from '@/features/nosotros';

// Exportamos el "Cascarón" que envuelve el contenido en el Layout
const Nosotros = () => {
  return (
    <PublicLayout 
      title="Nuestra Institución" 
      subtitle="Conoce el corazón, la misión y la historia de CENTAC."
    >
      <NosotrosContenedor />
    </PublicLayout>
  );
};
export default Nosotros;