'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [images, setImages] = useState<File[]>([])

  const handleNextStep = () => setStep((prev) => Math.min(prev + 1, 2))
  const handlePreviousStep = () => setStep((prev) => Math.max(prev - 1, 1))
  const closeModal = () => {
    setIsOpen(false)
    setStep(1)
    setImages([])
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImages([...images, ...Array.from(event.target.files)])
    }
  }

  return (
    <main className="h-screen space-y-6">
      <section>
        <h1 className="text-4xl font-semibold text-center text-custom-green">
          Portfólio de Projetos
        </h1>
      </section>

      <section>
        <div className="text-end">
          <Button onClick={() => setIsOpen(true)}>
            Adicionar novo projeto
          </Button>
        </div>
      </section>

      <Dialog open={isOpen} onOpenChange={closeModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar projeto</DialogTitle>
          </DialogHeader>

          {/* Indicador de progresso */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div
              className={`flex items-center space-x-2 ${step === 1 ? 'text-green-600' : 'text-gray-400'}`}
            >
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                  step === 1 ? 'border-green-600' : 'border-gray-400'
                }`}
              >
                1
              </div>
              <span className="font-medium">Informações principais</span>
            </div>
            <div className="w-12 border-t-2 border-gray-400" />
            <div
              className={`flex items-center space-x-2 ${step === 2 ? 'text-green-600' : 'text-gray-400'}`}
            >
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                  step === 2 ? 'border-green-600' : 'border-gray-400'
                }`}
              >
                2
              </div>
              <span className="font-medium">Detalhes do projeto</span>
            </div>
          </div>

          {/* Conteúdo das etapas */}
          {step === 1 && (
            <div className="space-y-4">
              <Label htmlFor="project-title">Título do projeto</Label>
              <Input id="project-title" placeholder="Rifa online" />

              <Label htmlFor="description">Descrição</Label>
              <Input
                id="description"
                placeholder="Sistemas de rifas online..."
              />

              <Label htmlFor="project-link">Link do projeto</Label>
              <Input id="project-link" placeholder="www.rifaonline.com.br" />

              <Label>Linguagens utilizadas</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="angular">Angular</SelectItem>
                  <SelectItem value="csharp">C#</SelectItem>
                </SelectContent>
              </Select>

              <Label>Categoria de menu</Label>
              <div className="flex items-center space-x-2">
                <Checkbox id="business-segment" />
                <Label htmlFor="business-segment">Segmento de negócio</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="technologies" />
                <Label htmlFor="technologies">Tecnologias</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="platforms" />
                <Label htmlFor="platforms">Plataformas</Label>
              </div>

              <Label>Subcategoria de menu</Label>
              <div className="flex items-center space-x-2">
                <Checkbox id="item1" />
                <Label htmlFor="item1">Item 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="item2" />
                <Label htmlFor="item2">Item 2</Label>
              </div>

              <div className="flex justify-between">
                <Button variant="ghost" onClick={closeModal}>
                  Cancelar
                </Button>
                <Button onClick={handleNextStep}>Avançar</Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <Button variant="outline" asChild>
                <label htmlFor="image-upload">Adicionar imagens</label>
              </Button>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleImageUpload}
              />

              {images.length > 0 && (
                <div className="space-y-2">
                  {images.map((image, index) => (
                    <div key={index} className="text-sm text-gray-600">
                      {image.name}
                    </div>
                  ))}
                </div>
              )}

              <Label>Detalhes técnicos</Label>
              <Input placeholder="Detalhes técnicos" />

              <Label>Estatísticas e resultados</Label>
              <Input placeholder="Estatísticas e resultados" />

              <Label>Documentação</Label>
              <Input placeholder="Documentação" />

              <div className="flex justify-between">
                <Button variant="ghost" onClick={handlePreviousStep}>
                  Voltar
                </Button>
                <Button onClick={closeModal}>Adicionar projeto</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  )
}
