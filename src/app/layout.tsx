import './globals.css'
import React from 'react'
// eslint-disable-next-line camelcase
import { Source_Sans_Pro, Montserrat } from 'next/font/google'

import { NavBar } from '@/components/NavBar'
import ArticleModal from '@/components/ArticleModal'

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
        className={`${sourceSansPro.className} ${montserrat.className} bg-white-500 px-16 py-6`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  )
}
