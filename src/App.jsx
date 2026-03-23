import React from "react";
import Navbar from "./components/layout/Navbar";
import Slider from "./components/Hero/Slider";
import Estrategia from "./components/features/Estrategia";

function App() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      {/* Así de limpio queda nuestro orquestador principal */}
      <Slider />
      <Estrategia />
    </main>
  );
}

export default App;
