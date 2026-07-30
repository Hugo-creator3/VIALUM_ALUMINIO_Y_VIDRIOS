import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Al cambiar el hash de la URL (p. ej. tras un <Link to="/#contacto" />),
 * hace scroll suave hasta el elemento con ese id. Funciona tanto al navegar
 * entre páginas como al hacer click en un ancla estando ya en home.
 */
export function useScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    const id = hash.replace("#", "");
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
    return () => clearTimeout(timer);
  }, [hash, pathname]);
}
