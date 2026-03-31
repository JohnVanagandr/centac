import React from "react";

import { Slider, Estrategia, Nosotros, Oferta, Contacto } from "@/features/home";
import { Banner } from "@/components/common";
import HomeLayout from "@/layouts/HomeLayout";

const Home = () => {
  return (
    <HomeLayout>
      <Slider />
      <Estrategia />
      <Nosotros />
      <Oferta />
      <Contacto />
      <Banner /> 
    </HomeLayout>
  );
};

export default Home;
