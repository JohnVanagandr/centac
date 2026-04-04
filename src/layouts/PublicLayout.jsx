import React from "react";

import {BackToTop} from "../components/ui/Navigation";
import { PageHeader, Banner } from "@/components/common";
import {Header, Footer } from "@/components/layout";

const PublicLayout = ({ children, title, subtitle, category }) => {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Header />

      <PageHeader title={title} subtitle={subtitle} category={category} />

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
