import React from "react";

import Estrategia from "../../components/features/Estrategia";
import Oferta from "../../components/features/Oferta";
import Slider from "../../components/Hero/Slider";
import Nosotros from "../../components/features/Nosotros";
import BannerFinanciacion from "../../components/features/BannerFinanciacion";
import Contacto from "../../components/features/Contacto";

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
