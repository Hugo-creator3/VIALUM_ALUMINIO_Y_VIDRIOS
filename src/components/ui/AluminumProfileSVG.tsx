import { motion } from "framer-motion";

interface AluminumProfileSVGProps {
  className?: string;
  /** Si es true, anima un barrido de luz sobre las líneas (usar solo una vez por vista) */
  animateSweep?: boolean;
}

/**
 * Elemento firma de la marca: el corte transversal de un perfil de aluminio
 * (como en un plano técnico de extrusión), con cámaras internas, junta de
 * vidrio y un barrido de luz que evoca el sol atravesando el cristal.
 */
export function AluminumProfileSVG({
  className,
  animateSweep = true,
}: AluminumProfileSVGProps) {
  return (
    <svg
      viewBox="0 0 900 500"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sweepGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-glass-400)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--color-glass-400)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--color-amber-400)" stopOpacity="0" />
        </linearGradient>
        <mask id="sweepMask">
          <motion.rect
            y="0"
            height="500"
            width="220"
            fill="white"
            initial={{ x: -260 }}
            animate={animateSweep ? { x: 960 } : { x: -260 }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              repeatDelay: 2.4,
              ease: "easeInOut",
            }}
          />
        </mask>
      </defs>

      {/* Perfil base — marco exterior */}
      <g stroke="var(--color-steel-600)" strokeWidth="1.5" opacity="0.55">
        <rect x="40" y="60" width="120" height="380" rx="6" />
        <rect x="66" y="86" width="68" height="328" rx="3" />
        <rect x="86" y="106" width="28" height="288" rx="2" />
        {/* junta / cámara de aislamiento */}
        <path d="M40 250 H160 M66 250 H134" strokeDasharray="3 4" />
      </g>

      {/* Panel de vidrio (dos hojas, cámara de aire) */}
      <g stroke="var(--color-steel-400)" strokeWidth="1.2" opacity="0.6">
        <rect x="180" y="90" width="14" height="320" />
        <rect x="230" y="90" width="14" height="320" />
        <path d="M194 130 L230 150 M194 200 L230 220 M194 280 L230 300 M194 350 L230 370" strokeOpacity="0.35" />
      </g>

      {/* Marco derecho, espejado */}
      <g stroke="var(--color-steel-600)" strokeWidth="1.5" opacity="0.55">
        <rect x="740" y="60" width="120" height="380" rx="6" />
        <rect x="766" y="86" width="68" height="328" rx="3" />
        <rect x="786" y="106" width="28" height="288" rx="2" />
        <path d="M740 250 H860 M766 250 H834" strokeDasharray="3 4" />
      </g>

      {/* Líneas de cota (dimensiones), vocabulario real de plano técnico */}
      <g stroke="var(--color-glass-300)" strokeWidth="1" opacity="0.4">
        <path d="M40 460 H160 M40 452 V468 M160 452 V468" />
        <path d="M180 460 H244 M180 452 V468 M244 452 V468" />
      </g>
      <text x="70" y="482" fill="var(--color-steel-400)" fontFamily="var(--font-mono)" fontSize="13">
        45mm
      </text>
      <text x="190" y="482" fill="var(--color-steel-400)" fontFamily="var(--font-mono)" fontSize="13">
        24mm DVH
      </text>

      {/* Barrido de luz sobre todo el trazo */}
      <g mask="url(#sweepMask)">
        <rect x="0" y="0" width="900" height="500" fill="url(#sweepGradient)" opacity="0.5" />
      </g>
    </svg>
  );
}
