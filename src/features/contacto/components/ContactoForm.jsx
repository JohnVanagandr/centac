import React from "react";

const ContactoForm = () => {
  return (
    <form className="space-y-6">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-navy">Envíanos un mensaje</h3>
        <p className="text-slate-500 text-sm mt-2">Diligencia el formulario y te responderemos en breve.</p>
      </div>

      {/* Fila 1: Nombre */}
      <div>
        <label htmlFor="nombre" className="block text-sm font-bold text-navy mb-2">Nombre completo</label>
        <input 
          type="text" 
          id="nombre"
          name="nombre"
          className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all shadow-sm"
          placeholder="Ej. Juan Pérez"
        />
      </div>

      {/* Fila 2: Correo y Teléfono (Grid de 2 columnas) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-navy mb-2">Correo electrónico</label>
          <input 
            type="email" 
            id="email"
            name="email"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all shadow-sm"
            placeholder="ejemplo@correo.com"
          />
        </div>
        <div>
          <label htmlFor="telefono" className="block text-sm font-bold text-navy mb-2">Teléfono</label>
          <input 
            type="tel" 
            id="telefono"
            name="telefono"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all shadow-sm"
            placeholder="Tu número de contacto"
          />
        </div>
      </div>

      {/* Fila 3: Mensaje */}
      <div>
        <label htmlFor="mensaje" className="block text-sm font-bold text-navy mb-2">Mensaje</label>
        <textarea 
          id="mensaje"
          name="mensaje"
          rows="4"
          className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all shadow-sm resize-none"
          placeholder="¿En qué te podemos ayudar?"
        ></textarea>
      </div>

      {/* Botón de Enviar */}
      <div className="pt-2">
        <button 
          type="button" // Cambiaremos a "submit" cuando le inyectes la lógica
          className="w-full bg-brand text-white font-bold py-4 rounded-lg hover:bg-navy transition-colors shadow-md hover:shadow-lg flex justify-center items-center gap-2"
        >
          <span>Enviar Mensaje</span>
          <span className="material-symbols-rounded text-sm">send</span>
        </button>
      </div>
    </form>
  );
};

export default ContactoForm;