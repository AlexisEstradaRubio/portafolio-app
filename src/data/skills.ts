import type { SkillGroup } from '../types/content'

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      'React',
      'React Hooks',
      'Redux.js',
      'TypeScript',
      'JavaScript',
      'Gatsby',
      'CSS3',
      'Design Systems',
    ],
  },
  {
    id: 'quality',
    title: 'Calidad y monitoreo',
    skills: ['Datadog', 'Sentry', 'Jest', 'Testing E2E'],
  },
  {
    id: 'analytics',
    title: 'Analítica',
    skills: ['GTM', 'A/B Testing', 'Hotjar'],
  },
  {
    id: 'workflow',
    title: 'Flujo de trabajo',
    skills: ['Git', 'GitHub', 'GitLab', 'Webpack', 'CI/CD', 'Figma', 'Scrum'],
  },
]