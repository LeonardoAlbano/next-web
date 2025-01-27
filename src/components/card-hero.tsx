import { useQuery } from '@tanstack/react-query'

import { getRegisterForm } from '@/api/get-register-form'
import { Project } from '@/types/project'

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
  } = useQuery({
    queryKey: ['projects'],
    queryFn: getRegisterForm,
  })
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error fetching projects</div>
  return (
    <div>
      {projects.map((project: Project) => (
        <Card key={project.id} className="rounded-xl drop-shadow-md px-7 py-8">
          <CardHeader className="flex flex-col items-center gap-2">
            <img
              src="/image.png"
              alt=""
              className="w-full h-full object-cover"
            />
            <CardTitle className="text-center font-semibold text-2xl text-custom-green">
              {project.title}
            </CardTitle>
            <span className="text-muted-foreground font-medium">
              Aplicação de gestão de estoque online
            </span>
          </CardHeader>
          <CardContent className="flex flex-col gap-10">
            <CardDescription>{project.description}</CardDescription>
            <CardDescription className="text-center space-x-4">
              <Badge className=" bg-custom-green py-1.5  px-3">
                {project.language}
              </Badge>
            </CardDescription>

            <div className="flex flex-col gap-4 mx-16">
              <Button
                className="rounded-xl border border-custom-green text-custom-green hover:bg-green-50 hover:text-custom-green "
                variant="ghost"
              >
                {' '}
                Ver mais detalhes
              </Button>
              <Button className="rounded-xl">Ambiente Demonstração</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
