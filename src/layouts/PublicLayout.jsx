import React from "react";
import { Outlet } from "react-router-dom";
import BackToTop from "../components/sections/Public/Shared/BackToTop";
import { Header } from "../components/sections/Public/Shared/Header";
import Footer from "../components/sections/Public/Shared/Footer";

const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default PublicLayout;
