import './globals.css'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { Header } from '@/components/header'
import { Providers } from '@/components/Providers'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={poppins.variable}>
      <body className="font-sans">
        <Providers>
          <div className="mx-auto max-w-screen-lg h-screen flex flex-col space-y-5">
            <Header />
            <main className="flex-grow">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
