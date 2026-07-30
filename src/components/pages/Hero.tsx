import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { ShimmerButton } from "@/components/ui/ShimmerButton";
import { SpecTag } from "@/components/ui/SpecTag";
import { AluminumProfileSVG } from "@/components/ui/AluminumProfileSVG";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), { stiffness: 60, damping: 15 });
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-4, 4]), { stiffness: 60, damping: 15 });
  const panX = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 50, damping: 16 });
  const panY = useSpring(useTransform(my, [-0.5, 0.5], [-10, 10]), { stiffness: 50, damping: 16 });

  function handlePointerMove(e: React.PointerEvent) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      id="hero"
      ref={containerRef}
      onPointerMove={handlePointerMove}
      className="blueprint-grid relative flex min-h-screen items-center overflow-hidden bg-graphite-950 pt-28"
    >
      {/* Perfil técnico de fondo */}
      <AluminumProfileSVG className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.35]" />

      {/* Glow ambiental */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-glass-400/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-amber-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Columna de texto */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex flex-wrap gap-2"
          >
            <SpecTag>Perfil Serie 3 · Aluminio</SpecTag>
            <SpecTag>Vidrio Templado 6mm</SpecTag>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-aluminum-100 sm:text-6xl lg:text-[3.6rem]"
          >
            Transformamos
            <br />
            espacios con{" "}
            <span className="text-glint">aluminio y vidrio</span> de alta precisión
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-6 max-w-lg font-body text-base leading-relaxed text-steel-300 sm:text-lg"
          >
            Fabricación e instalación de canceles, ventanería, fachadas y
            muebles a medida. Cada corte, junta y sellado calculado al
            milímetro para que el diseño y el aislamiento nunca compitan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <ShimmerButton to="/#contacto">
              Solicitar cotización
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </ShimmerButton>
            <ShimmerButton to="/#catalogo" variant="ghost">
              Ver catálogo
            </ShimmerButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex gap-10 border-t border-white/10 pt-6"
          >
            <Stat value="18+" label="Años fabricando" />
            <Stat value="+3,200" label="Proyectos entregados" />
            <Stat value="32dB" label="Reducción acústica" />
          </motion.div>
        </div>

        {/* Panel de vidrio 3D con parallax al mouse */}
        <motion.div
          style={{ rotateX: rotX, rotateY: rotY }}
          className="relative mx-auto hidden aspect-[3/4] w-full max-w-sm [perspective:1200px] lg:block"
        >
          <motion.div style={{ x: panX, y: panY }} className="glass-panel absolute inset-4 rounded-[28px]" />
          <motion.div
            style={{ x: useTransform(panX, (v) => v * 1.6), y: useTransform(panY, (v) => v * 1.6) }}
            className="glass-panel absolute inset-x-10 inset-y-10 rounded-3xl border-glass-400/20"
          />
          <div className="absolute inset-x-14 bottom-14 flex flex-col gap-2">
            <span className="font-mono text-xs text-glass-300">DVH · 24mm</span>
            <span className="font-display text-sm text-aluminum-100">Fachada modular</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-steel-400"
      >
        <ChevronDown size={22} />
      </motion.div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-2xl font-semibold text-aluminum-100">{value}</p>
      <p className="mt-1 font-mono text-xs text-steel-400">{label}</p>
    </div>
  );
}
