import React from 'react';

export const NosotrosLegal = () => {
  return (
    <section className="py-20 bg-slate-50 text-slate-600">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Encabezado: Comunidad y Transparencia en tarjetas amigables */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-brand/10 text-brand rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-navy">Comunidad CENTAC</h3>
            </div>
            <div className="space-y-4 text-justify leading-relaxed">
              <p>Estamos conformados por estudiantes, egresados, docentes y personal administrativo que participa activamente en el cumplimiento de la misión institucional, orientada a la formación técnica, el fortalecimiento de competencias laborales y el aprendizaje continuo.</p>
              <p>Asimismo, la institución mantiene un vinculo permanente con sus estudiantes, brindando orientación, actualización y apoyo en su proyección laboral y profesional, consolidando una comunidad educativa articulada y alineada con los requerimientos del sector productivo y del mercado laboral.</p>
            </div>
          </div>
          
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-navy/10 text-navy rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-navy">Transparencia</h3>
            </div>
            <div className="space-y-4 text-justify leading-relaxed">
              <p>CENTAC actúa bajo principios de legalidad, responsabilidad y transparencia, garantizando a estudiantes, egresados y a la comunidad en general el acceso, claro a la información relacionada con su funcionamiento académico y administrativo.</p>
              <p>Nuestra institución se encuentra legalmente constituida y autorizada para prestar el servicio de Educación para el Trabajo y el Desarrollo Humano, y está sujeta a inspección y vigilancia conforme a la normatividad vigente.</p>
            </div>
          </div>
        </div>

        {/* Marco Legal, Políticas e Información en un Grid Limpio */}
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Tarjeta: Marco Legal */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-brand">
            <h4 className="text-xl font-bold text-navy mb-4">Marco legal y autorización</h4>
            <p className="mb-4 text-sm font-medium text-slate-800">CENTAC cuenta con:</p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-brand mt-1">●</span>
                <span>Licencia de funcionamiento vigente otorgada por la Secretaria de Educación.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand mt-1">●</span>
                <span>Programas técnicos laborales debidamente aprobados, registrados y renovados ante la autoridad educativa competente.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand mt-1">●</span>
                <span>Inscripción y actualización de la información institucional y de programas en el Sistema de Información de la Educación para el Trabajo y el Desarrollo Humano (SIET).</span>
              </li>
            </ul>
          </div>

          {/* Tarjeta: Información y Políticas */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-navy">
             <h4 className="text-xl font-bold text-navy mb-4">Información académica</h4>
             <ul className="space-y-3 text-sm mb-8">
               <li className="flex items-start gap-3"><span className="text-navy mt-1">✓</span> Programas académicos ofrecidos, su duración e intensidad horaria.</li>
               <li className="flex items-start gap-3"><span className="text-navy mt-1">✓</span> Metodología de formación basada en 70% práctica y 30% teoría.</li>
               <li className="flex items-start gap-3"><span className="text-navy mt-1">✓</span> Modalidad de estudio, jornadas y procesos de certificación.</li>
               <li className="flex items-start gap-3"><span className="text-navy mt-1">✓</span> Requisitos para el ingreso y la certificación.</li>
             </ul>

             <h4 className="text-xl font-bold text-navy mb-4">Políticas institucionales</h4>
             <ul className="space-y-3 text-sm">
               <li className="flex items-start gap-3"><span className="text-navy mt-1">✓</span> Tratamiento y protección de datos personales.</li>
               <li className="flex items-start gap-3"><span className="text-navy mt-1">✓</span> Politica de reembolso.</li>
               <li className="flex items-start gap-3"><span className="text-navy mt-1">✓</span> Atención de peticiones, quejas, reclamos y sugerencias (PQRS).</li>
               <li className="flex items-start gap-3"><span className="text-navy mt-1">✓</span> Reglamentos académicos y administrativos.</li>
             </ul>
          </div>

          {/* Tarjeta: Compromiso */}
          <div className="bg-gradient-to-br from-brand/5 to-navy/5 p-8 rounded-2xl border border-slate-100 flex flex-col justify-center relative overflow-hidden">
            <svg className="absolute -bottom-10 -right-10 w-40 h-40 text-brand/10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            <div className="relative z-10 text-center">
              <h4 className="text-2xl font-bold text-navy mb-4">Compromiso con la comunidad</h4>
              <p className="text-sm leading-relaxed text-slate-600">
                CENTAC reafirma su compromiso con la ética, la honestidad y el cumplimiento normativo, ofreciendo una formación técnica responsable y manteniendo canales de comunicación abiertos para resolver inquietudes, solicitudes o requerimientos de información por parte de los estudiantes y la comunidad en general.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};