import React from "react";
import { STATUS_OPTIONS } from "../../constants/leadConstants";

export const StatusFilter = ({ statusFilter, onStatusChange }) => (
  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-2 rounded-2xl border border-slate-200/60 shadow-sm">
    <div className="relative flex-1 max-w-xs group">
      <span className="material-symbols-rounded absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand transition-colors">
        filter_list
      </span>
      <select
        value={statusFilter}
        onChange={(e) => onStatusChange(e.target.value)}
        className="w-full pl-12 pr-4 py-3 bg-slate-50 border-transparent focus:bg-white focus:border-brand/30 focus:ring-4 focus:ring-brand/5 rounded-xl text-sm font-medium outline-none transition-all appearance-none cursor-pointer"
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