import React from "react";
import { Header } from "../components/sections/Public/Shared/Header";
import BackToTop from "../components/sections/Public/Shared/BackToTop";
import Footer from "../components/sections/Public/Shared/Footer";

const DetailLayout = ({ children }) => {

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      {/* Contenedor principal donde vivirá la vista de detalle */}
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
      
      {/* El botón flotante renderizado a nivel de Layout */}
      <BackToTop />
    </div>
  );
};

export default DetailLayout;