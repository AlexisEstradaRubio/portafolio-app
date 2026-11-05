import type { Experience } from '../types/content'

export const experience: Experience[] = [
  {
    id: 'caliente-interactive',
    company: 'Caliente Interactive',
    role: 'Frontend Engineer',
    start: 'dic 2023',
    end: 'actualidad',
    startDate: '2023-12',
    context: 'Plataforma de entretenimiento de muy alto tráfico',
    summary:
      'Desarrollo y evolución de funcionalidades frontend en producción, donde la estabilidad, el rendimiento y la experiencia de usuario son críticos.',
    contributions: [
      'Funcionalidades y componentes reutilizables con React y JavaScript, sobre un Design System documentado en Storybook.',
      'Integración de servicios en tiempo real con WebSockets, autenticación y flujos entre aplicaciones. Corregí peticiones duplicadas al socket limpiando efectos en React: menos carga al servidor y una interfaz más estable.',
      'Optimización de renders con Lighthouse y Core Web Vitals; testing con Vitest, CI/CD con GitHub Actions y monitoreo de errores con Grafana Faro.',
    ],
    technologies: ['React', 'JavaScript', 'TypeScript', 'Vite', 'Bootstrap', 'Storybook', 'WebSockets', 'Vitest', 'GitHub Actions', 'Grafana Faro', 'Docker'],
  },
  {
    id: 'creditas',
    company: 'Creditas',
    role: 'Software Engineer (Frontend)',
    start: 'mar 2020',
    end: 'ago 2023',
    startDate: '2020-03',
    endDate: '2023-08',
    context: 'Fintech con equipos en México, España y Brasil',
    summary:
      'Desarrollo y evolución de productos financieros en producción, combinando ingeniería frontend con TypeScript, observabilidad, analítica de producto y coordinación técnica.',
    contributions: [
      'Aplicaciones con React y TypeScript sobre Gatsby y Next.js: componentes reutilizables, custom hooks, Redux e integración con REST y GraphQL.',
      'Migración progresiva a un Design System compartido y pruebas con Jest, React Testing Library, Playwright y Cypress en hasta tres productos en producción.',
      'Dashboards en Datadog de abandono de usuarios y rendimiento de formularios; eventos con Google Tag Manager, pruebas A/B y análisis de usabilidad con Hotjar.',
      'Coordinación de prioridades con equipos de España y Brasil, code reviews y mentoring a desarrolladores Junior.',
    ],
    technologies: ['React', 'TypeScript', 'Gatsby', 'Next.js', 'Redux', 'GraphQL', 'Jest', 'React Testing Library', 'Playwright', 'Cypress', 'Datadog', 'Sentry', 'Google Tag Manager', 'Netlify'],
  },
  {
    id: 'karmapulse',
    company: 'KarmaPulse',
    role: 'Jr. Front-End Developer',
    start: 'abr 2018',
    end: 'feb 2020',
    startDate: '2018-04',
    endDate: '2020-02',
    context: 'Dashboards de social listening',
    summary:
      'El inicio de mi trayectoria: componentes reutilizables construidos desde cero para dashboards y herramientas empresariales.',
    contributions: [
      'Componentes reutilizables creados desde cero y usados en múltiples dashboards.',
      'Librería de componentes configurable desde Contentful, con la que marketing armaba dashboards por cliente sin depender de desarrollo.',
      'Aplicaciones con React, Next.js, Gatsby, Redux y GraphQL; monitoreo con Sentry y CI/CD con Jenkins.',
    ],
    technologies: ['React', 'JavaScript', 'Next.js', 'Gatsby', 'Redux', 'GraphQL', 'Contentful', 'Tailwind CSS', 'Sentry', 'Jenkins', 'Docker'],
  },
]
