import React from "react";
import { requestStats, recentRequests } from "../../data/dashboardData";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Navigation";
import { StatItem } from "@/components/ui/DataDisplay";
import {Table, Badge} from "@/components/ui/DataDisplay";

const DashboardHome = () => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* 1. SECCIÓN DE MÉTRICAS (Resumen por estados) */}
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

      {/* 2. SECCIÓN DE TABLA (Detalle de solicitudes) */}
      <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden">
        {/* Cabecera de la Tabla */}
        <div className="p-8 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-800 tracking-tight">
              Solicitudes Recientes
            </h3>
            <p className="text-xs text-slate-400 font-medium">
              Historial actualizado de trámites y procesos
            </p>
          </div>
          <Button 
            as={Link} 
            to="/dashboard/solicitudes"
            intent="ghost" size="xs">
              Ver Todas
          </Button>
        </div>

        {/* Tabla */}
        <Table>
          <Table.Header>
            <Table.HeadCell>Folio</Table.HeadCell>
            <Table.HeadCell>Aprendiz</Table.HeadCell>
            <Table.HeadCell>Trámite</Table.HeadCell>
            <Table.HeadCell>Fecha</Table.HeadCell>
            <Table.HeadCell>Estado</Table.HeadCell>
          </Table.Header>
          <Table.Body>
            {recentRequests.map((req) => (
              <Table.Row key={req.id}>
                <Table.Cell className="text-[11px] font-bold text-slate-800">
                  {req.id}
                </Table.Cell>
                <Table.Cell>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center text-[10px] font-bold text-brand shadow-inner">
                      {req.user.charAt(0)}
                    </div>
                  <span className="text-xs font-semibold text-slate-700">{req.user}</span>
                </div>
              </Table.Cell>
              <Table.Cell className="text-xs text-slate-500 font-medium">
                {req.type}
              </Table.Cell>
              <Table.Cell className="text-xs text-slate-400 font-medium">
                {req.date}
              </Table.Cell>
              <Table.Cell>
                {/* Aquí usamos tu componente de Badge */}
                <Badge 
                    variant="solid" // Aquí activamos el modo vibrante
                    intent={
                      req.status === "Atendida" ? "success" : 
                      req.status === "En Proceso" ? "info" : 
                      req.status === "Pendiente" ? "warning" : "neutral"
                    }
                  >
                    {req.status}
                  </Badge>
              </Table.Cell>
            </Table.Row>
          ))}
          </Table.Body>
    </Table>

      </div>
    </div>
  );
};

export default DashboardHome;
