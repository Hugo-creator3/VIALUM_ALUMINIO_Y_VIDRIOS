import { AtSign, BriefcaseBusiness, Camera } from "lucide-react";
import { AluminumProfileSVG } from "@/components/ui/AluminumProfileSVG";

const SITEMAP = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

const SERVICES = [
  "Canceles de baño",
  "Ventanas y puertas",
  "Portones y Barandales",
  "Muebles a medida",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-graphite-950 pt-20">
      <AluminumProfileSVG
        animateSweep={false}
        className="pointer-events-none absolute -bottom-24 left-1/2 h-[260px] w-[900px] -translate-x-1/2 opacity-[0.12]"
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-display text-sm font-semibold tracking-[0.14em] text-aluminum-100">
              EL&nbsp;<span className="text-glass-400">CERCHO</span>
            </span>
            <p className="mt-4 max-w-[220px] font-body text-sm leading-relaxed text-steel-400">
              Carpintería de aluminio y vidrio de alta precisión, desde 2007.
            </p>
            <div className="mt-5 flex gap-3">
              <SocialIcon href="#" icon={<Camera size={16} />} />
              <SocialIcon href="#" icon={<AtSign size={16} />} />
              <SocialIcon href="#" icon={<BriefcaseBusiness size={16} />} />
            </div>
          </div>

          <FooterColumn title="Mapa del sitio" links={SITEMAP} />
          <FooterColumn title="Servicios" links={SERVICES.map((s) => ({ label: s, href: "#catalogo" }))} />

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-steel-400">Contacto</h4>
            <ul className="mt-4 space-y-2 font-body text-sm text-steel-300">
              <li>vialum-cercho@hotmail.com</li>
              <li>+52 271 700 7637</li>
              <li>Córdoba, Santa Cruz Buena Vista, Avenida 5 de Mayo</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 font-mono text-xs text-steel-600 sm:flex-row">
          <span>© {new Date().getFullYear()} EL CERCHO. Todos los derechos reservados.</span>
          <span>Aviso de privacidad · Términos de servicio</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-widest text-steel-400">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              data-lenis-scroll-to={l.href.startsWith("#") ? l.href : undefined}
              className="font-body text-sm text-steel-300 transition-colors hover:text-glass-400"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-steel-300 transition-colors hover:border-glass-400/50 hover:text-glass-400"
    >
      {icon}
    </a>
  );
}
