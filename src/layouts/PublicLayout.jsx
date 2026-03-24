import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar/Navbar";
import Footer from "../components/layout/Footer";
import BackToTop from "../components/common/BackToTop";

const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default PublicLayout;
