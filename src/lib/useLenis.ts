import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Inicializa Lenis (scroll suave por rueda/trackpad) y lo sincroniza con
 * requestAnimationFrame. La navegación a secciones (clicks en <Link>) la
 * resuelve `useScrollToHash`, no este hook — así Lenis se limita a la
 * inercia del scroll y no interfiere con el enrutador.
 */
export function useLenis() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}
