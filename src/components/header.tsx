'use client'

import { CrownIcon, Trophy } from 'lucide-react'
import React from 'react'

import { MobileNavigation } from './navbar/mobile-navigation'
import { Navigation } from './navbar/navigation'

export function Header() {
  return (
    <header className="px-5">
      <div className="container mx-auto mt-5">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-x-6 text-muted-foreground text-base">
            <Navigation
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />

            <div className="xl:hidden">
              <MobileNavigation />
            </div>
          </div>
          <div className="items-end flex gap-3 justify-center">
            <img
              src="https://www.github.com/leonardoalbano.png"
              alt="photoUser"
              className="rounded-full size-14 border-custom-green border-2 p-0.5"
            />

            <div>
              <h1 className="text-lg font-bold leading-5 text-custom-green">
                Leonardo Albano
              </h1>
              <span className="text-xs font-bold text-muted-foreground leading-4">
                Engenheiro de Software
              </span>
              <div className="flex gap-3">
                <CrownIcon size="18" color="yellow" />
                <Trophy size="18" color="yellow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
