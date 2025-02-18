'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Plus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { registerForm } from '@/api/register-form'
import { updateRegister, type UpdateRegisterBody } from '@/api/update-register'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import type { Project } from '@/types/project'

import { StepIndicator } from './step-indicator'
import { Label } from './ui/label'

const formSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, 'Título é obrigatório'),
  description: z.string().min(1, 'Descrição é obrigatória'),
  projectUrl: z.string().url('URL inválida'),
  language: z.string().min(1, 'Linguagem é obrigatória'),
  category: z.string().min(1, 'Categoria é obrigatória'),
  images: z.array(z.string()).optional(),
  technicalDetails: z.string().optional(),
  statistics: z.string().optional(),
  documentation: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

interface ProjectFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAddProject: (project: Project) => void
  editingProject: Project | null
  onUpdateProject: (project: Project) => void
}

export function ProjectForm({
  open,
  onOpenChange,
  onAddProject,
  editingProject,
  onUpdateProject,
}: ProjectFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const queryClient = useQueryClient()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      projectUrl: '',
      language: '',
      category: '',
      images: [],
      technicalDetails: '',
      statistics: '',
      documentation: '',
    },
  })

  useEffect(() => {
    if (editingProject) {
      form.reset(editingProject)
    }
  }, [editingProject, form])

  const steps = [
    { number: 1, label: 'Informações principais' },
    { number: 2, label: 'Detalhes do projeto' },
  ]

  const goToNextStep = async () => {
    const isValid = await form.trigger([
      'title',
      'description',
      'projectUrl',
      'language',
      'category',
    ])
    if (isValid) {
      setCurrentStep(currentStep + 1)
    }
  }

  const goToPreviousStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const { mutateAsync: registerFormFn } = useMutation({
    mutationFn: registerForm,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
      toast.success('Projeto adicionado com sucesso.')
    },
    onError: (error) => {
      console.error('Erro ao adicionar projeto:', error)
      toast.error(
        'Houve um erro ao adicionar o projeto. Por favor, tente novamente.',
      )
    },
  })

  const { mutateAsync: updateFormFn } = useMutation({
    mutationFn: updateRegister,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
      toast.success('Projeto atualizado com sucesso.')
    },
    onError: (error) => {
      console.error('Erro ao atualizar projeto:', error)
      toast.error(
        'Houve um erro ao atualizar o projeto. Por favor, tente novamente.',
      )
    },
  })

  async function onSubmit(data: FormValues) {
    try {
      if (editingProject) {
        console.log('Updating project with data:', data)
        await updateFormFn(data as UpdateRegisterBody)
        onUpdateProject(data as Project)
      } else {
        console.log('Adding new project with data:', data)
        await registerFormFn(data as Omit<Project, 'id'>)
        onAddProject(data as Project)
      }
      onOpenChange(false)
      form.reset()
      setCurrentStep(1)
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-medium text-center text-emerald-500">
            {editingProject ? 'Editar projeto' : 'Adicionar projeto'}
          </DialogTitle>
          <DialogDescription className="hidden">.</DialogDescription>
          <div className="py-6">
            <StepIndicator currentStep={currentStep} steps={steps} />
          </div>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {currentStep === 1 ? (
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <Label>Título do projeto</Label>
                      <FormControl>
                        <Input placeholder="Rifa Online" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descrição</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Sistema de rifas online..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="projectUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Link do projeto</FormLabel>
                      <FormControl>
                        <Input placeholder="www.rifaonline.com.br" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="language"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Linguagens Utilizadas</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione uma linguagem" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="react">React</SelectItem>
                          <SelectItem value="nextjs">Next.JS</SelectItem>
                          <SelectItem value="angular">Angular</SelectItem>
                          <SelectItem value="csharp">C# .NET</SelectItem>
                          <SelectItem value="reactnative">
                            React Native
                          </SelectItem>
                          <SelectItem value="flutter">Flutter</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Categoria de menu</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione uma categoria" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="segmentbussines">
                            Segmento de negócio
                          </SelectItem>
                          <SelectItem value="tecnology">Tecnologias</SelectItem>
                          <SelectItem value="plataforms">
                            Plataformas
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end">
                  <Button
                    type="button"
                    onClick={goToNextStep}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white"
                  >
                    Avançar
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <FormField
                  key="images"
                  control={form.control}
                  name="images"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Imagens do projeto</FormLabel>
                      <FormControl>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                          <Button
                            type="button"
                            variant="outline"
                            className="w-full text-emerald-500 border-emerald-500 hover:bg-emerald-50"
                            onClick={() => {
                              field.onChange([
                                ...(field.value ?? []),
                                'new-image-url',
                              ])
                            }}
                          >
                            <Plus className="w-4 h-4 mr-2" />
                            Adicionar imagens
                          </Button>

                          <Input type="file" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  key="technicalDetails"
                  control={form.control}
                  name="technicalDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Detalhes técnicos</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Digite os detalhes técnicos do projeto"
                          className="min-h-[100px]"
                          {...field}
                          value={field.value ?? ''}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  key="statistics"
                  control={form.control}
                  name="statistics"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Estatísticas e resultados</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Digite as estatísticas do projeto"
                          className="min-h-[100px]"
                          {...field}
                          value={field.value ?? ''}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  key="documentation"
                  control={form.control}
                  name="documentation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Documentação</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Digite a documentação do projeto"
                          className="min-h-[100px]"
                          {...field}
                          value={field.value ?? ''}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end space-x-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={goToPreviousStep}
                  >
                    Voltar
                  </Button>
                  <Button
                    type="submit"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white"
                  >
                    {editingProject ? 'Salvar' : 'Adicionar projeto'}
                  </Button>
                </div>
              </div>
            )}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
