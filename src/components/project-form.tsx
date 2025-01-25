'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'
import { projectFormSchema, type ProjectFormValues } from '@/lib/schema'

import { StepIndicator } from './step-indicator'

const defaultValues: Partial<ProjectFormValues> = {
  title: '',
  description: '',
  projectUrl: '',
  languages: [],
  categories: [],
  subcategories: [],
  technicalDetails: '',
  statistics: '',
  documentation: '',
  images: [],
}

export function ProjectForm({ onClose }: { onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState(1)

  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectFormSchema),
    defaultValues,
    mode: 'onChange',
  })

  const steps = [
    { number: 1, label: 'Informações principais' },
    { number: 2, label: 'Detalhes do projeto' },
  ]

  function onSubmit(data: ProjectFormValues) {
    console.log(data)
    onClose()
  }

  return (
    <div className="max-h-[80vh] overflow-y-auto">
      <StepIndicator currentStep={currentStep} steps={steps} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {currentStep === 1 ? (
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Título do projeto</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite o título" {...field} />
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
                      <Textarea placeholder="Digite a descrição" {...field} />
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
                      <Input placeholder="https://seu-projeto.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="categories"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel>Categorias de menu</FormLabel>
                    </div>
                    {['Segmento de negócio', 'Tecnologias', 'Plataformas'].map(
                      (item) => (
                        <FormField
                          key={item}
                          control={form.control}
                          name="categories"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(item)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, item])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== item,
                                            ),
                                          )
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {item}
                                </FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ),
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subcategories"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Subcategoria do menu</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={(value) => field.onChange([value])}
                        defaultValue={field.value?.[0]}
                        className="flex flex-col space-y-1"
                      >
                        {['Item 1', 'Item 2', 'Item 3', 'Item 4'].map(
                          (item) => (
                            <FormItem
                              key={item}
                              className="flex items-center space-x-3 space-y-0"
                            >
                              <FormControl>
                                <RadioGroupItem value={item} />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {item}
                              </FormLabel>
                            </FormItem>
                          ),
                        )}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end">
                <Button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="bg-primary hover:bg-primary/90"
                >
                  Avançar
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="images"
                render={({ field }) => (
                  <FormItem>
                    <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
                      <Button
                        type="button"
                        variant="outline"
                        className="text-primary"
                        onClick={() => {
                          // Handle image upload
                          field.onChange([...field.value, 'new-image-url'])
                        }}
                      >
                        Adicionar imagens
                      </Button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="technicalDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Detalhes técnicos</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Digite os detalhes técnicos"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="statistics"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Estatísticas e resultados</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Digite as estatísticas"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="documentation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Documentação</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Digite a documentação"
                        {...field}
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
                  onClick={() => setCurrentStep(1)}
                >
                  Voltar
                </Button>
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90"
                >
                  Adicionar projeto
                </Button>
              </div>
            </div>
          )}
        </form>
      </Form>
    </div>
  )
}
