import React from "react";
import TopBar from "@/components/sections/Public/Shared/TopBar";
import BackToTop from "../components/sections/Public/Shared/BackToTop";
import { Header } from "../components/sections/Public/Shared/Header";
import Footer from "../components/sections/Public/Shared/Footer";

const HomeLayout = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      
      <Header />

      <main className="flex-grow">
        {children}
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default HomeLayout;
