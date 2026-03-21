/**
 * Módulo para gestionar el comportamiento del Menú Móvil
 */

// --- 1. Selección de elementos del DOM (Privado del módulo) ---
const menuBtn = document.getElementById("menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");

// --- 2. Métodos de lógica (Funcionalidad) ---
const toggleMenu = () => {
  const isOpen = mobileMenu.classList.contains("open");

  mobileMenu.classList.toggle("open");
  mobileMenu.setAttribute("aria-hidden", isOpen ? "true" : "false");

  // Bloquear/Desbloquear scroll
  document.body.style.overflow = isOpen ? "" : "hidden";
};

// --- 3. Definición de Eventos ---
const setEventListeners = () => {
  if (!menuBtn || !mobileMenu) return; // Validación de seguridad

  menuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn?.addEventListener("click", toggleMenu); // Optional chaining por si no existe

  mobileLinks.forEach((link) => {
    link.addEventListener("click", toggleMenu);
  });
};

// --- 4. Interfaz Pública (Inicializador) ---
export const initMenu = () => {
  setEventListeners();
  // Aquí podrías agregar otras lógicas de arranque si fuera necesario
};
