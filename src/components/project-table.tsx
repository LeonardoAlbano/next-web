'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Pencil, PlusCircleIcon, Search, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

import { deleteRegister } from '@/api/delete-register'
import { getRegisterForm } from '@/api/get-register-form'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import type { Project } from '@/types/project'

import { ProjectForm } from './project-form'
import { Dialog, DialogTrigger } from './ui/dialog'
import { Input } from './ui/input'

export function ProjectTable() {
  const [open, setOpen] = useState(false)
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set())
  const queryClient = useQueryClient()

  const {
    data: projects = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['projects'],
    queryFn: getRegisterForm,
  })

  const deleteProjectMutation = useMutation({
    mutationFn: deleteRegister,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
      toast.success('Projeto excluído com sucesso.')
    },
    onError: (error) => {
      console.error('Erro ao excluir projeto:', error)
      toast.error(
        'Houve um erro ao excluir o projeto. Por favor, tente novamente.',
      )
    },
  })

  const toggleRow = (id: string) => {
    const newSelected = new Set(selectedRows)
    if (newSelected.has(id)) {
      newSelected.delete(id)
    } else {
      newSelected.add(id)
    }
    setSelectedRows(newSelected)
  }

  const toggleAll = () => {
    if (selectedRows.size === projects.length) {
      setSelectedRows(new Set())
    } else {
      setSelectedRows(new Set(projects.map((project: Project) => project.id)))
    }
  }

  const addProject = (newProject: Project) => {
    // Note: This function should be implemented to add a new project to the API
    console.log('Adding new project:', newProject)
  }

  const getStatusBadgeColor = (status: string) => {
    const colors: { [key: string]: string } = {
      react: 'bg-blue-100 text-blue-800',
      nextjs: 'bg-black text-white',
      angular: 'bg-red-100 text-red-800',
      csharp: 'bg-purple-100 text-purple-800',
      reactnative: 'bg-cyan-100 text-cyan-800',
      flutter: 'bg-sky-100 text-sky-800',
    }
    return colors[status.toLowerCase()] || 'bg-gray-100 text-gray-800'
  }

  if (isLoading) return <div>Carregando...</div>
  if (isError) return <div>Erro ao buscar projetos</div>

  const handleDeleteProject = (id: string) => {
    deleteProjectMutation.mutate({ id })
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-4">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>
              <PlusCircleIcon className="mr-2 h-4 w-4" />
              Novo projeto
            </Button>
          </DialogTrigger>
          <ProjectForm
            open={open}
            onOpenChange={setOpen}
            onAddProject={addProject}
          />
        </Dialog>

        <div className="relative w-72">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <Search className="w-4 h-4" />
          </span>
          <Input
            type="search"
            placeholder="Pesquisar projeto"
            className="pl-10 py-2 border rounded-md w-full"
          />
        </div>
      </div>
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedRows.size === projects.length}
                  onCheckedChange={toggleAll}
                />
              </TableHead>
              <TableHead>Projetos</TableHead>
              <TableHead>Segmento</TableHead>
              <TableHead>Plataforma</TableHead>
              <TableHead>Linguagem</TableHead>
              <TableHead className="w-24">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project: Project) => (
              <TableRow key={project.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedRows.has(project.id)}
                    onCheckedChange={() => toggleRow(project.id)}
                  />
                </TableCell>
                <TableCell className="font-medium">{project.title}</TableCell>
                <TableCell>{project.category}</TableCell>
                <TableCell>Aplicativo</TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={`${getStatusBadgeColor(project.language)} hover:${getStatusBadgeColor(project.language)}`}
                  >
                    {project.language}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      onClick={() => handleDeleteProject(project.id)}
                      variant="ghost"
                      size="icon"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between py-4">
        <Button variant="outline">Anterior</Button>
        <div className="text-sm text-gray-500">Página 1 de 10</div>
        <Button variant="outline">Próximo</Button>
      </div>
    </div>
  )
}
