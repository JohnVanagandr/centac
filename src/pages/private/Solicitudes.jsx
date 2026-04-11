import React, { useState, useEffect } from "react";
import { solicitudesData } from "../../mocks/solicitudesData";
import SolicitudesHeader from "../../components/solicitudes/SolicitudesHeader";
import SolicitudesControls from "../../components/solicitudes/SolicitudesControls";
import SolicitudesTable from "../../components/solicitudes/SolicitudesTable";
import SolicitudesPagination from "../../components/solicitudes/SolicitudesPagination";

const Solicitudes = () => {
  const [filtro, setFiltro] = useState("Todas");
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const registrosPorPagina = 10;

  // 1. Lógica de Filtrado (Se mantiene aquí porque es el estado que comparten todos)
  const filtradas = solicitudesData.filter((sol) => {
    const matchEstado = filtro === "Todas" || sol.estado === filtro;
    const matchSearch =
      sol.aprendiz.toLowerCase().includes(busqueda.toLowerCase()) ||
      sol.id.toLowerCase().includes(busqueda.toLowerCase());
    return matchEstado && matchSearch;
  });

  // 2. Cálculo de KPIs y Paginación
const stats = {
  // Antes buscaba 'Pendiente', ahora sumamos los 'Contactados' como gestión activa
  pendientes: solicitudesData.filter((s) => s.estado === "Pendiente").length,
  enProceso: solicitudesData.filter((s) => s.estado === "Contactado").length,
  exito: solicitudesData.filter((s) => s.estado === "Matriculado").length,
};
  const totalPaginas = Math.ceil(filtradas.length / registrosPorPagina);
  const dataPaginada = filtradas.slice(
    (paginaActual - 1) * registrosPorPagina,
    paginaActual * registrosPorPagina,
  );

  // 3. Efectos
  useEffect(() => setPaginaActual(1), [filtro, busqueda]);

  return (
    <div className="space-y-8 pb-10">
      <SolicitudesHeader stats={stats} />

      <SolicitudesControls
        filtro={filtro}
        setFiltro={setFiltro}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />

      <SolicitudesTable data={dataPaginada} />

      <SolicitudesPagination
        paginaActual={paginaActual}
        totalPaginas={totalPaginas}
        setPaginaActual={setPaginaActual}
        totalRegistros={filtradas.length}
      />
    </div>
  );
};

export default Solicitudes;
