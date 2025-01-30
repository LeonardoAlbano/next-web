'use client'

import { ArrowLeftFromLine } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export default function ProjectDetails() {
  const { id } = useParams()
  return (
    <div className="h-screen flex flex-col gap-5 mx-10">
      <div className="flex gap-3">
        <Link href="/">
          <Button variant="ghost">
            <ArrowLeftFromLine />
            Voltar
          </Button>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center space-y-2">
        <h1 className="text-2xl text-custom-green font-bold ">
          Gestão de Varejo
        </h1>
        <span className="text-muted-foreground font-bold text-sm ">
          Aplicação de gestão de estoque online {id}
        </span>
      </div>

      <div>
        <img src="/image.png" alt="" />
      </div>

      <div>
        <p className="text-muted-foreground font-medium">
          O projeto é uma solução inovadora de gestão de varejo desenvolvida
          para otimizar as operações diárias de lojas físicas. Nosso objetivo é
          fornecer uma plataforma integrada que abrange desde o controle de
          estoque até a análise de vendas, ajudando os varejistas a tomar
          decisões mais informadas e aumentar a eficiência.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-5 mt-8">
        <Card className="">
          <CardHeader>
            <h1 className="text-xl font-semibold text-custom-green">
              Deatlhes técnicos
            </h1>
            <span className="text-muted-foreground font-normal">
              Tecnologias Utilizadas:
            </span>
          </CardHeader>
          <CardContent className="space-y-2 ml-2 -mt-2">
            <p>Frontend: React.js</p>
            <p>Backend: Node.js, Express.js</p>
            <p>Banco de Dados: MongoDB</p>
            <p>Infraestrutura: AWS (Amazon Web Services)</p>
            <p>Ferramentas de Análise: Power BI</p>
          </CardContent>
        </Card>

        <Card className="">
          <CardHeader>
            <h1 className="text-xl font-semibold text-custom-green">
              Deatlhes técnicos
            </h1>
            <span className="text-muted-foreground font-normal">
              Tecnologias Utilizadas:
            </span>
          </CardHeader>
          <CardContent className="space-y-2 ml-2 -mt-2">
            <p>Frontend: React.js</p>
            <p>Backend: Node.js, Express.js</p>
            <p>Banco de Dados: MongoDB</p>
            <p>Infraestrutura: AWS (Amazon Web Services)</p>
            <p>Ferramentas de Análise: Power BI</p>
          </CardContent>
        </Card>

        <Card className="">
          <CardHeader>
            <h1 className="text-xl font-semibold text-custom-green">
              Deatlhes técnicos
            </h1>
            <span className="text-muted-foreground font-normal">
              Tecnologias Utilizadas:
            </span>
          </CardHeader>
          <CardContent className="space-y-2 ml-2 -mt-2">
            <p>Frontend: React.js</p>
            <p>Backend: Node.js, Express.js</p>
            <p>Banco de Dados: MongoDB</p>
            <p>Infraestrutura: AWS (Amazon Web Services)</p>
            <p>Ferramentas de Análise: Power BI</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
