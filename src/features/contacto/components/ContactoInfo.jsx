import React from "react";

const ContactoInfo = () => {
  return (
    <div className="space-y-8 pr-0 lg:pr-8">
      <div>
        <h3 className="text-2xl font-bold text-navy mb-4">Nuestras Sedes</h3>
        <p className="text-slate-600 leading-relaxed">
          Acércate a nuestras instalaciones o comunícate por nuestros canales oficiales. 
          En CENTAC estamos listos para guiarte en tu proceso de formación académica.
        </p>
      </div>

      <div className="space-y-6">
        {/* Tarjeta 1: Dirección */}
        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
          <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center shrink-0">
            {/* Si usas Material Symbols u otra librería, ajusta el ícono */}
            <span className="material-symbols-rounded text-brand">location_on</span>
          </div>
          <div>
            <h4 className="font-bold text-navy text-lg">Sede Principal</h4>
            <p className="text-slate-600 mt-1">Calle Falsa 123, Bucaramanga, Santander</p>
          </div>
        </div>

        {/* Tarjeta 2: Teléfono */}
        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
          <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center shrink-0">
            <span className="material-symbols-rounded text-brand">call</span>
          </div>
          <div>
            <h4 className="font-bold text-navy text-lg">Líneas de Atención</h4>
            <p className="text-slate-600 mt-1">+57 (607) 123 4567 <br/> +57 300 123 4567</p>
          </div>
        </div>

        {/* Tarjeta 3: Correo */}
        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
          <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center shrink-0">
            <span className="material-symbols-rounded text-brand">mail</span>
          </div>
          <div>
            <h4 className="font-bold text-navy text-lg">Correo Electrónico</h4>
            <p className="text-slate-600 mt-1">admisiones@centac.edu.co</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactoInfo;