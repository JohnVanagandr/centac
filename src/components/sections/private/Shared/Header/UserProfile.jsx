import React, { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex items-center gap-3 pl-5 border-l border-slate-100">
      <div className="text-right hidden md:block">
        <p className="text-xs font-bold text-slate-800 leading-tight">
          {user?.name || "Usuario"}
        </p>
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
          {user?.role || "Instructor"}
        </p>
      </div>

      <div className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center shadow-inner group cursor-pointer hover:border-brand/30 transition-colors">
        <span className="text-brand font-black text-sm uppercase">
          {user?.name?.charAt(0) || "U"}
        </span>
      </div>
    </div>
  );
};

export default UserProfile;