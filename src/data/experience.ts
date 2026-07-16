import type { Experience } from '../types/content'

export const experience: Experience[] = [
  {
    id: 'caliente-mx',
    company: 'Caliente.mx',
    role: 'Frontend Engineer',
    period: '2023 — actual',
    location: 'CDMX',
    status: 'current',
    description:
      'Interfaces en React y TypeScript para aplicaciones de alto tráfico, dentro de un Design System compartido entre múltiples equipos.',
    highlights: [
      'Componentes reutilizables y mantenimiento de Design System',
      'Layouts mobile-first y responsive design',
      'Optimización de renders y depuración de conectividad en tiempo real',
    ],
  },
  {
    id: 'creditas',
    company: 'Creditas',
    role: 'Software Engineer, Frontend',
    period: '2020 — 2023',
    location: 'CDMX',
    status: 'archived',
    description:
      'Aplicaciones web y landing pages de alto rendimiento, con monitoreo de errores y experimentación basada en datos.',
    highlights: [
      'Landing pages con Gatsby optimizadas para performance',
      'Monitoreo con Datadog y Sentry, tracking con GTM',
      'A/B testing con Optimize, usabilidad con Hotjar',
    ],
  },
  {
    id: 'karmapulse',
    company: 'KarmaPulse',
    role: 'Frontend Developer',
    period: '2018 — 2020',
    location: 'CDMX',
    status: 'archived',
    description:
      'Dashboards y productos web de escucha social, con librerías de layout propias integradas a Contentful.',
    highlights: [
      'Librería de layouts para dashboards con Contentful',
      'Dashboards de métricas de escucha social',
      'Monitoreo de errores con Sentry',
    ],
  },
]