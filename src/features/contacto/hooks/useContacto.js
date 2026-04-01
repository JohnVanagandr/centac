import { useState } from "react";

export const useContacto = () => {
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulación de envío a Laravel
    setTimeout(() => {
      console.log("Datos enviados:", formData);
      setLoading(false);
      setSuccess(true);
      setFormData({ nombre: "", email: "", mensaje: "" });
    }, 2000);
  };

  return { formData, loading, success, handleChange, handleSubmit };
};