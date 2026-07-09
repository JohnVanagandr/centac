import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Navigation";
import { StatItem, Table, Badge } from "@/components/ui/DataDisplay";
import { useProspectsSummary } from "./hooks/useProspects";

const DashboardView = () => {
  const { data, isLoading } = useProspectsSummary();

  const requestStats = [
    { id: 1, icon: "mail", label: "Total Solicitudes", value: data?.statistics?.total || 0, bg: "bg-blue-50", color: "text-blue-600" },
    { id: 2, icon: "pending_actions", label: "Pendientes", value: data?.statistics?.pendientes || 0, bg: "bg-amber-50", color: "text-amber-600" },
    { id: 3, icon: "autorenew", label: "En Proceso", value: data?.statistics?.en_proceso || 0, bg: "bg-indigo-50", color: "text-indigo-600" },
    { id: 4, icon: "check_circle", label: "Atendidas", value: data?.statistics?.atendidas || 0, bg: "bg-green-50", color: "text-green-600" }
  ];

  const recentRequests = data?.latest_requests || [];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-brand rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* SECCIÓN DE MÉTRICAS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {requestStats.map((stat) => (
              <StatItem
                key={stat.id}
                icon={stat.icon}
                label={stat.label}
                value={stat.value}
                bg={stat.bg}
                color={stat.color}
              />
          ))}
      </div>

      {/* SECCIÓN DE TABLA */}
      <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-black text-slate-800 tracking-tight">Solicitudes Recientes</h3>
            <p className="text-sm font-medium text-slate-500 mt-1">
              Últimas solicitudes de información académica.
            </p>
          </div>
          <Link to="/dashboard/solicitudes">
            <Button variant="outline" size="sm" icon="arrow_forward">
              Ver Todas
            </Button>
          </Link>
        </div>

        <Table>
          <Table.Header>
            <Table.HeadCell>ID</Table.HeadCell>
            <Table.HeadCell>Prospecto</Table.HeadCell>
            <Table.HeadCell>Contacto / Interés</Table.HeadCell>
            <Table.HeadCell>Fecha</Table.HeadCell>
            <Table.HeadCell>Estado</Table.HeadCell>
          </Table.Header>
          <Table.Body>
            {recentRequests.length === 0 ? (
              <Table.Row>
                <Table.Cell colSpan="5" className="text-center py-10 text-slate-400 font-medium">
                  No hay solicitudes recientes para mostrar.
                </Table.Cell>
              </Table.Row>
            ) : (
              recentRequests.map((req) => (
                <Table.Row key={req.id}>
                  <Table.Cell className="text-xs font-bold text-slate-400">
                    #{req.id}
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center text-[10px] font-bold text-brand shadow-inner uppercase shrink-0">
                        {req.full_name ? req.full_name.charAt(0) : "U"}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-slate-700">
                          {req.full_name || "Usuario Desconocido"}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {req.email}
                        </span>
                      </div>
                    </div>
                  </Table.Cell>
                  <Table.Cell className="text-xs text-slate-500 font-medium max-w-[200px] truncate" title={req.program_name || req.message}>
                    {req.program_name || req.message || "Información General"}
                  </Table.Cell>
                  <Table.Cell className="text-xs text-slate-400 font-medium">
                    {req.created_at ? new Date(req.created_at).toLocaleDateString() : "Reciente"}
                  </Table.Cell>
                  <Table.Cell>
                    <Badge 
                        variant="solid" 
                        intent={
                          req.status === "Atendida" || req.status === "attended" ? "success" : 
                          req.status === "En Proceso" || req.status === "in_progress" ? "info" : 
                          req.status === "Pendiente" || req.status === "pending" ? "warning" : "neutral"
                        }
                      >
                        {req.status === "attended" ? "Atendida" : 
                         req.status === "in_progress" ? "En Proceso" : 
                         req.status === "pending" ? "Pendiente" : (req.status || "Pendiente")}
                      </Badge>
                  </Table.Cell>
                </Table.Row>
              ))
            )}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default DashboardView;