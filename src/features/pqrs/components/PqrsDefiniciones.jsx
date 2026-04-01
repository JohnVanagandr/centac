import React from "react";

const definiciones = [
  {
    tipo: "Petición",
    icono: "contact_mail",
    desc: "Derecho a solicitar información, consultar documentos o pedir copias sobre asuntos de la institución."
  },
  {
    tipo: "Queja",
    icono: "sentiment_dissatisfied",
    desc: "Manifestación de inconformidad sobre la conducta o acción de un funcionario o instructor de la institución."
  },
  {
    tipo: "Reclamo",
    icono: "report_problem",
    desc: "Exigencia por la ausencia, irregularidad o mala prestación de un servicio educativo o administrativo."
  },
  {
    tipo: "Sugerencia",
    icono: "lightbulb",
    desc: "Propuesta o idea para mejorar nuestros procesos, servicios o instalaciones."
  },
  {
    tipo: "Felicitación",
    icono: "thumb_up",
    desc: "Reconocimiento positivo por un buen servicio o atención recibida por parte de nuestro equipo."
  }
];

const PqrsDefiniciones = () => {
  return (
    <div className="space-y-6 bg-slate-50 p-8 rounded-2xl border border-slate-100 h-full">
      <div>
        <h3 className="text-2xl font-bold text-navy mb-2">Guía de Solicitudes</h3>
        <p className="text-slate-600 text-sm mb-6">
          Para brindarte una respuesta oportuna, por favor identifica el tipo de solicitud que deseas radicar:
        </p>
      </div>

      <div className="space-y-5">
        {definiciones.map((item, index) => (
          <div key={index} className="flex gap-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-slate-100">
              <span className="material-symbols-rounded text-brand text-xl">{item.icono}</span>
            </div>
            <div>
              <h4 className="font-bold text-navy">{item.tipo}</h4>
              <p className="text-slate-600 text-sm mt-1 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PqrsDefiniciones;