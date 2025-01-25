import { AlignJustify } from 'lucide-react'
import React from 'react'

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Navigation } from './navigation'

export function MobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer text-green-700" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex h-full flex-col items-center justify-between py-8">
          <SheetTitle className="flex flex-col items-center gap-y-32 font-medium text-custom-green">
            <Navigation
              containerStyles="flex flex-col items-center gap-y-8"
              linkStyles="text-1xl"
            />
          </SheetTitle>
        </div>
      </SheetContent>
    </Sheet>
  )
}
