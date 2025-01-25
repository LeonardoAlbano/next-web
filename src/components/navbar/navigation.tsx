'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface NavigationProps {
  containerStyles: string
  linkStyles?: string
  underlineStyles?: string
}

const links = [
  { path: '/', name: 'tudo' },
  { path: '/segmento', name: 'Segmento de negócio' },
  { path: '/tecnologia', name: 'Tecnologias' },
  { path: '/plataforma', name: 'Plataforma' },
]

export function Navigation({
  containerStyles,
  linkStyles,
  underlineStyles,
}: NavigationProps) {
  const path = usePathname()

  return (
    <nav className={containerStyles}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                transition={{ type: 'tween' }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}
