import { Badge } from './ui/badge'
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
    <Card className="rounded-xl drop-shadow-md px-7 py-8">
      <CardHeader className="flex flex-col items-center gap-2">
        <img src="/image.png" alt="" className="w-full h-full object-cover" />
        <CardTitle className="text-center font-semibold text-2xl text-custom-green">
          Gestão de Varjeo
        </CardTitle>
        <span className="text-muted-foreground font-medium">
          Aplicação de gestão de estoque online
        </span>
      </CardHeader>
      <CardContent className="flex flex-col gap-10">
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </CardDescription>
        <CardDescription className="text-center space-x-4">
          <Badge className=" bg-custom-green py-1.5  px-3">React</Badge>
          <Badge className=" bg-custom-green py-1.5  px-3">React</Badge>
          <Badge className=" bg-custom-green py-1.5  px-3">React</Badge>
          <Badge className=" bg-custom-green py-1.5  px-3">React</Badge>
        </CardDescription>

        <div className="flex flex-col gap-4 mx-16">
          <Button
            className="rounded-xl border border-custom-green text-custom-green hover:bg-green-50 hover:text-custom-green "
            variant="ghost"
          >
            {' '}
            Ver mais detalhes
          </Button>
          <Button className="rounded-xl">Ambiente Demonstração</Button>
        </div>
      </CardContent>
    </Card>
  )
}
