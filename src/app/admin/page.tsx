import { ProjectTable } from '@/components/project-table'

export default function Admin() {
  return (
    <div className="h-screen borderspace-y-6 space-y-6 mx-10">
      <h1 className="font-bold text-3xl text-center">Painel Administrador</h1>
      <ProjectTable />
    </div>
  )
}
