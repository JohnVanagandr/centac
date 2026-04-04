import React from 'react';
import PublicLayout from '@/layouts/PublicLayout';
// import { PoliticaPrivacidad } from '@/features/legal';

const PoliticaPrivacidadPage = () => {
  return (
    <PublicLayout 
      category="Legal"
      title="Política de Privacidad" 
      subtitle="Tratamiento de datos personales y compromiso con la seguridad de tu información."
    >
      {/* <PoliticaPrivacidad /> */}
    </PublicLayout>
  );
};

export default PoliticaPrivacidadPage;