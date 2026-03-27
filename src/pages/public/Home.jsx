import React from "react";

import {
  Slider,
  Estrategia,
  Nosotros,
  Oferta,
  Contacto
} from "../../components/sections/Public/Home";
import BannerFinanciacion from "../../components/sections/Public/Shared/BannerFinanciacion";


const Home = () => {
  return (
    <>
      <Slider />
      <Estrategia />
      <Nosotros />
      <Oferta />
      <Contacto />
      <BannerFinanciacion />
    </>
  );
};

export default Home;
