import { AlignJustify } from 'lucide-react'
import React from 'react'

import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Navigation } from './navigation'

export function MobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer text-green-700" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex h-full flex-col items-center justify-between py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Navigation
              containerStyles="flex flex-col items-center gap-y-8"
              linkStyles="text-1xl"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
