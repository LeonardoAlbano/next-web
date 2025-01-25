'use client'

import React from 'react'

import { MobileNavigation } from './navbar/mobile-navigation'
import { Navigation } from './navbar/navigation'

export function Header() {
  return (
    <header className="px-2">
      <div className="container mx-auto mt-5">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-x-6 text-muted-foreground text-2xl">
            <Navigation
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />

            <div className="xl:hidden">
              <MobileNavigation />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
