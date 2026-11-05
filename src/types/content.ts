export interface ExternalLink {
  label: string
  href: string
}

export interface CvFile {
  /** Visible label, e.g. "Español". */
  label: string
  /** Language of the document, used for the hreflang attribute. */
  lang: 'es' | 'en'
  /** File name inside public/cv/. */
  fileName: string
}

export interface Experience {
  id: string
  company: string
  role: string
  /** Human-readable start date, e.g. "dic 2023". */
  start: string
  /** Human-readable end date, e.g. "actualidad". */
  end: string
  /** Machine-readable start date for <time>, e.g. "2023-12". */
  startDate: string
  /** Machine-readable end date for <time>; omitted for the current role. */
  endDate?: string
  context: string
  summary: string
  contributions: string[]
  technologies: string[]
}

export interface CaseStudy {
  id: string
  title: string
  company: string
  problem: string
  decision: string
  result: string
  tags: string[]
}

export interface SkillGroup {
  id: string
  title: string
  skills: string[]
}
