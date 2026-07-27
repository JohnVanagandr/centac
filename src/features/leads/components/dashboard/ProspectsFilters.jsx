// src/components/dashboard/ProspectsFilters.jsx
import React from "react";
import { STATUS_OPTIONS } from "../../constants/leadConstants";

export const ProspectsFilters = ({ 
  searchTerm, 
  onSearchChange, 
  statusFilter, 
  onStatusChange 
}) => (
  <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm items-center justify-between">
    
    {/* Buscador de texto libre */}
    <div className="relative flex-1 w-full max-w-md group">
      <span className="material-symbols-rounded absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand transition-colors pointer-events-none">
        search
      </span>
      <input
        type="text"
        placeholder="Buscar por nombre, correo o documento..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pl-12 pr-4 py-3 bg-slate-50 border-transparent focus:bg-white focus:border-brand/30 focus:ring-4 focus:ring-brand/5 rounded-xl text-sm font-medium outline-none transition-all placeholder:text-slate-400"
      />
    </div>

    {/* Selector de Estado */}
    <div className="relative w-full md:w-64 group">
      <span className="material-symbols-rounded absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand transition-colors pointer-events-none">
        filter_list
      </span>
      <select
        value={statusFilter}
        onChange={(e) => onStatusChange(e.target.value)}
        className="w-full pl-12 pr-4 py-3 bg-slate-50 border-transparent focus:bg-white focus:border-brand/30 focus:ring-4 focus:ring-brand/5 rounded-xl text-sm font-medium outline-none transition-all appearance-none cursor-pointer text-slate-700"
      >
        {STATUS_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  </div>
);