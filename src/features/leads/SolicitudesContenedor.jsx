import React, { useState } from "react";
import { useProspects } from "./hooks/useProspects";
import { SummaryCards } from "./components/dashboard/SummaryCards";
import { StatusFilter } from "./components/dashboard/StatusFilter";
import { ProspectsTable } from "./components/dashboard/ProspectsTable";
import { Pagination } from "@/components/ui/Pagination";

export const SolicitudesContenedor = () => {
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("");

  const { data: apiResponse, isLoading, error } = useProspects(page, statusFilter);

  const prospects = Array.isArray(apiResponse?.data) ? apiResponse.data : [];
  const pagination = apiResponse?.pagination || {
    total: 0, per_page: 10, current_page: 1, last_page: 1, has_more: false,
  };
  const summary = apiResponse?.summary || {
    unattended: 0, in_process: 0, enrolled: 0,
  };

  const handleStatusChange = (newStatus) => {
    setStatusFilter(newStatus);
    setPage(1);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-2xl">
        <h3 className="font-bold text-lg mb-2">Error al cargar solicitudes</h3>
        <p className="text-sm">{error.message || "Por favor, intenta de nuevo más tarde."}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-10">
      <SummaryCards summary={summary} />
      <StatusFilter statusFilter={statusFilter} onStatusChange={handleStatusChange} />
      <ProspectsTable data={prospects} />
      <Pagination pagination={pagination} setPage={setPage} />
    </div>
  );
};