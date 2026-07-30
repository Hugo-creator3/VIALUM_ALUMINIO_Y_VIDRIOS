export interface Post {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  accent: string;
  content: string;
}

export const POSTS: Post[] = [
  {
    slug: "fachadas-muro-cortina",
    category: "Tendencias",
    title: "Fachadas de muro cortina: la nueva piel de la arquitectura comercial",
    excerpt:
      "Por qué cada vez más despachos eligen envolventes de vidrio estructural sobre mampostería tradicional.",
    accent: "from-glass-400/30 to-graphite-900",
    content:
      "Exploramos las razones por las que las fachadas de muro cortina se han convertido en una solución de alto impacto para proyectos comerciales y residenciales de vanguardia.",
  },
  {
    slug: "mantenimiento-canceles-bano",
    category: "Mantenimiento",
    title: "Cómo alargar la vida útil de tus canceles de baño",
    excerpt:
      "Limpieza, lubricación de rieles y señales tempranas de desgaste en herrajes y sellos.",
    accent: "from-amber-500/25 to-graphite-900",
    content:
      "Un mantenimiento básico y periódico ayuda a conservar el rendimiento, la estética y la durabilidad de los sistemas de vidrio en ambientes húmedos.",
  },
  {
    slug: "dvh-vs-vidrio-simple",
    category: "Guía técnica",
    title: "DVH vs. vidrio simple: qué gana realmente tu factura eléctrica",
    excerpt:
      "Comparativa real de aislamiento térmico entre sistemas de doble y triple acristalamiento.",
    accent: "from-steel-400/25 to-graphite-900",
    content:
      "La elección entre un sistema DVH y un vidrio simple puede influir de forma considerable en confort, consumo y eficiencia energética.",
  },
  {
    slug: "vidrio-proyectos-residenciales",
    category: "Diseño",
    title: "El poder del vidrio en proyectos residenciales de alto nivel",
    excerpt:
      "Cómo integrar transparencia, privacidad y confort térmico sin sacrificar estética.",
    accent: "from-cyan-500/20 to-graphite-900",
    content:
      "El vidrio bien dimensionado permite abrir visualmente el espacio sin perder privacidad, control térmico o sofisticación.",
  },
  {
    slug: "checklist-instalacion",
    category: "Instalación",
    title: "Planificar una instalación sin sorpresas: checklist para obra",
    excerpt:
      "Puntos clave para evitar retrabajos, tiempos muertos y errores de medición en obra.",
    accent: "from-violet-500/20 to-graphite-900",
    content:
      "Una buena planeación previa reduce riesgos, mejora la coordinación de obra y acelera la puesta en marcha del sistema.",
  },
  {
    slug: "precision-perfiles",
    category: "Casos de éxito",
    title: "Cuando la precisión de los perfiles marca la diferencia",
    excerpt:
      "Una mirada a proyectos en los que el detalle constructivo elevó el resultado final.",
    accent: "from-emerald-500/20 to-graphite-900",
    content:
      "Los detalles constructivos bien ejecutados convierten un proyecto funcional en una pieza de alto valor arquitectónico.",
  },
];