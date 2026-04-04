import React from "react";
import { 
  FooterIdentity, 
  FooterContact, 
  FooterInstitution, 
  FooterBottom 
} from "./";

export const Footer = () => {
  return (
    <footer className="bg-navy pt-16 pb-8 border-t-[6px] border-brand relative overflow-hidden">
      {/* Detalle visual sutil de fondo */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 relative z-10">
        <FooterIdentity />
        <FooterContact />
        <FooterInstitution />
      </div>

      <FooterBottom />
    </footer>
  );
};