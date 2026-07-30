interface SpecTagProps {
  children: React.ReactNode;
}

/** Etiqueta tipo cota de plano técnico: usada para specs reales (6mm, 32dB, Serie 3) */
export function SpecTag({ children }: SpecTagProps) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-graphite-800/80 px-3 py-1 font-mono text-xs tracking-wide text-glass-300">
      <span className="h-1 w-1 rounded-full bg-glass-400" />
      {children}
    </span>
  );
}
