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
  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
  }

  if (sliderContainer) {
    sliderContainer.addEventListener("mouseenter", stopAutoplay);
    sliderContainer.addEventListener("mouseleave", startAutoplay);

    // Soporte para Swipe (Toque en móviles)
    let touchStartX = 0;
    let touchEndX = 0;

    sliderContainer.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoplay();
    }, { passive: true });

    sliderContainer.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleGesture();
      startAutoplay();
    }, { passive: true });

    const handleGesture = () => {
      if (touchEndX < touchStartX - 50) nextSlide(); // Deslizar a la izquierda
      if (touchEndX > touchStartX + 50) prevSlide(); // Deslizar a la derecha
    };
  }
};

// --- 4. Interfaz Pública ---

export const initSlider = () => {
  // Verificación básica: si no hay track o slides, no iniciamos nada
  if (!track || slides.length === 0) return;

  setEventListeners();
  startAutoplay(); // Iniciamos el carrusel
};
