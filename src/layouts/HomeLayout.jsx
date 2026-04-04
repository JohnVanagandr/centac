import React from "react";

import {BackToTop} from "../components/ui/Navigation";
import { Banner } from "@/components/common";
import {Header, Footer } from "@/components/layout";

const HomeLayout = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">

      <Header />

      <main className="flex-grow pt-[117px]">
        {children}
      </main>
      <Banner />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default HomeLayout;
