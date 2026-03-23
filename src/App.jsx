import React from "react";
import Navbar from "./components/layout/Navbar";
import Slider from "./components/Hero/Slider";

function App() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      {/* Así de limpio queda nuestro orquestador principal */}
      <Slider />
    </main>
  );
}

export default App;
