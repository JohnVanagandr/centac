import React from "react";
import { Header } from "../components/layout/Header";
import {BackToTop} from "../components/ui/Navigation";
import Footer from "../components/layout/Footer";
import { Banner } from "@/components/common";

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