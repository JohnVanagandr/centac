import React from "react";
import Navbar from "./components/layout/Navbar";
import Slider from "./components/Hero/Slider";
import Estrategia from "./components/features/Estrategia";
import Nosotros from "./components/features/Nosotros";
import Oferta from "./components/features/Oferta";
import Contacto from "./components/features/Contacto";

function App() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      {/* Así de limpio queda nuestro orquestador principal */}
      <Slider />
      <Estrategia />
      <Nosotros />
      <Oferta />
      <Contacto />
    </main>
  );
}

export default App;
