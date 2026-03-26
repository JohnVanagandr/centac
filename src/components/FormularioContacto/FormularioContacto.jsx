import React from "react";
import { useContactoForm } from "./useContactoForm";

const FormularioContacto = () => {
  const { values, errors, handleChange, onSubmit, isSubmitting, isSubmitted, programas } = useContactoForm();

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      {/* CAMPO: NOMBRE */}
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">Nombre Completo</label>
        <input
          name="nombre"
          type="text"
          value={values.nombre}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl border bg-gray-50 focus:bg-white outline-none transition-all ${errors.nombre ? "border-red-500 ring-1 ring-red-100" : "border-gray-200 focus:border-brand"}`}
          placeholder="Ej. Juan Pérez"
        />
        {errors.nombre && <p className="text-red-500 text-xs font-bold mt-1">{errors.nombre}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* CAMPO: EMAIL */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Correo Electrónico</label>
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none transition-all ${errors.email ? "border-red-500" : "border-gray-200 focus:border-brand"}`}
          />
          {errors.email && <p className="text-red-500 text-xs font-bold mt-1">{errors.email}</p>}
        </div>

        {/* CAMPO: TELÉFONO */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Teléfono</label>
          <input
            name="telefono"
            type="tel"
            value={values.telefono}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border bg-gray-50 outline-none transition-all ${errors.telefono ? "border-red-500" : "border-gray-200 focus:border-brand"}`}
          />
          {errors.telefono && <p className="text-red-500 text-xs font-bold mt-1">{errors.telefono}</p>}
        </div>
      </div>

      {/* CAMPO: PROGRAMA */}
      <div>
        <label className="block text-sm font-bold text-gray-700 mb-1">Programa de Interés</label>
        <select
          name="programa"
          value={values.programa}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl border bg-gray-50 cursor-pointer outline-none transition-all ${errors.programa ? "border-red-500" : "border-gray-200 focus:border-brand"}`}
        >
          <option value="" disabled>Selecciona un programa...</option>
          {programas.map((p) => (
            <option key={p.id} value={p.id}>{p.title}</option>
          ))}
        </select>
        {errors.programa && <p className="text-red-500 text-xs font-bold mt-1">{errors.programa}</p>}
      </div>

      {/* BOTÓN */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3.5 rounded-xl font-bold text-white transition-all ${isSubmitting ? "bg-gray-400" : "bg-brand hover:bg-brand-dark shadow-lg shadow-brand/20"}`}
      >
        {isSubmitting ? "Enviando solicitud..." : "Enviar Información"}
      </button>

      {/* MENSAJE DE ÉXITO */}
      {isSubmitted && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm font-bold animate-bounce">
          ¡Listo! Nos pondremos en contacto contigo pronto.
        </div>
      )}
    </form>
  );
};

export default FormularioContacto;