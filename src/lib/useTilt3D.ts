import { useRef } from "react";
import type { PointerEvent } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

/** Rotación 3D sutil que sigue al puntero, usada en tarjetas interactivas. */
export function useTilt3D<T extends HTMLElement = HTMLDivElement>(strength = 7) {
  const ref = useRef<T>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [strength, -strength]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-strength, strength]), {
    stiffness: 200,
    damping: 20,
  });

  function onPointerMove(e: PointerEvent<T>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onPointerLeave() {
    mx.set(0);
    my.set(0);
  }

  return { ref, rotateX, rotateY, onPointerMove, onPointerLeave };
}
