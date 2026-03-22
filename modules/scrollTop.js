/**
 * Módulo para gestionar el botón "Volver arriba" (Back to Top)
 */

// --- 1. Selección de elementos ---
const backToTopBtn = document.getElementById("back-to-top");

// --- 2. Métodos de lógica ---

const handleScroll = () => {
  // Si el usuario baja más de 400px, mostramos el botón
  if (window.scrollY > 400) {
    backToTopBtn.classList.remove(
      "translate-y-20",
      "opacity-0",
      "pointer-events-none",
    );
    backToTopBtn.classList.add(
      "translate-y-0",
      "opacity-100",
      "pointer-events-auto",
    );
  } else {
    // Si sube de nuevo, lo ocultamos
    backToTopBtn.classList.add(
      "translate-y-20",
      "opacity-0",
      "pointer-events-none",
    );
    backToTopBtn.classList.remove(
      "translate-y-0",
      "opacity-100",
      "pointer-events-auto",
    );
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// --- 3. Definición de Eventos ---

const setEventListeners = () => {
  // Evento de scroll en la ventana global
  // Usamos { passive: true } para optimizar el rendimiento al hacer scroll
  window.addEventListener("scroll", handleScroll, { passive: true });

  // Evento de clic en el botón
  backToTopBtn.addEventListener("click", scrollToTop);
};

// --- 4. Interfaz Pública ---

export const initScrollTop = () => {
  if (!backToTopBtn) return; // Validación de seguridad

  setEventListeners();
};
