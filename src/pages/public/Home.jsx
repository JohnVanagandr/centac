import React from "react";

import { Slider, Estrategia, Nosotros, Oferta, Contacto } from "@/features/home";
import { Banner } from "@/components/common";


const Home = () => {
  return (
    <>
      <Slider />
      <Estrategia />
      <Nosotros />
      <Oferta />
      <Contacto />
      <Banner /> 
    </>
  );
};

export default Home;
