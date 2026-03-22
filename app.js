import { initMenu } from "./modules/menu.js";
import { initSlider } from "./modules/slider.js";
import { initScrollReveal } from "./modules/reveal.js";
import { initScrollTop } from "./modules/scrollTop.js";
import { initContactForm } from "./modules/contact.js";

// Esperar a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  initSlider();
  // Inicializamos el módulo de animaciones
  initScrollReveal('.reveal', 0.15);  
  initScrollTop();
  initContactForm();
});