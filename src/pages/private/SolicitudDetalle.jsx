// src/pages/private/SolicitudDetalle.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import { solicitudesData } from "../../data/solicitudesData";

// Importación de módulos
import DetalleHeader from "../../components/solicitudes/detalle/DetalleHeader";
import DetalleInfoCard from "../../components/solicitudes/detalle/DetalleInfoCard";
import DetalleSidebarActions from "../../components/solicitudes/detalle/DetalleSidebarActions";
import DetalleBitacora from "../../components/solicitudes/detalle/DetalleBitacora"; // <--- Nuevo Import

const SolicitudDetalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [solicitud, setSolicitud] = useState(null);
  const [estado, setEstado] = useState("");
  const [nota, setNota] = useState(""); // Estado para la nueva nota

  useEffect(() => {
    const data = solicitudesData.find((s) => s.id === id);
    if (data) {
      setSolicitud(data);
      setEstado(data.estado);
    }
  }, [id]);

  const handleUpdate = () => {
    if (estado === "Matriculado") {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#2563eb", "#10b981", "#f59e0b"],
      });
    }
    // Lógica para persistir datos...
  };

  const handleSaveNota = () => {

    setNota(""); // Limpiar el campo después de guardar
  };

  if (!solicitud)
    return (
      <div className="p-20 text-center font-bold text-slate-400 italic">
        Cargando expediente...
      </div>
    );

  return (
    <div className="max-w-[1400px] mx-auto space-y-8 animate-in fade-in slide-in-from-left-4 duration-700 pb-24">
      <DetalleHeader
        id={solicitud.id}
        estado={solicitud.estado}
        onBack={() => navigate(-1)}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Información del Lead */}
          <DetalleInfoCard solicitud={solicitud} />

          {/* Bitácora de Seguimiento */}
          <DetalleBitacora
            nota={nota}
            setNota={setNota}
            onSaveNota={handleSaveNota}
          />
        </div>

        <div className="lg:col-span-1">
          <DetalleSidebarActions
            estado={estado}
            setEstado={setEstado}
            onUpdate={handleUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default SolicitudDetalle;
