import type { CvFile, ExternalLink } from '../types/content'

export const profile = {
  name: 'Alexis Estrada Rubio',
  role: 'Frontend Engineer',
  stack: 'React, TypeScript y JavaScript',
  headline: 'Construyo frontend que puede crecer.',
  intro:
    'Más de 8 años construyendo y evolucionando productos digitales en producción, desde dashboards empresariales y aplicaciones financieras hasta una plataforma de entretenimiento de muy alto tráfico.',
  focus:
    'Me especializo en arquitectura frontend, Design Systems y performance: soluciones que se pueden mantener y que evolucionan junto con el producto.',
  availability: 'Disponible para nuevas oportunidades',
  location: 'Interlomas, Huixquilucan, Estado de México',
  email: 'alexis.es.rub@gmail.com',
}

export const about = {
  paragraphs: [
    'Soy Frontend Engineer con más de 8 años desarrollando y evolucionando aplicaciones web en producción. Empecé construyendo componentes desde cero para dashboards empresariales, pasé por productos financieros con equipos en tres países y hoy trabajo en la plataforma con más usuarios de mi trayectoria.',
    'Mi base es React, TypeScript y JavaScript, pero lo que más me interesa es que lo que construyo pueda crecer: componentes reutilizables, Design Systems, integraciones con servicios, rendimiento y arquitecturas fáciles de mantener.',
    'También me importa el lado colaborativo: he coordinado prioridades con equipos de España y Brasil, hecho code reviews y acompañado a desarrolladores Junior en su crecimiento técnico.',
  ],
  principle: 'Entender primero el problema y después elegir la solución técnica adecuada.',
}

export const links = {
  linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alexis-estradarub/' },
  github: { label: 'GitHub', href: 'https://github.com/AlexisEstradaRubio' },
  sourceCode: { label: 'Código fuente', href: 'https://github.com/AlexisEstradaRubio/portafolio-app' },
} satisfies Record<string, ExternalLink>

export const cvFiles: CvFile[] = [
  { label: 'Español', lang: 'es', fileName: 'Alexis_Estrada_Rubio_Frontend_Engineer_CV.pdf' },
  { label: 'English', lang: 'en', fileName: 'Alexis_Estrada_Rubio_Frontend_Engineer_CV_EN.pdf' },
]
