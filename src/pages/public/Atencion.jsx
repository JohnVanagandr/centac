import React from 'react';
import { AtencionContenedor } from '@/features/atencion';
import PublicLayout from '@/layouts/PublicLayout';

const AtencionPage = () => {
  return (
    <PublicLayout 
      category="Atención y Servicios" 
      title="Atención" 
      subtitle="Nuestro objetivo es asegurar una comunicación oportuna y una atención respetuosa, clara y eficiente."
    >
      <AtencionContenedor />
    </PublicLayout>
  );
};

export default AtencionPage;