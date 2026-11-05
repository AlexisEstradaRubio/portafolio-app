import type { CaseStudy } from '../types/content'

export const caseStudies: CaseStudy[] = [
  {
    id: 'design-system-migration',
    title: 'Migración progresiva a un Design System',
    company: 'Creditas',
    problem:
      'El mismo producto tenía diseños e implementaciones distintas en México, España y Brasil, y no se podía detener para reescribirlo.',
    decision:
      'Migrar por componentes y funcionalidades hacia un Design System compartido, coordinando con los equipos de cada país y documentando los patrones comunes.',
    result:
      'Productos y landing pages consistentes entre países, construidos sobre una base de componentes compartida y sin interrumpir su operación.',
    tags: ['Design Systems', 'React', 'TypeScript', 'Colaboración internacional'],
  },
  {
    id: 'contentful-dashboards',
    title: 'Dashboards que marketing arma sin desarrollo',
    company: 'KarmaPulse',
    problem:
      'Cada cliente necesitaba dashboards a la medida, y cada uno requería trabajo de desarrollo.',
    decision:
      'Construir componentes reutilizables conectados al backend y exponerlos como bloques configurables en Contentful.',
    result:
      'El equipo de marketing armaba dashboards para cada cliente directamente en Contentful, sin depender de desarrollo.',
    tags: ['Componentes reutilizables', 'Contentful', 'React', 'Dashboards'],
  },
  {
    id: 'datadog-funnel-dashboards',
    title: 'Dashboards de abandono y rendimiento de formularios',
    company: 'Creditas',
    problem:
      'No había una vista clara de en qué paso de los formularios abandonaban los usuarios ni de cómo se comportaban esos formularios.',
    decision:
      'Construir dashboards en Datadog de abandono de usuarios y rendimiento de formularios.',
    result:
      'El equipo podía ver en qué paso abandonaban los usuarios y priorizar mejoras con datos.',
    tags: ['Datadog', 'Observabilidad', 'Analítica de producto'],
  },
]
