import { motion, type Variants } from "framer-motion";
import { Thermometer, Volume2, ShieldCheck, Sparkles } from "lucide-react";
import { SpecTag } from "@/components/ui/SpecTag";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function QuienesSomos() {
  return (
    <section id="nosotros" className="relative bg-graphite-950 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mb-14 max-w-2xl"
        >
          <SpecTag>Quiénes somos</SpecTag>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-aluminum-100 sm:text-4xl">
            Precisión de taller, criterio de arquitecto
          </h2>
          <p className="mt-4 font-body text-steel-300">
            No vendemos ventanas: calculamos el comportamiento térmico,
            acústico y estructural de cada apertura antes de fabricarla.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-2">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="glass-panel group relative overflow-hidden rounded-3xl p-8 md:col-span-4 md:row-span-2"
          >
            <ShieldCheck className="text-glass-400" size={28} strokeWidth={1.5} />
            <h3 className="mt-6 font-display text-xl font-semibold text-aluminum-100">
              Calidad certificada en cada perfil
            </h3>
            <p className="mt-3 max-w-md font-body text-sm leading-relaxed text-steel-300">
              Trabajamos con aluminio de extrusión Serie 3 y Serie 4, vidrio
              templado y laminado con certificación de seguridad, y mano de
              obra propia — sin subcontratar la instalación final.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <SpecTag>Perfil Serie 3 / 4</SpecTag>
              <SpecTag>Vidrio Certificado NOM</SpecTag>
              <SpecTag>Garantía 5 años</SpecTag>
            </div>
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-glass-400/10 blur-3xl transition-opacity duration-500 group-hover:opacity-150" />
          </motion.div>

          <BentoCard
            icon={<Thermometer size={24} strokeWidth={1.5} />}
            title="Aislamiento térmico"
            desc="Cámara de aire DVH que reduce transferencia de calor hasta 40%."
            className="md:col-span-2"
          />
          <BentoCard
            icon={<Volume2 size={24} strokeWidth={1.5} />}
            title="Confort acústico"
            desc="Hasta 32dB de reducción en zonas de alto tráfico."
            className="md:col-span-2"
          />
          <BentoCard
            icon={<Sparkles size={24} strokeWidth={1.5} />}
            title="Innovación en diseño"
            desc="Perfiles minimalistas de bajo perfil visible, para maximizar la entrada de luz natural sin perder rendimiento estructural."
            className="md:col-span-6"
            horizontal
          />
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  icon,
  title,
  desc,
  className = "",
  horizontal = false,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  className?: string;
  horizontal?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className={`glass-panel rounded-3xl p-7 transition-colors duration-300 hover:border-glass-400/25 ${className} ${
        horizontal ? "flex items-center gap-6" : ""
      }`}
    >
      <span className="text-amber-400">{icon}</span>
      <div className={horizontal ? "" : "mt-5"}>
        <h3 className="font-display text-base font-semibold text-aluminum-100">{title}</h3>
        <p className="mt-2 font-body text-sm leading-relaxed text-steel-300">{desc}</p>
      </div>
    </motion.div>
  );
}
