import { useState } from "react";

/**
 * Hook personalizado para manejar cualquier formulario
 * @param {Object} initialState - Estado inicial de los campos (ej. { nombre: '', email: '' })
 * @param {Function} validateRules - Función que contiene las reglas de validación
 */
export const useForm = (initialState, validateRules) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Maneja los cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    // Si el usuario empieza a escribir, borramos el error de ese campo en específico
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  // NUEVA FUNCIÓN: Permite limpiar el formulario manualmente cuando la vista lo decida
  const resetForm = () => {
    setValues(initialState);
    setErrors({});
    setIsSubmitted(false);
  };

  // Maneja el evento submit del formulario
  const handleSubmit = (submitAction) => async (e) => {
    e.preventDefault();

    // 1. Ejecutamos las reglas de validación
    const validationErrors = validateRules(values);
    setErrors(validationErrors);

    // 2. Si no hay errores (el objeto está vacío), procedemos a enviar
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);

      // Ejecutamos la acción que nos pasen por parámetro (ej. simular el fetch al backend)
      await submitAction(values);

      setIsSubmitting(false);
      setIsSubmitted(true);

      // ELIMINAMOS setValues(initialState) de aquí.
      // El formulario ya no se suicida automáticamente.

      // Ocultamos el mensaje de éxito después de 5 segundos
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    isSubmitted,
    resetForm, // Exportamos la herramienta por si algún formulario la necesita
  };
};
