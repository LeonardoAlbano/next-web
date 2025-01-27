export interface Project {
  id: string
  title: string
  description: string
  projectUrl: string
  language:
    | 'react'
    | 'nextjs'
    | 'angular'
    | 'csharp'
    | 'reactnative'
    | 'flutter'
  category: 'segmentbussines' | 'tecnology' | 'plataforms'
  images: string[]
  technicalDetails?: string
  statistics?: string
  documentation?: string
}
