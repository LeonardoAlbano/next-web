'use client'

import { PlusCircleIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { ProjectForm } from './project-form'

export function ProjectFormDialog() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary hover:bg-primary/90">
          <PlusCircleIcon size="6" />
          Adicionar projeto
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[700px] lg:max-w-[900px]">
        <DialogHeader>
          <DialogTitle className="text-center text-primary">
            Adicionar projeto
          </DialogTitle>
          <DialogDescription className="text-center">
            Preencha os detalhes do seu projeto nos campos abaixo.
          </DialogDescription>
        </DialogHeader>
        <ProjectForm onClose={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}
