import React from "react";

import Estrategia from "../../components/features/Estrategia";
import Oferta from "../../components/features/Oferta";
import Slider from "../../components/Hero/Slider";
import Nosotros from "../../components/features/Nosotros";
import BannerFinanciacion from "../../components/features/BannerFinanciacion";
import FormularioContacto from "../../components/FormularioContacto/FormularioContacto";

const Home = () => {
  return (
    <>
      <Slider />
      <Estrategia />
      <Nosotros />
      <Oferta />
      <FormularioContacto />
      <BannerFinanciacion />
    </>
  );
};

export default Home;
