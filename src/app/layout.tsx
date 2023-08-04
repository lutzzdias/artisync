import React from 'react'
import './globals.css'
// eslint-disable-next-line camelcase
import { Montserrat, Source_Sans_Pro } from 'next/font/google'

import { NavBar } from '@/components/NavBar'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const sourceSansPro = Source_Sans_Pro({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-source-sans-pro',
})

export const metadata = {
  title: 'ArtiSync',
  description: 'Manage your articles easily',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${sourceSansPro.className} ${montserrat.className} bg-white-500 px-20 py-6`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  )
}
