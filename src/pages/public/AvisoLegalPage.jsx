import React from 'react';
import PublicLayout from '@/layouts/PublicLayout';
// import { AvisoLegal } from '@/features/legal';

const AvisoLegalPage = () => {
  return (
    <PublicLayout
      category="Legal"  
      title="Aviso Legal" 
      subtitle="Marco normativo y términos de uso de la plataforma institucional CENTAC."
    >
      {/* <AvisoLegal /> */}
    </PublicLayout>
  );
};

export default AvisoLegalPage;