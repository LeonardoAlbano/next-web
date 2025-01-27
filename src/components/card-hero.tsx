import { useQuery } from '@tanstack/react-query'

import { getRegisterForm } from '@/api/get-register-form'
import type { Project } from '@/types/project'

import { Badge } from './ui/badge'
import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

export function CardHero() {
  const {
    data: projects = [],
    isLoading,
    isError,
  } = useQuery<Project[]>({
    queryKey: ['projects'],
    queryFn: getRegisterForm,
  })

  if (isLoading) return <div className="text-center py-10">Loading...</div>
  if (isError)
    return (
      <div className="text-center py-10 text-red-500">
        Error fetching projects
      </div>
    )

  return (
    <div className="space-y-8">
      {projects.map((project: Project) => (
        <Card
          key={project.id}
          className="rounded-xl drop-shadow-md px-7 py-8 flex flex-col md:flex-row md:items-center md:gap-8"
        >
          <img
            src="/image.png"
            alt={`${project.title} Thumbnail`}
            className="w-full h-40 md:w-1/2 md:h-auto object-cover rounded-lg"
          />

          <div className="flex flex-col justify-between w-full">
            <CardHeader className="flex flex-col gap-2">
              <CardTitle className="font-semibold text-2xl text-custom-green">
                {project.title}
              </CardTitle>
              <span className="text-muted-foreground font-medium">
                {project.category === 'segmentbussines' &&
                  'Segmento de negócio'}
                {project.category === 'tecnology' && 'Tecnologias'}
                {project.category === 'plataforms' && 'Plataformas'}
              </span>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <CardDescription>{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-custom-green py-1.5 px-3">
                  {project.language}
                </Badge>
              </div>
              <div className="space-y-5 gap-4 md:flex-row md:gap-6">
                <Button
                  className="w-full md:w-auto rounded-xl border border-custom-green text-custom-green hover:bg-green-50 hover:text-custom-green"
                  variant="ghost"
                >
                  Ver mais detalhes
                </Button>
                <Button className="w-full md:w-auto rounded-xl">
                  Ambiente Demonstração
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  )
}
