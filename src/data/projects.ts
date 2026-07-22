import type { Project } from '../types/content'

export const projects: Project[] = [
  {
    id: 'tech-migration-no-downtime',
    title: 'Actualización de tecnologías del producto principal sin afectar al usuario final',
    problem:
      'Se buscaba actualizar por bloques los componentes y secciones del producto principal sin afectar al usuario final.',
    solution:
      'Análisis del producto y sus flujos, migración de tecnología por bloques sin impacto al usuario, e implementación de nuevas tecnologías y componentes reutilizables para mejorar la experiencia.',
    result:
      'Mejoras notables de UX/UI para el usuario, sin afectar la operación del producto principal.',
  },
  {
    id: 'multi-country-visual-alignment',
    title: 'Homologación visual para un producto de 3 países diferentes',
    problem:
      'Empresa con presencia en 3 países, cada uno con diseños visuales distintos tanto en landing pages como en componentes.',
    solution:
      'Coordinación con los equipos de desarrollo de los 3 países, creación de documentación para entender cada producto, y desarrollo e implementación de una librería de componentes reutilizables compartida.',
    result:
      'Homologación visual completa de los productos y landing pages en los 3 países.',
  },
  {
    id: 'no-code-dashboard-builder',
    title: 'Componentes reutilizables + herramienta no-code para dashboards ágiles',
    problem:
      'Se necesitaban dashboards de fácil implementación para distintos clientes, cada uno con componentes según sus necesidades.',
    solution:
      'Implementación de una herramienta no-code de fácil manejo para el equipo de marketing, junto con una librería de componentes custom con control total sobre ellos para soluciones a la medida.',
    result:
      'El equipo de marketing pudo diseñar e implementar dashboards a la medida del cliente en minutos, sin depender de desarrollo.',
  },
]