# Landing Page — Carpintería de Aluminio y Vidrio

Landing modular en React + TypeScript + Tailwind CSS v4 + Framer Motion + Lenis.
Dirección visual: **grafito / vidrio / ámbar**, con un perfil de aluminio en
corte transversal como elemento firma (fondo del Hero y divisor del Footer).

## 1. Instalar dependencias

```bash
npm install framer-motion lenis lucide-react
```

Si aún no tienes Tailwind v4 y shadcn/ui inicializados en el proyecto:

```bash
npm install tailwindcss @tailwindcss/vite
npx shadcn@latest init
```

> Los componentes de formulario (`input`, `select`, `textarea`) se
> implementaron con clases utilitarias planas en `Contacto.tsx` para que
> funcionen sin dependencias extra. Si prefieres los componentes reales de
> shadcn, corre `npx shadcn@latest add input select textarea button` y
> reemplaza las etiquetas nativas por sus equivalentes `@/components/ui/*`.

## 2. Alias de imports

Todos los componentes usan el alias `@/`. En `vite.config.ts`:

```ts
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
```

Y en `tsconfig.json` (dentro de `compilerOptions`):

```json
{
  "baseUrl": ".",
  "paths": { "@/*": ["./src/*"] }
}
```

## 3. Estructura de archivos

```
src/
├── App.tsx
├── index.css                     # tokens de tema Tailwind v4 (@theme)
├── lib/
│   └── useLenis.ts                # hook de scroll suave
└── components/
    ├── WhatsAppFloat.tsx
    ├── layout/
    │   ├── Navbar.tsx
    │   └── Footer.tsx
    ├── sections/
    │   ├── Hero.tsx
    │   ├── QuienesSomos.tsx
    │   ├── Catalogo.tsx
    │   ├── Blog.tsx
    │   └── Contacto.tsx
    └── ui/
        ├── AluminumProfileSVG.tsx  # elemento firma de marca
        ├── SpecTag.tsx
        └── ShimmerButton.tsx
```

## 4. Pendientes de negocio antes de publicar

- `WhatsAppFloat.tsx`: reemplazar `WHATSAPP_NUMBER` por el número real (formato E.164, sin `+`).
- `Contacto.tsx`: conectar `handleSubmit` a tu backend / servicio de email (actualmente simula el envío).
- `Footer.tsx` / `Contacto.tsx`: actualizar teléfono, correo y dirección reales.
- `Blog.tsx`: sustituir los tres posts de ejemplo por contenido real; los bloques de imagen usan un degradado placeholder listo para recibir `<img>` o `background-image`.
- Fuentes: el `@import` de Google Fonts en `index.css` es para desarrollo rápido; en producción autoaloja con `@fontsource/space-grotesk`, `@fontsource/inter` y `@fontsource/ibm-plex-mono`.

## 5. Accesibilidad y rendimiento ya cubiertos

- `prefers-reduced-motion` respetado (Lenis se desactiva, animaciones se acortan vía CSS).
- Focus visible en botones (`focus-visible:ring`).
- Diseño mobile-first, probado en breakpoints `sm/md/lg`.
- `viewport={{ once: true }}` en todas las animaciones de scroll-reveal para no re-disparar en cada scroll.
