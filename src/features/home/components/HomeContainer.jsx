import React from "react";
import { Slider, Estrategia, Nosotros, Oferta, Contacto } from "./"; 
import { Banner } from "@/components/common";

const HomeContainer = () => {

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

export default HomeContainer;