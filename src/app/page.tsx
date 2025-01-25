import { PlusCircleIcon } from 'lucide-react'

import { CardHero } from '@/components/card-hero'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="h-screen borderspace-y-6 space-y-6 mx-10">
      <section className="">
        <h1 className="text-4xl font-semibold text-center text-custom-green my-10">
          Portfólio de Projetos
        </h1>
      </section>

      <section>
        <div className="text-end">
          <Button>
            <PlusCircleIcon size="8" />
            Adicionar novo projeto
          </Button>
        </div>
      </section>

      <section>
        <CardHero />
      </section>
    </main>
  )
}
