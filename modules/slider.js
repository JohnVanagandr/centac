/**
 * Módulo para gestionar el Slider con Autoplay y Pausa
 */

// --- 1. Estado y Variables del Módulo (Privado) ---
const track = document.getElementById("slider-track");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev-slide");
const nextBtn = document.getElementById("next-slide");
const sliderContainer = document.querySelector(".slider-container");

let currentIndex = 0;
const totalSlides = slides.length;
let sliderInterval = null; // Guardamos la referencia del intervalo

// --- 2. Métodos de Lógica ---

const updateSlider = () => {
  if (!track) return;
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
};

const nextSlide = () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
};

const prevSlide = () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
};

const startAutoplay = () => {
  // Limpiamos cualquier intervalo previo por seguridad
  stopAutoplay();
  sliderInterval = setInterval(nextSlide, 6000);
};

const stopAutoplay = () => {
  clearInterval(sliderInterval);
};

// --- 3. Definición de Eventos ---

const setEventListeners = () => {
  // Botones de navegación
  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
  }

  // Control de accesibilidad y pausa
  if (sliderContainer) {
    sliderContainer.addEventListener("mouseenter", stopAutoplay);
    sliderContainer.addEventListener("mouseleave", startAutoplay);
  }
};

// --- 4. Interfaz Pública ---

export const initSlider = () => {
  // Verificación básica: si no hay track o slides, no iniciamos nada
  if (!track || slides.length === 0) return;

  setEventListeners();
  startAutoplay(); // Iniciamos el carrusel
};
