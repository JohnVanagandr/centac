import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Importamos los estilos globales (el archivo donde pusiste los @import)
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
