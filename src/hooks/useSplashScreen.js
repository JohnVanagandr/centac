import { useState, useEffect } from "react";

/**
 * Hook personalizado para gestionar el estado del Splash Screen
 * @param {number} delay - Tiempo extra de espera en ms (default 1500)
 */
export const useSplashScreen = (delay = 1500) => {
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    const hideSplash = () => setTimeout(() => setIsAppLoading(false), delay);

    if (document.readyState === "complete") {
      hideSplash();
    } else {
      window.addEventListener("load", hideSplash);
      return () => window.removeEventListener("load", hideSplash);
    }
  }, [delay]);

  return isAppLoading;
};