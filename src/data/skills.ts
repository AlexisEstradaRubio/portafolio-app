import type { SkillGroup } from '../types/content'

/** The capabilities that define the profile; rendered larger than the rest. */
export const coreSkills = {
  stack: ['React', 'TypeScript', 'JavaScript'],
  specialty: ['Arquitectura frontend', 'Design Systems', 'Performance'],
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    skills: ['React Hooks', 'Redux', 'Next.js', 'Gatsby', 'Vite', 'HTML5', 'CSS3'],
  },
  {
    id: 'architecture-ui',
    title: 'Arquitectura y UI',
    skills: ['Storybook', 'Componentes reutilizables', 'Responsive y mobile-first', 'Bootstrap', 'Tailwind CSS', 'Material Design', 'Glamorous'],
  },
  {
    id: 'integrations',
    title: 'Integraciones',
    skills: ['REST APIs', 'GraphQL', 'WebSockets', 'Autenticación', 'Manejo de estado y errores'],
  },
  {
    id: 'performance-testing',
    title: 'Performance y testing',
    skills: ['Lighthouse', 'Core Web Vitals', 'Lazy loading', 'Optimización de renders', 'Jest', 'React Testing Library', 'Playwright', 'Cypress', 'Vitest'],
  },
  {
    id: 'observability',
    title: 'Observabilidad y producto',
    skills: ['Datadog', 'Sentry', 'Grafana Faro', 'Google Tag Manager', 'Google Optimize', 'Hotjar', 'A/B testing'],
  },
  {
    id: 'delivery',
    title: 'Entrega',
    skills: ['Git', 'GitHub', 'GitHub Actions', 'GitHub Pages', 'Netlify', 'Jenkins', 'Docker'],
  },
  {
    id: 'collaboration',
    title: 'Colaboración',
    skills: ['Code review', 'Mentoring', 'Scrum', 'Jira', 'Confluence', 'Figma'],
  },
]
