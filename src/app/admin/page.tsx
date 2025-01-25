import { ProjectTable } from '@/components/project-table'

export default function Admin() {
  return (
    <div className="mt-8 space-y-8">
      <h1 className="font-bold text-3xl text-center">Painel Administrador</h1>
      <ProjectTable />
    </div>
  )
}
