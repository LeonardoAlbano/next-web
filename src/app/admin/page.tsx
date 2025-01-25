import { PencilIcon, Plus, Search, Trash } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function Admin() {
  return (
    <div className="mt-8 space-y-8">
      <h1 className="font-bold text-3xl text-center">Painel Administrador</h1>

      <div className="flex justify-between">
        <Button>
          <Plus size="6" />
          Novo Projeto
        </Button>

        <Button>
          <Search size="6" />
          Pesquisa
        </Button>
      </div>

      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Check</TableHead>
              <TableHead>Projetos</TableHead>
              <TableHead>Segmento</TableHead>
              <TableHead>Plataforma</TableHead>
              <TableHead>linguagens</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>Gestão de varejo</TableCell>
              <TableCell>Medicina</TableCell>
              <TableCell>Aplicativo</TableCell>
              <TableCell>angular</TableCell>
              <TableCell>
                <Trash />
              </TableCell>
              <TableCell>
                <PencilIcon />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
