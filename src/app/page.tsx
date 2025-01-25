import { CardHero } from '@/components/card-hero'
import { ProjectFormDialog } from '@/components/project-form-dialog'

export default function Home() {
  return (
    <main className="h-screen border border-red-400 space-y-6">
      <section className="border border-red-400">
        <h1 className="text-4xl font-semibold text-center text-custom-green">
          Portfólio de Projetos
        </h1>
      </section>

      <section className="border border-red-500">
        <div className="text-end">
          <ProjectFormDialog />
        </div>
      </section>

      <section className="mx-20">
        <CardHero />
      </section>
    </main>
  )
}
