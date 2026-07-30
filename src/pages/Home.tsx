import { Hero } from "@/components/pages/Hero";
import { QuienesSomos } from "@/components/pages/QuienesSomos";
import { Catalogo } from "@/components/pages/Catalogo";
import { Blog } from "@/components/pages/Blog";
import { Contacto } from "@/components/pages/Contacto";

export function Home() {
  return (
    <>
      <Hero />
      <QuienesSomos />
      <Catalogo />
      <Blog />
      <Contacto />
    </>
  );
}
