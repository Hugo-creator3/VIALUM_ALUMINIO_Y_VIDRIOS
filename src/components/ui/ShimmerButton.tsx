import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface ShimmerButtonProps {
  children: ReactNode;
  /** Ruta interna (usa React Router). Prioridad sobre `href`. */
  to?: string;
  /** URL externa o ancla simple. */
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "ghost";
  className?: string;
}

export function ShimmerButton({
  children,
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}: ShimmerButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3.5 font-display text-sm font-semibold tracking-wide transition-transform duration-300 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass-400 focus-visible:ring-offset-2 focus-visible:ring-offset-graphite-950";

  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-amber-500 to-amber-400 text-graphite-950 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] hover:scale-[1.03]"
      : "border border-white/15 text-aluminum-100 hover:border-glass-400/60 hover:scale-[1.03]";

  const classes = `${base} ${styles} ${className}`;

  const content = (
    <>
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  return (
    <motion.div whileTap={{ scale: 0.97 }} className="inline-block">
      {to ? (
        <Link to={to} onClick={onClick} className={classes}>
          {content}
        </Link>
      ) : href ? (
        <a
          href={href}
          onClick={onClick}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={classes}
        >
          {content}
        </a>
      ) : (
        <button type={type} onClick={onClick} className={classes}>
          {content}
        </button>
      )}
    </motion.div>
  );
}
