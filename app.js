
import { initMenu } from "./modules/menu.js";
import { initSlider } from "./modules/slider.js";

// Esperar a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  initSlider();
});
