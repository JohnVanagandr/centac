import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // 1. Buscamos el elemento por su ID (quitando el símbolo #)
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        // 2. Pequeño timeout para asegurar que el DOM ya renderizó la sección
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth", // Scroll suave
            block: "start", // Alineado al inicio de la sección
          });
        }, 100);
      }
    } else {
      // 3. Si no hay hash (ej: vas a la página de ofertas), sube al inicio
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash, pathname]); // Se ejecuta cada vez que cambie la ruta o el hash

  return null;
};

export default ScrollToHash;
