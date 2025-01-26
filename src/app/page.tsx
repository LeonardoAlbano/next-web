'use client'

import { PlusCircleIcon } from 'lucide-react'
import { useState } from 'react'

import { CardHero } from '@/components/card-hero'
import { ProjectForm } from '@/components/project-form'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

export default function Home() {
  const [open, setOpen] = useState(false)

  return (
    <main className="h-screen borderspace-y-6 space-y-6 mx-10">
      <section className="">
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
            <ProjectForm open={open} onOpenChange={setOpen} />
          </Dialog>
        </div>
      </section>

      <section>
        <CardHero />
      </section>
    </main>
  )
}
