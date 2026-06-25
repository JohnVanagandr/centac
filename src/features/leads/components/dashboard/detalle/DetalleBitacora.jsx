import React from "react";

export const DetalleBitacora = ({ nota, setNota, onSaveNota, comentarios = [] }) => {
  // Función auxiliar para obtener las iniciales del usuario
  const getIniciales = (name) => {
    if (!name) return "US";
    return name
      .split(" ")
      .map((n) => n.charAt(0))
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

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
          Cualquier Asesor
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

        {/* Historial de Notas (Timeline Dinámico) */}
        <div className="space-y-6">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[2px] mb-2">
            Historial Reciente
          </p>

          {comentarios.length === 0 ? (
            <div className="p-6 text-center bg-slate-50 rounded-2xl border border-slate-100 border-dashed">
              <p className="text-xs text-slate-400 font-medium italic">
                No hay interacciones registradas para este expediente todavía.
              </p>
            </div>
          ) : (
            comentarios.map((c, index) => {
              const nombreUsuario = c.user?.name || "Asesor Sistema";
              const esPrimero = index === 0;

              return (
                <div 
                  key={c.id || index} 
                  className={`p-6 bg-slate-50/50 rounded-2xl border border-slate-100 relative group hover:bg-white hover:shadow-md transition-all duration-300 ${!esPrimero ? 'opacity-80' : ''}`}
                >
                  {/* Indicador de la última interacción */}
                  <div className={`absolute left-0 top-6 w-1 h-10 rounded-r-full ${esPrimero ? 'bg-brand' : 'bg-slate-300'}`}></div>
                  
                  <p className="text-sm text-slate-600 leading-relaxed italic">
                    "{c.comment}"
                  </p>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-[8px] font-bold text-slate-600">
                        {getIniciales(nombreUsuario)}
                      </div>
                      <span className="text-[9px] font-bold text-slate-800 uppercase">
                        {nombreUsuario}
                      </span>
                    </div>
                    <span className="text-[9px] font-bold text-slate-400">
                      {c.created_at ? new Date(c.created_at).toLocaleDateString() : "Reciente"}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};