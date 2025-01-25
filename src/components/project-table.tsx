'use client'

import { Pencil, Search, Trash2 } from 'lucide-react'
import { useState } from 'react'

import { Badge } from '@/components/ui/badge'
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
import { projects } from '@/data/projects'

import { Input } from './ui/input'

export function ProjectTable() {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set())

  const toggleRow = (id: string) => {
    const newSelected = new Set(selectedRows)
    if (newSelected.has(id)) {
      newSelected.delete(id)
    } else {
      newSelected.add(id)
    }
    setSelectedRows(newSelected)
  }

  const toggleAll = () => {
    if (selectedRows.size === projects.length) {
      setSelectedRows(new Set())
    } else {
      setSelectedRows(new Set(projects.map((project) => project.id)))
    }
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-4">
        <Button
          variant="default"
          className="bg-emerald-500 hover:bg-emerald-600"
        >
          + Novo Projeto
        </Button>
        <div className="relative w-72">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <Search className="w-4 h-4" />
          </span>
          <Input
            type="search"
            placeholder="Pesquisar projeto"
            className="pl-10 py-2 border rounded-md w-full"
          />
        </div>
      </div>
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedRows.size === projects.length}
                  onCheckedChange={toggleAll}
                />
              </TableHead>
              <TableHead>Projetos</TableHead>
              <TableHead>Segmento</TableHead>
              <TableHead>Plataforma</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-24">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedRows.has(project.id)}
                    onCheckedChange={() => toggleRow(project.id)}
                  />
                </TableCell>
                <TableCell className="font-medium">{project.name}</TableCell>
                <TableCell>{project.category}</TableCell>
                <TableCell>{project.type}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    {project.hasEnglish && (
                      <Badge
                        variant="secondary"
                        className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
                      >
                        English
                      </Badge>
                    )}
                    {project.hasSQL && (
                      <Badge
                        variant="secondary"
                        className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
                      >
                        SQL
                      </Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between py-4">
        <Button variant="outline">Anterior</Button>
        <div className="text-sm text-gray-500">Página 1 de 10</div>
        <Button variant="outline">Próximo</Button>
      </div>
    </div>
  )
}
