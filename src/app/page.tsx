'use client'

import { PlusCircleIcon } from 'lucide-react'
import { useState } from 'react'

import { CardHero } from '@/components/card-hero'
import { ProjectForm } from '@/components/project-form'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import type { Project } from '@/types/project'

export default function Home() {
  const [open, setOpen] = useState(false)
  const [projects, setProjects] = useState<Project[]>([])

  const handleAddProject = (newProject: Omit<Project, 'id'>) => {
    const projectWithId: Project = {
      ...newProject,
      id: Date.now().toString(),
      images: newProject.images || [],
    }
    setProjects((prevProjects) => [...prevProjects, projectWithId])
    setOpen(false)
  }

  const handleUpdateProject = (updatedProject: Project) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === updatedProject.id ? updatedProject : project,
      ),
    )
    setOpen(false)
  }

  return (
    <main className="h-screen space-y-6 mx-10">
      <section>
        <h1 className="text-4xl font-semibold text-center text-custom-green my-10">
          Portfólio de Projetos
        </h1>
      </section>

      <section>
        <div className="text-end">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button>
                <PlusCircleIcon className="mr-2 h-4 w-4" />
                Adicionar novo projeto
              </Button>
            </DialogTrigger>
            <ProjectForm
              open={open}
              onOpenChange={setOpen}
              onAddProject={handleAddProject}
              editingProject={null}
              onUpdateProject={handleUpdateProject}
            />
          </Dialog>
        </div>
      </section>

      <section>
        <CardHero projects={projects} />
      </section>
    </main>
  )
}
