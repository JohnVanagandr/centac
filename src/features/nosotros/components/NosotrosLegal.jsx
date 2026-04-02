import React from 'react';

export const NosotrosLegal = () => {
  return (
    <section className="py-24 bg-white text-slate-700">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Encabezado General */}
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold text-navy mb-6">Comunidad y Legalidad</h2>
          <div className="w-20 h-1 bg-brand"></div>
        </div>

        {/* 1. Filosofía: Layout de dos columnas limpias (Sin cajas) */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mb-20 text-lg leading-relaxed">
          <div>
            <h3 className="text-2xl font-bold text-navy mb-6">Comunidad CENTAC</h3>
            <div className="space-y-4">
              <p>Estamos conformados por estudiantes, egresados, docentes y personal administrativo que participa activamente en el cumplimiento de la misión institucional, orientada a la formación técnica, el fortalecimiento de competencias laborales y el aprendizaje continuo.</p>
              <p>Asimismo, la institución mantiene un vinculo permanente con sus estudiantes, brindando orientación, actualización y apoyo en su proyección laboral y profesional, consolidando una comunidad educativa articulada y alineada con los requerimientos del sector productivo y del mercado laboral.</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-navy mb-6">Transparencia</h3>
            <div className="space-y-4">
              <p>CENTAC actúa bajo principios de legalidad, responsabilidad y transparencia, garantizando a estudiantes, egresados y a la comunidad en general el acceso claro a la información relacionada con su funcionamiento académico y administrativo.</p>
              <p>Nuestra institución se encuentra legalmente constituida y autorizada para prestar el servicio de Educación para el Trabajo y el Desarrollo Humano, y está sujeta a inspección y vigilancia conforme a la normatividad vigente.</p>
            </div>
          </div>
        </div>

        {/* 2. Información Legal y Políticas: Layout Editorial con líneas divisorias */}
        <div className="border-t border-slate-200">
          
          {/* Fila 1: Marco Legal */}
          <div className="grid md:grid-cols-12 gap-8 py-12 border-b border-slate-200">
            <div className="md:col-span-4">
              <h4 className="text-xl font-bold text-navy">Marco legal y autorización</h4>
            </div>
            <div className="md:col-span-8">
              <p className="mb-6 font-medium text-navy">CENTAC cuenta con:</p>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start gap-4">
                  <span className="text-brand font-bold mt-1">—</span>
                  <span>Licencia de funcionamiento vigente otorgada por la Secretaria de Educación.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-brand font-bold mt-1">—</span>
                  <span>Programas técnicos laborales debidamente aprobados, registrados y renovados ante la autoridad educativa competente.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-brand font-bold mt-1">—</span>
                  <span>Inscripción y actualización de la información institucional y de programas en el Sistema de Información de la Educación para el Trabajo y el Desarrollo Humano (SIET).</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Fila 2: Información y Políticas */}
          <div className="grid md:grid-cols-12 gap-8 py-12 border-b border-slate-200">
            <div className="md:col-span-4">
              <h4 className="text-xl font-bold text-navy">Normativa institucional</h4>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-12">
              {/* Columna Académica */}
              <div>
                <h5 className="font-bold text-navy mb-4">Información académica</h5>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2"><span className="text-brand font-bold">·</span> Programas académicos ofrecidos, su duración e intensidad horaria.</li>
                  <li className="flex items-start gap-2"><span className="text-brand font-bold">·</span> Metodología de formación basada en 70% práctica y 30% teoría.</li>
                  <li className="flex items-start gap-2"><span className="text-brand font-bold">·</span> Modalidad de estudio, jornadas y procesos de certificación.</li>
                  <li className="flex items-start gap-2"><span className="text-brand font-bold">·</span> Requisitos académicos y administrativos para el ingreso.</li>
                </ul>
              </div>
              {/* Columna Políticas */}
              <div>
                <h5 className="font-bold text-navy mb-4">Políticas públicas</h5>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-2"><span className="text-brand font-bold">·</span> Tratamiento y protección de datos personales.</li>
                  <li className="flex items-start gap-2"><span className="text-brand font-bold">·</span> Política de reembolso.</li>
                  <li className="flex items-start gap-2"><span className="text-brand font-bold">·</span> Atención de peticiones, quejas, reclamos y sugerencias (PQRS).</li>
                  <li className="flex items-start gap-2"><span className="text-brand font-bold">·</span> Reglamentos académicos y administrativos.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Cierre: Bloque de impacto (Blockquote Style) */}
        <div className="mt-20 p-10 md:p-16 bg-slate-50 border-l-8 border-brand">
          <h4 className="text-2xl font-bold text-navy mb-6">Compromiso con la comunidad educativa</h4>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed italic">
            "CENTAC reafirma su compromiso con la ética, la honestidad y el cumplimiento normativo, ofreciendo una formación técnica responsable y manteniendo canales de comunicación abiertos para resolver inquietudes, solicitudes o requerimientos de información por parte de los estudiantes y la comunidad en general."
          </p>
        </div>

      </div>
    </section>
  );
};