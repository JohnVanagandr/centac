import React from "react";
import {Header, Footer } from "@/components/layout";
import { Banner } from "@/components/common";
import {BackToTop} from "../components/ui/Navigation";

const DetailLayout = ({ children }) => {

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      {/* Contenedor principal donde vivirá la vista de detalle */}
      <main className="flex-grow">
        {children}
      </main>
      <Banner />
      <Footer />
      
      {/* El botón flotante renderizado a nivel de Layout */}
      <BackToTop />
    </div>
  );
};

export default DetailLayout;