/**
 * Módulo de Animación de Scroll (Scroll Reveal)
 * Utiliza IntersectionObserver para un rendimiento optimizado.
 */
export const initScrollReveal = (selector = ".reveal", threshold = 0.15) => {
  const elements = document.querySelectorAll(selector);

  // Configuración del observador
  const observerOptions = {
    root: null, // Viewport del navegador
    rootMargin: "0px",
    threshold: threshold, // Porcentaje de visibilidad para activar
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Activamos la animación agregando la clase CSS
        entry.target.classList.add("active");

        // Optimización: Dejamos de observar una vez que ya se animó
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Iniciamos la vigilancia de cada elemento marcado
  elements.forEach((el) => observer.observe(el));
};
