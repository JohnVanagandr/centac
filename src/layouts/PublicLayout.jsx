import React from "react";
import TopBar from "@/components/layout/TopBar";
import {BackToTop} from "../components/ui/Navigation";
import { Header } from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { PageHeader } from "@/components/common";
import { Banner } from "@/components/common";

const PublicLayout = ({ children, title, subtitle }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      
      <Header />

      <PageHeader title={title} subtitle={subtitle} />

      <main className="flex-grow">
        {children}
      </main>
      <Banner />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default PublicLayout;
