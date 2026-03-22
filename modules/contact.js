/**
 * Módulo para gestionar el Formulario de Contacto
 */

// --- 1. Selección de elementos ---
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

// --- 2. Métodos de lógica (Funcionalidad) ---

const toggleLoadingState = (isSubmiting) => {
  const submitBtn = contactForm.querySelector('button[type="submit"]');

  if (isSubmiting) {
    submitBtn.innerHTML =
      '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;
  } else {
    submitBtn.innerHTML = "Enviar Información";
    submitBtn.disabled = false;
  }
};

const showSuccessMessage = () => {
  formFeedback.classList.remove("hidden");

  // Ocultar automáticamente tras 5 segundos
  setTimeout(() => {
    formFeedback.classList.add("hidden");
  }, 5000);
};

const handleSubmit = (e) => {
  e.preventDefault(); // Evita recargar la página

  // 1. Activar estado de carga
  toggleLoadingState(true);

  // 2. Simulación de envío al backend (Fetch API)
  setTimeout(() => {
    // 3. Limpiar formulario y estado
    contactForm.reset();
    toggleLoadingState(false);

    // 4. Mostrar feedback al usuario
    showSuccessMessage();

    console.log("Formulario enviado con éxito (Simulado)");
  }, 1500);
};

// --- 3. Definición de Eventos ---
const setEventListeners = () => {
  contactForm.addEventListener("submit", handleSubmit);
};

// --- 4. Interfaz Pública ---
export const initContactForm = () => {
  if (!contactForm) return; // Validación por si el formulario no está en la página actual
  setEventListeners();
};
