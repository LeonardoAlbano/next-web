'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { PlusSquareIcon } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'
import { DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { Textarea } from './ui/textarea'

// Validação Zod
const registerForm = z.object({
  nameproject: z.string().min(1, 'Título do projeto é obrigatório'),
  description: z.string().min(1, 'Descrição é obrigatória'),
  linkproject: z.string().url('Link inválido'),
  languages: z.array(z.string()).min(1, 'Selecione ao menos uma linguagem'),
  category: z.string().min(1, 'Categoria é obrigatória'),
  subcategory: z
    .array(z.string())
    .min(1, 'Selecione ao menos uma subcategoria'),
  projectImage: z.instanceof(File).optional(),
  technicalDetails: z.string().optional(),
  statsResults: z.string().optional(),
  documentation: z.string().optional(),
})

type RegisterForm = z.infer<typeof registerForm>

export function RegisterProject() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerForm),
  })

  async function handleRegister(data: RegisterForm) {
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 2000))
  }

  return (
    <DialogContent aria-describedby="dialog-description">
      <DialogHeader>
        <DialogTitle className="text-lg text-center">
          Adicionar projeto
        </DialogTitle>
        <div className="flex justify-around items-center ">
          <div className="rounded-full w-8 h-8 flex items-center justify-center">
            1
          </div>
          <div className="rounded-full w-8 h-8 flex items-center justify-center">
            2
          </div>
        </div>
      </DialogHeader>

      <form className="space-y-4" onSubmit={handleSubmit(handleRegister)}>
        {/* Título do projeto */}
        <div className="space-y-1">
          <Label htmlFor="nameproject" className="mx-0.5 font-normal text-md">
            Título do projeto
          </Label>
          <Input
            type="text"
            id="nameproject"
            placeholder="Rifa Online"
            {...register('nameproject')}
          />
          {errors.nameproject && (
            <p className="text-red-500 text-xs">{errors.nameproject.message}</p>
          )}
        </div>

        {/* Descrição */}
        <div className="space-y-1">
          <Label htmlFor="description" className="mx-0.5 font-normal text-md">
            Descrição
          </Label>
          <Input
            type="text"
            id="description"
            placeholder="Sistema de rifas online..."
            {...register('description')}
          />
        </div>

        {/* Link do projeto */}
        <div className="space-y-1">
          <Label htmlFor="linkproject" className="mx-0.5 font-normal text-md">
            Link do projeto
          </Label>
          <Input
            type="text"
            id="linkproject"
            placeholder="www.rifaonline.com.br"
            {...register('linkproject')}
          />
        </div>

        {/* Linguagens utilizadas */}
        <div className="space-y-1">
          <Label htmlFor="languages" className="mx-0.5 font-normal text-md">
            Linguagens Utilizadas
          </Label>
          <Select {...register('languages')}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="react">React</SelectItem>
              <SelectItem value="nextjs">Next.JS</SelectItem>
              <SelectItem value="angular">Angular</SelectItem>
              <SelectItem value="csharp">C# .NET</SelectItem>
              <SelectItem value="reactnative">React Native</SelectItem>
              <SelectItem value="flutter">Flutter</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Categoria */}
        <div className="space-y-1">
          <Label htmlFor="category" className="mx-0.5 font-normal text-md">
            Categoria de menu
          </Label>
          <Select {...register('category')}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="segmentbussines">
                Segmento de negócio
              </SelectItem>
              <SelectItem value="tecnology">Tecnologias</SelectItem>
              <SelectItem value="plataforms">Plataformas</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div>
            <Label className="mx-0.5 font-normal text-md">
              Subcategoria de menu
            </Label>
          </div>
          <div className="space-y-5">
            <div className="space-y-3">
              <Label className="text-sm font-extralight text-muted-foreground ">
                Segmento de negócio
              </Label>
              <div className="flex space-x-4 mt-1">
                <div className="flex items-center space-x-2">
                  <Checkbox id="segmento1" />
                  <Label htmlFor="segmento1">Item 1</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="segmento2" />
                  <Label htmlFor="segmento2">Item 2</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="segmento3" />
                  <Label htmlFor="segmento3">Item 3</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="segmento4" />
                  <Label htmlFor="segmento4">Item 4</Label>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <Label className="text-sm font-extralight text-muted-foreground ">
                Tecnologias
              </Label>
              <div className="flex space-x-4 mt-1">
                <div className="flex items-center space-x-2">
                  <Checkbox id="tecnologia1" />
                  <Label htmlFor="tecnologia1">Item 1</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="tecnologia2" />
                  <Label htmlFor="tecnologia2">Item 2</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="tecnologia3" />
                  <Label htmlFor="tecnologia3">Item 3</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="tecnologia4" />
                  <Label htmlFor="tecnologia4">Item 4</Label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Imagem */}
        <div className="flex flex-col items-start mt-10">
          <label
            htmlFor="projectImage"
            className="flex items-center w-full justify-center gap-2 border border-teal-500 rounded-lg p-2 cursor-pointer text-teal-500 hover:bg-teal-100"
          >
            <PlusSquareIcon className="w-5 h-5" />
            Adicionar imagens
          </label>
          <input
            id="projectImage"
            type="file"
            name="projectImage"
            className="hidden"
          />
        </div>

        {/* Detalhes Técnicos */}
        <div>
          <Label className="mx-0.5 font-normal text-md">
            Detalhes Técnicos
          </Label>
          <Textarea {...register('technicalDetails')} />
        </div>

        {/* Estatísticas e Resultados */}
        <div>
          <Label className="mx-0.5 font-normal text-md">
            Estatísticas e Resultados
          </Label>
          <Textarea {...register('statsResults')} />
        </div>

        {/* Documentação */}
        <div>
          <Label className="mx-0.5 font-normal text-md">Documentação</Label>
          <Textarea {...register('documentation')} />
        </div>

        <Button type="submit" disabled={isSubmitting}></Button>
      </form>
    </DialogContent>
  )
}
