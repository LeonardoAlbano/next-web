import { DollarSign } from 'lucide-react'

import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

export function CardHero() {
  return (
    <Card className="rounded-xl drop-shadow-md px-6 py-3">
      <CardHeader className="flex flex-col items-center gap-3">
        <DollarSign />
        <CardTitle className="text-center font-semibold text-2xl text-custom-green">
          Aplicação de gestão de estoque
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-10">
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </CardDescription>
        <CardDescription className="text-center space-x-4">
          <span className="rounded-full bg-custom-green text-white py-1.5  px-3">
            React
          </span>
          <span className="rounded-full bg-custom-green text-white py-1.5  px-3">
            React
          </span>
          <span className="rounded-full bg-custom-green text-white py-1.5  px-3">
            React
          </span>
          <span className="rounded-full bg-custom-green text-white py-1.5  px-3">
            React
          </span>
        </CardDescription>

        <div className="flex flex-col gap-4">
          <Button
            className="rounded-xl border border-custom-green text-custom-green hover:bg-green-50 hover:text-custom-green "
            variant="ghost"
          >
            {' '}
            Ver mais detalhes
          </Button>
          <Button>Ambiente Demonstração</Button>
        </div>
      </CardContent>
    </Card>
  )
}
