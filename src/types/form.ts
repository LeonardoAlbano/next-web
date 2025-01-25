export interface ProjectFormData {
  title: string
  description: string
  projectUrl: string
  languages: string[]
  categories: string[]
  subcategories: string[]
  technicalDetails: string
  statistics: string
  documentation: string
  images: string[]
}

export type FormStep = 1 | 2
