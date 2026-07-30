import { motion } from "framer-motion";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { AluminumProfileSVG } from "@/components/ui/AluminumProfileSVG";
import { SpecTag } from "@/components/ui/SpecTag";
import { ShimmerButton } from "@/components/ui/ShimmerButton";
import type { CategoryData } from "@/data/products";

export function CategoryHero({ category }: { category: CategoryData }) {
  return (
    <section className="blueprint-grid relative overflow-hidden bg-graphite-950 pb-20 pt-40">
      <AluminumProfileSVG
        animateSweep={false}
        className="pointer-events-none absolute inset-x-0 top-0 h-full w-full opacity-[0.22]"
      />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-glass-400/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-1.5 font-mono text-xs text-steel-400"
        >
          <Link to="/" className="transition-colors hover:text-glass-400">
            Inicio
          </Link>
          <ChevronRight size={12} />
          <Link to="/#catalogo" className="transition-colors hover:text-glass-400">
            Catálogo
          </Link>
          <ChevronRight size={12} />
          <span className="text-steel-300">{category.label}</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <SpecTag>{category.eyebrow}</SpecTag>
          <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold tracking-tight text-aluminum-100 sm:text-5xl">
            {category.label}
          </h1>
          <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-steel-300 sm:text-lg">
            {category.heroDescription}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {category.heroSpecs.map((spec) => (
              <SpecTag key={spec}>{spec}</SpecTag>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <ShimmerButton to="/#contacto">Solicitar cotización de esta línea</ShimmerButton>
            <Link
              to="/#catalogo"
              className="inline-flex items-center gap-1.5 font-body text-sm text-steel-300 transition-colors hover:text-aluminum-100"
            >
              <ArrowLeft size={15} />
              Ver todas las categorías
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
