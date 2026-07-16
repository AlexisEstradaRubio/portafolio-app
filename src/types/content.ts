export interface Experience {
  id: string
  company: string
  role: string
  period: string
  location: string
  status: 'current' | 'archived'
  description: string
  highlights: string[]
}

export interface Project {
  id: string
  title: string
  problem: string
  solution: string
  result: string
}

export interface SkillGroup {
  id: string
  title: string
  skills: string[]
}
