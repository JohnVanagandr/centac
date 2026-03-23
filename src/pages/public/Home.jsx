import React from "react";

import Estrategia from "../../components/features/Estrategia";
import Oferta from "../../components/features/Oferta";
import Slider from "../../components/Hero/Slider";
import Nosotros from "../../components/features/Nosotros";
import Contacto from "../../components/features/Contacto";
import BannerFinanciacion from "../../components/features/BannerFinanciacion";

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
