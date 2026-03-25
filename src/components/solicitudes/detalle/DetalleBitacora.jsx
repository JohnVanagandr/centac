import React from "react";

const DetalleBitacora = ({ nota, setNota, onSaveNota }) => {
  return (
    <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm overflow-hidden">
      {/* Cabecera de la Bitácora */}
      <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/30">
        <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 uppercase tracking-tighter">
          <span className="material-symbols-rounded text-brand text-lg">
            edit_note
          </span>
          Bitácora de Seguimiento
        </h3>
        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest bg-white px-2 py-1 rounded-md border border-slate-100">
          Uso Interno
        </span>
      </div>

      <div className="p-8 space-y-8">
        {/* Área de Nueva Nota */}
        <div className="relative group">
          <textarea
            value={nota}
            onChange={(e) => setNota(e.target.value)}
            placeholder="Ej: Se llamó al interesado, comenta que asistirá a la charla el próximo lunes..."
            className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-6 text-sm outline-none focus:ring-8 focus:ring-brand/5 focus:bg-white focus:border-brand/20 transition-all resize-none h-36 leading-relaxed"
          ></textarea>

          <div className="flex justify-end mt-4">
            <button
              onClick={onSaveNota}
              disabled={!nota.trim()}
              className="bg-slate-900 text-white px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-brand disabled:opacity-30 disabled:hover:bg-slate-900 transition-all shadow-xl active:scale-95 flex items-center gap-2"
            >
              <span className="material-symbols-rounded text-sm">save</span>
              Registrar Interacción
            </button>
          </div>
        </div>

        {/* Historial de Notas (Timeline sutil) */}
        <div className="space-y-6">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[2px] mb-2">
            Historial Reciente
          </p>

          {/* Nota Ejemplo 1 */}
          <div className="p-6 bg-slate-50/50 rounded-2xl border border-slate-100 relative group hover:bg-white hover:shadow-md transition-all duration-300">
            <div className="absolute left-0 top-6 w-1 h-10 bg-brand rounded-r-full"></div>
            <p className="text-sm text-slate-600 leading-relaxed italic">
              "El postulante tiene dudas sobre el proceso de homologación. Se le
              explicó que debe traer las notas originales. Quedó de enviarlas
              por correo mañana."
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-[8px] font-bold text-slate-600">
                  AD
                </div>
                <span className="text-[9px] font-bold text-slate-800 uppercase">
                  Admin CENTAC
                </span>
              </div>
              <span className="text-[9px] font-bold text-slate-400">
                Hoy - 10:30 AM
              </span>
            </div>
          </div>

          {/* Nota Ejemplo 2 */}
          <div className="p-6 bg-slate-50/50 rounded-2xl border border-slate-100 relative group opacity-70">
            <div className="absolute left-0 top-6 w-1 h-10 bg-slate-300 rounded-r-full"></div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Llamada no contestada. Se dejó mensaje de voz y se envió
              recordatorio por WhatsApp.
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-[8px] font-bold text-slate-600">
                  AD
                </div>
                <span className="text-[9px] font-bold text-slate-800 uppercase tracking-tighter">
                  Admin CENTAC
                </span>
              </div>
              <span className="text-[9px] font-bold text-slate-400 tracking-tighter">
                Ayer - 04:15 PM
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleBitacora;
