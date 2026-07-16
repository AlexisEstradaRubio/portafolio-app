import type { SkillGroup } from '../types/content'

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'Gatsby', 'CSS3', 'Design Systems'],
  },
  {
    id: 'quality',
    title: 'Calidad y monitoreo',
    skills: ['Datadog', 'Sentry', 'Testing E2E'],
  },
  {
    id: 'analytics',
    title: 'Analítica',
    skills: ['GTM', 'A/B Testing', 'Hotjar'],
  },
  {
    id: 'workflow',
    title: 'Flujo de trabajo',
    skills: ['Git', 'CI/CD', 'Figma', 'Scrum'],
  },
]